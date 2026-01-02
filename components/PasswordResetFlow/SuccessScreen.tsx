
import React, { useEffect, useState } from 'react';
import Icon from '../Icon';

interface SuccessScreenProps {
    onComplete: () => void;
    autoRedirectSeconds?: number;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onComplete, autoRedirectSeconds = 5 }) => {
    const [countdown, setCountdown] = useState(autoRedirectSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onComplete();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            {/* Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                {/* Success Animation */}
                <div className="mb-8 relative">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 animate-in zoom-in-95 duration-500">
                        <Icon name="check_circle" className="text-[80px] text-green-600 dark:text-green-400" />
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 flex h-32 w-32 items-center justify-center">
                        <div className="h-full w-full rounded-full bg-green-400/20 animate-ping" />
                    </div>
                </div>

                <div className="text-center mb-12 max-w-md animate-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-4">
                        Password Reset Successful!
                    </h2>
                    <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed">
                        Your password has been successfully updated. You can now sign in with your new password.
                    </p>
                </div>

                {/* Success Checklist */}
                <div className="w-full max-w-md bg-surface-light dark:bg-surface-dark rounded-xl p-6 mb-8 space-y-4 animate-in slide-in-from-bottom-8 duration-1000">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            <Icon name="check" className="text-[18px] text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm font-medium text-text-main dark:text-white">Password updated</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            <Icon name="check" className="text-[18px] text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm font-medium text-text-main dark:text-white">Account secured</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            <Icon name="check" className="text-[18px] text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm font-medium text-text-main dark:text-white">Ready to sign in</span>
                    </div>
                </div>

                {/* Auto-redirect notice */}
                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30 max-w-md">
                    <div className="flex gap-3 items-center">
                        <Icon name="schedule" className="text-blue-600 dark:text-blue-400 text-[20px] flex-shrink-0" />
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                            Redirecting to login in <span className="font-bold">{countdown}</span> seconds...
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer Button */}
            <div className="p-6 pb-10">
                <button
                    onClick={onComplete}
                    className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <span>Continue to Login</span>
                    <Icon name="arrow_forward" className="text-[20px]" />
                </button>
            </div>
        </div>
    );
};

export default SuccessScreen;
