import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation Hub — Raj Choudhury & AXIOM" },
      {
        name: "description",
        content:
          "Official technical documentation, architecture guides, API references, and development guides for AXIOM Studio.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Documentation Hub — Raj Choudhury & AXIOM" },
      {
        property: "og:description",
        content:
          "Comprehensive guides on multi-model routing, Ledger agent memory, frontend UI tokens, and server API handlers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/docs" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/docs" }],
  }),
  component: Docs,
});

interface DocItem {
  id: string;
  category: "Architecture" | "API Reference" | "Setup & Config" | "Development Notes" | "Roadmap";
  title: string;
  purpose: string;
  status: "Active & Stable" | "In Progress" | "Planned";
  body: string;
  snippet: string;
}

const DOCS_DATABASE: DocItem[] = [
  {
    id: "arch-overview",
    category: "Architecture",
    title: "System Architecture & Layering",
    purpose: "Provides a high-level conceptual overview of how client UI, routing planes, AI provider adapters, and memory ledgers interact.",
    status: "Active & Stable",
    body: "AXIOM Studio applications are built across four decoupled layers: 1) Client Surface (TanStack Router & React 19 UI), 2) Server API Gateway (`/api/chat` server route handlers), 3) Model Routing Engine (Groq / OpenRouter provider adapters), and 4) Ledger Memory (PostgreSQL + pgvector). Each layer exposes a minimal API contract so components can be updated independently without breaking system state.",
    snippet: `Client UI (React 19) → Server Handler (/api/chat) → Groq / Provider Adapter → Ledger Memory (PostgreSQL)`,
  },
  {
    id: "api-chat",
    category: "API Reference",
    title: "Server Route: POST /api/chat",
    purpose: "Documents the primary streaming chat API endpoint connecting the client assistant window to Groq / LLM backends.",
    status: "Active & Stable",
    body: "The `/api/chat` endpoint receives a JSON payload containing `messages: Array<{ role: string; content: string }>`. It validates non-empty message payloads, extracts `GROQ_API_KEY` (with fallback across NITRO and VITE environment variables), and returns a readable UTF-8 text stream using Server-Sent Events (SSE) line-buffering.",
    snippet: `POST /api/chat
Content-Type: application/json

{
  "messages": [
    { "role": "user", "content": "What is AXIOM Studio?" }
  ]
}

Response: 200 OK (text/plain; charset=utf-8) Streamed Tokens`,
  },
  {
    id: "setup-env",
    category: "Setup & Config",
    title: "Environment Variables & Local Setup",
    purpose: "Guides developers on configuring environment variables for local development and Netlify / Nitro serverless deployment.",
    status: "Active & Stable",
    body: "Environment configuration is managed via `.env` files. For client-side Web3Forms contact form access, `VITE_WEB3FORMS_ACCESS_KEY` is specified. For server-side AI chat assistance, `GROQ_API_KEY` (and `NITRO_GROQ_API_KEY` for Nitro runtime) are defined to ensure runtime key availability.",
    snippet: `# Local .env Configuration
VITE_WEB3FORMS_ACCESS_KEY=b0ed214b-707e-4197-a1ae-eaf7a735610c
NITRO_WEB3FORMS_ACCESS_KEY=b0ed214b-707e-4197-a1ae-eaf7a735610c
GROQ_API_KEY=your_groq_api_key_here
NITRO_GROQ_API_KEY=your_groq_api_key_here`,
  },
  {
    id: "dev-structure",
    category: "Development Notes",
    title: "Repository Folder Structure & Conventions",
    purpose: "Outlines the directory layout, naming standards, and module organization within `src/`.",
    status: "Active & Stable",
    body: "The workspace uses a modern Vite + TanStack Start directory structure: `src/routes/` for file-based page routes (`__root.tsx`, `index.tsx`, `about.tsx`, `team.tsx`, `projects.tsx`, `skills.tsx`, `technology.tsx`, `research.tsx`, `journey.tsx`, `docs.tsx`, `contact.tsx`), `src/components/` for UI components (`site.tsx`, `ai-chat-window.tsx`), `src/lib/` for services (`ai-service.ts`, `seo.ts`), and `src/contexts/` for global theme state.",
    snippet: `src/
├── routes/       # File-based TanStack routes & server handlers
├── components/   # UI components, site shell, and AI assistant
├── lib/          # AI adapters, SEO helpers, and utility functions
├── contexts/     # Theme context provider (light/dark mode)
└── styles.css    # Tailwind CSS v4 design tokens and glassmorphism`,
  },
  {
    id: "roadmap-v2",
    category: "Roadmap",
    title: "AXIOM v2 & Future Capabilities",
    purpose: "Details planned feature releases including voice interactions, WASM OCR parsing, and open-source UI libraries.",
    status: "In Progress",
    body: "Phase 1 (Completed): Streaming multi-model chat UI with line-buffering error recovery. Phase 2 (In Progress): Local Web Speech voice input and browser Tesseract OCR document parsing. Phase 3 (Planned): Multi-agent memory synchronization via Ledger Go backend and public NPM release of AXIOM UI components.",
    snippet: `v1.0 (Live): SSE AI Streaming + History Persistence
v2.0 (Active): Voice Input + Document OCR Parsing
v3.0 (Planned): Open-Source AXIOM UI Component Package`,
  },
];

