import { useState } from 'react';

const suggestedPrompts = [
  'Find TechPro vendor payment details',
  'Summarize Apex marketing meeting',
  'Show Q1 budget approval timeline',
];

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Welcome to your Executive Memory Layer. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg) => {
    setMessages([...messages, { role: 'user', content: msg }]);
    setLoading(true);
    // TODO: Stream response from POST /api/query
    setTimeout(() => {
      setMessages([...messages, { role: 'user', content: msg }, { role: 'ai', content: 'Sample AI response.' }]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-panel rounded-xl p-6 shadow flex flex-col gap-4 min-h-[400px]">
      <div className="flex flex-col gap-2 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg ${m.role === 'user' ? 'bg-accent text-primary' : 'bg-slate text-secondary'}`}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-accent animate-pulse">Agent thinking...</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 bg-slate text-primary rounded-lg px-4 py-2 focus:outline-accent"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          className="bg-accent text-primary px-4 py-2 rounded-lg font-bold"
          onClick={() => { if (input) { sendMessage(input); setInput(''); } }}
        >Send</button>
        <button className="bg-panel text-accent px-3 py-2 rounded-lg" title="Voice input">
          <span role="img" aria-label="mic">🎤</span>
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        {suggestedPrompts.map((prompt, idx) => (
          <button
            key={idx}
            className="bg-slate text-secondary px-3 py-1 rounded-lg hover:bg-accent hover:text-primary"
            onClick={() => sendMessage(prompt)}
          >{prompt}</button>
        ))}
      </div>
    </div>
  );
}
