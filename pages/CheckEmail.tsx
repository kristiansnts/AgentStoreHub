
import React from 'react';

interface CheckEmailProps {
  onNavigate: (view: any) => void;
  email: string;
}

const CheckEmail: React.FC<CheckEmailProps> = ({ onNavigate, email }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 text-center">
      <main className="relative w-full max-w-[480px] flex flex-col items-center">
        <div className="mb-8 animate-scale-in">
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 dark:bg-primary/20 shadow-xl shadow-primary/5">
            <div className="absolute inset-0 rounded-full border-4 border-white/50 dark:border-background-dark/30"></div>
            <div className="absolute -inset-2 rounded-full border border-primary/10 dark:border-primary/5"></div>
            <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
              mark_email_read
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-center w-full animate-fade-in-up">
          <h2 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-extrabold leading-tight">
            Check your mail
          </h2>
          <div className="px-6 mb-4">
            <p className="text-text-dim dark:text-gray-400 text-[17px] font-normal leading-relaxed">
              We have sent password recovery instructions to your email <span className="font-semibold text-slate-900 dark:text-slate-200">{email}</span>.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 mt-8 px-2 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <button 
            onClick={() => onNavigate('login')}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-14 bg-primary hover:bg-primary-hover active:bg-blue-700 transition-all text-white text-[17px] font-bold shadow-lg shadow-primary/25 active:scale-[0.98]"
          >
            Return to Login
          </button>
          <button 
            onClick={() => onNavigate('set-new-password')}
            className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 text-primary text-[17px] font-semibold hover:bg-primary/5"
          >
            Open Email App
          </button>
        </div>

        <div className="mt-8 px-6 text-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <p className="text-slate-400 dark:text-slate-500 text-sm font-medium leading-relaxed">
            Did not receive the email? <br/>
            Check your spam filter, or <button onClick={() => onNavigate('forgot-password')} className="text-primary hover:underline font-bold">try another email address</button>.
          </p>
        </div>

        <div className="mt-8">
          <a className="flex items-center gap-1 text-xs font-semibold text-slate-300 dark:text-slate-600 hover:text-slate-500 transition-colors uppercase tracking-wider" href="#">
            <span className="material-symbols-outlined text-[16px]">help</span>
            Contact Support
          </a>
        </div>
      </main>
    </div>
  );
};

export default CheckEmail;
