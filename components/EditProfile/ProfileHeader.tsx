
import React from 'react';

interface ProfileHeaderProps {
  onCancel: () => void;
  onSave: () => void;
  hasChanges?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onCancel, onSave, hasChanges = false }) => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 justify-between border-b border-gray-200/50 dark:border-gray-800/50">
      <button
        onClick={onCancel}
        className="text-gray-500 dark:text-gray-400 text-base font-medium leading-normal hover:text-gray-900 dark:hover:text-white transition-colors active:scale-95 transform duration-100"
      >
        Cancel
      </button>
      <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        Edit Profile
      </h2>
      <button
        onClick={onSave}
        disabled={!hasChanges}
        className={`text-base font-bold leading-normal tracking-[0.015em] shrink-0 active:scale-95 transform duration-100 transition-colors ${hasChanges
            ? 'text-primary hover:text-primary/80'
            : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
          }`}
      >
        Save
      </button>
    </div>
  );
};
