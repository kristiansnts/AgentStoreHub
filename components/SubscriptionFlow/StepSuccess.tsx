
import React from 'react';
import { SubscriptionData } from '../../types';

interface StepSuccessProps {
  data: SubscriptionData;
  onClose: () => void;
  onReset: () => void;
}

const StepSuccess: React.FC<StepSuccessProps> = ({ data, onClose, onReset }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-fade-in-up">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 shrink-0 z-20">
        <button onClick={onClose} className="flex size-10 items-center justify-center rounded-full text-[#111318] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
        </button>
        <button 
          onClick={onClose}
          className="text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity"
        >
          Done
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col items-center pt-8 px-6 pb-40">
        {/* Success Hero */}
        <div className="flex flex-col items-center gap-6 mb-12 w-full text-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-50 transition-opacity duration-500"></div>
            <div className="relative size-28 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[320px]">
            <h1 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-tight">
              Subscription Confirmed!
            </h1>
            <p className="text-[#5f6e8c] dark:text-gray-400 text-base font-medium leading-relaxed">
              You have successfully subscribed to {data.agentName} via {data.platform || 'Direct'}.
            </p>
          </div>
        </div>

        {/* Agent Summary Card */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col rounded-xl bg-white dark:bg-[#1a2230] p-1 shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-none border border-transparent dark:border-white/5">
            <div className="flex items-center gap-4 p-4">
              <div 
                className="size-16 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 border border-black/5 dark:border-white/10 shadow-sm"
              >
                <span className="material-symbols-outlined text-4xl">smart_toy</span>
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight truncate">{data.agentName}</h2>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-md">{data.planName}</span>
                  <span className="text-[#5f6e8c] dark:text-gray-400 text-sm font-medium">• Active</span>
                </div>
              </div>
              <div className="shrink-0 text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            
            <div className="h-px w-full bg-[#f5f6f8] dark:bg-white/10 px-4"></div>
            
            <div className="flex justify-between items-center p-4">
              <span className="text-[#5f6e8c] dark:text-gray-400 text-sm font-medium">Next billing date</span>
              <span className="text-[#111318] dark:text-white text-sm font-bold">
                {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="flex gap-3 px-2">
            <span className="material-symbols-outlined text-[#5f6e8c] dark:text-gray-500 shrink-0" style={{ fontSize: '20px' }}>info</span>
            <p className="text-[#5f6e8c] dark:text-gray-500 text-sm leading-snug">
              A receipt has been sent to your email address. You can manage your subscription in Settings at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-12">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onReset}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-14 px-5 bg-primary text-white text-[17px] font-bold leading-normal tracking-[-0.01em] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg shadow-primary/25"
          >
            Go to My Agents
          </button>
          <button 
            onClick={onReset}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-14 px-5 bg-transparent text-primary text-[17px] font-bold leading-normal tracking-[-0.01em] hover:bg-primary/5 active:bg-primary/10 transition-colors"
          >
            Browse More Agents
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepSuccess;
