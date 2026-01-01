
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

export type ViewState = 'onboarding' | 'home' | 'detail' | 'profile' | 'dashboard' | 'create-agent' | 'auth';
