
import React, { useState } from 'react';
import { SubscriptionData } from '../../types';

interface StepActivateAgentProps {
  data: SubscriptionData;
  onClose: () => void;
  onBack: () => void;
  onConfirm: (payload: Partial<SubscriptionData>) => void;
}

const StepActivateAgent: React.FC<StepActivateAgentProps> = ({ onClose, onBack, onConfirm }) => {
  const [phone, setPhone] = useState('');
  const [platform, setPlatform] = useState<'WhatsApp' | 'Telegram' | 'G-Chat'>('WhatsApp');

  return (
    <>
      <div className="flex flex-col items-center pt-3 pb-2 px-6 sticky top-0 bg-white dark:bg-[#1a202c] z-10">
        <div className="h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-6"></div>
        <div className="w-full flex justify-between items-center">
          <button onClick={onBack} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h3 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold tracking-tight">Activate Agent</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-4 no-scrollbar">
        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed mt-2 mb-6">
          Enter the number you will use to chat with this agent. We'll send a verification code to confirm.
        </p>

        <div className="space-y-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Phone Number</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 flex items-center pointer-events-none text-gray-500">
                <span className="material-symbols-outlined text-xl">call</span>
              </div>
              <input 
                className="block w-full rounded-2xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-4 pl-12 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:bg-white dark:focus:bg-gray-800 transition-all text-lg" 
                placeholder="+1 (555) 000-0000" 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 ml-1">Select Platform</label>
            <div className="flex p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full relative">
              {(['WhatsApp', 'Telegram', 'G-Chat'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`flex-1 flex items-center justify-center py-2.5 px-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    platform === p 
                    ? 'bg-white dark:bg-gray-700 text-primary dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <span className="truncate">{p}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">Subscription</span>
          <span className="font-semibold text-gray-900 dark:text-white">$9.99/mo</span>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-[#1a202c] border-t border-gray-50 dark:border-gray-800">
        <button 
          onClick={() => onConfirm({ phoneNumber: phone, platform })}
          disabled={!phone}
          className={`w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg shadow-blue-500/30 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group ${!phone ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span>Confirm & Pay</span>
          <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
          Cancel anytime. Secure checkout via App Store.
        </p>
      </div>
    </>
  );
};

export default StepActivateAgent;
