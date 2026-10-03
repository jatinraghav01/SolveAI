import { Agent } from '@/types/agent';

export const resumeAgent: Agent = {
  id: 'resume',
  name: 'Resume Assistant',
  icon: '📄',
  description: 'Improve resumes and professional documents.',
  status: 'coming_soon',
  route: '/agents/resume',
  badgeText: 'Coming Soon',
  capabilities: [
    'ATS keyword optimization',
    'Quantifiable action bullet rewriter',
    'Job description match scoring',
    'LinkedIn profile summary optimization'
  ],
  samplePrompts: [
    'Improve my bullet point for SDE internship experience',
    'Optimize my resume for Full Stack Developer role',
    'Write a cover letter tailored to Google Software Engineer position'
  ]
};
