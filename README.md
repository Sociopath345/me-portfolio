# Technical Portfolio & M.A.R.K. AI Architecture

A high-performance, single-page cybernetic terminal portfolio and serverless AI knowledge engine engineered for zero-maintenance edge deployment on **Vercel**.

---

## 🛠️ System Architecture & Technology Stack

```
                                  +------------------------------------+
                                  |         Client Presentation        |
                                  |  HTML5 • Vanilla JS • Tailwind CSS |
                                  +-----------------+------------------+
                                                    |
                                    HTTPS POST /api/chat (JSON)
                                                    v
                                  +------------------------------------+
                                  |    Vercel Serverless Function      |
                                  |          Node.js Runtime           |
                                  +--------+------------------+--------+
                                           |                  |
           +-------------------------------+                  +-------------------------------+
           |                                                                                  |
           v                                                                                  v
+-----------------------+                                                          +-----------------------+
|  Google Cloud         |                                                          |  Sargalay Inference   |
|  Firestore Vector DB  |                                                          |  Gateway              |
|  • 768-dim Embeddings |                                                          |  • text-embedding-3   |
|  • findNearest KNN    |                                                          |  • gemini-2.5-flash   |
|  • 1-Hop Graph RAG    |                                                          |  • Multilingual Engine|
+-----------------------+                                                          +-----------------------+
```

### 1. Presentation & Client UI Layer
- **Core Markup & Rendering**: Semantic HTML5 single-page application (SPA) with declarative, state-driven DOM updates.
- **Styling & Theme Framework**:
  - **Tailwind CSS**: Utility-first CSS pipeline with dynamic theme switching (**JARVIS Dark HUD** / **Cybernetic Light** mode).
  - **Custom HUD Components**: Dynamic SVG scanlines, glow borders (`.hud-border`, `.hud-corners`), targeting reticles, and backdrop-blur glassmorphism.
  - **Interactive Micro-Interactions**: Real-time cursor spotlight and Arc Reactor HUD tracking with contextual targeting state detection (`text-mode`, `targeting`).
- **Typography**: Google Fonts integration:
  - `Orbitron` — Primary display headers, telemetry banners, and section markers.
  - `Share Tech Mono` — Terminal logs, body copy, telemetry data, and code tokens.
- **Interactive Modals**:
  - **Curriculum Vitae Modal**: Pop-up dossier overlay with solid background rendering to prevent backdrop bleed-through, featuring ATS-optimized and standard CV download triggers.
  - **Media & Certificate Lightbox Engine**: Fullscreen modal with smooth scaling transitions, keyboard shortcuts (`ESC` dismissal), and unified caption handling for both photo galleries and verified credentials.

---

### 2. M.A.R.K. Knowledge Engineering AI Kernel (`/api/chat`)
- **Runtime**: Node.js (Vercel Serverless Function architecture), zero-maintenance serverless execution.
- **Vector Database**: Google Cloud Firestore with native Vector Search (`@google-cloud/firestore`):
  - **Vector Query**: Executes `collection.findNearest` with `COSINE` distance measure and `queryVector` wrapped via `FieldValue.vector`.
  - **Vector Space**: 768-dimensional normalized dense vectors.
- **Graph-Augmented Retrieval (Graph RAG)**:
  - **1-Hop Neighbor Expansion**: Dynamically expands primary vector search matches by querying 1-hop outbound graph connections (`relations.target_id`) using batch document reads (`db.getAll`).
  - **Hub Node Guard**: Enforces strict expansion limits on hub nodes (`profile-hein-hlyan`, `contact-hein-hlyan`) to prevent hub-explosion artifacts.
  - **Self-Exclusion Rule**: Evaluates query semantics and automatically strips self-referential project nodes (`proj-mark-rag`) from the synthesis context unless explicitly asked by name.
- **Multilingual Support Pipeline**:
  - **Language Detection**: High-speed Unicode regex analysis for English (`en`), Burmese (`my`), Japanese (`ja`), and Chinese (`zh`).
  - **Inbound Query Translation**: Non-English queries are semantically translated to English using `google/gemini-2.5-flash` prior to vector search to maximize recall.
  - **Outbound Response Translation**: Generated English responses are faithfully translated back into the user's language while preserving Markdown structures, technical proper nouns, and the closing question.
  - **Zero Overhead**: English queries bypass the translation layer entirely.
- **Inference & Embeddings**:
  - **Gateway**: Sargalay OpenAI-compatible inference gateway.
  - **Embeddings Model**: `text-embedding-3-small` (output dimensionality configured to 768).
  - **Synthesis Model**: `google/gemini-2.5-flash` operating at low temperature (`0.2`) for deterministic, strictly grounded synthesis.

---

### 3. Repository Directory Structure

```
├── api/
│   └── chat.js               # Vercel Serverless Function (Graph RAG + Vector KNN)
├── Frontend/
│   ├── hein-hlyan.html       # Standalone frontend entry
│   ├── script.js             # Client UI, modal systems, Lightbox & API connector
│   ├── style.css             # Cybernetic HUD styles, theme tokens & custom animations
│   └── tailwind.config.js    # Custom Tailwind theme tokens & font mappings
├── photos/                   # Photo assets, credentials & project captures
├── .gitignore                # Git exclusion specifications
├── index.html                # Root production entry point for Vercel deployment
├── package.json              # Node.js dependencies & scripts
├── server.js                 # Standalone local HTTP server with /api proxy
├── test-chat.js              # Automated test suite for serverless AI endpoint
├── vercel.json               # Vercel serverless routing & rewrite rules
└── README.md                 # System technical documentation
```

---

## 🚀 Local Development & Testing

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Start the built-in Node.js HTTP server:
```bash
npm start
```
The application will be served at `http://localhost:3000`.

### 3. Run Automated Endpoint Tests
Execute the verification script to test vector retrieval, graph traversal, and multilingual capabilities:
```bash
npm test
```

---

## 🌐 Vercel Serverless Deployment Configuration

This project is optimized for deployment on Vercel with a custom domain. Configure the following environment variables in the Vercel Project Settings:

| Environment Variable | Description |
| :--- | :--- |
| `FIREBASE_PROJECT_ID` | Firestore project identifier (e.g. `mark-portfolio-49086`) |
| `FIRESTORE_COLLECTION` | Firestore collection name (e.g. `portfolio_knowledge_nodes`) |
| `FIREBASE_SERVICE_ACCOUNT_JSON` | Stringified Google Cloud service account JSON credentials |
| `SARGALAY_API_KEY` | Sargalay gateway API secret key |
| `SARGALAY_BASE_URL` | Sargalay API base URL (e.g. `https://api.sargalay.com/v1`) |
| `EMBEDDING_MODEL` | Embedding model identifier (`text-embedding-3-small`) |
| `SYNTHESIS_MODEL` | Synthesis model identifier (`google/gemini-2.5-flash`) |

All requests to `/api/*` are automatically routed to the serverless function runtime specified in `vercel.json`.
