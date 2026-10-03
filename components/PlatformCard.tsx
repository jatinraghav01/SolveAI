'use client';

import React from 'react';
import { PlatformAvailability } from '@/types/anime';
import LanguageBadge from './LanguageBadge';
import { ExternalLink, CheckCircle2, XCircle, HelpCircle, Tv } from 'lucide-react';

interface PlatformCardProps {
  platformData: PlatformAvailability;
}

export default function PlatformCard({ platformData }: PlatformCardProps) {
  const { platform, status, watchUrl, region, audio, subtitles } = platformData;

  const getStatusBadge = () => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Available in {region || 'India'}
          </span>
        );
      case 'not_available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/15 text-rose-400 border border-rose-500/30">
            <XCircle className="w-3.5 h-3.5" />
            Not Available in {region || 'India'}
          </span>
        );
      case 'unknown':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Unknown / Unable to verify
          </span>
        );
    }
  };

  const platformColors: Record<string, { badgeBg: string; text: string }> = {
    Netflix: { badgeBg: 'from-red-600/20 to-red-950/40 border-red-500/30', text: 'text-red-400' },
    Crunchyroll: { badgeBg: 'from-orange-500/20 to-amber-950/40 border-orange-500/30', text: 'text-orange-400' },
    JioHotstar: { badgeBg: 'from-blue-600/20 to-indigo-950/40 border-blue-500/30', text: 'text-blue-400' },
    'Prime Video': { badgeBg: 'from-sky-500/20 to-cyan-950/40 border-sky-500/30', text: 'text-sky-400' },
    YouTube: { badgeBg: 'from-rose-600/20 to-red-950/40 border-rose-500/30', text: 'text-rose-400' },
  };

  const styleConfig = platformColors[platform] || {
    badgeBg: 'from-gray-800/40 to-dark-card border-dark-border',
    text: 'text-white',
  };

  return (
    <div className="bg-dark-card border border-dark-border hover:border-dark-border/80 rounded-2xl p-5 md:p-6 transition-all duration-200 shadow-xl flex flex-col justify-between">
      <div>
        {/* Top Platform Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-dark-border/60">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${styleConfig.badgeBg} border`}>
              <Tv className={`w-5 h-5 ${styleConfig.text}`} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                {platform}
              </h4>
              <span className="text-xs text-gray-400">Streaming OTT Provider</span>
            </div>
          </div>

          <div>{getStatusBadge()}</div>
        </div>

        {/* Audio Languages Section */}
        <div className="mb-4">
          <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
            Audio Languages
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <LanguageBadge
              language="Hindi"
              data={audio.Hindi || { status: 'unknown' }}
              type="audio"
              isHindi={true}
            />
            <LanguageBadge
              language="English"
              data={audio.English || { status: 'unknown' }}
              type="audio"
            />
            <LanguageBadge
              language="Japanese"
              data={audio.Japanese || { status: 'unknown' }}
              type="audio"
            />
          </div>
        </div>

        {/* Subtitle Languages Section */}
        <div className="mb-6">
          <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
            Subtitle Languages
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <LanguageBadge
              language="Hindi"
              data={subtitles.Hindi || { status: 'unknown' }}
              type="subtitle"
              isHindi={true}
            />
            <LanguageBadge
              language="English"
              data={subtitles.English || { status: 'unknown' }}
              type="subtitle"
            />
            <LanguageBadge
              language="Japanese"
              data={subtitles.Japanese || { status: 'unknown' }}
              type="subtitle"
            />
          </div>
        </div>
      </div>

      {/* Watch Button (ONLY when verified URL exists!) */}
      {watchUrl ? (
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-accent-violet to-brand-600 hover:from-accent-purple hover:to-brand-500 text-white font-semibold text-sm shadow-md shadow-accent-violet/20 hover:shadow-accent-violet/40 transition-all duration-200"
        >
          <span>Watch on {platform}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <div className="w-full py-2.5 px-4 rounded-xl bg-dark-bg/60 border border-dark-border/40 text-center text-xs text-gray-400 italic">
          No verified watch link available
        </div>
      )}
    </div>
  );
}
