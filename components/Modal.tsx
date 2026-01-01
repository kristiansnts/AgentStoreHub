
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    confirmLabel?: string;
    confirmColor?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmLabel = 'Confirm',
    confirmColor = 'bg-primary'
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-[360px] bg-white dark:bg-gray-900 rounded-[28px] shadow-2xl overflow-hidden flex flex-col p-6 animate-in slide-in-from-bottom-8 duration-300">
                <div className="flex justify-center mb-5">
                    <div className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[32px] text-red-600 dark:text-red-400 font-bold">warning</span>
                    </div>
                </div>

                <h2 className="text-gray-900 dark:text-white tracking-tight text-[22px] font-bold leading-tight text-center pb-3">
                    {title}
                </h2>

                <p className="text-gray-500 dark:text-gray-400 text-[15px] font-normal leading-relaxed text-center mb-8">
                    {description}
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={onConfirm}
                        className={`w-full h-12 rounded-full ${confirmColor} text-white font-semibold shadow-lg active:scale-95 transition-all`}
                    >
                        {confirmLabel}
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent text-gray-500 dark:text-gray-400 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
