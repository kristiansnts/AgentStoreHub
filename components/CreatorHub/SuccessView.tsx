import React from 'react';
import { ViewType } from '../../types';

interface SuccessViewProps {
    onNavigate: (view: ViewType) => void;
}

const SuccessView: React.FC<SuccessViewProps> = ({ onNavigate }) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10 w-full min-h-[60vh]">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* Hero Icon */}
            <div className="flex flex-col items-center gap-8 w-full animate-fade-in-up">
                <div className="relative">
                    {/* Icon Container */}
                    <div className="w-32 h-32 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center relative z-10 shadow-sm ring-4 ring-white dark:ring-background-dark">
                        <span className="material-symbols-outlined text-primary text-[64px] font-bold" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>check_circle</span>
                    </div>
                    {/* Ripple effect decoration */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary/5 animate-ping opacity-75"></div>
                </div>

                <div className="flex flex-col items-center gap-3 text-center">
                    <h1 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                        Application Submitted!
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal leading-relaxed max-w-[320px]">
                        Thank you for your interest in becoming a Creator. We'll review your application and notify you of its status soon.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 w-full mt-4">
                    <button
                        onClick={() => onNavigate(ViewType.HOME)}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        Explore Agents
                    </button>
                    <button
                        onClick={() => onNavigate(ViewType.PROFILE)}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-primary text-sm md:text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        Return to Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessView;
