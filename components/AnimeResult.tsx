'use client';

import React from 'react';
import Image from 'next/image';
import { Anime } from '@/types/anime';
import PlatformCard from './PlatformCard';
import { Film, Star, Calendar, Layers, Volume2, CheckCircle2, HelpCircle } from 'lucide-react';

interface AnimeResultProps {
  anime: Anime;
}

export default function AnimeResult({ anime }: AnimeResultProps) {
  const {
    title,
    japaneseTitle,
    poster,
    genres,
    status,
    releaseInfo,
    episodes,
    rating,
    synopsis,
    platforms,
    verifiedAt
  } = anime;

  // Check if Hindi audio is available on ANY platform
  const hasHindiAudio = platforms.some(
    p => p.audio.Hindi && p.audio.Hindi.status === 'available'
  );

  const isHindiUnverified = platforms.every(
    p => p.audio.Hindi && p.audio.Hindi.status === 'unknown'
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Main Anime Header Card */}
      <div className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
          
          {/* Anime Poster */}
          <div className="w-full md:w-56 h-80 relative rounded-2xl overflow-hidden border border-dark-border/80 shadow-2xl shrink-0 bg-dark-bg">
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold px-2.5 py-1 rounded-lg bg-dark-bg/80 backdrop-blur-md border border-dark-border text-gray-300">
              <span className="truncate">{status}</span>
              {rating && (
                <span className="flex items-center gap-1 text-amber-400 font-bold shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {rating}
                </span>
              )}
            </div>
          </div>

          {/* Details & Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {genres.map((g) => (
                <span
                  key={g}
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-violet/15 text-accent-purple border border-accent-violet/30"
                >
                  {g}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
              {title}
            </h2>

            {japaneseTitle && (
              <p className="text-sm text-gray-400 font-medium mb-4 italic">
                {japaneseTitle}
              </p>
            )}

            {/* Quick Specs */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 mb-4 pb-4 border-b border-dark-border/60">
              {releaseInfo && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent-cyan" />
                  <span>{releaseInfo}</span>
                </div>
              )}
              {episodes && (
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-accent-purple" />
                  <span>{episodes} Episodes</span>
                </div>
              )}
              {verifiedAt && (
                <span className="text-gray-500 font-medium ml-auto">
                  {verifiedAt}
                </span>
              )}
            </div>

            {/* Synopsis */}
            {synopsis && (
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {synopsis}
              </p>
            )}

            {/* Primary Hindi Audio Highlight Banner */}
            <div
              className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                hasHindiAudio
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : isHindiUnverified
                  ? 'bg-amber-500/10 border-amber-500/30'
                  : 'bg-dark-bg border-dark-border'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${hasHindiAudio ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Hindi Audio Dubbing</span>
                    {hasHindiAudio ? (
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Confirmed Available
                      </span>
                    ) : isHindiUnverified ? (
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" /> Unable to Verify
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 font-semibold">
                        Not Available
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {hasHindiAudio
                      ? 'Official Hindi dubbed audio track is available on selected platforms below.'
                      : isHindiUnverified
                      ? 'Live dubbing rights could not be verified with 100% confidence. Checking OTT catalogs...'
                      : 'No official Hindi dub has been released for this title.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Streaming Platform Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Film className="w-5 h-5 text-accent-cyan" />
            <span>Streaming Availability & Language Options</span>
          </h3>
          <span className="text-xs text-gray-400 font-medium">
            {platforms.length} Platforms Found
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platformData, idx) => (
            <PlatformCard key={`${platformData.platform}-${idx}`} platformData={platformData} />
          ))}
        </div>
      </div>

    </div>
  );
}
