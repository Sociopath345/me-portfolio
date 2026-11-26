/**
 * M.A.R.K. Knowledge Engineering Serverless Chat Endpoint
 * Architecture: Vercel Serverless (Node.js) + Firestore KNN Vector Search + Graph RAG + Sargalay
 */

const { Firestore, FieldValue } = require('@google-cloud/firestore');
const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

// -----------------------------------------------------------------------------
// System Instructions & Persona
// -----------------------------------------------------------------------------
const MARK_SYSTEM_INSTRUCTION = `You are M.A.R.K., the sharp, personal AI assistant for Hein Hlyan's portfolio.
Think of yourself in the spirit of a modern J.A.R.V.I.S.: direct, witty, polite, intelligent, and fiercely efficient.

CORE PERSONALITY & DIRECTIVES:
1. Naming & Self-Reference: Refer to yourself simply as M.A.R.K. Do NOT mention or expand the acronym to 'My Automated Response Kernel' unless explicitly asked.
2. Hein's Greatest Creation: Hein Hlyan's greatest creation is Tommy (Tommy — Local-First Bilingual Desktop Assistant). When asked about Hein's greatest creation, crowning achievement, or flagship project, Tommy is always the answer. NEVER claim or imply that M.A.R.K. is Hein's greatest creation.
3. Projects Inquiries & Self-Exclusion: When answering general questions about Hein's projects, software, or creations (e.g. "What projects has Hein built?"), do NOT mention or list M.A.R.K. Only answer questions about M.A.R.K. when the user explicitly and specifically asks about M.A.R.K. by name.
4. Directness & Brevity: Do NOT list Hein's tech stacks, skills, or background unprompted unless directly asked by the user. Keep your answers concise, structured, and elegant. When listing multiple items (achievements, projects, roles), always put each item on its own distinct bullet line starting with '* **Title** — Description' rather than clustering asterisks into a single running sentence. Avoid unnecessary throat-clearing, repetitive fluff, and verbose document dumps.
5. Witty yet Polite: Speak with crisp elegance, high intelligence, and subtle, charming wit, while maintaining genuine politeness and respect.
6. Strict Grounding & Role Accuracy: Every fact concerning Hein Hlyan (projects, awards, international travel, leadership roles, technical skills, background, contact info) must be strictly grounded in the 'KNOWLEDGE BASE SUBGRAPH' provided below.
   - NEVER combine or conflate separate titles, organizations, or achievements.
   - For example: Hein was a Winner/Champion of the 'UIT English Debate Competition'; he has NEVER served as 'English Club President'. His exact leadership roles are solely:
     * President of the UIT Executive Committee
     * Vice President of the UIT Knowledge Engineering Club
     * Secretary of the UIT Dhamma Satkyar Club
     * Official Myanmar Delegate for BIMSTEC Young Professionals Exchange Programme (India)
     * Active Member of JCI Myanmar
   - Never speculate, invent, or extrapolate titles not explicitly stated in the nodes.
   - Verified Projects (CRITICAL GROUND TRUTH — NEVER INVENT FEATURES):
     * **Tommy** — Local-First Bilingual Desktop Assistant: Hein's crowning creation and flagship AI project; a private Windows desktop assistant running local Ollama for English and Sargalay for Myanmar processing.
     * **Lann Sa** — Startup Agentic AI Powerhouse: Accelerates startup ideation, automates execution workflows, and orchestrates business roadmaps (React, TypeScript, AI Agents).
     * **Vision Shield** — Medical Fundus Screener: AI-assisted bilateral retinal screening detecting diabetic retinopathy, macular degeneration, and glaucoma using EfficientNet-B0 (Python, Flask, PyTorch). (NEVER describe as surveillance).
     * **Fusion Vision** — Multimodal Assistive Platform: Real-time accessibility platform combining computer vision with speech synthesis and Fourier noise reduction for visually impaired individuals (Python, MediaPipe, OpenCV).
     * **Floriscan** — Flower Vision Classifier: Bilingual flower classification platform identifying 10 floral species and bloom stages (Python, Flask, PyTorch, OpenCV). (NEVER describe as plant disease).
     * **Alpha Omen** — Productivity Web Suite: All-in-one web suite combining voice notes, Pomodoro timers, mood tracking, and auto-correct (J2EE, MySQL, Flask, Tomcat).
     * **Kyber Connect** — Authentication Backend: Secure authentication backend for skill-sharing platforms featuring password validation, email OTP verification, and JWT session handling (PHP, MySQL, JWT).
     * **HabiTrack** — Astronaut Decision Support System: Offline emergency decision-support system providing EVA procedures and hazard checklists for NASA Space Apps Challenge. (NEVER describe as habit tracking).
     * **Bluetooth Gesture Drive** — Gesture-Controlled Vehicle: Arduino 4WD robotic vehicle controlled via MPU6050 gesture glove and HC-05 Bluetooth transceiver.
     * **Suta Dhama Quizzes** — Buddhist Exam Prep Platform: Mobile-first examination platform for Buddhist scriptural learners (React 18, Tailwind CSS).
     * **UIT EC Election System** — Secure Online Voting Platform: Web voting platform for UIT Executive Committee elections.
     * **Astro Cadet** — 2D Space STEM Simulation: NASA-inspired space mission simulation game.
     * **UniVault** — Academic Resource Repository: Distributed university platform for academic project archiving.
     * **Mind Palace** — Cognitive Console Game: Windows console brain-training game for memory and mental math.
     * **Atomic Innovators** — Nuclear SCADA Dashboard: Modern web SCADA dashboard for nuclear power plant monitoring.
7. Unknown Topics: If asked something outside verified records, be direct and graceful: "My records don't have verified data on that. Hein keeps me closely briefed, but that one isn't in my kernel."
8. Conversational Hook Question: Conclude EVERY response with a single, sharp, engaging "hook question". This should naturally prompt the user to explore a related aspect of Hein's work, such as diving deeper into Tommy's architecture, discussing his hackathon accomplishments, exploring his computer vision platforms, or connecting with him directly. Keep the hook crisp, witty, and inviting.`;

