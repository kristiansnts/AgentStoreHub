
import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import { Header } from './Header';

interface VerifyGoogleScreenProps {
    email: string;
    onVerify: () => void;
    onBack?: () => void;
}

const VerifyGoogleScreen: React.FC<VerifyGoogleScreenProps> = ({ email, onVerify, onBack }) => {
    const [isAuthorizing, setIsAuthorizing] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate OAuth authorization flow
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsAuthorizing(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    const handleAuthorize = () => {
        onVerify();
    };

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
            <Header title="Authorize Google Chat" showBack={true} onBack={onBack} />

            <main className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar flex flex-col items-center justify-center">
                {isAuthorizing ? (
                    // Loading State
                    <div className="flex flex-col items-center max-w-sm">
                        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm animate-pulse">
                            <Icon name="chat_bubble" className="text-[48px]" />
                        </div>

                        <div className="text-center mb-8 w-full">
                            <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                                Connecting to Google
                            </h2>
                            <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed">
                                Please wait while we establish a secure connection with your Google account...
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full max-w-xs mb-4">
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p className="text-center text-sm text-text-sub dark:text-gray-500 mt-2">
                                {progress}%
                            </p>
                        </div>
                    </div>
                ) : (
                    // Authorization Success State
                    <div className="flex flex-col items-center max-w-sm">
                        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 shadow-sm">
                            <Icon name="check_circle" className="text-[48px]" />
                        </div>

                        <div className="text-center mb-8 w-full">
                            <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                                Authorization Required
                            </h2>
                            <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed mb-4">
                                Grant AgentStore permission to access Google Chat for:
                            </p>
                            <p className="text-lg font-semibold text-primary mb-6">
                                {email}
                            </p>
                        </div>

                        {/* Permissions List */}
                        <div className="w-full bg-surface-light dark:bg-surface-dark rounded-xl p-4 mb-8 space-y-3">
                            <div className="flex items-start gap-3">
                                <Icon name="check" className="text-green-600 dark:text-green-400 text-[20px] mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white">Send and receive messages</p>
                                    <p className="text-xs text-text-sub dark:text-gray-400">Communicate with AI agents</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon name="check" className="text-green-600 dark:text-green-400 text-[20px] mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white">View your profile info</p>
                                    <p className="text-xs text-text-sub dark:text-gray-400">Display name and avatar</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon name="check" className="text-green-600 dark:text-green-400 text-[20px] mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-text-main dark:text-white">Access Google Chat</p>
                                    <p className="text-xs text-text-sub dark:text-gray-400">Enable agent notifications</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-3">
                            <button
                                onClick={handleAuthorize}
                                className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all"
                            >
                                Authorize Access
                            </button>
                            <button
                                onClick={onBack}
                                className="w-full py-3 rounded-lg bg-transparent text-text-sub dark:text-gray-400 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            >
                                Cancel
                            </button>
                        </div>

                        <p className="text-center text-xs text-text-sub dark:text-gray-500 mt-6 px-4">
                            AgentStore will only access your Google Chat to deliver agent messages. You can revoke access anytime.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default VerifyGoogleScreen;
