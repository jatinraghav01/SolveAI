import React from 'react';
import Hero from '@/components/Hero';
import AgentCard from '@/components/AgentCard';
import { ALL_AGENTS } from '@/lib/agents/agentRegistry';
import { Sparkles, Bot, Cpu, ShieldCheck, ArrowRight, Layers, Database, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-20">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. AI Agents Grid Section */}
      <section id="agents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/15 text-accent-purple text-xs font-semibold border border-accent-violet/30 mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Specialized AI Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet Your AI Specialists
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              SolveAI routes your query to domain-expert agents built to deliver precise solutions.
            </p>
          </div>

          <Link
            href="/agents"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-white transition-colors"
          >
            <span>Explore All Agents</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

      </section>

      {/* 3. AI Router Architecture Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-dark-card via-dark-card to-dark-bg border border-dark-border rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/15 text-accent-cyan text-xs font-semibold border border-accent-cyan/30 mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>Extensible Core Architecture</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                How SolveAI Problem Routing Works
              </h3>

              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Rather than forcing a single generic chatbot to answer everything, SolveAI uses an intelligent problem routing layer. It classifies natural language intent and forwards execution to specialized agent services.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-dark-bg border border-dark-border text-accent-cyan mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">1. Intent Classification</h4>
                    <p className="text-xs text-gray-400">Extracts topic keywords, language filters, and query intent instantly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-dark-bg border border-dark-border text-accent-purple mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">2. Specialized Agent Dispatch</h4>
                    <p className="text-xs text-gray-400">Routes the request to targeted agent services (Anime Finder, Study, Coding, etc.).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-dark-bg border border-dark-border text-emerald-400 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">3. Verified Output Layer</h4>
                    <p className="text-xs text-gray-400">Enforces accurate verification rules — no invented links or false negative data.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Architecture Diagram */}
            <div className="bg-dark-bg/90 border border-dark-border/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-4 font-mono text-xs text-gray-300">
              <div className="flex items-center justify-between text-gray-400 pb-3 border-b border-dark-border">
                <span className="flex items-center gap-2 font-sans font-semibold text-white">
                  <Database className="w-4 h-4 text-accent-cyan" /> System Pipeline
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">ACTIVE</span>
              </div>

              <div className="p-3 rounded-lg bg-dark-card border border-dark-border text-gray-200">
                <span className="text-accent-cyan font-bold">User Input:</span> "Where can I watch One Piece in Hindi?"
              </div>

              <div className="flex justify-center text-gray-500">
                ↓ [AI Router Classification]
              </div>

              <div className="p-3 rounded-lg bg-accent-violet/20 border border-accent-purple/40 text-accent-purple font-semibold flex items-center justify-between">
                <span>Matched Agent: Anime Finder</span>
                <span className="text-[10px] bg-accent-violet/30 px-2 py-0.5 rounded">Confidence 96%</span>
              </div>

              <div className="flex justify-center text-gray-500">
                ↓ [Anime Service Layer]
              </div>

              <div className="p-3 rounded-lg bg-dark-card border border-emerald-500/30 text-emerald-400 space-y-1">
                <div>✓ Netflix India (Hindi Dubbed)</div>
                <div>✓ Crunchyroll India (Hindi Dubbed)</div>
                <div className="text-gray-400 text-[11px]">Direct Watch Links Verified</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