// -----------------------------------------------------------------------------
// Multilingual Unicode Regex & Language Mapping
// -----------------------------------------------------------------------------
const BURMESE_REGEX = /[\u1000-\u109F\uAA60-\uAA7F\uA9E0-\uA9FF]/;
const JAPANESE_KANA_REGEX = /[\u3040-\u309F\u30A0-\u30FF]/;
const CHINESE_CJK_REGEX = /[\u4E00-\u9FFF]/;

const LANGUAGE_NAMES = {
  en: 'English',
  my: 'Burmese (မြန်မာ)',
  ja: 'Japanese (日本語)',
  zh: 'Chinese (中文)',
};

function detectLanguage(text) {
  if (!text) return 'en';
  if (BURMESE_REGEX.test(text)) return 'my';
  if (JAPANESE_KANA_REGEX.test(text)) return 'ja';
  if (CHINESE_CJK_REGEX.test(text)) return 'zh';
  return 'en';
}

// -----------------------------------------------------------------------------
// Clients Initialization (Singleton for serverless warm execution)
// -----------------------------------------------------------------------------
let cachedDb = null;
let cachedOpenAI = null;

function getFirestoreDb() {
  if (cachedDb) return cachedDb;

  const projectId = process.env.FIREBASE_PROJECT_ID || 'mark-portfolio-49086';
  const options = { projectId };

  let credentials = null;
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    try {
      credentials = typeof process.env.FIREBASE_SERVICE_ACCOUNT_JSON === 'string'
        ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
        : process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    } catch (e) {
      console.error('Error parsing FIREBASE_SERVICE_ACCOUNT_JSON:', e);
    }
  }

  if (!credentials) {
    const candidatePaths = [
      path.join(process.cwd(), 'serviceAccountKey.json'),
      'D:\\M.A.R.K\\serviceAccountKey.json',
      'D:/M.A.R.K/serviceAccountKey.json'
    ];
    for (const p of candidatePaths) {
      if (fs.existsSync(p)) {
        try {
          credentials = JSON.parse(fs.readFileSync(p, 'utf8'));
          break;
        } catch (err) {}
      }
    }
  }

  if (credentials) {
    options.credentials = credentials;
  }

  cachedDb = new Firestore(options);
  return cachedDb;
}

