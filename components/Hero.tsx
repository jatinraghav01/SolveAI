'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, ArrowRight, Zap, Bot, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { routeProblem } from '@/lib/router/agentRouter';
import { RouteResult } from '@/types/router';
import { getAgentById } from '@/lib/agents/agentRegistry';

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isRouting, setIsRouting] = useState(false);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);

  const sampleQueries = [
    { label: 'Where can I watch One Piece in Hindi?', category: 'anime' },
    { label: 'Help me prepare for my DBMS exam', category: 'study' },
    { label: 'Fix my Python error', category: 'coding' },
    { label: 'Improve my resume', category: 'resume' },
  ];

  const handleSolve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsRouting(true);
    const result = routeProblem(query);
    setRouteResult(result);

    setTimeout(() => {
      setIsRouting(false);
      if (result.agentId === 'anime') {
        const searchQuery = result.extractedQuery || query;
        router.push(`/agents/anime?q=${encodeURIComponent(searchQuery)}`);
      }
    }, 900);
  };

  const handleSampleClick = (sampleText: string) => {
    setQuery(sampleText);
    setIsRouting(true);
    const result = routeProblem(sampleText);
    setRouteResult(result);

    setTimeout(() => {
      setIsRouting(false);
      if (result.agentId === 'anime') {
        const searchQuery = result.extractedQuery || sampleText;
        router.push(`/agents/anime?q=${encodeURIComponent(searchQuery)}`);
      }
    }, 700);
  };

  const currentMatchedAgent = routeResult ? getAgentById(routeResult.agentId) : null;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-dark-border/40 bg-hero-gradient">
      
      {/* Glow Orbs Background Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Hub Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card/90 border border-accent-violet/30 text-xs text-gray-300 shadow-xl backdrop-blur-md mb-8 animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span className="font-medium">SolveAI Router v1.0 • Anime Finder Agent Ready</span>
        </div>

        {/* Hero Headings */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          One place to <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-brand-400 to-accent-purple">
            solve every problem.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Describe your problem and SolveAI finds the right AI agent to help you.
        </p>

        {/* Problem Search Box */}
        <div className="max-w-3xl mx-auto mb-8">
          <form onSubmit={handleSolve} className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-violet via-brand-500 to-accent-cyan opacity-40 group-hover:opacity-75 blur-md transition duration-500"></div>
            
            <div className="relative flex items-center bg-dark-card border border-dark-border rounded-2xl p-2 sm:p-2.5 shadow-2xl backdrop-blur-xl">
              <div className="pl-3 sm:pl-4 text-gray-400">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-accent-cyan" />
              </div>
              
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe what you want to solve..."
                className="w-full bg-transparent px-3 py-3 text-white placeholder-gray-500 text-base sm:text-lg focus:outline-none"
              />

              <button
                type="submit"
                disabled={isRouting}
                className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-accent-violet to-brand-600 hover:from-accent-purple hover:to-brand-500 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 shadow-lg shadow-accent-violet/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 whitespace-nowrap"
              >
                {isRouting ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin text-white" />
                    <span>Routing...</span>
                  </>
                ) : (
                  <>
                    <span>Solve Problem</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Routing Indicator Card (when routing query) */}
        {routeResult && (
          <div className="max-w-xl mx-auto mb-8 p-4 rounded-xl bg-dark-card/90 border border-accent-purple/40 backdrop-blur-md shadow-2xl text-left animate-fadeIn">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-accent-cyan" />
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                  AI Router Decision
                </span>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-violet/20 text-accent-purple border border-accent-violet/30 font-medium">
                {(routeResult.confidence * 100).toFixed(0)}% Confidence Match
              </span>
            </div>

            <div className="flex items-center gap-3 bg-dark-bg/80 p-3 rounded-lg border border-dark-border">
              <span className="text-2xl">{currentMatchedAgent?.icon || '🤖'}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">
                    {currentMatchedAgent?.name || routeResult.agentId} Agent
                  </h4>
                  {currentMatchedAgent?.status === 'available' ? (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" /> Available Now
                    </span>
                  ) : (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3" /> Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 truncate mt-0.5">
                  {routeResult.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Example Queries List */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
          <span className="font-medium text-gray-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" /> Try asking:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleQueries.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => handleSampleClick(sample.label)}
                className="px-3 py-1.5 rounded-lg bg-dark-card hover:bg-dark-cardHover border border-dark-border hover:border-accent-purple/50 text-gray-300 hover:text-white transition-all duration-200 text-xs"
              >
                "{sample.label}"
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
