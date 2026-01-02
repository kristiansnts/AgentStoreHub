
import React, { useState, useRef, useEffect } from 'react';
import Icon from '../Icon';
import { Header } from './Header';

interface VerifyOTPScreenProps {
  phone: string;
  onVerify: () => void;
  onBack?: () => void;
}

const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({ phone, onVerify, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1); // Only allow 1 char

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <Header title="Verify WhatsApp" showBack={true} onBack={onBack} />

      <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar flex flex-col items-center pt-12">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 shadow-sm">
          <Icon name="sms" className="text-[40px]" />
        </div>

        <div className="text-center mb-10 w-full max-w-sm">
          <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white mb-3">Verification Code</h2>
          <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed">
            Enter the 6-digit OTP sent to your WhatsApp number <br />
            <span className="font-semibold text-text-main dark:text-white mt-1 block">{phone || '+1 (555) 000-0000'}</span>
          </p>
        </div>

        <div className="w-full max-w-xs mb-10">
          <div className="flex justify-between gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={el => { inputRefs.current[idx] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-transparent bg-surface-light dark:bg-surface-dark text-text-main dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm font-medium text-text-sub dark:text-gray-400">
            Didn't receive the code?
            <button className="ml-1 text-primary hover:text-primary/80 transition-colors font-bold">Resend OTP</button>
          </p>
        </div>

        <div className="w-full mt-auto mb-6">
          <button
            disabled={!isComplete}
            onClick={onVerify}
            className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:shadow-none active:scale-[0.98] transition-all"
          >
            Verify Number
          </button>
        </div>
      </main>
    </div>
  );
};

export default VerifyOTPScreen;
