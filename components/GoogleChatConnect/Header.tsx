
import React from 'react';
import Icon from '../Icon';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    title: string;
    showBack?: boolean;
    onBack?: () => void;
    rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack = true, onBack, rightAction }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        if (onBack) onBack();
        else navigate(-1);
    };

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between bg-surface-light/80 dark:bg-surface-dark/80 px-4 py-3 backdrop-blur-md">
            {showBack ? (
                <button
                    onClick={handleBack}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <Icon name="arrow_back" className="text-[24px]" />
                </button>
            ) : (
                <div className="w-10" />
            )}

            <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-text-main dark:text-white">
                {title}
            </h1>

            {rightAction ? (
                <div className="flex h-10 w-10 items-center justify-center">
                    {rightAction}
                </div>
            ) : (
                <div className="w-10" />
            )}
        </header>
    );
};
