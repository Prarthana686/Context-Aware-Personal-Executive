import AnalyticsCharts from '../components/AnalyticsCharts';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-panel rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold mb-2">Total Documents Indexed</h2>
        <span className="text-accent text-3xl">--</span>
      </div>
      <div className="bg-panel rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold mb-2">Queries Processed</h2>
        <span className="text-accent text-3xl">--</span>
      </div>
      <div className="bg-panel rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold mb-2">Average Response Time</h2>
        <span className="text-accent text-3xl">--</span>
      </div>
      <div className="bg-panel rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold mb-2">Connected Data Sources</h2>
        <span className="text-accent text-3xl">--</span>
      </div>
      <div className="col-span-2 mt-6">
        <AnalyticsCharts />
      </div>
    </div>
  );
}
