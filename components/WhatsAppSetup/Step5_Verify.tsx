
import React from 'react';
import Icon from '../Icon';
import { LogEntry } from './types';

interface Props {
  logs: LogEntry[];
  onComplete: () => void;
}

const Step5_Verify: React.FC<Props> = ({ logs, onComplete }) => {
  const isFinished = logs.some(l => l.status === 'success');

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-6 pt-8 pb-6 items-center">
        <div className="relative flex items-center justify-center mb-8">
          <div className={`absolute inset-0 bg-primary/20 rounded-full w-24 h-24 m-auto ${!isFinished ? 'pulse-ring' : ''}`}></div>
          <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full text-primary">
            <span className={`material-symbols-outlined ${!isFinished ? 'animate-spin' : ''}`} style={{ fontSize: '40px' }}>
              {isFinished ? 'check' : 'sync'}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
            {isFinished ? 'Connection Verified' : 'Verifying Connection...'}
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed max-w-[300px]">
            We are pinging your WAHA instance to ensure messages can be delivered correctly.
          </p>
        </div>
      </div>

      <div className="flex px-4 py-2 justify-center w-full">
        <button className="flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full h-12 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-text-main-light dark:text-text-main-dark text-sm font-bold transition-colors">
          <Icon name="wifi_tethering" />
          <span>Send Test Ping</span>
        </button>
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="flex items-center justify-between px-6 pb-3">
          <h3 className="text-text-main-light dark:text-text-main-dark text-lg font-bold">Connection Activity</h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
        </div>

        <div className="px-4">
          <div className="bg-white dark:bg-slate-800/40 rounded-3xl border border-gray-100 dark:border-slate-800 overflow-hidden shadow-sm">
            {logs.map((log, index) => (
              <div 
                key={log.id} 
                className={`flex gap-4 p-4 items-start animate-slide-up ${
                  index !== logs.length - 1 ? 'border-b border-gray-50 dark:border-slate-800/50' : ''
                } ${log.status === 'info' ? 'opacity-60' : 'opacity-100'}`}
              >
                <span className={`material-symbols-outlined mt-0.5 ${
                  log.status === 'success' ? 'text-green-500' : 
                  log.status === 'pending' ? 'text-primary animate-pulse' : 
                  'text-slate-400'
                }`} style={{ fontSize: '18px' }}>
                  {log.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-text-main-light dark:text-text-main-dark text-sm font-bold">{log.message}</p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-[10px] font-mono tracking-tighter">{log.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-8 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark pt-12 z-30">
        <button 
          onClick={onComplete}
          disabled={!isFinished}
          className="w-full h-14 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white text-base font-bold rounded-full shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Complete Integration</span>
          <Icon name="arrow_forward" />
        </button>
      </div>
    </div>
  );
};

export default Step5_Verify;
