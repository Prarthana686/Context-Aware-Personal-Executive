export default function SourceViewer() {
  const sources = [
    'Email: Finance approval for TechPro invoice',
    'Spreadsheet: Vendor payment log',
    'Chat: Slack discussion confirming payment',
  ];
  return (
    <div className="bg-panel rounded-xl p-4 shadow">
      <h3 className="text-lg font-bold mb-2 text-accent">Sources Used</h3>
      <ul className="list-disc pl-6 text-secondary">
        {sources.map((src, idx) => (
          <li key={idx}>{src}</li>
        ))}
      </ul>
    </div>
  );
}
