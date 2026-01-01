
import React from 'react';

import { useNavigate } from 'react-router-dom';

const PasswordSuccess: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          onClick={() => navigate('/login')}
          className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto animate-fade-in-up">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transform scale-110"></div>
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary shadow-lg shadow-primary/30 animate-scale-in">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '64px', fontWeight: '700' }}>check</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight">
            Password Updated
          </h1>
          <p className="text-text-dim dark:text-gray-400 text-base font-normal leading-relaxed max-w-[280px]">
            Your password has been changed successfully. You can now login with your new credentials.
          </p>
        </div>
      </div>

      <div className="p-6 pb-12 w-full animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <button
          onClick={() => navigate('/login')}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary hover:bg-primary-hover transition-colors text-white text-[17px] font-bold shadow-md shadow-primary/20"
        >
          <span className="truncate">Back to Login</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordSuccess;
