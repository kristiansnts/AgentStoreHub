
import React from 'react';
import Icon from '../Icon';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full">
      <div className="flex items-center text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">
        <span>Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(6,87,249,0.3)]" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
