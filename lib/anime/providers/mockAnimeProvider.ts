import { Anime } from '@/types/anime';
import { AnimeProvider } from './animeProvider';

const MOCK_ANIME_DATABASE: Anime[] = [
  {
    id: 'one-piece',
    title: 'One Piece',
    japaneseTitle: 'ワンピース (Wan Pīsu)',
    poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Adventure', 'Fantasy', 'Shounen'],
    status: 'Currently Airing',
    releaseInfo: '1999 • TV Series • 1100+ Episodes',
    episodes: '1100+',
    rating: '8.7 / 10',
    synopsis: 'Monkey D. Luffy explores the Grand Line with his pirate crew in search of the ultimate treasure known as One Piece in order to become the next Pirate King.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/80107103',
        audio: {
          Hindi: { status: 'available', notes: 'Official Hindi Dub Available' },
          English: { status: 'available', notes: 'English Audio Track' },
          Japanese: { status: 'available', notes: 'Original Audio' }
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
        watchUrl: 'https://www.crunchyroll.com/series/GRMG8WEWY/one-piece',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Dubbed Episodes 1+' },
          English: { status: 'available' },
          Japanese: { status: 'available', notes: 'Simulcast Weekly' }
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
      },
      {
        platform: 'Prime Video',
        status: 'unknown',
        region: 'India',
        audio: {
          Hindi: { status: 'unknown', notes: 'Licensing status unconfirmed' },
          English: { status: 'unknown' },
          Japanese: { status: 'unknown' }
        },
        subtitles: {
          Hindi: { status: 'unknown' },
          English: { status: 'unknown' },
          Japanese: { status: 'unknown' }
        }
      }
    ]
  },
  {
    id: 'naruto',
    title: 'Naruto / Naruto Shippuden',
    japaneseTitle: 'ナルト - NARUTO -',
    poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Martial Arts', 'Shounen', 'Ninja'],
    status: 'Finished Airing',
    releaseInfo: '2002 - 2017 • 720 Episodes Total',
    episodes: 720,
    rating: '8.6 / 10',
    synopsis: 'Naruto Uzumaki, a mischievous young ninja, struggles for recognition while dreaming of becoming the Hokage, the leader and strongest ninja of his village.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/70205012',
        audio: {
          Hindi: { status: 'available', notes: 'Full Sony YAY! Hindi Dub' },
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
        audio: {
          Hindi: { status: 'available', notes: 'Select Seasons Hindi Audio' },
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
        platform: 'YouTube',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.youtube.com/@MuseAsia',
        audio: {
          Hindi: { status: 'not_available', notes: 'Subbed Only' },
          English: { status: 'not_available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'unknown' },
          English: { status: 'available' },
          Japanese: { status: 'not_available' }
        }
      }
    ]
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    japaneseTitle: '鬼滅の刃 (Kimetsu no Yaiba)',
    poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Demons', 'Historical', 'Supernatural'],
    status: 'Finished Season 4',
    releaseInfo: '2019 - Present • 63 Episodes',
    episodes: 63,
    rating: '8.9 / 10',
    synopsis: 'Tanjiro Kamado sets out to become a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GY5P4873Y/demon-slayer-kimetsu-no-yaiba',
        audio: {
          Hindi: { status: 'available', notes: 'Complete Hindi Dub (All Seasons)' },
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
        audio: {
          Hindi: { status: 'available', notes: 'Seasons 1-3 Hindi Dubbed' },
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
    id: 'solo-leveling',
    title: 'Solo Leveling',
    japaneseTitle: '俺だけレベルアップな件 (Ore dake Level Up na Ken)',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Fantasy', 'System', 'Monsters'],
    status: 'Season 1 Complete',
    releaseInfo: '2024 • 12 Episodes',
    episodes: 12,
    rating: '8.5 / 10',
    synopsis: 'In a world where hunters possess magical abilities to battle deadly monsters, weak hunter Sung Jinwoo receives a re-awakening system granting him infinite growth.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/G50XHVN5P/solo-leveling',
        audio: {
          Hindi: { status: 'available', notes: 'Exclusive Hindi Dub' },
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
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    japaneseTitle: '呪術廻戦',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Supernatural', 'School', 'Dark Fantasy'],
    status: 'Finished Season 2',
    releaseInfo: '2020 - Present • 47 Episodes',
    episodes: 47,
    rating: '8.8 / 10',
    synopsis: 'Yuji Itadori swallows a cursed talisman—the finger of Ryomen Sukuna—and becomes possessed. He joins Jujutsu High to exorcise curses.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/G9VHN9PP3/jujutsu-kaisen',
        audio: {
          Hindi: { status: 'available', notes: 'Seasons 1 & 2 Hindi Audio' },
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
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio Track' },
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
    id: 'dragon-ball-z',
    title: 'Dragon Ball Z / Dragon Ball Super',
    japaneseTitle: 'ドラゴンボールZ',
    poster: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Martial Arts', 'Sci-Fi', 'Super Power'],
    status: 'Finished Airing',
    releaseInfo: '1989 - 2018 • 400+ Episodes',
    episodes: '400+',
    rating: '8.7 / 10',
    synopsis: 'Goku defends Earth against powerful alien warriors alongside the Z-Fighters.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/G6V883M66/dragon-ball-super',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Dubbed Super & Z' },
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
    id: 'attack-on-titan',
    title: 'Attack on Titan (Shingeki no Kyojin)',
    japaneseTitle: '進撃の巨人',
    poster: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Military', 'Mystery', 'Post-Apocalyptic'],
    status: 'Finished Airing',
    releaseInfo: '2013 - 2023 • 89 Episodes',
    episodes: 89,
    rating: '9.1 / 10',
    synopsis: 'After his hometown is destroyed and his mother is killed, Eren Jaeger vows to cleanse the earth of the giant humanoid Titans.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
        audio: {
          Hindi: { status: 'not_available', notes: 'No Official Hindi Dub yet' },
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
    id: 'spy-x-family',
    title: 'Spy x Family',
    japaneseTitle: 'スパイファミリー',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    genres: ['Action', 'Comedy', 'Spy', 'Slice of Life'],
    status: 'Finished Season 2',
    releaseInfo: '2022 - Present • 37 Episodes',
    episodes: 37,
    rating: '8.6 / 10',
    synopsis: 'A spy on an undercover mission marries a assassin and adopts a telepathic girl, with none of them knowing each other’s true identities.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Crunchyroll',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.crunchyroll.com/series/GJWHENV4Y/spy-x-family',
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio Track' },
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
        audio: {
          Hindi: { status: 'available', notes: 'Hindi Audio Available' },
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
        platform: 'YouTube',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.youtube.com/@MuseAsia',
        audio: {
          Hindi: { status: 'not_available' },
          English: { status: 'not_available' },
          Japanese: { status: 'available' }
        },
        subtitles: {
          Hindi: { status: 'not_available' },
          English: { status: 'available' },
          Japanese: { status: 'not_available' }
        }
      }
    ]
  },
  {
    id: 'death-note',
    title: 'Death Note',
    japaneseTitle: 'デスノート',
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    genres: ['Mystery', 'Psychological', 'Supernatural', 'Thriller'],
    status: 'Finished Airing',
    releaseInfo: '2006 - 2007 • 37 Episodes',
    episodes: 37,
    rating: '9.0 / 10',
    synopsis: 'A high school student discovers a supernatural notebook that grants its user the ability to kill anyone whose name and face they know.',
    verifiedAt: 'Updated Today',
    platforms: [
      {
        platform: 'Netflix',
        status: 'available',
        region: 'India',
        watchUrl: 'https://www.netflix.com/title/70204970',
        audio: {
          Hindi: { status: 'not_available', notes: 'No official Hindi dub released' },
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

export class MockAnimeProvider implements AnimeProvider {
  name = 'MockAnimeProvider';

  async searchAnime(query: string): Promise<Anime[]> {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    // Filter matched anime in local mock DB
    const results = MOCK_ANIME_DATABASE.filter(anime => {
      const titleMatch = anime.title.toLowerCase().includes(trimmed);
      const japMatch = anime.japaneseTitle ? anime.japaneseTitle.toLowerCase().includes(trimmed) : false;
      const genreMatch = anime.genres.some(g => g.toLowerCase().includes(trimmed));
      return titleMatch || japMatch || genreMatch;
    });

    if (results.length > 0) {
      return results;
    }

    // If query is an anime title that is not explicitly in our curated mock DB, 
    // strictly return a dynamic fallback object where availability status is 'unknown' 
    // to uphold the "Never invent availability / Unable to verify" principle!
    return [
      {
        id: trimmed.replace(/[^a-z0-9]/gi, '-'),
        title: query.charAt(0).toUpperCase() + query.slice(1),
        japaneseTitle: 'Unverified / Custom Search',
        poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
        genres: ['Anime', 'Animation'],
        status: 'Information Pending',
        releaseInfo: 'TV Series',
        synopsis: `Details for "${query}" are loaded. Streaming licensing status for India could not be automatically confirmed with 100% confidence.`,
        verifiedAt: 'Unable to verify live OTT rights',
        platforms: [
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
        ]
      }
    ];
  }

  async getAnimeById(id: string): Promise<Anime | null> {
    const found = MOCK_ANIME_DATABASE.find(a => a.id === id);
    return found || null;
  }
}
