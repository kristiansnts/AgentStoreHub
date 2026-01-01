
import React from 'react';

interface ChangePasswordProps {
  onNavigate: (view: any) => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 border-b border-slate-200/50 dark:border-slate-800/50">
        <button
          onClick={() => onNavigate('profile')}
          className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white group"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-2">Change Password</h1>
        <button onClick={() => onNavigate('password-success')} className="flex items-center justify-end">
          <p className="text-primary text-base font-bold leading-normal tracking-wide hover:opacity-80 transition-opacity">Save</p>
        </button>
      </header>

      <main className="flex-1 flex flex-col p-4 gap-6 animate-fade-in-up">
        <div className="flex flex-col gap-2">
          <label className="flex flex-col gap-1.5 w-full">
            <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold ml-1">Current Password</span>
            <div className="flex w-full items-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
              <input className="flex-1 bg-transparent h-14 px-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white border-none focus:ring-0 rounded-l-xl" placeholder="Enter current password" type="password" />
              <button className="px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">visibility_off</span>
              </button>
            </div>
          </label>
          <div className="flex justify-end px-1">
            <button onClick={() => onNavigate('forgot-password')} className="text-primary text-sm font-medium hover:underline decoration-primary/50 underline-offset-4">Forgot Password?</button>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-800" />

        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 w-full">
            <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold ml-1">New Password</span>
            <div className="flex w-full items-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
              <input className="flex-1 bg-transparent h-14 px-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white border-none focus:ring-0 rounded-l-xl" placeholder="Enter new password" type="password" />
              <button className="px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">visibility_off</span>
              </button>
            </div>
          </label>

          <div className="flex flex-col gap-2 px-1">
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Password Strength</p>
              <p className="text-sm font-semibold text-orange-500">Fair</p>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                <span className="material-symbols-outlined text-[14px]">check</span>
                8+ Characters
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
                <span className="material-symbols-outlined text-[14px]">circle</span>
                1 Number
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
                <span className="material-symbols-outlined text-[14px]">circle</span>
                1 Symbol
              </span>
            </div>
          </div>

          <label className="flex flex-col gap-1.5 w-full mt-2">
            <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold ml-1">Confirm New Password</span>
            <div className="flex w-full items-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm">
              <input className="flex-1 bg-transparent h-14 px-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white border-none focus:ring-0 rounded-l-xl" placeholder="Re-enter new password" type="password" />
              <button className="px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">visibility_off</span>
              </button>
            </div>
          </label>
        </div>

        <div className="mt-auto pt-10 pb-6">
          <button
            onClick={() => onNavigate('password-success')}
            className="w-full bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all h-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <span className="text-white text-base font-bold tracking-wide">Update Password</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
