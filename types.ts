import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CoverageArea {
  name: string;
  zip: string;
  type: string;
}