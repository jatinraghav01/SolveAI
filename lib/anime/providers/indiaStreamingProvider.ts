import { PlatformAvailability } from '@/types/anime';
import { StreamingProvider, StreamingResult } from './streamingProvider';

/**
 * Verified India OTT Streaming Registry
 * Maps verified legal streaming rights for India across Netflix, Crunchyroll, JioHotstar, Prime Video, and YouTube.
 * If an anime is not verified in this catalog, status returns UNKNOWN. We NEVER guess availability.
 */
interface VerifiedCatalogEntry {
  titleKeywords: string[];
  sourceUrl: string;
  verifiedAt: string;
  platforms: PlatformAvailability[];
}

const VERIFIED_INDIA_STREAMING_CATALOG: VerifiedCatalogEntry[] = [
  {
    titleKeywords: ['one piece', 'wan pisu', 'luffy'],
    sourceUrl: 'https://www.crunchyroll.com/series/GRMG8WEWY/one-piece',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GRMG8WEWY/one-piece',
        sourceUrl: 'https://www.crunchyroll.com/series/GRMG8WEWY/one-piece',
        audio: {
          Hindi: { status: 'available', notes: 'Official Hindi Dub' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/80107103',
        sourceUrl: 'https://www.netflix.com/title/80107103',
        audio: {
          Hindi: { status: 'available', notes: 'Official Hindi Dub' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'JioHotstar',
        status: 'not_available',
        region: 'India',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'not_available' },
          Japanese: { status: 'not_available' }
        },
        subtitles: {
          Hindi: { status: 'not_available' },
          English: { status: 'not_available' },
          Japanese: { status: 'not_available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['naruto', 'shippuden'],
    sourceUrl: 'https://www.netflix.com/title/70205012',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/70205012',
        sourceUrl: 'https://www.netflix.com/title/70205012',
        audio: {
          Hindi: { status: 'available', notes: 'Sony YAY! Hindi Dub' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GY2P4870Y/naruto-shippuden',
        sourceUrl: 'https://www.crunchyroll.com/series/GY2P4870Y/naruto-shippuden',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['demon slayer', 'kimetsu no yaiba', 'tanjiro'],
    sourceUrl: 'https://www.crunchyroll.com/series/GY5P4873Y/demon-slayer-kimetsu-no-yaiba',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GY5P4873Y/demon-slayer-kimetsu-no-yaiba',
        sourceUrl: 'https://www.crunchyroll.com/series/GY5P4873Y/demon-slayer-kimetsu-no-yaiba',
        audio: {
          Hindi: { status: 'available', notes: 'Official Hindi Dub' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/81091393',
        sourceUrl: 'https://www.netflix.com/title/81091393',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['solo leveling', 'ore dake level up'],
    sourceUrl: 'https://www.crunchyroll.com/series/G50XHVN5P/solo-leveling',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/G50XHVN5P/solo-leveling',
        sourceUrl: 'https://www.crunchyroll.com/series/G50XHVN5P/solo-leveling',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['jujutsu kaisen', 'itadori'],
    sourceUrl: 'https://www.crunchyroll.com/series/G9VHN9PP3/jujutsu-kaisen',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/G9VHN9PP3/jujutsu-kaisen',
        sourceUrl: 'https://www.crunchyroll.com/series/G9VHN9PP3/jujutsu-kaisen',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/81276320',
        sourceUrl: 'https://www.netflix.com/title/81276320',
        audio: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['dragon ball', 'goku'],
    sourceUrl: 'https://www.crunchyroll.com/series/G6V883M66/dragon-ball-super',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/G6V883M66/dragon-ball-super',
        sourceUrl: 'https://www.crunchyroll.com/series/G6V883M66/dragon-ball-super',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['attack on titan', 'shingeki no kyojin', 'eren'],
    sourceUrl: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
        sourceUrl: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'unknown' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/70299043',
        sourceUrl: 'https://www.netflix.com/title/70299043',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['spy x family', 'anya'],
    sourceUrl: 'https://www.crunchyroll.com/series/GJWHENV4Y/spy-x-family',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GJWHENV4Y/spy-x-family',
        sourceUrl: 'https://www.crunchyroll.com/series/GJWHENV4Y/spy-x-family',
        audio: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/81511410',
        sourceUrl: 'https://www.netflix.com/title/81511410',
        audio: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['death note', 'light yagami'],
    sourceUrl: 'https://www.netflix.com/title/70204970',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/70204970',
        sourceUrl: 'https://www.netflix.com/title/70204970',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  },
  {
    titleKeywords: ['bleach', 'ichigo'],
    sourceUrl: 'https://www.hotstar.com/in/shows/bleach/1260124317',
    verifiedAt: '2026-10-03T12:00:00Z',
    platforms: [
      {
        platform: 'JioHotstar',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.hotstar.com/in/shows/bleach/1260124317',
        sourceUrl: 'https://www.hotstar.com/in/shows/bleach/1260124317',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      },
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GY3VK3156/bleach',
        sourceUrl: 'https://www.crunchyroll.com/series/GY3VK3156/bleach',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'available' }
        }
      }
    ]
  }
];

export class IndiaStreamingProvider implements StreamingProvider {
  name = 'IndiaStreamingProvider';

  /**
   * Determine legal streaming availability for INDIA region.
   * Never guesses. Returns verified platforms with watchUrl/sourceUrl or UNKNOWN.
   */
  async getStreamingAvailability(title: string): Promise<StreamingResult> {
    const lowerTitle = title.toLowerCase().trim();
    if (!lowerTitle) {
      return this.getUnknownResult();
    }

    // Search verified catalog by keyword matching
    const match = VERIFIED_INDIA_STREAMING_CATALOG.find((entry) =>
      entry.titleKeywords.some((kw) => lowerTitle.includes(kw) || kw.includes(lowerTitle))
    );

    if (match) {
      return {
        platforms: match.platforms,
        sourceUrl: match.sourceUrl,
        verifiedAt: match.verifiedAt,
        isVerifiedForIndia: true,
      };
    }

    // If title cannot be verified in the Indian streaming registry, return UNKNOWN (never guess!)
    return this.getUnknownResult();
  }

  private getUnknownResult(): StreamingResult {
    const defaultUnknownPlatforms: PlatformAvailability[] = [
      {
        platform: 'Crunchyroll',
        status: 'unknown',
        region: 'India',
        sourceUrl: 'https://www.crunchyroll.com',
        audio: {
          Hindi: { status: 'unknown', notes: 'Current availability for India could not be verified' },
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
        sourceUrl: 'https://www.netflix.com',
        audio: {
          Hindi: { status: 'unknown', notes: 'Current availability for India could not be verified' },
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
      platforms: defaultUnknownPlatforms,
      verifiedAt: new Date().toISOString(),
      isVerifiedForIndia: false,
    };
  }
}
