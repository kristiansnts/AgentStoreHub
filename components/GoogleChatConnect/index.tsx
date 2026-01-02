
import React, { useState } from 'react';
import ConnectGoogleChatScreen from './ConnectGoogleChatScreen';
import VerifyGoogleScreen from './VerifyGoogleScreen';
import { UserProfile } from './types';

type Screen = 'connect' | 'verify';

interface GoogleChatConnectProps {
    initialProfile?: UserProfile;
    initialScreen?: Screen;
    onConnected?: (email: string) => void;
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

export const GoogleChatConnect: React.FC<GoogleChatConnectProps> = ({
    initialProfile = DEFAULT_PROFILE,
    initialScreen = 'connect',
    onConnected,
    onClose
}) => {
    const [screen, setScreen] = useState<Screen>(initialScreen);
    const [user, setUser] = useState<UserProfile>(initialProfile);
    const [tempEmail, setTempEmail] = useState('');

    const handleStartAuthorize = (email: string) => {
        setTempEmail(email);
        setScreen('verify');
    };

    const handleVerifySuccess = () => {
        setUser(prev => ({ ...prev, googleChat: tempEmail }));

        if (onConnected) {
            onConnected(tempEmail);
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
                <ConnectGoogleChatScreen
                    onNext={handleStartAuthorize}
                    onBack={onClose}
                />
            )}
            {screen === 'verify' && (
                <VerifyGoogleScreen
                    email={tempEmail}
                    onVerify={handleVerifySuccess}
                    onBack={handleBack}
                />
            )}
        </div>
    );
};

export default GoogleChatConnect;
