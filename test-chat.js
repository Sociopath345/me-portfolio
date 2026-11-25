const handler = require('./api/chat.js');

async function runTests() {
  console.log('=== Test 1: Burmese Query ===');
  const mockReq1 = {
    method: 'POST',
    body: {
      message: 'ဟိန်းလျှံရဲ့ အဓိက ပရောဂျက်တွေက ဘာတွေလဲ?',
      conversation_history: []
    }
  };

  let mockRes1 = {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => console.log(`[Burmese Test Status ${code}]:\nAnswer: ${data.answer}\nLanguage: ${data.detected_language}\nRetrieved: ${data.retrieved_nodes_count}`),
      end: () => {}
    })
  };
  await handler(mockReq1, mockRes1);

  console.log('\n=== Test 2: General Project Query (Self-Exclusion of M.A.R.K.) ===');
  const mockReq2 = {
    method: 'POST',
    body: {
      message: 'What software projects has Hein built?',
      conversation_history: []
    }
  };

  let mockRes2 = {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => {
        const containsMark = data.sources.some(s => s.id === 'proj-mark-rag');
        console.log(`[Project Test Status ${code}]: Contains proj-mark-rag in sources: ${containsMark}`);
        console.log(`Answer: ${data.answer}`);
      },
      end: () => {}
    })
  };
  await handler(mockReq2, mockRes2);
}

runTests().catch(err => console.error(err));
