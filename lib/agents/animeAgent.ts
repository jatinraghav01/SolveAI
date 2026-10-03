import { Agent } from '@/types/agent';

export const animeAgent: Agent = {
  id: 'anime',
  name: 'Anime Finder',
  icon: '🎬',
  description: 'Find where anime is available and which audio/subtitle languages are available in India.',
  status: 'available',
  route: '/agents/anime',
  badgeText: 'Fully Operational',
  capabilities: [
    'India OTT platform availability check (Netflix, Crunchyroll, JioHotstar, Prime, YouTube)',
    'Verified Hindi audio dub availability indicator',
    'English & Japanese audio track details',
    'Subtitle language options',
    'Direct verified watch links'
  ],
  samplePrompts: [
    'Where can I watch One Piece in Hindi?',
    'Is Demon Slayer available on Netflix India?',
    'Naruto Hindi dub watch options',
    'Solo Leveling streaming platform and dub status'
  ]
};
