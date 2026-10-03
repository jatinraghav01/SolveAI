'use client';

import React, { useState } from 'react';
import AgentCard from '@/components/AgentCard';
import { ALL_AGENTS } from '@/lib/agents/agentRegistry';
import { Bot, Search, Sparkles } from 'lucide-react';

export default function AgentsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'coming_soon'>('all');

  const filteredAgents = ALL_AGENTS.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.capabilities.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === 'all' || agent.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-violet/15 text-accent-purple text-xs font-semibold border border-accent-violet/30">
          <Bot className="w-4 h-4" />
          <span>SolveAI Agent Ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          AI Agent Directory
        </h1>

        <p className="text-gray-300 text-base sm:text-lg">
          Browse our suite of specialized AI problem solvers. Select an active agent or preview upcoming capabilities.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-dark-card border border-dark-border rounded-2xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search agents by capability or name..."
            className="w-full bg-dark-bg border border-dark-border focus:border-accent-purple rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              statusFilter === 'all'
                ? 'bg-accent-violet text-white shadow-md shadow-accent-violet/30'
                : 'bg-dark-bg text-gray-400 hover:text-white border border-dark-border'
            }`}
          >
            All Agents ({ALL_AGENTS.length})
          </button>

          <button
            onClick={() => setStatusFilter('available')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              statusFilter === 'available'
                ? 'bg-emerald-500 text-dark-bg shadow-md shadow-emerald-500/20'
                : 'bg-dark-bg text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10'
            }`}
          >
            Available Now (1)
          </button>

          <button
            onClick={() => setStatusFilter('coming_soon')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              statusFilter === 'coming_soon'
                ? 'bg-gray-700 text-white shadow-md'
                : 'bg-dark-bg text-gray-400 border border-dark-border hover:text-white'
            }`}
          >
            Coming Soon (5)
          </button>
        </div>

      </div>

      {/* Agents Grid */}
      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-dark-card border border-dark-border rounded-2xl">
          <p className="text-gray-400 text-sm">No agents match your search criteria "{searchQuery}".</p>
        </div>
      )}

    </div>
  );
}
