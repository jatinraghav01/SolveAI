import { Agent, AgentCategory } from '@/types/agent';
import { animeAgent } from './animeAgent';
import { studyAgent } from './studyAgent';
import { codingAgent } from './codingAgent';
import { assignmentAgent } from './assignmentAgent';
import { resumeAgent } from './resumeAgent';
import { productAgent } from './productAgent';

export const ALL_AGENTS: Agent[] = [
  animeAgent,
  studyAgent,
  codingAgent,
  assignmentAgent,
  resumeAgent,
  productAgent,
];

export function getAgentById(id: AgentCategory): Agent | undefined {
  return ALL_AGENTS.find((agent) => agent.id === id);
}

export function getAvailableAgents(): Agent[] {
  return ALL_AGENTS.filter((agent) => agent.status === 'available');
}
