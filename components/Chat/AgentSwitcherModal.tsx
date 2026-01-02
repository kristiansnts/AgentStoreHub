import React from 'react';
import { Agent } from '../../types';
import Icon from '../Icon';
import { MOCK_AGENTS } from '../../constants';

interface AgentSwitcherModalProps {
    isOpen: boolean;
    onClose: () => void;
    activeAgent: Agent;
    onSelectAgent: (agent: Agent) => void;
}

const AgentSwitcherModal: React.FC<AgentSwitcherModalProps> = ({ isOpen, onClose, activeAgent, onSelectAgent }) => {
    if (!isOpen) return null;

    const otherAgents = MOCK_AGENTS.filter(a => a.id !== activeAgent.id);

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Bottom Sheet */}
            <div className="fixed inset-x-0 bottom-0 z-[60] flex flex-col justify-end animate-in slide-in-from-bottom duration-300">
                <div className="w-full bg-white dark:bg-[#0f1623] rounded-t-2xl shadow-2xl flex flex-col pb-safe max-h-[90vh]">
                    {/* Handle */}
                    <div className="w-full flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
                        <div className="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 pt-2 pb-4 border-b border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Switch Agent</h3>
                        <button
                            onClick={onClose}
                            className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                        >
                            <Icon name="close" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto px-4 py-2 flex flex-col gap-1 max-h-[60vh] hide-scrollbar">
                        {/* Active Section */}
                        <p className="px-2 pt-4 pb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active</p>
                        <button className="w-full group text-left">
                            <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20 transition-all">
                                <div className="relative shrink-0">
                                    <div
                                        className="size-12 rounded-lg bg-cover bg-center shadow-sm"
                                        style={{ backgroundImage: `url("${activeAgent.image}")` }}
                                    />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 size-3 rounded-full border-2 border-white dark:border-[#0f1623]"></div>
                                </div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <p className="text-gray-900 dark:text-white text-base font-semibold leading-tight truncate">{activeAgent.name}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal truncate">{activeAgent.provider} • {activeAgent.category}</p>
                                </div>
                                <div className="shrink-0 text-primary">
                                    <Icon name="check_circle" filled className="text-[24px]" />
                                </div>
                            </div>
                        </button>

                        {/* Other Agents */}
                        <p className="px-2 pt-6 pb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Your Agents</p>
                        {otherAgents.map((agent) => (
                            <button
                                key={agent.id}
                                onClick={() => onSelectAgent(agent)}
                                className="w-full group text-left"
                            >
                                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <div className="size-12 rounded-lg bg-cover bg-center bg-gray-200 dark:bg-gray-700 shadow-sm" style={{ backgroundImage: `url("${agent.image}")` }} />
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <p className="text-gray-900 dark:text-white text-base font-medium leading-tight truncate">{agent.name}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal truncate">{agent.provider} • {agent.category}</p>
                                    </div>
                                    <div className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">
                                        <Icon name="radio_button_unchecked" className="text-[24px]" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0f1623] pb-8">
                        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group text-gray-600 dark:text-gray-300">
                            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon name="add" className="text-sm block" />
                            </div>
                            <span className="font-medium group-hover:text-primary transition-colors">Browse Agent Store</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgentSwitcherModal;
