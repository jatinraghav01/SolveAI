import { Anime } from '@/types/anime';

export interface AnimeProvider {
  name: string;
  searchAnime(query: string): Promise<Anime[]>;
  getAnimeById(id: string): Promise<Anime | null>;
}
