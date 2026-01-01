
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SetNewPassword: React.FC = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={() => navigate('/forgot-password')}
          className="flex items-center justify-center w-10 h-10 -ml-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight text-center flex-1">
          Set New Password
        </h1>
        <button className="flex items-center justify-end w-10 h-10 -mr-2 text-primary font-semibold text-base opacity-50 cursor-not-allowed" disabled>
          Save
        </button>
      </header>

      <main className="flex-1 flex flex-col p-6 pb-32 animate-fade-in-up">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">lock_reset</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 tracking-tight">Create new password</h2>
          <p className="text-text-dim dark:text-gray-400 text-base leading-relaxed max-w-[280px] mx-auto">
            Your new password must be different from previous used passwords.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-slate-200 ml-1">New Password</label>
            <div className="relative group">
              <input
                className="w-full h-14 pl-5 pr-12 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base shadow-sm"
                placeholder="Enter new password"
                type={showPass ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                <span className="material-symbols-outlined">{showPass ? "visibility" : "visibility_off"}</span>
              </button>
            </div>

            <div className="mt-2 px-1">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Password Strength</span>
                <span className="text-xs font-semibold text-yellow-500">Medium</span>
              </div>
              <div className="flex gap-1 h-1.5 w-full">
                <div className="flex-1 h-full rounded-full bg-yellow-500"></div>
                <div className="flex-1 h-full rounded-full bg-yellow-500"></div>
                <div className="flex-1 h-full rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex-1 h-full rounded-full bg-slate-200 dark:bg-slate-700"></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/30 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Requirements</p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white shrink-0">
                  <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                </div>
                <span>At least 8 characters</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white shrink-0">
                  <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                </div>
                <span>One uppercase letter</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 dark:text-slate-500">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-300 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                </div>
                <span>One number or special character</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-slate-200 ml-1">Confirm New Password</label>
            <div className="relative group">
              <input
                className="w-full h-14 pl-5 pr-12 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base shadow-sm"
                placeholder="Re-enter password"
                type="password"
              />
            </div>
          </div>
        </form>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 w-full max-w-md mx-auto">
        <button
          onClick={() => navigate('/password-success')}
          className="w-full h-14 bg-primary hover:bg-primary-hover active:scale-[0.98] text-white text-lg font-semibold rounded-full shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
        >
          <span>Update Password</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default SetNewPassword;
