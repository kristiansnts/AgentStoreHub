
export interface Agent {
  id: string;
  name: string;
  provider: string;
  rating: number;
  reviews: string;
  category: string;
  price?: string;
  isFree?: boolean;
  isFeatured?: boolean;
  image: string;
  description: string;
}

export interface AIAgent {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  rating?: number;
  reviewsCount?: string;
  price?: string;
  status?: 'Active' | 'Free' | 'Pending';
  renewalDate?: string;
}



export type FlowStep = 'free-confirm' | 'activate-agent' | 'payment-confirm' | 'success';

export interface SubscriptionData {
  planName: string;
  price: number;
  isFree: boolean;
  agentName: string;
  phoneNumber?: string;
  platform?: 'WhatsApp' | 'Telegram' | 'G-Chat';
}
