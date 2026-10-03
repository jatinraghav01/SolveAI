import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';
import { Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SolveAI — One Place to Solve Every Problem',
  description: 'Describe your problem and SolveAI routes your request to specialized AI agents. Find anime streaming availability, study guides, code debugging, and more.',
  keywords: ['SolveAI', 'AI Problem Solver', 'Anime Finder', 'Hindi Anime Dub', 'Crunchyroll India', 'Netflix Anime', 'Study Assistant'],
  openGraph: {
    title: 'SolveAI — One Place to Solve Every Problem',
    description: 'Describe your problem and SolveAI routes your request to specialized AI agents.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-gray-100 min-h-screen flex flex-col selection:bg-accent-violet selection:text-white antialiased`}>
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-dark-border/60 bg-dark-bg/80 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-violet to-accent-cyan p-0.5">
                <div className="w-full h-full bg-dark-bg rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-accent-cyan" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base">SolveAI</span>
                <span className="text-xs text-gray-500">One place to solve every problem.</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/agents" className="hover:text-white transition-colors">AI Agents</Link>
              <Link href="/agents/anime" className="hover:text-white transition-colors">Anime Finder</Link>
            </div>

            <div className="text-xs text-gray-500 flex items-center gap-1">
              <span>Production-ready release</span>
              <span>•</span>
              <span>SolveAI Architecture v1.0</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
