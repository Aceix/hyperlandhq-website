
export interface Product {
  id: string;
  name: string;
  description: string;
  status: 'Live' | 'Coming soon' | 'In development';
  category: string;
  tags: string[];
  details?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}