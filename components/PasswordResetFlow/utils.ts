
import { PasswordStrength } from './types';

export const calculatePasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    const suggestions: string[] = [];

    if (!password) {
        return {
            score: 0,
            label: 'Too weak',
            color: 'bg-gray-300',
            suggestions: ['Enter a password']
        };
    }

    // Length check
    if (password.length >= 8) score++;
    else suggestions.push('Use at least 8 characters');

    if (password.length >= 12) score++;

    // Complexity checks
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    else suggestions.push('Include both uppercase and lowercase letters');

    if (/\d/.test(password)) score++;
    else suggestions.push('Include at least one number');

    if (/[^A-Za-z0-9]/.test(password)) score++;
    else suggestions.push('Include at least one special character');

    // Determine label and color
    let label = 'Too weak';
    let color = 'bg-red-500';

    if (score >= 4) {
        label = 'Strong';
        color = 'bg-green-500';
    } else if (score === 3) {
        label = 'Good';
        color = 'bg-yellow-500';
    } else if (score === 2) {
        label = 'Fair';
        color = 'bg-orange-500';
    }

    return { score, label, color, suggestions };
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateResetToken = (token: string): boolean => {
    // Simple validation - in production, this would verify with backend
    return token.length >= 6;
};
