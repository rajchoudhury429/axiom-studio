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
          "Official technical documentation, architecture guides, API references, and development guides for AXIOM Workspace.",
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
    title: "Sci-Fi HUD UI & Collapsible Dock Layout",
    purpose: "Provides the visual specifications of AXIOM's sci-fi themed, layout-locked student workspace.",
    status: "Active & Stable",
    body: "AXIOM is designed around a high-tech dark theme (#050505, #0d0d0d) with red glowing borders. It uses the Rajdhani font for geometric headers, JetBrains Mono for system readouts, and incorporates an auto-hiding collapsible navigation hexagon dock that shrinks to a pulsing dot on sub-pages (AI Chat, Smart Notes, Task Manager) to maximize active screen space.",
    snippet: `Layout components: CircuitBackground (rotating vectors) ➔ AxiomOrb (Three.js WebGL visualizer) ➔ Collapsible Hexagon Dock (Framer Motion)`,
  },
  {
    id: "dev-structure",
    category: "Development Notes",
    title: "Repository Folder Structure & Controller Layout",
    purpose: "Outlines the directory layout and modular folder structure for frontend and backend workspaces.",
    status: "Active & Stable",
    body: "The root workspace directory splits into frontend/ (React Vite application running on port 5173) and backend/ (Express server on port 5000). The backend folder organizes routes and controllers for user authentication, dashboard metrics tracking, notes CRUD, PDF file parsers, Pomodoro countdowns, and Windows local command utilities.",
    snippet: `A.X.I.O.M/
├── backend/           # Node.js + Express API
│   ├── server.js      # Server entry (port 5000)
│   └── src/           # Controllers, routes, utils (agentLoop, volumeHelper)
└── frontend/          # React + Vite application (port 5173)`,
  },
  {
    id: "setup-env",
    category: "Setup & Config",
    title: "SQLite Database Schema (axiom.db)",
    purpose: "Documents the schema configuration and tables used to persist local student study data.",
    status: "Active & Stable",
    body: "Student data is persisted locally in an embedded SQLite database using better-sqlite3. Table schemas include users (with administrative role controls), notes (folders, titles, tags, content), tasks (categories and priority scales), events (timetable schedules), flashcards (for spaced repetition), and analytics (daily study minutes tracking).",
    snippet: `SQLite Tables:
- users: id, name, email, password_hash, role
- notes: id, user_id, title, content, folder, tags
- tasks: id, user_id, title, status, priority, due_date
- flashcards: id, subject_id, front, back, next_review_date`,
  },
  {
    id: "api-chat",
    category: "API Reference",
    title: "REST API Endpoint Reference",
    purpose: "Provides the endpoints mapped inside the Express server for auth, telemetry, and data queries.",
    status: "Active & Stable",
    body: "Endpoints are split into public auth routes, protected student database CRUD (notes, tasks, Pomodoro timers), and restricted administrative controls. System diagnostics, volume controllers, and local app launchers are strictly limited to administrator validation roles.",
    snippet: `POST /api/auth/login ➔ Public authentication
GET /api/dashboard/stats ➔ Protected study telemetry logs
GET /api/system/telemetry ➔ Restricted Admin CPU/RAM check
POST /api/pdf/parse ➔ Protected PDF ingestion`,
  },
  {
    id: "roadmap-v2",
    category: "Development Notes",
    title: "ReAct Agent Loop & Desktop Launcher Server",
    purpose: "Explains how the AI executes shell scripts and opens Windows desktop apps from browser actions.",
    status: "In Progress",
    body: "The system features a Python-based OS Launcher app listening on port 5050. When the React client requests a local app start (VS Code, Chrome, Calculator), the Node backend forwards the command to the Tkinter server, which spawns background threads executing os.system commands, bridging browser sandbox isolation constraints.",
    snippet: `Frontend client (Port 5173) ➔ Express backend (Port 5000) ➔ Python HTTP Launcher (Port 5050) ➔ os.system('start cmd')`,
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-6">
        <Eyebrow>Developer Portal</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Technical Documentation <span className="text-shine">& Guides.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Clear, structured documentation for developers, collaborators, and visitors exploring the architecture, API contracts, folder layouts, and deployment guides of <strong>AXIOM Workspace</strong>.
        </p>
      </section>

      {/* Portal Layout: Search Sidebar + Docs Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filter Sidebar */}
          <aside className="space-y-4 lg:space-y-6 lg:sticky lg:top-24 self-start">
            <div className="glass rounded-2xl p-4 lg:p-5 space-y-3 lg:space-y-4">
              <div className="eyebrow text-crimson-soft">Search Docs</div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="w-full rounded-xl bg-input border border-border px-3.5 py-2 text-xs outline-none focus:border-crimson/50 font-mono text-foreground"
              />
            </div>

            <div className="glass rounded-2xl p-4 lg:p-5 space-y-3">
              <div className="eyebrow text-foreground mb-1 lg:mb-2">Categories</div>
              {/* Desktop view */}
              <nav className="hidden lg:block space-y-1">
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
              {/* Mobile/Tablet view: Horizontal scrollable tags */}
              <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      selectedCat === cat
                        ? "glass-red text-foreground font-semibold"
                        : "border border-border bg-secondary/80 text-muted-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
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
