
export interface UserProfile {
    name: string;
    email: string;
    avatar: string;
    whatsapp?: string;
    telegram?: string;
    googleChat?: string;
}

export type Screen = 'profile' | 'connect' | 'verify';
