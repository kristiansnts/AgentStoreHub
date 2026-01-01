
import React, { useState, useEffect, useRef } from 'react';
import Icon from '../Icon';

interface Props {
  phoneNumber: string;
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}

const Step3_OTP: React.FC<Props> = ({ phoneNumber, value, onChange, onNext }) => {
  const [timer, setTimer] = useState(60);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Resend timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const isComplete = value.length === 6;

  // Auto-advance when code is full
  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(onNext, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, onNext]);

  const handleBoxClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="px-6 flex flex-col animate-slide-up">
      <div className="mb-8 mt-4">
        <h2 className="text-text-main-light dark:text-text-main-dark text-[28px] leading-[1.2] font-bold tracking-tight mb-3">
          Verification Code
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
          Enter the 6-digit code sent to <span className="text-slate-900 dark:text-white font-bold">+{phoneNumber || '62xxxx'}</span>
        </p>
      </div>

      {/* OTP Input Group */}
      <div 
        className="flex justify-between gap-2 mb-8 cursor-text"
        onClick={handleBoxClick}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className={`flex-1 h-16 rounded-xl border-2 flex items-center justify-center text-2xl font-bold transition-all duration-200 ${
              value[i] 
                ? 'border-primary bg-primary/5 text-slate-900 dark:text-white scale-[1.02]' 
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-400'
            } ${i === value.length ? 'border-primary ring-4 ring-primary/10' : ''}`}
          >
            {value[i] || ''}
            {i === value.length && (
              <div className="w-0.5 h-8 bg-primary animate-[pulse_1s_infinite] rounded-full"></div>
            )}
          </div>
        ))}
        
        {/* Real hidden input */}
        <input 
          ref={inputRef}
          autoFocus
          className="absolute opacity-0 pointer-events-none"
          maxLength={6}
          type="tel"
          value={value}
          onChange={(e) => {
            const val = e.target.value.replace(/[^0-9]/g, '');
            if (val.length <= 6) onChange(val);
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {timer > 0 ? (
            <span className="flex items-center gap-2">
              <Icon name="history" className="text-[18px] animate-spin" />
              Resend code in <span className="text-primary font-bold">{timer}s</span>
            </span>
          ) : (
            <button 
              className="text-primary font-bold hover:underline flex items-center gap-2"
              onClick={() => {
                setTimer(60);
              }}
            >
              <Icon name="send" className="text-[18px]" />
              Resend Code
            </button>
          )}
        </p>

        {isComplete && (
          <div className="flex flex-col items-center gap-2 text-green-500 font-bold animate-[bounce_1s_ease-in-out]">
            <div className="size-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <Icon name="check_circle" className="text-[32px]" />
            </div>
            <span className="text-sm">Account Linked</span>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 pb-8 bg-gradient-to-t from-white via-white to-transparent dark:from-background-dark dark:via-background-dark pt-12">
        <button 
          disabled={!isComplete}
          onClick={onNext}
          className="w-full h-14 bg-primary hover:bg-primary-dark disabled:opacity-50 transition-all text-white font-bold text-[17px] rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
        >
          {isComplete ? 'Finishing Setup...' : 'Verify & Finish'}
          <Icon name="check" className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Step3_OTP;
