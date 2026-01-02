
import React, { useState } from 'react';
import Icon from '../Icon';
import { validateEmail } from './utils';

interface RequestResetScreenProps {
    onNext: (email: string) => void;
    onBack?: () => void;
}

const RequestResetScreen: React.FC<RequestResetScreenProps> = ({ onNext, onBack }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        onNext(email);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 px-4 py-3 backdrop-blur-md">
                {onBack ? (
                    <button
                        onClick={onBack}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back" className="text-[24px]" />
                    </button>
                ) : (
                    <div className="w-10" />
                )}
                <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-text-main dark:text-white">
                    Reset Password
                </h1>
                <div className="w-10" />
            </header>

            {/* Content */}
            <main className="flex-1 flex flex-col px-6 pt-8 pb-4">
                <div className="mb-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                            <Icon name="lock_reset" className="text-[40px] text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                        Forgot Password?
                    </h2>
                    <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed px-4">
                        No worries! Enter your email address and we'll send you a secure link to reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="ml-2 text-sm font-bold text-text-main dark:text-white" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <Icon name="mail" className="text-[20px] text-text-sub dark:text-gray-500" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                autoFocus
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                className={`w-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-white border-none shadow-sm rounded-lg py-4 pl-12 pr-4 text-lg font-medium ring-1 ${error ? 'ring-red-500' : 'ring-gray-200 dark:ring-gray-800'
                                    } placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:shadow-md transition-all outline-none`}
                                placeholder="your.email@example.com"
                            />
                        </div>
                        {error && (
                            <p className="ml-2 text-sm text-red-500 flex items-center gap-1">
                                <Icon name="error" className="text-[16px]" />
                                {error}
                            </p>
                        )}
                        <p className="ml-2 text-xs text-text-sub dark:text-gray-500">
                            We'll send a secure reset link to this email address
                        </p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30">
                        <div className="flex gap-3">
                            <Icon name="info" className="text-blue-600 dark:text-blue-400 text-[20px] mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-blue-900 dark:text-blue-100">
                                <p className="font-semibold mb-1">Security Note</p>
                                <p className="text-xs text-blue-700 dark:text-blue-300">
                                    The reset link will expire in 1 hour for your security. If you don't receive the email, check your spam folder.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Spacer */}
                <div className="flex-grow" />
            </main>

            {/* Footer Button */}
            <div className="p-6 pb-10">
                <button
                    onClick={handleSubmit}
                    disabled={!email}
                    className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:shadow-none active:scale-[0.98] transition-all"
                >
                    Send Reset Link
                </button>
            </div>
        </div>
    );
};

export default RequestResetScreen;