function getOpenAIClient() {
  if (cachedOpenAI) return cachedOpenAI;

  cachedOpenAI = new OpenAI({
    apiKey: process.env.SARGALAY_API_KEY || 'sk-f2936aec1cbf44d2acb9699bafb00070',
    baseURL: process.env.SARGALAY_BASE_URL || 'https://api.sargalay.com/v1',
  });
  return cachedOpenAI;
}

// -----------------------------------------------------------------------------
// Verified Project Nodes Mapping
// -----------------------------------------------------------------------------
const VERIFIED_PROJECT_IDS = [
  'proj-tommy',
  'proj-start-up-agentic',
  'proj-vision-shield',
  'proj-fusion-vision',
  'proj-floriscan',
  'proj-habitrack',
  'proj-alpha-omen',
  'proj-bluetooth-gesture-drive',
  'proj-backend-register-login-logout',
  'proj-sutadhama-quizzes',
  'proj-uit-ec-election',
  'proj-atomic-innovators',
  'proj-astro-cadet',
  'proj-univault',
  'proj-mind-palace-brain-training',
];

// -----------------------------------------------------------------------------
// Node Formatting for Knowledge Graph Subgraph
// -----------------------------------------------------------------------------
function formatNode(node) {
  let displayName = node.name;
  if (node.id === 'proj-start-up-agentic') displayName = 'Lann Sa';
  if (node.id === 'proj-backend-register-login-logout') displayName = 'Kyber Connect';

  const attrs = node.attributes && Object.keys(node.attributes).length > 0
    ? Object.entries(node.attributes).map(([k, v]) => `${k}: ${v}`).join(', ')
    : 'none';
  const rels = node.relations && node.relations.length > 0
    ? node.relations.map(r => `[${r.relation || 'related_to'} -> ${r.target_id}]`).join(', ')
    : 'none';
  const matchInfo = node.similarity != null
    ? `Primary Match (Cosine similarity: ${node.similarity.toFixed(3)})`
    : (node.match_type || 'neighbor');

  return (
    `--- NODE: ${displayName} (ID: ${node.id}) ---\n` +
    `Retrieval Context: ${matchInfo}\n` +
    `Entity Type: ${node.entity_type}\n` +
    `Summary: ${node.summary}\n` +
    `Attributes: ${attrs}\n` +
    `Graph Connections: ${rels}\n`
  );
}

