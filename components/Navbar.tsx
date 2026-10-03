'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X, Bot, ArrowRight, Layers } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'AI Agents', href: '/agents' },
    { name: 'Anime Finder', href: '/agents/anime' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-dark-bg/85 border-b border-dark-border/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-violet via-brand-500 to-accent-cyan p-0.5 shadow-lg shadow-accent-violet/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent-cyan group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Solve<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-brand-400 to-accent-purple">AI</span>
              </span>
              <span className="text-[10px] text-gray-400 -mt-1 font-medium tracking-wider uppercase">Problem Solving Hub</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-dark-card border border-dark-border shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-dark-card/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/agents/anime"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl font-medium text-sm text-white group shadow-md shadow-accent-violet/20 hover:shadow-accent-violet/40 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent-violet via-brand-500 to-accent-cyan group-hover:opacity-90 transition-opacity"></span>
              <span className="relative px-4 py-2 bg-dark-bg rounded-[10px] flex items-center gap-2 group-hover:bg-opacity-0 transition-all duration-300">
                <Bot className="w-4 h-4 text-accent-cyan group-hover:text-white transition-colors" />
                <span>Try Anime Agent</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-card text-gray-400 hover:text-white border border-dark-border focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dark-border bg-dark-bg/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-dark-card border border-dark-border'
                    : 'text-gray-400 hover:text-white hover:bg-dark-card/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-dark-border/60">
            <Link
              href="/agents/anime"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-accent-violet to-brand-600 text-white font-medium text-sm shadow-lg shadow-accent-violet/20"
            >
              <Bot className="w-4 h-4" />
              Launch Anime Finder Agent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
