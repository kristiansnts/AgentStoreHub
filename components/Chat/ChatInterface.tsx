import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Agent, Message } from '../../types';
import AgentSwitcherModal from './AgentSwitcherModal';
import Icon from '../Icon';
import { IMAGES } from '../../constants';

interface ChatInterfaceProps {
    initialAgent: Agent;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialAgent }) => {
    const navigate = useNavigate();
    const [activeAgent, setActiveAgent] = useState<Agent>(initialAgent);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'agent',
            text: `Hello! I'm ${initialAgent.name}. I noticed you have some new pending orders on your account. Would you like me to summarize them for you?`,
            timestamp: '09:41 AM',
        },
        {
            id: '2',
            sender: 'user',
            text: 'Yes, please. Only the ones from high-priority clients.',
            timestamp: '09:42 AM',
        },
        {
            id: '3',
            sender: 'agent',
            text: 'Understood. You have 3 urgent messages:\n\n1. Acme Corp needs the invoice for Order #302.\n2. Sarah Lee is asking about bulk pricing.\n3. TechStart wants to reschedule the demo call.',
            timestamp: '09:42 AM',
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: inputText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, newMessage]);
        setInputText('');

        // Simulate agent reply
        setTimeout(() => {
            const reply: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'agent',
                text: `Got it. I'm processing your request with ${activeAgent.name}.`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, reply]);
        }, 1000);
    };

    const switchAgent = (agent: Agent) => {
        setActiveAgent(agent);
        setIsModalOpen(false);
        // Add a system-like message
        const systemMsg: Message = {
            id: Date.now().toString(),
            sender: 'agent',
            text: `Hi! ${agent.name} here. How can I help you?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, systemMsg]);
    };

    return (
        <div className="relative flex flex-col h-full w-full bg-white dark:bg-[#0f1623] shadow-xl">
            {/* Header */}
            <nav className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-[#0f1623]/95 backdrop-blur-md border-b border-gray-100 dark:border-white/5 shadow-sm">
                <button
                    onClick={() => navigate(-1)}
                    className="flex size-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-white/10 transition-colors text-slate-900 dark:text-white"
                >
                    <Icon name="arrow_back" />
                </button>
                <button onClick={() => setIsModalOpen(true)} className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity">
                    <div className="flex items-center gap-1">
                        <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{activeAgent.name}</h1>
                        <Icon name="expand_more" className="text-[16px] text-slate-500" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{activeAgent.category} • {activeAgent.provider}</span>
                </button>
                <button className="flex size-10 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-white/10 transition-colors text-slate-900 dark:text-white">
                    <Icon name="more_vert" />
                </button>
            </nav>

            {/* Chat Messages */}
            <main
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-6 hide-scrollbar pb-32"
            >
                <div className="flex justify-center w-full my-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-slate-500 dark:text-slate-400 text-xs font-semibold">Today</span>
                </div>

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-end gap-3 group animate-in fade-in duration-300 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                    >
                        {msg.sender === 'agent' && (
                            <div className="size-8 rounded-[10px] bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/10 shrink-0 overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm">
                                <div
                                    className="bg-center bg-no-repeat bg-cover w-full h-full"
                                    style={{ backgroundImage: `url("${activeAgent.image}")` }}
                                />
                            </div>
                        )}
                        <div className={`flex flex-col gap-1 max-w-[75%] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                            <div
                                className={`p-4 rounded-[24px] shadow-sm border ${msg.sender === 'user'
                                    ? 'rounded-br-none bg-primary text-white border-transparent shadow-md shadow-primary/20'
                                    : 'rounded-tl-none bg-gray-100 dark:bg-gray-800 text-slate-800 dark:text-slate-100 border-gray-50 dark:border-white/5'
                                    }`}
                            >
                                <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            <div className={`flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ${msg.sender === 'user' ? 'mr-2' : 'ml-2'}`}>
                                <span className="text-[11px] text-slate-400 font-medium">{msg.timestamp}</span>
                                {msg.sender === 'user' && <Icon name="done_all" className="text-[14px] text-primary" />}
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Footer Area */}
            <div className="fixed bottom-0 left-0 w-full z-40 bg-white/95 dark:bg-[#0f1623]/95 border-t border-gray-100 dark:border-white/5 backdrop-blur-xl transition-all">


                <div className="p-4 pb-4 pt-4">
                    <div className="flex items-end gap-3 max-w-3xl mx-auto">
                        <button className="flex size-12 items-center justify-center rounded-full text-slate-400 hover:text-primary hover:bg-primary/10 transition-all shrink-0">
                            <Icon name="attach_file" className="text-[28px] rotate-45" />
                        </button>
                        <div className="relative flex-1 bg-gray-100 dark:bg-gray-800 rounded-[24px] border border-transparent focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-black/20 transition-all">
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSendMessage();
                                    }
                                }}
                                className="w-full bg-transparent border-0 focus:ring-0 px-5 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 resize-none max-h-32 text-[16px] leading-6 hide-scrollbar focus:outline-none"
                                placeholder="Type a message..."
                                rows={1}
                                style={{ minHeight: '40px' }}
                            />
                        </div>
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputText.trim()}
                            className={`flex size-12 items-center justify-center rounded-full transition-all shrink-0 ${inputText.trim()
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 active:scale-95'
                                : 'bg-gray-200 dark:bg-gray-700 text-slate-400'
                                }`}
                        >
                            <Icon name="send" className="text-[24px] ml-0.5" />
                        </button>
                    </div>
                </div>
            </div>

            <AgentSwitcherModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                activeAgent={activeAgent}
                onSelectAgent={switchAgent}
            />
        </div>
    );
};

export default ChatInterface;
