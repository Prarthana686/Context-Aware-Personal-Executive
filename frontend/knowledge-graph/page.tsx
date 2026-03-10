import GraphView from '../components/GraphView';

export default function KnowledgeGraphPage() {
  return (
    <div className="bg-panel rounded-xl p-6 shadow min-h-[600px]">
      <h2 className="text-xl font-bold mb-4">Knowledge Graph</h2>
      <GraphView />
    </div>
  );
}
