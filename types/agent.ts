export type AgentCategory = 
  | 'anime'
  | 'study'
  | 'coding'
  | 'assignment'
  | 'resume'
  | 'product'
  | 'general';

export type AgentStatus = 'available' | 'coming_soon' | 'beta';

export interface Agent {
  id: AgentCategory;
  name: string;
  icon: string;
  description: string;
  status: AgentStatus;
  route: string;
  badgeText?: string;
  capabilities: string[];
  samplePrompts: string[];
}
