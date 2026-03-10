import AnalyticsCharts from '../components/AnalyticsCharts';

export default function AnalyticsPage() {
  return (
    <div className="bg-panel rounded-xl p-6 shadow min-h-[600px]">
      <h2 className="text-xl font-bold mb-4">Executive Analytics</h2>
      <AnalyticsCharts />
    </div>
  );
}