function Docs() {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [query, setQuery] = useState("");

  const categories = ["All", "Architecture", "API Reference", "Setup & Config", "Development Notes", "Roadmap"];

  const filtered = useMemo(() => {
    return DOCS_DATABASE.filter((doc) => {
      const matchCat = selectedCat === "All" || doc.category === selectedCat;
      const matchQ =
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.purpose.toLowerCase().includes(query.toLowerCase()) ||
        doc.body.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [selectedCat, query]);

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-6">
        <Eyebrow>Developer Portal</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Technical Documentation <span className="text-shine">& Guides.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Clear, structured documentation for developers, collaborators, and visitors exploring the architecture, API contracts, folder layouts, and deployment guides of <strong>AXIOM Studio</strong>.
        </p>
      </section>

      {/* Portal Layout: Search Sidebar + Docs Cards */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filter Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="glass rounded-2xl p-5 space-y-4">
              <div className="eyebrow text-crimson-soft">Search Docs</div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="w-full rounded-xl bg-input border border-border px-3.5 py-2 text-xs outline-none focus:border-crimson/50 font-mono"
              />
            </div>

            <div className="glass rounded-2xl p-5 space-y-3">
              <div className="eyebrow text-foreground mb-1">Categories</div>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs font-medium transition ${
                      selectedCat === cat
                        ? "glass-red text-foreground font-semibold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Docs Entries */}
          <div className="space-y-8">
            {filtered.map((doc) => (
              <div key={doc.id} className="glass rounded-3xl p-6 md:p-8 hover:red-glow transition space-y-4" id={doc.id}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-crimson-soft">{doc.category}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">#{doc.id}</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded ${
                      doc.status === "Active & Stable"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-300"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {doc.title}
                </h2>

                <p className="text-xs leading-relaxed text-foreground font-medium">
                  <strong>Purpose: </strong> {doc.purpose}
                </p>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {doc.body}
                </p>

                <div className="rounded-xl border border-border bg-input p-4 font-mono text-[11px] text-muted-foreground overflow-x-auto">
                  <div className="text-crimson-soft mb-1">// Code / Command Reference</div>
                  <pre className="whitespace-pre text-foreground">{doc.snippet}</pre>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="glass rounded-3xl p-12 text-center text-sm text-muted-foreground">
                No documentation entries found matching "{query}".
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-red rounded-3xl p-10 text-center">
          <Eyebrow>Developer Support</Eyebrow>
          <h2 className="hero-title mt-4 text-3xl md:text-4xl">Have technical questions or feedback?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg glass-red px-6 py-2.5 text-sm font-medium">
              Contact Developers →
            </Link>
            <Link to="/projects" className="rounded-lg border border-border bg-secondary/80 px-6 py-2.5 text-sm font-medium hover:bg-secondary transition">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
