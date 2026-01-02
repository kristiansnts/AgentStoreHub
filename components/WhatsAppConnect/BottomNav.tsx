
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { label: 'Home', icon: 'home', path: '/home' },
    { label: 'Categories', icon: 'grid_view', path: '/categories' },
    { label: 'Favorites', icon: 'favorite', path: '/favorites' },
    { label: 'Profile', icon: 'person', path: '/' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-surface-light/95 backdrop-blur-lg dark:border-gray-800 dark:bg-surface-dark/95 mx-auto max-w-md">
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/' && (location.pathname === '/' || location.pathname === '/profile'));
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`group flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-text-sub dark:text-gray-400'
              } hover:bg-gray-50 dark:hover:bg-white/5`}
            >
              <span className={`material-symbols-outlined text-[24px] transition-transform group-hover:-translate-y-0.5 group-active:scale-90 ${isActive ? 'font-variation-fill' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
