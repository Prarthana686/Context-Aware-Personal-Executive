import { motion } from 'framer-motion';
import { useState } from 'react';

const menu = [
  { name: 'Cognitive Engine', icon: '💬', route: '/' },
  { name: 'Dashboard', icon: '📊', route: '/dashboard' },
  { name: 'Knowledge Graph', icon: '🧠', route: '/knowledge-graph' },
  { name: 'Executive Analytics', icon: '📈', route: '/analytics' },
  { name: 'Memory Timeline', icon: '⏰', route: '/memory' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <motion.aside
      className={`bg-slate h-screen p-4 flex flex-col shadow-lg ${collapsed ? 'w-16' : 'w-56'} transition-all duration-300`}
      initial={{ width: 56 }}
      animate={{ width: collapsed ? 64 : 224 }}
    >
      <button
        className="mb-8 text-accent font-bold text-lg"
        onClick={() => setCollapsed(!collapsed)}
        title="Toggle sidebar"
      >
        {collapsed ? '☰' : 'Context-Aware'}
      </button>
      <nav className="flex flex-col gap-4">
        {menu.map(item => (
          <motion.a
            key={item.name}
            href={item.route}
            whileHover={{ scale: 1.05, backgroundColor: '#3B82F6', color: '#F8FAFC' }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-secondary hover:text-primary cursor-pointer"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span>{item.name}</span>}
          </motion.a>
        ))}
      </nav>
    </motion.aside>
  );
}
