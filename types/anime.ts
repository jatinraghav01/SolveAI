export type AvailabilityStatus = 'available' | 'not_available' | 'unknown';

export type PlatformName = 
  | 'Netflix' 
  | 'Crunchyroll' 
  | 'JioHotstar' 
  | 'Prime Video' 
  | 'YouTube' 
  | 'Ani-One Asia'
  | 'Muse Asia'
  | 'Other';

export interface LanguageStatus {
  status: AvailabilityStatus;
  notes?: string;
}

export interface AudioTracks {
  Hindi: LanguageStatus;
  English: LanguageStatus;
  Japanese: LanguageStatus;
  Tamil?: LanguageStatus;
  Telugu?: LanguageStatus;
  [key: string]: LanguageStatus | undefined;
}

export interface SubtitleTracks {
  Hindi: LanguageStatus;
  English: LanguageStatus;
  Japanese: LanguageStatus;
  Tamil?: LanguageStatus;
  Telugu?: LanguageStatus;
  [key: string]: LanguageStatus | undefined;
}

export interface PlatformAvailability {
  platform: PlatformName;
  status: AvailabilityStatus;
  watchUrl?: string; // Only populated if verified URL exists
  sourceUrl?: string; // Verified catalog source URL
  region: string; // e.g. "India"
  audio: AudioTracks;
  subtitles: SubtitleTracks;
}

export interface Anime {
  id: string;
  title: string;
  japaneseTitle?: string;
  poster: string;
  genres: string[];
  status: string;
  releaseInfo?: string;
  episodes?: string | number;
  rating?: string;
  synopsis?: string;
  platforms: PlatformAvailability[];
  verifiedAt?: string;
}

export interface AnimeFilterOptions {
  platform?: string; // 'all' or specific platform name
  audioLanguage?: string; // 'all', 'Hindi', 'English', 'Japanese', 'Tamil', 'Telugu'
  indiaAvailabilityOnly?: boolean;
}
