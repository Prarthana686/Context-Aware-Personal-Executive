import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Emails', value: 35 },
  { name: 'PDFs', value: 25 },
  { name: 'Spreadsheets', value: 20 },
  { name: 'Notes', value: 10 },
  { name: 'Chats', value: 10 },
];
const barData = [
  { name: 'Finance', queries: 12 },
  { name: 'Project', queries: 8 },
  { name: 'Marketing', queries: 6 },
  { name: 'Operational', queries: 4 },
];
const COLORS = ['#3B82F6', '#1E293B', '#0F172A', '#94A3B8', '#F8FAFC'];

export default function AnalyticsCharts() {
  return (
    <div className="flex gap-8">
      <div className="w-1/2">
        <h4 className="text-accent font-bold mb-2">Data Source Usage</h4>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
              {pieData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/2">
        <h4 className="text-accent font-bold mb-2">Query Category Distribution</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke="#F8FAFC" />
            <YAxis stroke="#F8FAFC" />
            <Tooltip />
            <Legend />
            <Bar dataKey="queries" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
