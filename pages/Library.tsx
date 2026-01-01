
import React from 'react';
import { MY_AGENTS } from '../constants';

interface LibraryProps {
    onBack: () => void;
    onNavigate: (view: any) => void;
}

const Library: React.FC<LibraryProps> = ({ onBack, onNavigate }) => {
    return (
        <div className="animate-in fade-in duration-300">
            <header className="flex items-center bg-white dark:bg-[#0f1623] p-4 pb-2 justify-between sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-[#0f1623]/80">
                <div onClick={onBack} className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </div>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Library</h2>
            </header>

            <section className="px-4">
                <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-tight pb-3 pt-5">My Agents</h2>

                <div className="space-y-2">
                    {MY_AGENTS.map((agent) => (
                        <div
                            key={agent.id}
                            onClick={() => onNavigate('subscription-details')}
                            className="p-4 flex items-stretch justify-between gap-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer active:scale-[0.98]"
                        >
                            <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{agent.category}</p>
                                <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">{agent.name}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">{agent.description}</p>
                            </div>
                            <div
                                className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-xl flex-1 shrink-0 bg-gray-200 dark:bg-gray-800"
                                style={{ backgroundImage: `url("${agent.imageUrl}")` }}
                            ></div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="p-4 mt-6">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-6 border border-primary/10 dark:border-primary/20 flex flex-col items-center text-center gap-3">
                    <div className="bg-primary/10 dark:bg-primary/20 h-12 w-12 rounded-full flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">add</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Add New Agent</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Explore the marketplace to find more tools to help with your daily tasks.</p>
                    <button onClick={() => onNavigate('home')} className="mt-2 bg-primary text-white font-bold py-2 px-6 rounded-full active:scale-95 transition-all">
                        Browse Marketplace
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Library;
