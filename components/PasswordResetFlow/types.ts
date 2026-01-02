
export interface PasswordResetData {
    email: string;
    resetToken?: string;
    newPassword?: string;
}

export type ResetStep = 'request' | 'verify' | 'reset' | 'success';

export interface PasswordStrength {
    score: number; // 0-4
    label: string;
    color: string;
    suggestions: string[];
}
