import { AgentCategory } from './agent';

export interface RouteResult {
  agentId: AgentCategory;
  confidence: number; // 0 to 1
  matchedKeywords: string[];
  extractedQuery?: string;
  explanation: string;
}

export interface ProblemRequest {
  query: string;
}
