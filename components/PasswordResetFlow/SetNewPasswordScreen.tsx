
import React, { useState } from 'react';
import Icon from '../Icon';
import { calculatePasswordStrength } from './utils';

interface SetNewPasswordScreenProps {
    onNext: (password: string) => void;
    onBack?: () => void;
}

const SetNewPasswordScreen: React.FC<SetNewPasswordScreenProps> = ({ onNext, onBack }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const strength = calculatePasswordStrength(password);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!password) {
            setError('Please enter a new password');
            return;
        }

        if (strength.score < 3) {
            setError('Please choose a stronger password');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        onNext(password);
    };

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
                    New Password
                </h1>
                <div className="w-10" />
            </header>

            {/* Content */}
            <main className="flex-1 flex flex-col px-6 pt-8 pb-4">
                <div className="mb-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                            <Icon name="lock_open" className="text-[40px] text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-3">
                        Create New Password
                    </h2>
                    <p className="text-base text-text-sub dark:text-gray-400 leading-relaxed px-4">
                        Choose a strong password to secure your account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* New Password */}
                    <div className="space-y-2">
                        <label className="ml-2 text-sm font-bold text-text-main dark:text-white" htmlFor="password">
                            New Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <Icon name="lock" className="text-[20px] text-text-sub dark:text-gray-500" />
                            </div>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                autoFocus
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                className={`w-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-white border-none shadow-sm rounded-lg py-4 pl-12 pr-12 text-lg font-medium ring-1 ${error ? 'ring-red-500' : 'ring-gray-200 dark:ring-gray-800'
                                    } placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:shadow-md transition-all outline-none`}
                                placeholder="Enter new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-sub hover:text-text-main dark:hover:text-white transition-colors"
                            >
                                <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-[20px]" />
                            </button>
                        </div>

                        {/* Password Strength Indicator */}
                        {password && (
                            <div className="mt-3 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-text-sub dark:text-gray-400">
                                        Password Strength
                                    </span>
                                    <span className={`text-xs font-bold ${strength.score >= 4 ? 'text-green-600 dark:text-green-400' :
                                            strength.score === 3 ? 'text-yellow-600 dark:text-yellow-400' :
                                                strength.score === 2 ? 'text-orange-600 dark:text-orange-400' :
                                                    'text-red-600 dark:text-red-400'
                                        }`}>
                                        {strength.label}
                                    </span>
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((level) => (
                                        <div
                                            key={level}
                                            className={`h-1.5 flex-1 rounded-full transition-all ${level <= strength.score ? strength.color : 'bg-gray-200 dark:bg-gray-700'
                                                }`}
                                        />
                                    ))}
                                </div>
                                {strength.suggestions.length > 0 && (
                                    <ul className="mt-2 space-y-1">
                                        {strength.suggestions.map((suggestion, idx) => (
                                            <li key={idx} className="text-xs text-text-sub dark:text-gray-400 flex items-start gap-1">
                                                <Icon name="info" className="text-[14px] mt-0.5 flex-shrink-0" />
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label className="ml-2 text-sm font-bold text-text-main dark:text-white" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <Icon name="lock" className="text-[20px] text-text-sub dark:text-gray-500" />
                            </div>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setError('');
                                }}
                                className={`w-full bg-surface-light dark:bg-surface-dark text-text-main dark:text-white border-none shadow-sm rounded-lg py-4 pl-12 pr-12 text-lg font-medium ring-1 ${error ? 'ring-red-500' : 'ring-gray-200 dark:ring-gray-800'
                                    } placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:shadow-md transition-all outline-none`}
                                placeholder="Confirm new password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-sub hover:text-text-main dark:hover:text-white transition-colors"
                            >
                                <Icon name={showConfirmPassword ? 'visibility_off' : 'visibility'} className="text-[20px]" />
                            </button>
                        </div>
                        {confirmPassword && password !== confirmPassword && (
                            <p className="ml-2 text-sm text-red-500 flex items-center gap-1">
                                <Icon name="error" className="text-[16px]" />
                                Passwords do not match
                            </p>
                        )}
                    </div>

                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-900/30">
                            <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                                <Icon name="error" className="text-[20px]" />
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Security Tips */}
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-4 border border-green-100 dark:border-green-900/30">
                        <div className="flex gap-3">
                            <Icon name="shield" className="text-green-600 dark:text-green-400 text-[20px] mt-0.5 flex-shrink-0" />
                            <div className="text-xs text-green-900 dark:text-green-100">
                                <p className="font-semibold mb-2">Password Tips:</p>
                                <ul className="space-y-1 text-green-700 dark:text-green-300">
                                    <li>• Use at least 8 characters (12+ recommended)</li>
                                    <li>• Mix uppercase and lowercase letters</li>
                                    <li>• Include numbers and special characters</li>
                                    <li>• Avoid common words or personal info</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="flex-grow" />
            </main>

            {/* Footer Button */}
            <div className="p-6 pb-10">
                <button
                    onClick={handleSubmit}
                    disabled={!password || !confirmPassword || password !== confirmPassword || strength.score < 3}
                    className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:shadow-none active:scale-[0.98] transition-all"
                >
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default SetNewPasswordScreen;
