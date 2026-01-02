
import React, { useState, useRef, useEffect } from 'react';
import Icon from '../Icon';
import { Header } from './Header';

interface VerifyTelegramScreenProps {
    username: string;
    onVerify: () => void;
    onBack?: () => void;
}

const VerifyTelegramScreen: React.FC<VerifyTelegramScreenProps> = ({ username, onVerify, onBack }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Focus first input on mount
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) value = value.slice(-1); // Only allow 1 char

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const isComplete = code.every(digit => digit !== '');

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
            <Header title="Verify Telegram" showBack={true} onBack={onBack} />

            <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar flex flex-col items-center pt-12">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 shadow-sm">
                    <Icon name="mark_chat_unread" className="text-[40px]" />
                </div>

                <div className="text-center mb-10 w-full max-w-sm">
                    <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white mb-3">Verification Code</h2>
                    <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed">
                        Enter the 6-digit code sent to your Telegram account <br />
                        <span className="font-semibold text-text-main dark:text-white mt-1 block">{username}</span>
                    </p>
                </div>

                <div className="w-full max-w-xs mb-10">
                    <div className="flex justify-between gap-2">
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
                                className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 border-transparent bg-surface-light dark:bg-surface-dark text-text-main dark:text-white shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-text-sub dark:text-gray-400">
                        Didn't receive the code?
                        <button className="ml-1 text-primary hover:text-primary/80 transition-colors font-bold">Resend Code</button>
                    </p>
                </div>

                <div className="bg-sky-50 dark:bg-sky-900/10 rounded-xl p-4 border border-sky-100 dark:border-sky-900/30 mb-8 max-w-sm">
                    <div className="flex gap-3">
                        <Icon name="info" className="text-sky-600 dark:text-sky-400 text-[20px] mt-0.5 flex-shrink-0" />
                        <div className="text-xs text-sky-900 dark:text-sky-100">
                            <p className="font-semibold mb-1">Check your Telegram app</p>
                            <p className="text-sky-700 dark:text-sky-300">
                                Open Telegram and look for a message from <span className="font-semibold">AgentStore Bot</span> with your verification code.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-auto mb-6">
                    <button
                        disabled={!isComplete}
                        onClick={onVerify}
                        className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:shadow-none active:scale-[0.98] transition-all"
                    >
                        Verify Account
                    </button>
                </div>
            </main>
        </div>
    );
};

export default VerifyTelegramScreen;
