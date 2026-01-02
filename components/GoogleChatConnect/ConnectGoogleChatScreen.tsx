
import React, { useState } from 'react';
import Icon from '../Icon';
import { Header } from './Header';

interface ConnectGoogleChatScreenProps {
    onNext: (email: string) => void;
    onBack?: () => void;
}

const ConnectGoogleChatScreen: React.FC<ConnectGoogleChatScreenProps> = ({ onNext, onBack }) => {
    const [email, setEmail] = useState('');
    const [isConfirming, setIsConfirming] = useState(false);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (email.includes('@')) {
            setIsConfirming(true);
        }
    };

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
            <Header title="Connect Google Chat" showBack={true} onBack={onBack} />

            <main className="flex-1 overflow-y-auto px-6 pb-24 pt-8 no-scrollbar">
                <div className="flex flex-col items-center">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm dark:bg-blue-900/20 dark:text-blue-400">
                        <Icon name="chat_bubble" className="text-[40px]" />
                    </div>

                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                            Connect your Google Account
                        </h2>
                        <p className="text-text-sub dark:text-gray-400 text-sm leading-relaxed px-2">
                            Link your Google account to enable agent interactions through Google Chat.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-8">
                        <div className="space-y-2">
                            <label className="ml-2 text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-500">
                                Google Email
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-sub dark:text-gray-500">
                                    <Icon name="mail" className="text-[20px]" />
                                </div>
                                <input
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-white border-none shadow-sm rounded-lg py-5 pl-12 pr-4 text-lg font-medium ring-1 ring-gray-200 dark:ring-gray-800 placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:shadow-md transition-all outline-none"
                                    placeholder="your.email@gmail.com"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!email.includes('@')}
                            className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-semibold text-lg py-4 rounded-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            <span>Continue with Google</span>
                            <Icon name="arrow_forward" className="text-[20px]" />
                        </button>

                        <p className="text-center text-xs text-text-sub dark:text-gray-500">
                            By continuing, you'll be redirected to Google to authorize access to Google Chat.
                        </p>
                    </form>
                </div>
            </main>

            {/* Confirmation Modal */}
            {isConfirming && (
                <div className="fixed inset-0 z-[100] mx-auto flex w-full max-w-md items-center justify-center px-4" role="dialog">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsConfirming(false)}></div>
                    <div className="relative w-full max-w-sm overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark p-6 text-center shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all animate-in zoom-in-95 duration-200">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                            <Icon name="chat_bubble" className="text-[32px]" />
                        </div>
                        <h3 className="text-xl font-bold text-text-main dark:text-white">Confirm Google Account</h3>
                        <div className="mt-2">
                            <p className="text-xl font-semibold tracking-tight text-text-main dark:text-white py-1">{email}</p>
                            <p className="mt-2 text-sm leading-relaxed text-text-sub dark:text-gray-400">
                                You'll be redirected to Google to authorize AgentStore to access your Google Chat.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col gap-3">
                            <button
                                onClick={() => onNext(email)}
                                className="flex w-full items-center justify-center rounded-full bg-primary px-3 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98]"
                            >
                                Authorize Google Chat
                            </button>
                            <button
                                onClick={() => setIsConfirming(false)}
                                className="flex w-full items-center justify-center rounded-full bg-transparent px-3 py-3.5 text-sm font-semibold text-primary hover:bg-blue-50 dark:hover:bg-white/5 transition-all"
                            >
                                Edit Email
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConnectGoogleChatScreen;
