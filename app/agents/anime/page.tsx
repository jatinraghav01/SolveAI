'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBox from '@/components/SearchBox';
import FilterBar from '@/components/FilterBar';
import AnimeResult from '@/components/AnimeResult';
import LoadingState from '@/components/LoadingState';
import EmptyState from '@/components/EmptyState';
import { Anime, AnimeFilterOptions } from '@/types/anime';
import { Film, Sparkles, Tv, Volume2, ShieldCheck } from 'lucide-react';

function AnimeFinderContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<AnimeFilterOptions>({
    platform: 'all',
    audioLanguage: 'all',
    indiaAvailabilityOnly: false,
  });

  const fetchAnimeData = async (searchQuery: string, currentFilters: AnimeFilterOptions) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const params = new URLSearchParams({
        q: searchQuery,
        platform: currentFilters.platform || 'all',
        audio: currentFilters.audioLanguage || 'all',
        indiaOnly: currentFilters.indiaAvailabilityOnly ? 'true' : 'false',
      });

      const response = await fetch(`/api/anime?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch anime information');
      }

      const json = await response.json();
      setResults(json.data || []);
    } catch (err) {
      console.error('Error in AnimeFinder:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Perform search when initialQuery is provided from homepage redirect
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      fetchAnimeData(initialQuery, filters);
    }
  }, [initialQuery]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    fetchAnimeData(newQuery, filters);
  };

  const handleFilterChange = (newFilters: AnimeFilterOptions) => {
    setFilters(newFilters);
    if (query) {
      fetchAnimeData(query, newFilters);
    }
  };

  const handleResetSearch = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
    setError(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Agent Header Banner */}
      <div className="bg-gradient-to-r from-dark-card via-dark-card to-dark-bg border border-dark-border rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-violet/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold border border-emerald-500/30 mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Active Agent • Version 1.0</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Anime Finder
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
            Find where to watch anime and check available audio/subtitle languages in India.
          </p>

          {/* Quick Capability Tags */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 bg-dark-bg/80 border border-dark-border px-3 py-1.5 rounded-lg">
              <Tv className="w-3.5 h-3.5 text-accent-cyan" /> OTT Availability (India)
            </span>
            <span className="flex items-center gap-1.5 bg-dark-bg/80 border border-dark-border px-3 py-1.5 rounded-lg">
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> Hindi Dub Verification
            </span>
            <span className="flex items-center gap-1.5 bg-dark-bg/80 border border-dark-border px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-purple" /> Verified Watch Links Only
            </span>
          </div>
        </div>
      </div>

      {/* Main Search Input */}
      <div className="bg-dark-card/60 border border-dark-border/80 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-xl">
        <SearchBox
          initialValue={query}
          onSearch={handleSearch}
          isLoading={isLoading}
          presetTags={['One Piece', 'Naruto', 'Demon Slayer', 'Solo Leveling', 'Jujutsu Kaisen']}
        />
      </div>

      {/* Results & Filters Container */}
      {hasSearched && (
        <div className="space-y-6">
          
          {/* Filter Bar */}
          <FilterBar filters={filters} onChange={handleFilterChange} />

          {/* Render Loading, Error, Empty, or Results */}
          {isLoading ? (
            <LoadingState message="Searching for anime information..." />
          ) : error ? (
            <EmptyState type="error" title={error} onReset={handleResetSearch} />
          ) : results.length === 0 ? (
            <EmptyState type="not_found" onReset={handleResetSearch} />
          ) : (
            <div className="space-y-12">
              {results.map((anime) => (
                <AnimeResult key={anime.id} anime={anime} />
              ))}
            </div>
          )}

        </div>
      )}

      {/* Default State (When no search has been submitted yet) */}
      {!hasSearched && (
        <div className="py-12 px-6 bg-dark-card/40 border border-dark-border/40 rounded-3xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center mx-auto mb-4 text-accent-cyan shadow-inner">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Ready to Search</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Type an anime title above or select one of the popular anime tags like "One Piece" or "Demon Slayer" to check platform rights and Hindi audio dub availability.
          </p>
        </div>
      )}

    </div>
  );
}

export default function AnimeFinderPage() {
  return (
    <Suspense fallback={<LoadingState message="Loading Anime Finder Agent..." />}>
      <AnimeFinderContent />
    </Suspense>
  );
}
