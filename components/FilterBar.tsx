'use client';

import React from 'react';
import { Filter, Check, Tv, Volume2, Globe } from 'lucide-react';
import { AnimeFilterOptions } from '@/types/anime';

interface FilterBarProps {
  filters: AnimeFilterOptions;
  onChange: (newFilters: AnimeFilterOptions) => void;
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const platforms = ['all', 'Netflix', 'Crunchyroll', 'JioHotstar', 'Prime Video', 'YouTube'];
  const audioLanguages = ['all', 'Hindi', 'English', 'Japanese'];

  const handlePlatformChange = (platform: string) => {
    onChange({ ...filters, platform });
  };

  const handleAudioChange = (audioLanguage: string) => {
    onChange({ ...filters, audioLanguage });
  };

  const handleIndiaToggle = () => {
    onChange({
      ...filters,
      indiaAvailabilityOnly: !filters.indiaAvailabilityOnly,
    });
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-4 md:p-5 mb-8 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark-border/60">
        <Filter className="w-4 h-4 text-accent-cyan" />
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
          Filter Options
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Platform Selector */}
        <div>
          <label className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
            <Tv className="w-3.5 h-3.5 text-accent-purple" />
            <span>Platform</span>
          </label>
          <div className="flex flex-wrap gap-1.5">
            {platforms.map((p) => {
              const isSelected = (filters.platform || 'all').toLowerCase() === p.toLowerCase();
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePlatformChange(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-accent-violet text-white shadow-md shadow-accent-violet/30 font-semibold'
                      : 'bg-dark-bg text-gray-400 hover:text-white border border-dark-border'
                  }`}
                >
                  {p === 'all' ? 'All Platforms' : p}
                </button>
              );
            })}
          </div>
        </div>

        {/* Audio Language Selector */}
        <div>
          <label className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Audio Language</span>
          </label>
          <div className="flex flex-wrap gap-1.5">
            {audioLanguages.map((lang) => {
              const isSelected = (filters.audioLanguage || 'all').toLowerCase() === lang.toLowerCase();
              const isHindi = lang === 'Hindi';
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleAudioChange(lang)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-accent-cyan text-dark-bg font-bold shadow-md shadow-accent-cyan/20'
                      : isHindi
                      ? 'bg-dark-bg text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/10'
                      : 'bg-dark-bg text-gray-400 hover:text-white border border-dark-border'
                  }`}
                >
                  {lang === 'all' ? 'All Audio' : `${lang}${isHindi ? ' 🎙️' : ''}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* India Availability Toggle */}
        <div className="flex flex-col justify-end">
          <label className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Regional Filter</span>
          </label>
          <button
            type="button"
            onClick={handleIndiaToggle}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium border transition-all ${
              filters.indiaAvailabilityOnly
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-semibold'
                : 'bg-dark-bg text-gray-400 border-dark-border hover:text-white'
            }`}
          >
            <span>Available in India Only</span>
            <div
              className={`w-4 h-4 rounded border flex items-center justify-center ${
                filters.indiaAvailabilityOnly
                  ? 'bg-emerald-500 border-emerald-400 text-dark-bg'
                  : 'border-gray-600'
              }`}
            >
              {filters.indiaAvailabilityOnly && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
