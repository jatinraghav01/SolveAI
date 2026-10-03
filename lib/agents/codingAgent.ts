import { Agent } from '@/types/agent';

export const codingAgent: Agent = {
  id: 'coding',
  name: 'Coding Assistant',
  icon: '💻',
  description: 'Debug code and explain programming problems.',
  status: 'coming_soon',
  route: '/agents/coding',
  badgeText: 'Coming Soon',
  capabilities: [
    'Automated stack trace & exception diagnosis',
    'Code refactoring & performance optimization',
    'Python, TypeScript, C++, Java error solver',
    'API contract and schema debugger'
  ],
  samplePrompts: [
    'Fix my Python TypeError: list indices must be integers',
    'Why is my React useEffect triggering infinitely?',
    'Optimize this SQL query for high-concurrency database'
  ]
};
