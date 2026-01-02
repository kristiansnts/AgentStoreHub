
import React, { useState } from 'react';
import ProfileScreen from './ProfileScreen';
import ConnectWhatsAppScreen from './ConnectWhatsAppScreen';
import VerifyOTPScreen from './VerifyOTPScreen';
import { UserProfile } from './types';

type Screen = 'profile' | 'connect' | 'verify';

interface WhatsAppConnectProps {
    initialProfile?: UserProfile;
    initialScreen?: Screen;
    onConnected?: (phone: string) => void;
    onClose?: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
    name: "User",
    email: "user@example.com",
    avatar: "https://via.placeholder.com/150",
    whatsapp: undefined,
    telegram: undefined,
    google: undefined
};

export const WhatsAppConnect: React.FC<WhatsAppConnectProps> = ({
    initialProfile = DEFAULT_PROFILE,
    initialScreen = 'profile',
    onConnected,
    onClose
}) => {
    const [screen, setScreen] = useState<Screen>(initialScreen);
    const [user, setUser] = useState<UserProfile>(initialProfile);
    const [showToast, setShowToast] = useState(false);
    const [tempPhone, setTempPhone] = useState('');

    const handleStartConnect = () => {
        setScreen('connect');
    };

    const handleSendOTP = (phone: string) => {
        setTempPhone(phone);
        setScreen('verify');
    };

    const handleVerifySuccess = () => {
        setUser(prev => ({ ...prev, whatsapp: tempPhone }));
        setShowToast(true);
        setScreen('profile');

        if (onConnected) {
            onConnected(tempPhone);
        }

        // Auto hide toast
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };

    const handleBack = () => {
        if (screen === 'verify') {
            setScreen('connect');
        } else if (screen === 'connect') {
            setScreen('profile');
        } else if (onClose) {
            onClose();
        }
    };

    return (
        <div className="w-full h-full bg-white dark:bg-background-dark relative flex flex-col overflow-hidden">
            {screen === 'profile' && (
                <ProfileScreen
                    user={user}
                    showToast={showToast}
                    onCloseToast={() => setShowToast(false)}
                    onConnect={handleStartConnect}
                    onBack={onClose}
                />
            )}
            {screen === 'connect' && (
                <ConnectWhatsAppScreen
                    onNext={handleSendOTP}
                    onBack={handleBack}
                />
            )}
            {screen === 'verify' && (
                <VerifyOTPScreen
                    phone={tempPhone}
                    onVerify={handleVerifySuccess}
                    onBack={handleBack}
                />
            )}
        </div>
    );
};

export default WhatsAppConnect;
