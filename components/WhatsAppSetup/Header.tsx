
import React from 'react';
import Icon from '../Icon';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  showSave?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, showSave }) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shrink-0">
      <div className="w-10 flex items-center justify-center">
        {onBack && (
          <button
            onClick={onBack}
            className="flex size-10 items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <Icon name="arrow_back" className="text-[24px]" />
          </button>
        )}
      </div>

      <h1 className="text-base font-bold text-center text-slate-900 dark:text-white tracking-tight">
        {title}
      </h1>

      <div className="w-10 flex items-center justify-center">
        {showSave && (
          <button className="text-primary text-sm font-bold hover:text-primary-dark">
            Save
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
