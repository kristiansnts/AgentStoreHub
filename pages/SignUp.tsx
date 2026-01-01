
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex items-center p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button
          onClick={() => navigate('/welcome')}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
        <div className="flex-1"></div>
        <button
          onClick={() => navigate('/login')}
          className="text-sm font-semibold text-primary dark:text-indigo-400 hover:text-primary-hover transition-colors px-2"
        >
          Log In
        </button>
      </header>

      <div className="flex-1 flex flex-col px-6 pt-2 pb-8 w-full animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-white text-[32px] font-extrabold leading-tight tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-text-dim dark:text-gray-400 text-base font-normal">
            Join AgentStore to discover and deploy AI agents.
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200" htmlFor="fullname">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">person</span>
              </div>
              <input
                id="fullname"
                className="block w-full rounded-2xl border-0 py-3.5 pl-10 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900/50"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <input
                id="email"
                type="email"
                className="block w-full rounded-2xl border-0 py-3.5 pl-10 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900/50"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-900 dark:text-slate-200" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">lock</span>
              </div>
              <input
                id="password"
                type="password"
                className="block w-full rounded-2xl border-0 py-3.5 pl-10 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6 bg-slate-50 dark:bg-slate-900/50"
                placeholder="Min. 8 characters"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-3 px-1">
              <div className="h-1.5 flex-1 rounded-full bg-green-500"></div>
              <div className="h-1.5 flex-1 rounded-full bg-green-500"></div>
              <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
              <div className="h-1.5 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <p className="text-xs text-slate-500 px-1 pt-1">Medium strength</p>
          </div>

          <div className="flex items-start pt-2">
            <div className="flex h-6 items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="size-5 rounded-md border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700 transition-all cursor-pointer"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label className="font-medium text-slate-700 dark:text-slate-300 cursor-pointer" htmlFor="terms">
                I agree to the <a className="font-bold text-primary hover:underline" href="#">Terms & Conditions</a> and <a className="font-bold text-primary hover:underline" href="#">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-6">
          <button
            onClick={() => navigate('/home')}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[24px] h-14 bg-primary hover:bg-primary-hover transition-all duration-200 text-white text-[17px] font-bold shadow-lg shadow-primary/30 active:scale-[0.98]"
          >
            Sign Up
          </button>
        </div>

        <div className="relative mb-6">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-background-dark px-4 text-sm font-medium text-slate-500">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3.5 text-sm font-bold text-slate-700 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3.5 text-sm font-bold text-slate-700 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <svg className="h-5 w-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.2 2.16333C14.0433 1.06333 15.3433 0.263333 16.51 0.263333C16.61 0.263333 16.71 0.263333 16.7766 0.296667C16.6766 1.76333 15.81 3.23 14.7433 4.13C13.91 4.86333 12.6766 5.56333 11.51 5.46333C11.51 5.36333 11.4766 5.26333 11.4766 5.16333C11.4766 4.09667 12.0766 3.03 13.2 2.16333ZM18.71 14.4967C18.7433 14.5633 21.01 18.0633 19.3433 20.3633C18.51 21.4967 17.51 22.9967 15.91 22.9967C14.3766 22.9967 13.9433 22.13 12.21 22.13C10.4766 22.13 9.87665 22.9633 8.54332 22.9967C6.84332 23.03 5.30999 21.2633 4.24332 19.63C2.07665 16.3633 2.07665 10.7967 4.54332 9.53001C5.74332 8.89667 7.20999 9.29668 8.04332 9.29668C9.07665 9.29668 10.41 8.33001 11.8766 8.33001C12.4433 8.33001 14.61 8.23001 16.1433 9.59668C16.01 9.69668 13.7766 11.0633 13.8433 14.03C13.8766 16.4967 15.91 17.53 16.1433 17.63C16.11 17.7633 16.01 18.0633 15.91 18.23L18.71 14.4967Z"></path>
            </svg>
            Apple
          </button>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">
          © 2024 AgentStore Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
