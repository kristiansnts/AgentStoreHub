import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChatInterface from '../components/Chat/ChatInterface';
import { MOCK_AGENTS } from '../constants';

const Chat: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const agent = MOCK_AGENTS.find(a => a.id === id);

    useEffect(() => {
        if (!agent) {
            navigate('/home');
        }
    }, [agent, navigate]);

    if (!agent) return null;

    return (
        <div className="h-screen w-full bg-white dark:bg-[#0f1623]">
            <ChatInterface initialAgent={agent} />
        </div>
    );
};

export default Chat;