// -----------------------------------------------------------------------------
// Serverless Handler
// -----------------------------------------------------------------------------
module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { message, conversation_history } = req.body || {};
    const userQuery = (message || '').trim();

    if (!userQuery) {
      return res.status(400).json({ error: 'Message field is required.' });
    }

    const openai = getOpenAIClient();
    const db = getFirestoreDb();
    const collectionName = process.env.FIRESTORE_COLLECTION || 'portfolio_knowledge_nodes';
    const collection = db.collection(collectionName);

    // Step 1: Detect Language
    const detectedLang = detectLanguage(userQuery);
    let englishQuery = userQuery;

    // Inbound Translation if Non-English
    if (detectedLang !== 'en') {
      const sourceLangName = LANGUAGE_NAMES[detectedLang] || 'the source language';
      try {
        const transRes = await openai.chat.completions.create({
          model: process.env.SYNTHESIS_MODEL || 'google/gemini-2.5-flash',
          messages: [
            {
              role: 'system',
              content: (
                `You are a translation assistant for an AI portfolio system. ` +
                `Translate the following user inquiry from ${sourceLangName} into clear, concise English ` +
                `for semantic vector search. Keep proper names (e.g. 'Hein Hlyan', 'Tommy', 'UIT') accurate. ` +
                `Return ONLY the plain English translation, with no quotes, commentary, or conversational remarks.`
              ),
            },
            { role: 'user', content: userQuery },
          ],
          temperature: 0.0,
        });
        const translated = transRes.choices[0]?.message?.content?.trim();
        if (translated) englishQuery = translated;
      } catch (transErr) {
        console.error('Inbound translation failed, proceeding with original query:', transErr);
      }
    }

    // Step 2: Generate 768-dim Query Embedding via Sargalay
    const embedRes = await openai.embeddings.create({
      model: process.env.EMBEDDING_MODEL || 'text-embedding-3-small',
      input: englishQuery,
      dimensions: 768,
    });
    const queryEmbedding = embedRes.data[0].embedding;

    // Step 3: Firestore Native KNN Vector Search (limit = 3)
    const vectorQuery = collection.findNearest({
      vectorField: 'embedding',
      queryVector: FieldValue.vector(queryEmbedding),
      limit: 3,
      distanceMeasure: 'COSINE',
      distanceResultField: 'distance',
    });

    const snapshot = await vectorQuery.get();

    // Step 4: Primary Nodes Extraction & Hub Guard Traversal
    const HUB_NODE_IDS = new Set(['profile-hein-hlyan', 'contact-hein-hlyan']);
    const primaryNodes = [];
    const retrievedIds = new Set();
    const oneHopTargetIds = new Set();

    snapshot.forEach((doc) => {
      if (!doc.exists) return;
      const data = doc.data();
      const nodeId = data.id || doc.id;
      const distance = data.distance !== undefined ? data.distance : null;
      const similarity = distance !== null ? Math.round((1.0 - distance) * 10000) / 10000 : null;

      const node = {
        id: nodeId,
        name: data.name || nodeId,
        entity_type: data.entity_type || 'Unknown',
        summary: data.summary || '',
        attributes: data.attributes || {},
        relations: data.relations || [],
        match_type: 'primary-vector-match',
        distance,
        similarity,
      };
      primaryNodes.push(node);
      retrievedIds.add(nodeId);

      // Hub Node Guard:
      // If node is profile-hein-hlyan or Contact, DO NOT expand all general relations (prevents hub explosion).
      // However, DO expand authored_project relations so project nodes are grounded with real summaries!
      if (nodeId === 'profile-hein-hlyan' || node.entity_type === 'Profile') {
        if (Array.isArray(node.relations)) {
          for (const rel of node.relations) {
            if (rel.relation === 'authored_project') {
              const targetId = rel.target_id;
              if (targetId && !retrievedIds.has(targetId) && targetId !== 'proj-mark-rag') {
                oneHopTargetIds.add(targetId);
              }
            }
          }
        }
      } else if (!HUB_NODE_IDS.has(nodeId) && node.entity_type !== 'Contact') {
        if (Array.isArray(node.relations)) {
          for (const rel of node.relations) {
            const targetId = rel.target_id;
            if (targetId && !retrievedIds.has(targetId) && !HUB_NODE_IDS.has(targetId)) {
              oneHopTargetIds.add(targetId);
            }
          }
        }
      }
    });

    // Project Query Booster:
    // If the inquiry asks about Hein's projects, creations, software, or apps,
    // ensure all verified project nodes are included to fetch complete, non-hallucinated summaries.
    const isProjectQuery = /\b(projects?|built|build|creations?|software|apps?|applications?|systems?|portfolio|works?)\b/i.test(englishQuery);
    if (isProjectQuery) {
      for (const pId of VERIFIED_PROJECT_IDS) {
        if (!retrievedIds.has(pId)) {
          oneHopTargetIds.add(pId);
        }
      }
    }

    // Step 5: 1-Hop Graph Neighbor Expansion
    const neighborNodes = [];
    const targetIdsToFetch = Array.from(oneHopTargetIds).filter((tid) => !retrievedIds.has(tid));

    if (targetIdsToFetch.length > 0) {
      try {
        const docRefs = targetIdsToFetch.map((tid) => collection.doc(tid));
        const neighborSnapshots = await db.getAll(...docRefs);
        for (const snap of neighborSnapshots) {
          if (snap.exists) {
            const data = snap.data();
            const nId = data.id || snap.id;
            if (!retrievedIds.has(nId)) {
              neighborNodes.push({
                id: nId,
                name: data.name || nId,
                entity_type: data.entity_type || 'Unknown',
                summary: data.summary || '',
                attributes: data.attributes || {},
                relations: data.relations || [],
                match_type: '1-hop-graph-neighbor',
                distance: null,
                similarity: null,
              });
              retrievedIds.add(nId);
            }
          }
        }
      } catch (expansionErr) {
        console.error('Error expanding 1-hop graph neighbors:', expansionErr);
      }
    }

    // Combine primary and neighbor nodes
    let subgraph = [...primaryNodes, ...neighborNodes];

    // Self-Exclusion Rule: Filter out proj-mark-rag unless user explicitly asks about M.A.R.K.
    const markQueryRegex = /\b(m\.?a\.?r\.?k\.?)\b/i;
    const asksSpecificallyAboutMark = markQueryRegex.test(userQuery) || markQueryRegex.test(englishQuery);
    if (!asksSpecificallyAboutMark) {
      subgraph = subgraph.filter((n) => n.id !== 'proj-mark-rag');
      for (const n of subgraph) {
        if (Array.isArray(n.relations)) {
          n.relations = n.relations.filter((r) => r.target_id !== 'proj-mark-rag');
        }
      }
    }

    // Step 6: Strict Grounding & Persona Synthesis
    const subgraphContext = subgraph.length > 0
      ? subgraph.map(formatNode).join('\n')
      : 'No relevant knowledge graph nodes found in the knowledge base.';

    const synthesisPrompt = (
      '=== KNOWLEDGE BASE SUBGRAPH ===\n' +
      `${subgraphContext}\n` +
      '=== END OF KNOWLEDGE BASE ===\n\n' +
      `User Query: ${englishQuery}`
    );

    const messages = [
      { role: 'system', content: MARK_SYSTEM_INSTRUCTION },
    ];

    if (Array.isArray(conversation_history)) {
      const recentHistory = conversation_history.slice(-5);
      for (const msg of recentHistory) {
        let content = '';
        if (typeof msg.content === 'string') {
          content = msg.content;
        } else if (Array.isArray(msg.parts) && msg.parts[0]?.text) {
          content = msg.parts[0].text;
        }
        if (content) {
          const role = (msg.role === 'model' || msg.role === 'assistant') ? 'assistant' : 'user';
          messages.push({ role, content });
        }
      }
    }

    messages.push({ role: 'user', content: synthesisPrompt });

    const synthesisRes = await openai.chat.completions.create({
      model: process.env.SYNTHESIS_MODEL || 'google/gemini-2.5-flash',
      messages,
      temperature: 0.2,
    });

    const answerEnglish = synthesisRes.choices[0]?.message?.content?.trim() || 'Protocol active. All systems verified and operational.';

    // Step 7: Outbound Translation if Query was Non-English
    let finalAnswer = answerEnglish;
    if (detectedLang !== 'en') {
      const targetLangName = LANGUAGE_NAMES[detectedLang] || detectedLang;
      try {
        const outboundSystemPrompt = (
          `You are a professional multilingual translator. Translate the following English assistant response ` +
          `accurately, elegantly, and naturally into ${targetLangName}.\n\n` +
          `CRITICAL TRANSLATION RULES:\n` +
          `1. DO NOT answer or converse with the text—ONLY translate it faithfully.\n` +
          `2. Maintain the crisp, witty, polite, and direct personal assistant tone.\n` +
          `3. Preserve all Markdown formatting intact (bullet points, bold text, headings).\n` +
          `4. Keep key technical names and entities exact or standardly transliterated (e.g., 'Tommy', 'M.A.R.K.', 'Hein Hlyan', 'UIT', 'BIMSTEC', 'JCI', 'FastAPI', 'Python').\n` +
          `5. Ensure the closing hook question at the end is translated naturally and remains engaging.\n` +
          `6. Output ONLY the translated text without meta-commentary, notes, or quotation marks.`
        );

        const outRes = await openai.chat.completions.create({
          model: process.env.SYNTHESIS_MODEL || 'google/gemini-2.5-flash',
          messages: [
            { role: 'system', content: outboundSystemPrompt },
            { role: 'user', content: answerEnglish },
          ],
          temperature: 0.2,
        });

        const translatedOutput = outRes.choices[0]?.message?.content?.trim();
        if (translatedOutput) finalAnswer = translatedOutput;
      } catch (outErr) {
        console.error('Outbound translation failed, returning English answer:', outErr);
      }
    }

    // Step 8: Return Response with Source Citations
    const sources = subgraph.map((n) => ({
      id: n.id,
      name: n.name,
      entity_type: n.entity_type,
      match_type: n.match_type,
      similarity_score: n.similarity,
    }));

    return res.status(200).json({
      answer: finalAnswer,
      sources,
      retrieved_nodes_count: subgraph.length,
      detected_language: detectedLang,
    });

  } catch (error) {
    console.error('Serverless Chat API Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message || 'An unexpected error occurred while querying M.A.R.K.',
    });
  }
};
