
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

interface BottomNavProps {
  activeTab: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab }) => {
  const navigate = useNavigate();
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home', path: '/home' },
    { id: 'categories', label: 'Categories', icon: 'grid_view', path: '/home' }, // Placeholder
    { id: 'favorites', label: 'Favorites', icon: 'favorite', path: '/home' }, // Placeholder
    { id: 'profile', label: 'Profile', icon: 'person', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0f1623]/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 mx-auto max-w-md shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex h-16 items-center justify-around px-2 pb-safe">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`group flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors ${activeTab === tab.id ? 'text-primary' : 'text-text-sub'
              }`}
          >
            <Icon
              name={tab.icon}
              filled={activeTab === tab.id}
              className="text-[24px] transition-transform group-active:scale-90"
            />
            <span className="text-[10px] font-bold">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
