import { Anime, PlatformAvailability } from '@/types/anime';
import { AnimeProvider } from './animeProvider';

const JIKAN_BASE_URL = process.env.JIKAN_API_BASE_URL || 'https://api.jikan.moe/v4';

export class JikanAnimeProvider implements AnimeProvider {
  name = 'JikanAnimeProvider';

  /**
   * Search anime using the public Jikan (MyAnimeList) API v4
   * https://api.jikan.moe/v4/anime?q={query}
   */
  async searchAnime(query: string): Promise<Anime[]> {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return [];

    const url = `${JIKAN_BASE_URL}/anime?q=${encodeURIComponent(trimmedQuery)}&limit=10`;

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'SolveAI-Hub/1.0',
        },
        // Cache for 1 hour in Next.js fetch cache
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        throw new Error(`Jikan API responded with status ${response.status}`);
      }

      const json = await response.json();
      if (!json || !Array.isArray(json.data)) {
        return [];
      }

      return json.data.map((item: any) => this.mapJikanToAnime(item));
    } catch (error) {
      console.warn('Jikan API search error:', error);
      throw error; // Throw so AnimeService can catch and fallback
    }
  }

  /**
   * Get single anime details by Jikan / MyAnimeList ID
   */
  async getAnimeById(id: string): Promise<Anime | null> {
    if (!id) return null;

    const url = `${JIKAN_BASE_URL}/anime/${encodeURIComponent(id)}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'SolveAI-Hub/1.0',
        },
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        return null;
      }

      const json = await response.json();
      if (!json || !json.data) {
        return null;
      }

      return this.mapJikanToAnime(json.data);
    } catch (error) {
      console.warn('Jikan API getAnimeById error:', error);
      return null;
    }
  }

  /**
   * Map Jikan API raw JSON response object to SolveAI Anime schema
   */
  private mapJikanToAnime(item: any): Anime {
    const malId = item.mal_id ? String(item.mal_id) : 'unknown';
    const title = item.title_english || item.title || 'Untitled Anime';
    const japaneseTitle = item.title_japanese || undefined;
    
    const poster = 
      item.images?.jpg?.large_image_url ||
      item.images?.jpg?.image_url ||
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80';

    const genres = Array.isArray(item.genres) && item.genres.length > 0
      ? item.genres.map((g: any) => g.name).filter(Boolean)
      : ['Anime'];

    const status = item.status || 'Finished Airing';
    
    const releaseInfo = item.year 
      ? `${item.year} • ${item.type || 'TV'}`
      : item.type || 'TV Series';

    const episodes = item.episodes ? `${item.episodes} Episodes` : (item.type || 'TV Series');
    const rating = item.score ? `${item.score} / 10` : (item.rating || 'N/A');
    const synopsis = item.synopsis || 'No synopsis description available.';

    // Default platform availability (status = unknown, as streaming availability is unverified for raw API items)
    const defaultPlatforms: PlatformAvailability[] = [
      {
        platform: 'Crunchyroll',
        status: 'unknown',
        region: 'India',
        audio: {
          Hindi: { status: 'unknown', notes: 'Current availability could not be verified' },
          English: { status: 'unknown' },
          Japanese: { status: 'unknown' }
        },
        subtitles: {
          Hindi: { status: 'unknown' },
          English: { status: 'unknown' },
          Japanese: { status: 'unknown' }
        }
      },
      {
        platform: 'Netflix',
        status: 'unknown',
        region: 'India',
        audio: {
          Hindi: { status: 'unknown', notes: 'Current availability could not be verified' },
          English: { status: 'unknown' },
          Japanese: { status: 'unknown' }
        },
        subtitles: {
          Hindi: { status: 'unknown' },
          English: { status: 'unknown' },
          Japanese: { status: 'unknown' }
        }
      }
    ];

    return {
      id: `jikan-${malId}`,
      title,
      japaneseTitle,
      poster,
      genres,
      status,
      releaseInfo,
      episodes,
      rating,
      synopsis,
      verifiedAt: 'Real-time MyAnimeList Data (Jikan API)',
      platforms: defaultPlatforms
    };
  }
}
