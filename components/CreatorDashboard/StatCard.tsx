
import React from 'react';
import Icon from '../Icon';

interface StatData {
  id: string;
  label: string;
  value: string;
  icon: string;
  color: 'emerald' | 'blue';
}

export const StatCard: React.FC<StatData> = ({ label, value, icon, color }) => {
  const iconColorClasses = color === 'emerald'
    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${iconColorClasses}`}>
        <Icon name={icon} className="text-lg" />
      </div>
      <div>
        <p className="text-2xl font-bold text-text-main dark:text-white">{value}</p>
        <p className="text-xs text-text-sub dark:text-gray-400 font-medium mt-1">{label}</p>
      </div>
    </div>
  );
};
