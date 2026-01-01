
export type Step = 1 | 2 | 3 | 4 | 5;

export interface AgentFormData {
  // Step 1: Basics
  name: string;
  category: string;
  description: string;
  
  // Step 2: Branding
  iconUrl: string | null;
  bannerUrl: string | null;
  
  // Step 3: Capabilities & Access
  capabilities: string[];
  telegramUsername: string;
  googleChatEmail: string;
  whatsappConnected: boolean;
  
  // Step 4: Pricing
  pricingType: 'free' | 'paid';
  price: string;
  trialDuration: 'none' | '3days' | '7days' | '14days';
  termsAgreed: boolean;
}

export const INITIAL_FORM_DATA: AgentFormData = {
  name: '',
  category: '',
  description: '',
  iconUrl: null,
  bannerUrl: null,
  capabilities: ['Image Generation', 'Code Analysis', 'Translation'],
  telegramUsername: '',
  googleChatEmail: '',
  whatsappConnected: false,
  pricingType: 'paid',
  price: '9.99',
  trialDuration: '7days',
  termsAgreed: true,
};
