import React from 'react';
import { Film, Sparkles } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = 'Searching for anime information...'
}: LoadingStateProps) {
  return (
    <div className="w-full py-16 px-4 flex flex-col items-center justify-center text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-violet via-brand-500 to-accent-cyan p-0.5 animate-spin">
          <div className="w-full h-full bg-dark-bg rounded-[14px] flex items-center justify-center">
            <Film className="w-8 h-8 text-accent-cyan" />
          </div>
        </div>
        <div className="absolute -top-1 -right-1">
          <Sparkles className="w-5 h-5 text-accent-purple animate-pulse" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {message}
      </h3>
      <p className="text-xs text-gray-400 max-w-sm">
        Scanning verified streaming providers, audio dub databases, and subtitle tracks for India.
      </p>

      {/* Skeleton Cards Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 opacity-60">
        <div className="h-64 bg-dark-card border border-dark-border rounded-2xl animate-pulse p-6">
          <div className="h-6 w-1/3 bg-gray-800 rounded mb-4"></div>
          <div className="h-4 w-2/3 bg-gray-800 rounded mb-6"></div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="h-10 bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-800 rounded"></div>
          </div>
        </div>
        <div className="h-64 bg-dark-card border border-dark-border rounded-2xl animate-pulse p-6">
          <div className="h-6 w-1/3 bg-gray-800 rounded mb-4"></div>
          <div className="h-4 w-2/3 bg-gray-800 rounded mb-6"></div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="h-10 bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
