
export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  whatsapp?: string;
  telegram?: string;
  google?: string;
}

export type Screen = 'profile' | 'connect-whatsapp' | 'verify-otp';
