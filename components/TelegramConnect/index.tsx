
import React, { useState } from 'react';
import ConnectTelegramScreen from './ConnectTelegramScreen';
import VerifyTelegramScreen from './VerifyTelegramScreen';
import { UserProfile } from './types';

type Screen = 'connect' | 'verify';

interface TelegramConnectProps {
    initialProfile?: UserProfile;
    initialScreen?: Screen;
    onConnected?: (username: string) => void;
    onClose?: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
    name: "User",
    email: "user@example.com",
    avatar: "https://via.placeholder.com/150",
    whatsapp: undefined,
    telegram: undefined,
    googleChat: undefined
};

export const TelegramConnect: React.FC<TelegramConnectProps> = ({
    initialProfile = DEFAULT_PROFILE,
    initialScreen = 'connect',
    onConnected,
    onClose
}) => {
    const [screen, setScreen] = useState<Screen>(initialScreen);
    const [user, setUser] = useState<UserProfile>(initialProfile);
    const [tempUsername, setTempUsername] = useState('');

    const handleSendCode = (username: string) => {
        setTempUsername(username);
        setScreen('verify');
    };

    const handleVerifySuccess = () => {
        setUser(prev => ({ ...prev, telegram: tempUsername }));

        if (onConnected) {
            onConnected(tempUsername);
        }
    };

    const handleBack = () => {
        if (screen === 'verify') {
            setScreen('connect');
        } else if (onClose) {
            onClose();
        }
    };

    return (
        <div className="w-full h-full bg-white dark:bg-background-dark relative flex flex-col overflow-hidden">
            {screen === 'connect' && (
                <ConnectTelegramScreen
                    onNext={handleSendCode}
                    onBack={onClose}
                />
            )}
            {screen === 'verify' && (
                <VerifyTelegramScreen
                    username={tempUsername}
                    onVerify={handleVerifySuccess}
                    onBack={handleBack}
                />
            )}
        </div>
    );
};

export default TelegramConnect;
