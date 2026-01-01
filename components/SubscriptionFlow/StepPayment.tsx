
import React from 'react';
import { SubscriptionData } from '../../types';

interface StepPaymentProps {
  data: SubscriptionData;
  onClose: () => void;
  onBack: () => void;
  onSuccess: () => void;
}

const StepPayment: React.FC<StepPaymentProps> = ({ data, onClose, onBack, onSuccess }) => {
  return (
    <>
      <div className="flex flex-col items-center pt-3 pb-2 px-6 sticky top-0 bg-white dark:bg-[#1a202c] z-10">
        <div className="h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-6"></div>
        <div className="w-full flex justify-between items-center">
          <button onClick={onBack} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h3 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold tracking-tight">Confirm Subscription</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 no-scrollbar">
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest mb-1">Total Due Today</p>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">${data.price.toFixed(2)}</span>
            <span className="text-lg text-gray-500 dark:text-gray-400 ml-1 font-medium">/mo</span>
          </div>
          <div className="flex items-center gap-2 mt-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="text-xs font-medium text-primary">{data.planName}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white ml-1">Payment Method</h4>
          <div className="border-2 border-primary bg-primary/5 dark:bg-primary/10 rounded-2xl p-5 transition-all relative overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">Credit Card</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">credit_card</span>
            </div>

            <div className="space-y-4">
              <div className="group">
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block ml-1">Card Number</label>
                <div className="relative">
                  <input className="block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-3 pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:bg-white transition-all text-sm font-medium shadow-sm" placeholder="0000 0000 0000 0000" type="text" />
                  <div className="absolute left-3.5 top-3 text-gray-400 pointer-events-none">
                    <span className="material-symbols-outlined text-[20px]">payment</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block ml-1">Expiry Date</label>
                  <input className="block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:bg-white transition-all text-sm font-medium shadow-sm" placeholder="MM/YY" type="text" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block ml-1">CVV</label>
                  <div className="relative">
                    <input className="block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:bg-white transition-all text-sm font-medium shadow-sm" placeholder="123" type="password" />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg cursor-help">help</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block ml-1">Cardholder Name</label>
                <input className="block w-full rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/40 focus:bg-white transition-all text-sm font-medium shadow-sm" placeholder="Full Name on Card" type="text" />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 flex items-center justify-between bg-white dark:bg-[#1a202c] hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600"></div>
              <span className="font-medium text-gray-700 dark:text-gray-300">PayPal</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">account_balance_wallet</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-[#1a202c] border-t border-gray-50 dark:border-gray-800 z-20">
        <button 
          onClick={onSuccess}
          className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg shadow-blue-500/30 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined text-xl">lock</span>
          <span>Pay Now</span>
        </button>
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">security</span>
          Secure 256-bit SSL Encrypted Payment
        </p>
      </div>
    </>
  );
};

export default StepPayment;
