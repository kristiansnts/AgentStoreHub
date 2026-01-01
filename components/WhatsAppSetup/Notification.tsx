
import React from 'react';
import Icon from '../Icon';

interface Props {
  onClose: () => void;
}

const Notification: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="w-full animate-slide-up">
      <div className="relative flex w-full items-center justify-between gap-4 rounded-full bg-[#111318] dark:bg-white p-4 shadow-2xl overflow-hidden ring-1 ring-white/10 dark:ring-slate-200">
        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
            <Icon name="check" className="text-[24px]" />
          </div>
          <div className="flex flex-col justify-center gap-0.5">
            <p className="text-white dark:text-[#111318] text-[15px] font-bold leading-tight truncate">
              WhatsApp Webhook Connected
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-[13px] font-normal leading-tight truncate">
              Your agent is ready to reply.
            </p>
          </div>
        </div>
        <button 
          onClick={onClose}
          aria-label="Dismiss" 
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 dark:bg-black/5 text-gray-400 hover:bg-white/20 dark:hover:bg-black/10 transition-colors"
        >
          <Icon name="close" className="text-[20px]" />
        </button>
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10 dark:bg-black/10">
          <div className="h-full bg-primary/80 origin-left animate-[shrink_4s_linear_forwards]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes shrink {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
      `}</style>
    </div>
  );
};

export default Notification;
