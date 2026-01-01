
import React from 'react';
import { SubscriptionData } from '../../types';

interface StepFreeConfirmProps {
  data: SubscriptionData;
  onClose: () => void;
  onConfirm: () => void;
}

const StepFreeConfirm: React.FC<StepFreeConfirmProps> = ({ data, onClose, onConfirm }) => {
  return (
    <>
      <div className="flex flex-col items-center pt-3 pb-2 px-6 sticky top-0 bg-white dark:bg-[#1a202c] z-10">
        <div className="h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-6"></div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold tracking-tight">Confirm Free Subscription</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 no-scrollbar">
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest mb-1">Total Due Today</p>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">$0.00</span>
          </div>
          <div className="flex items-center gap-2 mt-3 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-green-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="text-xs font-medium text-green-600">Free Forever</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50/50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700 rounded-3xl p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Activate Agent</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-1">
              You are about to activate <span className="font-semibold text-primary">{data.agentName}</span> for free.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
              No credit card is required. You can upgrade to a paid plan at any time to access premium features.
            </p>
          </div>

          <div className="px-2 pt-2">
            <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 ml-1">Included</h5>
            <div className="space-y-3">
              {[
                'Basic data processing',
                '5 queries per day',
                'Community support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-500 text-[20px]">check</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-[#1a202c] border-t border-gray-50 dark:border-gray-800 z-20">
        <button 
          onClick={onConfirm}
          className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg shadow-blue-500/30 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined text-xl">rocket_launch</span>
          <span>Activate Now</span>
        </button>
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">info</span>
          No payment method required
        </p>
      </div>
    </>
  );
};

export default StepFreeConfirm;
