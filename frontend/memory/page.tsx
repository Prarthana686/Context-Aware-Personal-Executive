import Timeline from '../components/Timeline';

export default function MemoryPage() {
  return (
    <div className="bg-panel rounded-xl p-6 shadow min-h-[600px]">
      <h2 className="text-xl font-bold mb-4">Memory Timeline</h2>
      <Timeline />
    </div>
  );
}
