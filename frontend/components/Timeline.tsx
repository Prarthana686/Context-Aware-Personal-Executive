import { motion } from 'framer-motion';

const timeline = [
  {
    time: '10:42 AM',
    query: 'Vendor payment details',
    actions: ['Search Gmail', 'Search spreadsheets', 'Search chat logs'],
    answer: 'TechPro payment approved.'
  },
  {
    time: '10:45 AM',
    query: 'Q1 budget approval',
    actions: ['Search spreadsheets', 'Analyze notes'],
    answer: 'Q1 budget approved.'
  }
];

export default function Timeline() {
  return (
    <div className="flex flex-col gap-6">
      {timeline.map((entry, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          className="bg-slate rounded-xl p-4 shadow"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-accent font-bold text-lg">{entry.time}</span>
            <span className="text-primary">User asked: {entry.query}</span>
          </div>
          <div className="text-secondary mb-1">AI actions: {entry.actions.join(', ')}</div>
          <div className="text-primary font-semibold">{entry.answer}</div>
        </motion.div>
      ))}
    </div>
  );
}
