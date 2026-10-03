import { AgentCategory } from '@/types/agent';
import { RouteResult } from '@/types/router';

interface KeywordPattern {
  agentId: AgentCategory;
  keywords: string[];
  patterns: RegExp[];
}

const ROUTER_PATTERNS: KeywordPattern[] = [
  {
    agentId: 'anime',
    keywords: [
      'anime', 'watch', 'dub', 'sub', 'hindi', 'crunchyroll', 'naruto', 
      'one piece', 'demon slayer', 'jujutsu', 'solo leveling', 'dragon ball', 
      'bleach', 'attack on titan', 'death note', 'spy family', 'episodes', 
      'ott', 'jiohotstar', 'streaming', 'hindi audio', 'hindi dub'
    ],
    patterns: [
      /where (can|to) (watch|stream|find)/i,
      /anime/i,
      /hindi (dub|audio|sub)/i,
      /available on (netflix|crunchyroll|prime|hotstar)/i,
      /watch .* in hindi/i,
    ]
  },
  {
    agentId: 'study',
    keywords: [
      'exam', 'study', 'dbms', 'syllabus', 'pyq', 'notes', 'calculus', 
      'concept', 'theory', 'lecture', 'revision', 'university', 'subject', 'algorithm'
    ],
    patterns: [
      /prepare for .* (exam|test|quiz)/i,
      /explain .* in (dbms|math|physics|cs)/i,
      /study plan/i,
      /syllabus/i
    ]
  },
  {
    agentId: 'coding',
    keywords: [
      'code', 'python', 'javascript', 'typescript', 'react', 'error', 'bug', 
      'syntax', 'function', 'class', 'exception', 'stacktrace', 'compiler', 
      'terminal', 'debug', 'git', 'api'
    ],
    patterns: [
      /(fix|debug) my .* (code|error|bug)/i,
      /python error/i,
      /how to solve .* error/i,
      /typeerror|referenceerror|syntaxerror/i
    ]
  },
  {
    agentId: 'assignment',
    keywords: [
      'assignment', 'homework', 'question', 'essay', 'thesis', 'submission', 
      'case study', 'problem set', 'worksheet'
    ],
    patterns: [
      /understand .* assignment/i,
      /help with .* homework/i,
      /solve assignment/i
    ]
  },
  {
    agentId: 'resume',
    keywords: [
      'resume', 'cv', 'portfolio', 'linkedin', 'career', 'job', 'interview', 
      'cover letter', 'experience', 'bullet points'
    ],
    patterns: [
      /improve my resume/i,
      /review my (cv|resume)/i,
      /resume for .* role/i
    ]
  },
  {
    agentId: 'product',
    keywords: [
      'buy', 'laptop', 'phone', 'product', 'compare', 'best under', 'price', 
      'specs', 'review', 'recommendation', 'amazon'
    ],
    patterns: [
      /compare .* and .*/i,
      /best .* under/i,
      /which .* should i buy/i
    ]
  }
];

/**
 * Extracts clean anime title from common query structures
 * e.g., "Where can I watch One Piece in Hindi?" -> "One Piece"
 */
function extractAnimeQuery(rawQuery: string): string {
  let cleaned = rawQuery.trim();
  
  // Remove common prefix questions
  cleaned = cleaned.replace(/^(where (can|to|do) i (watch|stream|find)|is|how to watch|find|search for|tell me about)\s+/i, '');
  
  // Remove common suffix phrases
  cleaned = cleaned.replace(/\s+(in hindi|in english|in japanese|hindi dub|english dub|on netflix|on crunchyroll|on hotstar|online|episodes|streaming|full episodes|\?)+$/gi, '');
  cleaned = cleaned.replace(/\?$/, '').trim();

  return cleaned || rawQuery;
}

/**
 * Route a problem query to the most suitable agent.
 * Built with a modular keyword & pattern engine; ready to swap with LLM route handler.
 */
export function routeProblem(query: string): RouteResult {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) {
    return {
      agentId: 'general',
      confidence: 0,
      matchedKeywords: [],
      explanation: 'Empty query submitted.'
    };
  }

  let bestMatch: AgentCategory = 'general';
  let highestScore = 0;
  let matchedKeywords: string[] = [];

  for (const item of ROUTER_PATTERNS) {
    let score = 0;
    const currentMatched: string[] = [];

    // Check regex pattern match (high weight)
    for (const pattern of item.patterns) {
      if (pattern.test(lowerQuery)) {
        score += 5;
        currentMatched.push(pattern.source);
      }
    }

    // Check individual keywords
    for (const kw of item.keywords) {
      if (lowerQuery.includes(kw)) {
        score += 2;
        currentMatched.push(kw);
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item.agentId;
      matchedKeywords = currentMatched;
    }
  }

  // Calculate normalized confidence (cap at 0.98 for rule engine)
  const confidence = Math.min(0.98, Math.max(0.4, highestScore * 0.15));

  let extractedQuery: string | undefined = undefined;
  if (bestMatch === 'anime') {
    extractedQuery = extractAnimeQuery(query);
  }

  const agentNames: Record<AgentCategory, string> = {
    anime: 'Anime Finder Agent',
    study: 'Study Assistant Agent',
    coding: 'Coding Assistant Agent',
    assignment: 'Assignment Assistant Agent',
    resume: 'Resume Assistant Agent',
    product: 'Product Finder Agent',
    general: 'General Assistant Agent'
  };

  return {
    agentId: bestMatch,
    confidence,
    matchedKeywords,
    extractedQuery,
    explanation: `Problem analyzed: Routed to ${agentNames[bestMatch]} based on intent matching.`
  };
}
