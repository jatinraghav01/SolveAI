import { Agent } from '@/types/agent';

export const productAgent: Agent = {
  id: 'product',
  name: 'Product Finder',
  icon: '🛒',
  description: 'Compare products and find relevant options.',
  status: 'coming_soon',
  route: '/agents/product',
  badgeText: 'Coming Soon',
  capabilities: [
    'Tech gadget spec-by-spec comparison',
    'Budget tier filtered search',
    'Real user review summarization',
    'Price trend tracker & deal validator'
  ],
  samplePrompts: [
    'Compare MacBook Air M2 vs Dell XPS 13 for programming',
    'Best wireless noise-canceling headphones under ₹10,000',
    'Find gaming laptops with RTX 4060 under $1000'
  ]
};
