
import React from 'react';
import Icon from '../Icon';



interface AvatarSectionProps {
  imageUrl: string;
  onAvatarClick: () => void;
  onChangePhoto: () => void;
}

export const AvatarSection: React.FC<AvatarSectionProps> = ({ imageUrl, onAvatarClick, onChangePhoto }) => {
  return (
    <div className="flex p-6 justify-center w-full">
      <div className="flex w-full flex-col gap-5 items-center">
        <div 
          className="relative group cursor-pointer"
          onClick={onAvatarClick}
        >
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 shadow-md border-4 border-white dark:border-gray-800 ring-1 ring-gray-100 dark:ring-gray-700" 
            style={{ backgroundImage: `url("${imageUrl}")` }}
          />
          <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full border-4 border-background-light dark:border-background-dark shadow-sm flex items-center justify-center">
            <Icon name="photo_camera" className="text-[18px]" />
          </div>
        </div>
        <button 
          onClick={onChangePhoto}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
        >
          <span className="truncate">Change Photo</span>
        </button>
      </div>
    </div>
  );
};
