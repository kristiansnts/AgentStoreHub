
import React from 'react';

interface WelcomeProps {
  onNavigate: (view: any) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-6 -mt-12">
        <div className="relative mb-12 group animate-scale-in">
          <div className="absolute inset-0 bg-primary/30 rounded-[32px] blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative flex items-center justify-center w-36 h-36 rounded-[32px] bg-gradient-to-br from-primary to-[#818cf8] shadow-2xl border border-white/10 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '80px' }}>smart_toy</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <h1 className="text-slate-900 dark:text-white text-4xl font-extrabold leading-tight tracking-tight">
            Welcome to <br/>
            <span className="text-primary">AgentStore</span>
          </h1>
          <p className="text-text-dim dark:text-gray-400 text-lg font-medium leading-relaxed max-w-[300px]">
            The marketplace for AI agents. Discover, deploy, and automate your workflow.
          </p>
        </div>
      </div>

      <div className="p-6 pb-12 w-full flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <button 
          onClick={() => onNavigate('login')}
          className="flex w-full cursor-pointer items-center justify-center rounded-2xl h-14 bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all text-white text-[17px] font-bold tracking-wide shadow-lg shadow-primary/25"
        >
          Log In
        </button>
        <button 
          onClick={() => onNavigate('signup')}
          className="flex w-full cursor-pointer items-center justify-center rounded-2xl h-14 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 active:scale-[0.98] transition-all text-primary dark:text-white text-[17px] font-bold tracking-wide"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Welcome;
