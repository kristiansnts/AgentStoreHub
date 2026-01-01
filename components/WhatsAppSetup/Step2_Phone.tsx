
import React from 'react';
import Icon from '../Icon';

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}

const Step2_Phone: React.FC<Props> = ({ value, onChange, onNext }) => {
  const isValid = value.length >= 8;

  return (
    <div className="px-6 flex flex-col animate-slide-up">
      <div className="mb-8 mt-4">
        <h2 className="text-text-main-light dark:text-text-main-dark text-[28px] leading-[1.2] font-bold tracking-tight mb-3">
          Enter WhatsApp Phone Number
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
          We'll send a 6-digit verification code to this number via SMS or WhatsApp.
        </p>
      </div>

      <div className="mb-10">
        <label className="block text-[11px] font-bold text-primary uppercase tracking-widest mb-3 ml-1">Phone Number</label>
        <div className="flex gap-3">
          <div className="flex items-center justify-center px-4 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-transparent font-bold text-slate-700 dark:text-slate-300">
            +62
          </div>
          <div className="relative flex-1 group">
            <input 
              autoFocus
              className="block w-full rounded-2xl border-2 border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 py-4 px-5 text-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-0 shadow-sm transition-all font-semibold tracking-wider" 
              placeholder="812 3456 7890" 
              type="tel"
              value={value}
              onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl flex gap-3 items-start border border-blue-100 dark:border-blue-800/30">
        <Icon name="verified_user" className="text-primary dark:text-blue-400 text-[20px] shrink-0" />
        <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
          This number will be linked to your AgentStore instance to send and receive messages.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-8 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark pt-12">
        <button 
          disabled={!isValid}
          onClick={onNext}
          className="w-full h-14 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:grayscale transition-all text-white font-bold text-[17px] rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
        >
          Send Verification Code
          <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Step2_Phone;
