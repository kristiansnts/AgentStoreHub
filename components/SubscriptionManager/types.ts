
export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export type NavItem = 'Home' | 'Categories' | 'Favorites' | 'Profile';
