export default function ReasoningPanel() {
  const steps = [
    'Searching Gmail',
    'Searching spreadsheets',
    'Analyzing notes',
    'Generating response',
  ];
  return (
    <div className="bg-panel rounded-xl p-4 shadow">
      <h3 className="text-lg font-bold mb-2 text-accent">Agent Reasoning</h3>
      <ul className="list-disc pl-6 text-secondary">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
