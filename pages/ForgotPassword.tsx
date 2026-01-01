
import React, { useState } from 'react';

interface ForgotPasswordProps {
  onNavigate: (view: any) => void;
  onSetEmail: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onNavigate, onSetEmail }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue) {
      onSetEmail(inputValue);
      onNavigate('check-email');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center px-4 py-2 pt-8 justify-between sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md z-10">
        <button 
          onClick={() => onNavigate('login')}
          className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
        <div className="flex-1 text-center pr-10">
          <span className="text-base font-semibold">Reset Password</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-6 pb-4 w-full animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight mb-3">
            Forgot Password?
          </h1>
          <p className="text-text-dim dark:text-gray-400 text-[17px] font-normal leading-relaxed">
            Enter your email address below to receive a password reset link.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-slate-200 ml-1" htmlFor="email">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>mail</span>
              </div>
              <input 
                id="email"
                type="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="block w-full rounded-[16px] border-0 bg-slate-50 dark:bg-slate-800 py-4 pl-11 pr-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary text-[17px] leading-normal"
                placeholder="john.doe@example.com"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 ml-1 mt-2">
              We'll send a secure link to this email.
            </p>
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center py-8 opacity-60">
          <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600" style={{ fontSize: '48px' }}>lock_reset</span>
          </div>
        </div>
      </div>

      <div className="p-6 w-full pb-10">
        <button 
          onClick={handleSubmit}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[24px] h-14 bg-primary hover:bg-primary-hover transition-colors text-white text-[17px] font-bold tracking-wide shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
