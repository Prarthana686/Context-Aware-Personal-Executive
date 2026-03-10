import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const nodes = [
  { id: '1', data: { label: 'User Query' }, position: { x: 50, y: 50 }, style: { background: '#3B82F6', color: '#F8FAFC' } },
  { id: '2', data: { label: 'Email Thread' }, position: { x: 250, y: 50 }, style: { background: '#1E293B', color: '#F8FAFC' } },
  { id: '3', data: { label: 'Vendor Payment' }, position: { x: 450, y: 50 }, style: { background: '#1E293B', color: '#F8FAFC' } },
  { id: '4', data: { label: 'Finance Approval' }, position: { x: 650, y: 50 }, style: { background: '#0F172A', color: '#F8FAFC' } },
];
const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

export default function GraphView() {
  return (
    <div style={{ height: 400 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background color="#1E293B" variant="dots" />
      </ReactFlow>
    </div>
  );
}
