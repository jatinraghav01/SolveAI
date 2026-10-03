import { NextRequest, NextResponse } from 'next/server';
import { animeService } from '@/lib/anime/animeService';
import { AnimeFilterOptions } from '@/types/anime';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const platform = searchParams.get('platform') || 'all';
    const audioLanguage = searchParams.get('audio') || 'all';
    const indiaOnly = searchParams.get('indiaOnly') === 'true';

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter "q" is required' },
        { status: 400 }
      );
    }

    const filters: AnimeFilterOptions = {
      platform,
      audioLanguage,
      indiaAvailabilityOnly: indiaOnly,
    };

    const results = await animeService.searchAnime(query, filters);

    return NextResponse.json({
      success: true,
      query,
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error('API Error in /api/anime:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
