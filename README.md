# SolveAI — AI Problem Solving Hub

> **Tagline:** One place to solve every problem.

SolveAI is a production-quality, modular web application that acts as an **AI Problem Solving Hub**. When a user describes a problem, SolveAI analyzes the natural language request and routes it to the correct specialized AI agent.

For Version 1.0, the **Anime Finder Agent** is fully implemented, while the extensible core architecture is ready for future agents (Study, Coding, Assignment, Resume, Product Finder).

---

## 🌟 Key Features

1. **AI Problem Router**:
   - Classifies user intent from natural language input.
   - Automatically directs requests to the right specialized agent.
   - Modular structure located in `lib/router/` — ready to swap between keyword/pattern matching and LLM routing.

2. **Anime Finder Agent**:
   - **India OTT Availability Check**: Verifies rights across Netflix, Crunchyroll, JioHotstar, Prime Video, YouTube (Muse Asia / Ani-One Asia).
   - **Hindi Audio Dub Highlight**: Prominently highlights Hindi audio track status (`✓ Confirmed Available`, `? Unable to Verify`, `Not Available`).
   - **Audio & Subtitle Track Details**: Covers Hindi, English, Japanese, and more.
   - **Verified Watch Buttons**: Displays direct watch links ONLY when verified URLs exist (never invents fake URLs).
   - **Strict Verification Rule**: If licensing status cannot be confirmed, it displays `Unknown / Unable to verify` rather than showing false data.

3. **Dynamic Filter Controls**:
   - Platform Filter (Netflix, Crunchyroll, JioHotstar, Prime Video, YouTube)
   - Audio Language Filter (Hindi, English, Japanese)
   - Regional Filter (Available in India Only)

4. **Premium Dark SaaS Design**:
   - Black/Charcoal background (`#08080c`, `#111118`)
   - Vibrant glow accents, rounded cards, sleek glassmorphism, and responsive desktop/mobile navigation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Actions / API Routes)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Architecture**: Component-based React architecture with separate data & service layers.

---

## 📁 Project Structure

```text
app/
├── globals.css           # Custom dark theme utilities & animations
├── layout.tsx            # Root layout with SEO metadata & navbar/footer
├── page.tsx              # Homepage / AI Problem Router Hero & Agent Cards
├── agents/
│   ├── page.tsx          # AI Agents Directory (Active & Coming Soon)
│   └── anime/
│       └── page.tsx      # Anime Finder Agent UI & Search
└── api/
    ├── anime/
    │   └── route.ts      # Anime search API route
    └── router/
        └── route.ts      # Problem classifier API route

components/
├── Navbar.tsx            # Sticky brand navigation
├── Hero.tsx              # Homepage hero with interactive router input
├── AgentCard.tsx         # Reusable card component for AI agents
├── SearchBox.tsx         # Input search box with preset example tags
├── AnimeResult.tsx       # Main anime details & platform cards layout
├── PlatformCard.tsx      # OTT platform card with audio/subtitle badges & watch link
├── LanguageBadge.tsx     # Color-coded language availability status badge
├── FilterBar.tsx         # Filter controls for platforms and audio tracks
├── LoadingState.tsx      # Glassmorphic skeleton loading state
└── EmptyState.tsx        # Empty search / error / unverified data state

lib/
├── router/
│   ├── agentRouter.ts    # Modular problem classifier logic
│   └── types.ts          # Router type definitions
├── agents/
│   ├── animeAgent.ts     # Anime Finder agent metadata definition
│   ├── studyAgent.ts     # Study Assistant placeholder agent definition
│   ├── codingAgent.ts    # Coding Assistant placeholder agent definition
│   ├── assignmentAgent.ts# Assignment Assistant placeholder agent definition
│   ├── resumeAgent.ts    # Resume Assistant placeholder agent definition
│   ├── productAgent.ts   # Product Finder placeholder agent definition
│   └── agentRegistry.ts  # Central registry for all AI agents
└── anime/
    ├── animeService.ts   # Business logic layer for retrieving & filtering anime
    └── providers/
        ├── animeProvider.ts     # Abstract AnimeProvider interface
        └── mockAnimeProvider.ts # Curated dataset & fallback provider

types/
├── agent.ts              # Agent category and status interfaces
├── anime.ts              # Anime and OTT platform streaming interfaces
└── router.ts             # Problem routing interfaces
```

---

## 🚀 How to Install and Run Locally

### Prerequisites
- Node.js (v18.0 or higher)
- npm or pnpm / yarn

### Steps

1. **Clone or Navigate to the Project**:
   ```bash
   cd /path/to/SolveAI
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🔐 Environment Variables (`.env.local`)

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_APP_NAME` | Application brand name | `"SolveAI"` |
| `NEXT_PUBLIC_APP_TAGLINE` | Tagline text | `"One place to solve every problem."` |
| `AI_ROUTER_PROVIDER` | Problem router engine (`"keyword"` or `"llm"`) | `"keyword"` |
| `JIKAN_API_BASE_URL` | Base URL for MyAnimeList Jikan API | `"https://api.jikan.moe/v4"` |
| `STREAMING_API_KEY` | Optional API key for live streaming availability | `""` |

---

## ➕ How to Add a New Agent

Adding a new agent (e.g. `Study Assistant` or `Coding Assistant`) is straightforward:

1. **Create Agent Definition**:
   In `lib/agents/yourAgent.ts`, define your agent using the `Agent` interface:
   ```typescript
   import { Agent } from '@/types/agent';

   export const studyAgent: Agent = {
     id: 'study',
     name: 'Study Assistant',
     icon: '📚',
     description: 'Turn syllabus, notes and PYQs into explanations and study plans.',
     status: 'available',
     route: '/agents/study',
     capabilities: ['Syllabus roadmap', 'PYQ analyzer'],
     samplePrompts: ['Explain normalization in DBMS']
   };
   ```

2. **Register the Agent**:
   Add it to `lib/agents/agentRegistry.ts` in the `ALL_AGENTS` array.

3. **Update the Router**:
   In `lib/router/agentRouter.ts`, add keyword patterns for your new agent ID.

4. **Build the Agent UI**:
   Create `app/agents/your-agent/page.tsx` and connect it to your domain service logic.

---

## 🌐 How to Add a New Anime Data Provider

To connect a live search API (e.g., JustWatch API, RapidAPI, or Jikan MAL API):

1. **Implement `AnimeProvider`**:
   Create a new file in `lib/anime/providers/jikanAnimeProvider.ts`:
   ```typescript
   import { AnimeProvider } from './animeProvider';
   import { Anime } from '@/types/anime';

   export class JikanAnimeProvider implements AnimeProvider {
     name = 'JikanAnimeProvider';

     async searchAnime(query: string): Promise<Anime[]> {
       // Fetch from Jikan API https://api.jikan.moe/v4/anime?q=...
       // Transform API response to SolveAI Anime schema
     }

     async getAnimeById(id: string): Promise<Anime | null> {
       // Fetch anime details by MAL ID
     }
   }
   ```

2. **Inject the Provider**:
   In `lib/anime/animeService.ts`, set the active provider:
   ```typescript
   import { JikanAnimeProvider } from './providers/jikanAnimeProvider';

   // Automatically switch provider based on env
   const provider = process.env.STREAMING_API_KEY 
     ? new JikanAnimeProvider() 
     : new MockAnimeProvider();

   export const animeService = new AnimeService(provider);
   ```

---

## 📝 License

Distributed under the MIT License. Built for **SolveAI**.
