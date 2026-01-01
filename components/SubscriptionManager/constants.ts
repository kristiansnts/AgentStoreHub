
import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    features: ['Standard response time', 'Up to 100 queries/day', 'Email support']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    features: ['Fast response time', 'Unlimited queries', 'Access to advanced models']
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49.99,
    features: ['Instant processing', 'Priority 24/7 support', 'API Access & Integrations']
  }
];
