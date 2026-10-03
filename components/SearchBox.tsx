'use client';

import React, { useState } from 'react';
import { Search, Sparkles, X } from 'lucide-react';

interface SearchBoxProps {
  initialValue?: string;
  placeholder?: string;
  onSearch: (query: string) => void;
  isLoading?: boolean;
  presetTags?: string[];
}

export default function SearchBox({
  initialValue = '',
  placeholder = 'Enter anime name...',
  onSearch,
  isLoading = false,
  presetTags = ['One Piece', 'Naruto', 'Demon Slayer', 'Solo Leveling', 'Jujutsu Kaisen']
}: SearchBoxProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    onSearch(tag);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative mb-4">
        <div className="relative flex items-center bg-dark-card border border-dark-border focus-within:border-accent-purple/70 rounded-2xl p-2 shadow-xl backdrop-blur-xl transition-all duration-200">
          <div className="pl-3 text-accent-cyan">
            <Search className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent px-3 py-3 text-white placeholder-gray-500 text-base focus:outline-none"
          />

          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-gray-400 hover:text-white mr-2"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-violet to-brand-600 hover:from-accent-purple hover:to-brand-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md shadow-accent-violet/20 disabled:opacity-50 whitespace-nowrap"
          >
            {isLoading ? (
              <span>Searching...</span>
            ) : (
              <>
                <span>Find Anime</span>
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Preset Example Tags */}
      {presetTags && presetTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span className="text-gray-400 font-medium">Try popular:</span>
          {presetTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 rounded-lg bg-dark-card hover:bg-dark-cardHover border border-dark-border hover:border-accent-cyan/40 text-gray-300 hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
