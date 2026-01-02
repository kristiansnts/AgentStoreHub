
import React from 'react';
import Icon from '../Icon';


import { SettingsItemProps } from './types';

export const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  subtitle,
  iconBgColor,
  iconColor,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-2xl group active:scale-[0.99] transition-all hover:border-primary/30"
    >
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${iconBgColor} ${iconColor}`}>
          <Icon name={icon} />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-gray-900 dark:text-white font-semibold text-sm">{title}</span>
          {subtitle && (
            <span className="text-gray-500 dark:text-gray-400 text-xs text-left">{subtitle}</span>
          )}
        </div>
      </div>
      <Icon name="chevron_right" className="text-gray-400 group-hover:text-primary transition-colors" />
    </button>
  );
};
