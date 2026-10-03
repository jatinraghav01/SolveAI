import { PlatformAvailability } from '@/types/anime';

export interface StreamingResult {
  platforms: PlatformAvailability[];
  sourceUrl?: string;
  verifiedAt?: string;
  isVerifiedForIndia: boolean;
}

export interface StreamingProvider {
  name: string;
  getStreamingAvailability(title: string, malId?: string): Promise<StreamingResult>;
}
