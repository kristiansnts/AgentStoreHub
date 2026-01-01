
import React from 'react';
import Icon from '../Icon';
import { Provider } from './types';

interface Props {
  selected: Provider;
  onSelect: (p: Provider) => void;
  onContinue: () => void;
}

const Step1_Provider: React.FC<Props> = ({ selected, onSelect, onContinue }) => {
  return (
    <div className="px-6 flex flex-col">
      <div className="mb-8 mt-4">
        <h2 className="text-text-main-light dark:text-text-main-dark text-[28px] leading-[1.2] font-bold tracking-tight mb-3">
          Who is providing the WhatsApp number?
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
          Choose whether to use your own number or request a managed one.
        </p>
      </div>

      <div className="space-y-4">
        {/* Creator Provider */}
        <label className={`group relative flex flex-col gap-4 p-5 rounded-2xl cursor-pointer border-2 transition-all duration-200 shadow-sm ${
          selected === 'creator' 
            ? 'bg-blue-50/30 dark:bg-blue-900/10 border-primary' 
            : 'bg-white dark:bg-surface-dark border-transparent hover:border-gray-200 dark:hover:border-gray-700'
        }`}>
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 transition-colors duration-200 ${
                selected === 'creator' ? 'bg-primary text-white' : 'bg-blue-50 dark:bg-blue-900/20 text-primary'
              }`}>
                <Icon name="smartphone" className="text-[24px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-text-main-light dark:text-text-main-dark text-[17px] font-semibold leading-tight mb-1">Provided by Creator</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 self-start">FREE</span>
              </div>
            </div>
            <div className={`relative shrink-0 flex items-center justify-center size-6 rounded-full border-2 transition-all duration-200 ${
              selected === 'creator' ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'
            }`}>
              <input 
                type="radio" 
                className="sr-only" 
                checked={selected === 'creator'} 
                onChange={() => onSelect('creator')}
              />
              <span className={`material-symbols-outlined text-white text-[16px] transition-opacity duration-200 ${selected === 'creator' ? 'opacity-100' : 'opacity-0'}`}>check</span>
            </div>
          </div>
          <div className="pl-[64px]">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
              Use your own existing WhatsApp number. You'll scan a QR code to link it.
            </p>
          </div>
        </label>

        {/* AgentStore Provider */}
        <label className={`group relative flex flex-col gap-4 p-5 rounded-2xl cursor-pointer border-2 transition-all duration-200 shadow-sm ${
          selected === 'agentstore' 
            ? 'bg-blue-50/30 dark:bg-blue-900/10 border-primary' 
            : 'bg-white dark:bg-surface-dark border-transparent hover:border-gray-200 dark:hover:border-gray-700'
        }`}>
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 transition-colors duration-200 ${
                selected === 'agentstore' ? 'bg-primary text-white' : 'bg-purple-50 dark:bg-purple-900/20 text-purple-600'
              }`}>
                <Icon name="dns" className="text-[24px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-text-main-light dark:text-text-main-dark text-[17px] font-semibold leading-tight mb-1">Provided by AgentStore</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 self-start border border-gray-200 dark:border-gray-700">$5/mo</span>
              </div>
            </div>
            <div className={`relative shrink-0 flex items-center justify-center size-6 rounded-full border-2 transition-all duration-200 ${
              selected === 'agentstore' ? 'border-primary bg-primary' : 'border-gray-300 dark:border-gray-600'
            }`}>
              <input 
                type="radio" 
                className="sr-only" 
                checked={selected === 'agentstore'} 
                onChange={() => onSelect('agentstore')}
              />
              <span className={`material-symbols-outlined text-white text-[16px] transition-opacity duration-200 ${selected === 'agentstore' ? 'opacity-100' : 'opacity-0'}`}>check</span>
            </div>
          </div>
          <div className="pl-[64px]">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
              Request a managed number hosted by us. We handle the connection 24/7.
            </p>
          </div>
        </label>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl flex gap-3 items-start border border-blue-100 dark:border-blue-800/30">
        <Icon name="info" className="text-primary dark:text-blue-400 text-[20px] shrink-0 mt-0.5" />
        <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
          Connecting your own number requires a phone with WhatsApp installed to scan the QR code in the next step.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-8 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark pt-12">
        <button 
          onClick={onContinue}
          className="w-full h-14 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white font-bold text-[17px] rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
        >
          Continue
          <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Step1_Provider;
