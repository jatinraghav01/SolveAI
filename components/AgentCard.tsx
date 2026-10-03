'use client';

import React from 'react';
import Link from 'next/link';
import { Agent } from '@/types/agent';
import { ArrowRight, CheckCircle2, Clock, Sparkles, ShieldAlert } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const isAvailable = agent.status === 'available';

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
        isAvailable
          ? 'bg-dark-card border border-dark-border hover:border-accent-purple/60 hover:shadow-2xl hover:shadow-accent-purple/10'
          : 'bg-dark-card/60 border border-dark-border/60 opacity-90'
      }`}
    >
      {/* Background card glow for available agents */}
      {isAvailable && (
        <div className="absolute inset-0 bg-card-glow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}

      <div>
        {/* Header: Icon & Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
            {agent.icon}
          </div>

          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-800/80 text-gray-400 border border-gray-700/60">
              <Clock className="w-3.5 h-3.5" />
              Coming Soon
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
          {agent.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {agent.description}
        </p>

        {/* Capabilities List */}
        <div className="space-y-1.5 mb-6">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 block mb-2">
            Capabilities
          </span>
          {agent.capabilities.slice(0, 3).map((cap, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
              <Sparkles className="w-3.5 h-3.5 text-accent-violet shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-dark-border/60">
        {isAvailable ? (
          <Link
            href={agent.route}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-accent-violet to-brand-600 hover:from-accent-purple hover:to-brand-500 text-white text-sm font-semibold shadow-md shadow-accent-violet/20 transition-all duration-200"
          >
            <span>Launch Agent</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <button
            disabled
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-dark-bg text-gray-500 text-sm font-medium border border-dark-border/40 cursor-not-allowed"
          >
            <span>In Development</span>
          </button>
        )}
      </div>
    </div>
  );
}
