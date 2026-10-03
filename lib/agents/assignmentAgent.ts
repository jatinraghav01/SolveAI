import { Agent } from '@/types/agent';

export const assignmentAgent: Agent = {
  id: 'assignment',
  name: 'Assignment Assistant',
  icon: '📝',
  description: 'Understand and organize assignment questions.',
  status: 'coming_soon',
  route: '/agents/assignment',
  badgeText: 'Coming Soon',
  capabilities: [
    'Assignment prompt breakdown & rubrics analyzer',
    'Structure outline generator',
    'Reference and source citation manager',
    'Proofreading & argument clarity enhancer'
  ],
  samplePrompts: [
    'Break down this case study prompt into actionable steps',
    'Generate an outline for an essay on AI ethics',
    'Organize assignment questions by topic'
  ]
};
