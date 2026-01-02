
import React, { useState, useRef, useEffect } from 'react';
import Icon from '../Icon';

interface VerifyTokenScreenProps {
    email: string;
    onNext: (token: string) => void;
    onBack?: () => void;
    onResend?: () => void;
}

const VerifyTokenScreen: React.FC<VerifyTokenScreenProps> = ({ email, onNext, onBack, onResend }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [resendCooldown, setResendCooldown] = useState(0);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    useEffect(() => {
        if (resendCooldown > 0) {
            const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendCooldown]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) value = value.slice(-1);

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        setError('');

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const newCode = [...code];

        for (let i = 0; i < pastedData.length; i++) {
            if (i < 6) {
                newCode[i] = pastedData[i];
            }
        }

        setCode(newCode);
        const nextEmptyIndex = newCode.findIndex(c => !c);
        if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex]?.focus();
        } else {
            inputRefs.current[5]?.focus();
        }
    };

    const handleResend = () => {
        if (resendCooldown === 0 && onResend) {
            onResend();
            setResendCooldown(60);
            setCode(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
        }
    };

    const handleSubmit = () => {
        const token = code.join('');
        if (token.length === 6) {
            onNext(token);
        } else {
            setError('Please enter the complete 6-digit code');
        }
    };

    const isComplete = code.every(digit => digit !== '');

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 px-4 py-3 backdrop-blur-md">
                <button
                    onClick={onBack}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <Icon name="arrow_back" className="text-[24px]" />
                </button>
                <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-text-main dark:text-white">
                    Verify Code
                </h1>
                <div className="w-10" />
            </header>

            {/* Content */}
            <main className="flex-1 flex flex-col px-6 pt-12 pb-4 items-center">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <Icon name="mark_email_read" className="text-[40px] text-primary" />
                </div>

                <div className="text-center mb-10 w-full max-w-sm">
                    <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                        Check Your Email
                    </h2>
                    <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed">
                        We've sent a 6-digit verification code to
                    </p>
                    <p className="font-semibold text-primary mt-2">{email}</p>
                </div>

                <div className="w-full max-w-xs mb-8">
                    <div className="flex justify-between gap-2" onPaste={handlePaste}>
                        {code.map((digit, idx) => (
                            <input
                                key={idx}
                                ref={el => { inputRefs.current[idx] = el; }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(idx, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(idx, e)}
                                className={`w-12 h-14 text-center text-xl font-bold rounded-lg border-2 ${error ? 'border-red-500' : 'border-transparent'
                                    } bg-surface-light dark:bg-surface-dark text-text-main dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all`}
                            />
                        ))}
                    </div>
                    {error && (
                        <p className="mt-3 text-sm text-red-500 text-center flex items-center justify-center gap-1">
                            <Icon name="error" className="text-[16px]" />
                            {error}
                        </p>
                    )}
                </div>

                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-text-sub dark:text-gray-400">
                        Didn't receive the code?
                    </p>
                    <button
                        onClick={handleResend}
                        disabled={resendCooldown > 0}
                        className="mt-2 text-primary hover:text-primary/80 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
                    </button>
                </div>

                {/* Info Box */}
                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-100 dark:border-amber-900/30 max-w-sm">
                    <div className="flex gap-3">
                        <Icon name="schedule" className="text-amber-600 dark:text-amber-400 text-[20px] mt-0.5 flex-shrink-0" />
                        <div className="text-xs text-amber-900 dark:text-amber-100">
                            <p className="font-semibold mb-1">Code expires in 10 minutes</p>
                            <p className="text-amber-700 dark:text-amber-300">
                                For your security, this verification code will expire soon. Request a new code if needed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-grow" />
            </main>

            {/* Footer Button */}
            <div className="p-6 pb-10">
                <button
                    onClick={handleSubmit}
                    disabled={!isComplete}
                    className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:shadow-none active:scale-[0.98] transition-all"
                >
                    Verify Code
                </button>
            </div>
        </div>
    );
};

export default VerifyTokenScreen;
