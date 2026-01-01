
import React from 'react';

interface LoginProps {
  onNavigate: (view: any) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-4">
      <header className="flex items-center justify-between h-12 w-full mb-4">
        <button
          onClick={() => onNavigate('welcome')}
          className="flex items-center justify-center -ml-2 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
        </button>
        <button
          onClick={() => onNavigate('signup')}
          className="text-primary font-bold text-base hover:opacity-80 transition-opacity"
        >
          Sign Up
        </button>
      </header>

      <div className="mt-4 mb-10 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
          Log In
        </h1>
        <p className="text-text-dim dark:text-gray-400 text-lg">
          Welcome back to AgentStore
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
          <div className="relative">
            <input
              type="email"
              className="w-full h-14 px-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-all"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Password</label>
          <div className="relative">
            <input
              type="password"
              className="w-full h-14 px-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 font-medium transition-all"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-end pt-1">
            <button
              onClick={() => onNavigate('forgot-password')}
              className="text-primary font-bold text-sm hover:opacity-80 transition-opacity"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto pb-10 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <button
          onClick={() => onNavigate('home')}
          className="w-full h-14 rounded-2xl bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all text-white text-lg font-bold shadow-lg shadow-primary/25 flex items-center justify-center"
        >
          Log In
        </button>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">Or continue with</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
          </button>
          <button className="flex items-center justify-center h-14 bg-black dark:bg-white text-white dark:text-black border border-transparent rounded-2xl hover:opacity-90 transition-opacity">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.03 3.93-1.03 1.62.06 2.85.79 3.63 1.94-3.23 1.66-2.69 6.42.59 7.82-.62 1.58-1.5 3.12-3.23 3.5zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.39-3.74 4.25z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
