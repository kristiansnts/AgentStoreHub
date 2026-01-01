
import React, { useState, useEffect, useCallback } from 'react';
import { SetupStep, Provider, LogEntry, AppState } from './types';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Step1_Provider from './Step1_Provider';
import Step2_Phone from './Step2_Phone';
import Step2_ScanQR from './Step2_ScanQR';
import Step3_OTP from './Step3_OTP';
import Step4_Webhook from './Step4_Webhook';
import Step5_Verify from './Step5_Verify';
import Notification from './Notification';

const INITIAL_LOGS: LogEntry[] = [
    { id: '1', message: 'Resolving DNS...', timestamp: '10:41:59 AM', status: 'info', icon: 'dns' },
];

interface WhatsAppSetupProps {
    onComplete?: (data: { provider: Provider; phoneNumber?: string; webhookUrl?: string }) => void;
    onClose?: () => void;
}

export const WhatsAppSetup: React.FC<WhatsAppSetupProps> = ({ onComplete, onClose }) => {
    const [state, setState] = useState<AppState>({
        step: 1,
        provider: 'creator',
        phoneNumber: '',
        otp: '',
        webhookUrl: '',
        isVerifying: false,
        isComplete: false,
        logs: INITIAL_LOGS,
    });

    // Creator: Provider (1) -> Phone (2) -> OTP (3) -> Finish
    // AgentStore: Provider (1) -> Scan QR (2) -> Webhook (3) -> Verify (4)
    const TOTAL_STEPS = state.provider === 'creator' ? 3 : 4;

    const nextStep = () => {
        if (state.step === TOTAL_STEPS) {
            handleComplete();
            return;
        }
        setState(prev => ({ ...prev, step: (prev.step + 1 as SetupStep) }));
    };

    const prevStep = () => {
        setState(prev => ({ ...prev, step: (Math.max(prev.step - 1, 1) as SetupStep) }));
    };

    const handleComplete = () => {
        setState(prev => ({ ...prev, isComplete: true }));

        if (onComplete) {
            onComplete({
                provider: state.provider,
                phoneNumber: state.provider === 'creator' ? state.phoneNumber : undefined,
                webhookUrl: state.provider === 'agentstore' ? state.webhookUrl : undefined,
            });
        }
    };

    const startVerification = useCallback(() => {
        setState(prev => ({ ...prev, isVerifying: true }));

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                logs: [
                    { id: '2', message: 'Sending handshake payload...', timestamp: new Date().toLocaleTimeString(), status: 'pending', icon: 'arrow_upward' },
                    ...prev.logs
                ]
            }));
        }, 1500);

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                logs: [
                    { id: '3', message: 'Response received: 200 OK', timestamp: new Date().toLocaleTimeString(), status: 'success', icon: 'check_circle' },
                    ...prev.logs
                ]
            }));
        }, 3000);
    }, []);

    useEffect(() => {
        if (state.provider === 'agentstore' && state.step === 4 && !state.isVerifying) {
            startVerification();
        }
    }, [state.step, state.provider, state.isVerifying, startVerification]);

    const renderStep = () => {
        switch (state.step) {
            case 1:
                return <Step1_Provider
                    selected={state.provider}
                    onSelect={(p) => setState(prev => ({ ...prev, provider: p, step: 1 }))}
                    onContinue={nextStep}
                />;

            case 2:
                if (state.provider === 'creator') {
                    return <Step2_Phone
                        value={state.phoneNumber}
                        onChange={(v) => setState(prev => ({ ...prev, phoneNumber: v }))}
                        onNext={nextStep}
                    />;
                } else {
                    return <Step2_ScanQR
                        onNext={nextStep}
                    />;
                }

            case 3:
                if (state.provider === 'creator') {
                    return <Step3_OTP
                        phoneNumber={state.phoneNumber}
                        value={state.otp}
                        onChange={(v) => setState(prev => ({ ...prev, otp: v }))}
                        onNext={nextStep}
                    />;
                } else {
                    return <Step4_Webhook
                        url={state.webhookUrl}
                        onChange={(v) => setState(prev => ({ ...prev, webhookUrl: v }))}
                        onNext={nextStep}
                    />;
                }

            case 4:
                if (state.provider === 'agentstore') {
                    return <Step5_Verify
                        logs={state.logs}
                        onComplete={handleComplete}
                    />;
                }
                return null;

            default:
                return null;
        }
    };

    const getHeaderTitle = () => {
        if (state.step === 1) return "Connect WhatsApp";

        if (state.provider === 'creator') {
            switch (state.step) {
                case 2: return "Phone Number";
                case 3: return "Verify OTP";
                default: return "Setup";
            }
        } else {
            switch (state.step) {
                case 2: return "Scan QR Code";
                case 3: return "Configure Webhook";
                case 4: return "Verify Connection";
                default: return "Setup";
            }
        }
    };

    return (
        <div className="w-full h-full bg-white dark:bg-background-dark overflow-hidden flex flex-col relative">
            <Header
                title={getHeaderTitle()}
                onBack={state.step > 1 ? prevStep : onClose}
                showSave={state.provider === 'agentstore' && state.step === 3}
            />

            <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="px-6 py-4">
                    <ProgressBar currentStep={state.step} totalSteps={TOTAL_STEPS} />
                </div>

                <main className="pb-32">
                    {renderStep()}
                </main>
            </div>

            {state.isComplete && (
                <div className="absolute inset-x-0 bottom-6 z-50 flex justify-center px-4">
                    <Notification
                        onClose={() => {
                            setState(prev => ({ ...prev, isComplete: false, step: 1 }));
                            if (onClose) onClose();
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default WhatsAppSetup;
