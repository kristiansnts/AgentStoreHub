
import React, { useState } from 'react';
import Modal from '../components/Modal';

import { useNavigate } from 'react-router-dom';

const SubscriptionDetails: React.FC = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300 bg-gray-50 dark:bg-black min-h-screen">
            <header className="flex items-center bg-white dark:bg-[#0f1623] p-4 pb-2 justify-between sticky top-0 z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Subscription Details</h2>
            </header>

            <div className="p-4 pt-6 space-y-8">
                <div className="flex items-center gap-4 bg-white dark:bg-[#0f1623] p-4 rounded-2xl shadow-sm min-h-14">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-12 shadow-md bg-gray-200 dark:bg-gray-800"
                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqMFfUF5gHGxbOE0soGUGfSErRoCT7bFHsUmux5I70_l5hMp0qZwOaS0eFtB6Dt5_jXKmkCP9-3CfAFalKZIS1jZN76Ee88JUH5orvlPhmM4vjlLt245g_c-oXXybfC_5GgMuvszvpqmMoAq67fNcZBQIeibch1X8sBg9RNs79RI8NqC_tyeVP8nOx7Rs1_UXZOpd7kgOvT6tkPc8s_wgyHq5elycNSa3QfIbznoaOCayJS2XFfULlaZ9Kt0beMbswMkFSb5tn704")` }}
                    ></div>
                    <p className="text-gray-900 dark:text-white text-xl font-bold leading-normal flex-1 truncate">Code Reviewer</p>
                </div>

                <section>
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight pb-3">Subscription</h3>
                    <div className="bg-white dark:bg-[#0f1623] rounded-3xl p-6 flex items-center justify-between shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">Basic Plan</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">$9.99/month</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Active
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm px-2 pt-4">Renews automatically on October 25, 2024</p>
                </section>

                <section>
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight pb-3">Payment Method</h3>
                    <div className="flex items-center gap-4 bg-white dark:bg-[#0f1623] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div
                            className="bg-center bg-no-repeat aspect-video bg-contain h-6 w-10 shrink-0"
                            style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg")` }}
                        ></div>
                        <p className="text-gray-900 dark:text-white text-base font-medium flex-1 truncate">Visa ending in ... 1234</p>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </div>
                </section>

                <div className="flex flex-col gap-3 pt-4">
                    <button className="flex items-center justify-center rounded-full h-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-base font-bold active:scale-95 transition-all shadow-sm">
                        Change Plan
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center rounded-full h-12 bg-primary text-white text-base font-bold active:scale-95 transition-all shadow-lg shadow-primary/20"
                    >
                        Cancel Subscription
                    </button>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => {
                    setIsModalOpen(false);
                    navigate('/library');
                }}
                title="Confirm Unsubscription"
                description="Are you sure you want to unsubscribe from Code Reviewer? You will lose access to all saved history and configurations immediately."
                confirmLabel="Unsubscribe"
                confirmColor="bg-red-600"
            />
        </div>
    );
};

export default SubscriptionDetails;
