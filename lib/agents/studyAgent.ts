import { Agent } from '@/types/agent';

export const studyAgent: Agent = {
  id: 'study',
  name: 'Study Assistant',
  icon: '📚',
  description: 'Turn syllabus, notes and PYQs into explanations and study plans.',
  status: 'coming_soon',
  route: '/agents/study',
  badgeText: 'Coming Soon',
  capabilities: [
    'Syllabus decomposition and topic roadmap',
    'Previous Year Questions (PYQs) analyzer',
    'Concept simplification & flashcard generation',
    'DBMS, Algorithms, and Mathematics tutor'
  ],
  samplePrompts: [
    'Explain normalization in DBMS with 3NF example',
    'Create a 3-day revision roadmap for Data Structures',
    'Solve this university calculus past year question'
  ]
};
