import { AudioTracks, SubtitleTracks, PlatformName } from '@/types/anime';

export interface VerifiedLanguageTracks {
  audio: AudioTracks;
  subtitles: SubtitleTracks;
  sourceUrl?: string;
  verifiedAt?: string;
  isExplicitlyVerified: boolean;
}

export interface LanguageVerificationProvider {
  name: string;
  verifyLanguages(
    animeTitle: string,
    platform: PlatformName
  ): Promise<VerifiedLanguageTracks>;
}
