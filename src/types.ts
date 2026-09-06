export interface NavLink {
  name: string;
  href: string;
}

export interface EnterpriseLogo {
  name: string;
  tagline: string;
  symbol: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface WorkflowPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  mockupTag: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  growth: string;
}

export interface UseCaseItem {
  id: string;
  role: string;
  iconName: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  stat: {
    value: string;
    label: string;
  };
  quote: {
    text: string;
    author: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
  highlightMetric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  ctaText: string;
  features: string[];
  limitations?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
