
import React, { useState } from 'react';
import RequestResetScreen from './RequestResetScreen';
import VerifyTokenScreen from './VerifyTokenScreen';
import SetNewPasswordScreen from './SetNewPasswordScreen';
import SuccessScreen from './SuccessScreen';
import { PasswordResetData, ResetStep } from './types';

interface PasswordResetFlowProps {
    initialStep?: ResetStep;
    onComplete?: () => void;
    onCancel?: () => void;
    onResetRequest?: (email: string) => Promise<void>;
    onVerifyToken?: (email: string, token: string) => Promise<boolean>;
    onResetPassword?: (email: string, token: string, newPassword: string) => Promise<boolean>;
}

export const PasswordResetFlow: React.FC<PasswordResetFlowProps> = ({
    initialStep = 'request',
    onComplete,
    onCancel,
    onResetRequest,
    onVerifyToken,
    onResetPassword
}) => {
    const [step, setStep] = useState<ResetStep>(initialStep);
    const [data, setData] = useState<PasswordResetData>({
        email: '',
        resetToken: undefined,
        newPassword: undefined
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRequestReset = async (email: string) => {
        setIsLoading(true);
        setError('');

        try {
            if (onResetRequest) {
                await onResetRequest(email);
            }
            setData({ ...data, email });
            setStep('verify');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send reset email');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyToken = async (token: string) => {
        setIsLoading(true);
        setError('');

        try {
            if (onVerifyToken) {
                const isValid = await onVerifyToken(data.email, token);
                if (!isValid) {
                    setError('Invalid or expired code');
                    return;
                }
            }
            setData({ ...data, resetToken: token });
            setStep('reset');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to verify code');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (newPassword: string) => {
        setIsLoading(true);
        setError('');

        try {
            if (onResetPassword) {
                const success = await onResetPassword(data.email, data.resetToken || '', newPassword);
                if (!success) {
                    setError('Failed to reset password');
                    return;
                }
            }
            setData({ ...data, newPassword });
            setStep('success');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to reset password');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        if (onResetRequest) {
            try {
                await onResetRequest(data.email);
            } catch (err) {
                console.error('Failed to resend code:', err);
            }
        }
    };

    const handleBack = () => {
        if (step === 'verify') {
            setStep('request');
        } else if (step === 'reset') {
            setStep('verify');
        } else if (onCancel) {
            onCancel();
        }
    };

    const handleComplete = () => {
        if (onComplete) {
            onComplete();
        }
    };

    return (
        <div className="w-full h-full min-h-screen">
            {step === 'request' && (
                <RequestResetScreen
                    onNext={handleRequestReset}
                    onBack={onCancel}
                />
            )}
            {step === 'verify' && (
                <VerifyTokenScreen
                    email={data.email}
                    onNext={handleVerifyToken}
                    onBack={handleBack}
                    onResend={handleResendCode}
                />
            )}
            {step === 'reset' && (
                <SetNewPasswordScreen
                    onNext={handleResetPassword}
                    onBack={handleBack}
                />
            )}
            {step === 'success' && (
                <SuccessScreen
                    onComplete={handleComplete}
                    autoRedirectSeconds={5}
                />
            )}
        </div>
    );
};

export default PasswordResetFlow;
