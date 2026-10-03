import { Anime, AnimeFilterOptions } from '@/types/anime';
import { AnimeProvider } from './providers/animeProvider';
import { MockAnimeProvider } from './providers/mockAnimeProvider';
import { JikanAnimeProvider } from './providers/jikanAnimeProvider';
import { IndiaStreamingProvider } from './providers/indiaStreamingProvider';
import { StreamingProvider } from './providers/streamingProvider';
import { ExplicitLanguageProvider } from './providers/explicitLanguageProvider';
import { LanguageVerificationProvider } from './providers/languageVerificationProvider';

class AnimeService {
  private primaryProvider: AnimeProvider;
  private fallbackProvider: AnimeProvider;
  private streamingProvider: StreamingProvider;
  private languageProvider: LanguageVerificationProvider;

  constructor(
    primaryProvider?: AnimeProvider,
    fallbackProvider?: AnimeProvider,
    streamingProvider?: StreamingProvider,
    languageProvider?: LanguageVerificationProvider
  ) {
    this.primaryProvider = primaryProvider || new JikanAnimeProvider();
    this.fallbackProvider = fallbackProvider || new MockAnimeProvider();
    this.streamingProvider = streamingProvider || new IndiaStreamingProvider();
    this.languageProvider = languageProvider || new ExplicitLanguageProvider();
  }

  public setPrimaryProvider(provider: AnimeProvider) {
    this.primaryProvider = provider;
  }

  public setFallbackProvider(provider: AnimeProvider) {
    this.fallbackProvider = provider;
  }

  public setStreamingProvider(provider: StreamingProvider) {
    this.streamingProvider = provider;
  }

  public setLanguageProvider(provider: LanguageVerificationProvider) {
    this.languageProvider = provider;
  }

  public async searchAnime(query: string, filters?: AnimeFilterOptions): Promise<Anime[]> {
    if (!query || !query.trim()) {
      return [];
    }

    let results: Anime[] = [];

    // 1. Try Primary Real Metadata Provider (Jikan API)
    try {
      results = await this.primaryProvider.searchAnime(query);
    } catch (error) {
      console.warn(`[AnimeService] ${this.primaryProvider.name} failed, falling back to ${this.fallbackProvider.name}:`, error);
      results = [];
    }

    // 2. If Primary Provider returns empty or fails, use Fallback Provider (Mock DB)
    if (!results || results.length === 0) {
      results = await this.fallbackProvider.searchAnime(query);
    } else {
      // 3. Attach India legal streaming availability & explicit audio language dub tracks
      results = await this.attachStreamingAvailability(results, query);
    }

    // 4. Apply platform, audio, and regional filters
    if (!filters) {
      return results;
    }

    return this.applyFilters(results, filters);
  }

  public async getAnimeById(id: string): Promise<Anime | null> {
    const primaryResult = await this.primaryProvider.getAnimeById(id);
    if (primaryResult) {
      const streaming = await this.streamingProvider.getStreamingAvailability(primaryResult.title);
      const updatedPlatforms = await Promise.all(
        streaming.platforms.map(async (p) => {
          const lang = await this.languageProvider.verifyLanguages(primaryResult.title, p.platform);
          return {
            ...p,
            audio: lang.audio,
            subtitles: lang.subtitles,
            sourceUrl: lang.sourceUrl || p.sourceUrl,
          };
        })
      );
      return {
        ...primaryResult,
        platforms: updatedPlatforms,
      };
    }
    return this.fallbackProvider.getAnimeById(id);
  }

  /**
   * Attaches verified India streaming availability and explicit audio/subtitle dub track verification.
   */
  private async attachStreamingAvailability(animeList: Anime[], query: string): Promise<Anime[]> {
    return Promise.all(
      animeList.map(async (item) => {
        const streamingInfo = await this.streamingProvider.getStreamingAvailability(item.title || query);

        // Verify audio and subtitle tracks for each platform card explicitly
        const updatedPlatforms = await Promise.all(
          streamingInfo.platforms.map(async (p) => {
            const langResult = await this.languageProvider.verifyLanguages(item.title || query, p.platform);
            return {
              ...p,
              audio: langResult.audio,
              subtitles: langResult.subtitles,
              sourceUrl: langResult.sourceUrl || p.sourceUrl,
            };
          })
        );

        return {
          ...item,
          platforms: updatedPlatforms,
          verifiedAt: streamingInfo.verifiedAt
            ? `Verified ${new Date(streamingInfo.verifiedAt).toLocaleDateString()}`
            : item.verifiedAt,
        };
      })
    );
  }

  /**
   * Applies platform, audio, and availability filters to anime search results.
   */
  public applyFilters(animeList: Anime[], filters: AnimeFilterOptions): Anime[] {
    return animeList.map((anime) => {
      let filteredPlatforms = [...anime.platforms];

      // Filter by platform
      if (filters.platform && filters.platform !== 'all') {
        filteredPlatforms = filteredPlatforms.filter(
          (p) => p.platform.toLowerCase() === filters.platform?.toLowerCase()
        );
      }

      // Filter by audio language
      if (filters.audioLanguage && filters.audioLanguage !== 'all') {
        const langKey = filters.audioLanguage;
        filteredPlatforms = filteredPlatforms.filter(
          (p) => p.audio[langKey] && p.audio[langKey].status === 'available'
        );
      }

      // Filter by India availability
      if (filters.indiaAvailabilityOnly) {
        filteredPlatforms = filteredPlatforms.filter(
          (p) => p.status === 'available'
        );
      }

      return {
        ...anime,
        platforms: filteredPlatforms,
      };
    }).filter(anime => anime.platforms.length > 0 || !filters.indiaAvailabilityOnly);
  }
}

export const animeService = new AnimeService();
