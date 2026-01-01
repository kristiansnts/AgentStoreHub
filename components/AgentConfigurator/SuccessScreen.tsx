
import React from 'react';
import Icon from '../Icon';
import { AgentFormData } from './types';

interface Props {
  data: AgentFormData;
  onReset: () => void;
}

const SuccessScreen: React.FC<Props> = ({ data, onReset }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark transition-colors duration-200">
      {/* Top Bar - Sticky */}
      <div className="flex items-center p-4 justify-between shrink-0 z-20">
        <div className="w-12"></div>
        <div className="w-12 flex items-center justify-end">
          <button
            onClick={onReset}
            className="flex items-center justify-center rounded-full h-10 w-10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-main-light dark:text-white transition-colors cursor-pointer"
          >
            <Icon name="close" style={{ fontSize: '24px' }} />
          </button>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 flex flex-col items-center">
        {/* Animated Icon Section */}
        <div className="mt-8 mb-8 relative group cursor-default">
          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-full blur-2xl transform scale-125 opacity-70 animate-pulse"></div>
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 dark:bg-primary/20 border-4 border-primary/20 dark:border-primary/40">
            <Icon name="check_circle" className="text-primary text-[72px]" filled />
          </div>
        </div>

        <h1 className="text-text-main-light dark:text-white tracking-tight text-3xl font-extrabold leading-tight text-center mb-4">
          Agent Submitted<br />for Review!
        </h1>

        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed text-center max-w-xs mb-8">
          Thank you for submitting your agent. We'll review your code and configuration within 2-3 business days and notify you.
        </p>

        {/* Summary Card */}
        <div className="w-full bg-white dark:bg-[#1a2436] p-5 rounded-2xl shadow-xl shadow-black/5 border border-slate-100 dark:border-slate-800/50 mb-10 transition-transform hover:scale-[1.01]">
          <div className="flex items-center gap-4">
            {/* Agent Icon */}
            <div
              className="w-16 h-16 rounded-2xl bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700 overflow-hidden shadow-md"
              style={{
                backgroundImage: data.iconUrl ? `url(${data.iconUrl})` : 'none'
              }}
            >
              {!data.iconUrl && (
                <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                  <Icon name="smart_toy" className="text-3xl" filled />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1 min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-full">Pending Review</span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">v1.0.0</span>
              </div>
              <h3 className="text-text-main-light dark:text-white text-lg font-bold leading-tight truncate">
                {data.name || 'Untitled Agent'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-none truncate opacity-80">
                {data.category ? data.category.charAt(0).toUpperCase() + data.category.slice(1) : 'General'} • {data.capabilities?.[0] || 'AI Assistant'}
              </p>
            </div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="w-full px-2 mb-12">
          <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-100 dark:border-slate-800">
            <Icon name="help_outline" className="text-slate-400 text-xl" />
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">What happens next?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Our moderators will verify your integration endpoints and compliance with AgentStore policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions - Sticky-like but in Flow */}
      <div className="shrink-0 p-6 bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5 z-20">
        <button className="w-full h-14 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-white rounded-full text-base font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/30 mb-4">
          <span>Go to Creator Dashboard</span>
          <Icon name="dashboard" />
        </button>
        <button
          onClick={onReset}
          className="w-full h-12 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-text-sub-light dark:text-slate-400 rounded-full text-sm font-semibold flex items-center justify-center transition-colors"
        >
          Submit Another Agent
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
