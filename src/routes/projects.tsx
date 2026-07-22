import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AXIOM Systems & Core Intelligence" },
      {
        name: "description",
        content:
          "Explore the AI systems, web applications, memory layers, and design tools engineered by Raj Choudhury and the AXIOM team.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Projects — AXIOM Systems & Core Intelligence" },
      {
        property: "og:description",
        content:
          "Detailed technical breakdowns of AXIOM v1 reasoning surface, Ledger agent memory, Router v2, and frontend design kits.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/projects" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/projects" }],
  }),
  component: Projects,
});

interface ProjectDetail {
  id: string;
  name: string;
  status: "Live & Active" | "Beta / Testing" | "Active Research" | "In Development";
  year: string;
  tag: string;
  overview: string;
  whyCreated: string;
  problem: string;
  features: string[];
  stack: string[];
  approach: string;
  challenges: string;
  solutions: string;
  currentStatus: string;
  futurePlans: string;
  capabilities?: string[];
}

const PROJECTS: ProjectDetail[] = [
  {
    id: "axiom-v1",
    name: "AXIOM v1 — Reasoning & AI Surface",
    status: "Live & Active",
    year: "2026 – Present",
    tag: "Unified Multi-Model AI Interface & Intelligence Workspace",
    overview:
      "AXIOM v1 is our primary multi-model AI reasoning surface. It serves as a unified workspace connecting multiple AI models (Gemini, Claude, DeepSeek, Groq) with persistent user context, structured output parsing, and dark-futurist interface design.",
    whyCreated:
      "Most AI assistant tools force users to switch between separate browser tabs or rely on single-provider chat wrappers with no shared history.",
    problem:
      "Stateless conversation loops, provider lock-in, latency spikes, and lack of persistent memory across sessions.",
    features: [
      "Multi-model model prompt routing (Gemini 2.5/3.0, Claude 3.5, DeepSeek, Groq)",
      "Real-time SSE text streaming with chunk line buffering",
      "Persistent conversation history stored in local state & browser database",
      "Productivity tools: Markdown parser, code syntax highlighter, one-click copy",
      "Document analysis & study assistance (text & structured code parsing)",
      "Voice interaction & OCR pipeline (in active development for v2)",
    ],
    capabilities: [
      "AI Assistance: Conversational reasoning, query execution, code explanation",
      "Productivity & Study Helper: Summarizing complex notes, generating study guides",
      "Document & Code Analysis: Parsing code snippets, finding bugs, refactoring logic",
      "Planning & Analytics: Task breakdown, step-by-step implementation plans",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "TanStack Start",
      "Vite",
      "Tailwind CSS v4",
      "Groq API",
      "Framer Motion",
      "Radix UI",
    ],
    approach:
      "Built with a clean separation between the client UI (`ChatWindow`), stream listener services (`ai-service.ts`), and server API handlers (`api/chat.ts`).",
    challenges:
      "Handling network chunk boundaries in SSE streams without losing text tokens, and filtering empty message payloads.",
    solutions:
      "Implemented SSE buffer concatenation and payload filtering prior to Groq API requests.",
    currentStatus:
      "Live in active use across AXIOM Studio. Serving as the embedded assistant on axiom.studio.",
    futurePlans:
      "Integrating local OCR processing, full audio-to-text voice input, and multi-document PDF embedding vectors.",
  },
  {
    id: "ledger",
    name: "Ledger — Agentic Memory Store",
    status: "Beta / Testing",
    year: "2026",
    tag: "Durable Episodic & Semantic Memory Layer",
    overview:
      "Ledger is a dedicated backend memory layer designed to give AI agents persistent memory across sessions, storing user preferences, facts, and task states.",
    whyCreated:
      "AI agents lose all context between independent sessions, leading to repetitive prompts and poor user experience.",
    problem:
      "Context windows are expensive and ephemeral. Storing full chat logs quickly exceeds token limits.",
    features: [
      "Typed memory layers: Episodic, Semantic, and Preference stores",
      "Vector similarity search using PostgreSQL and pgvector",
      "Fast memory caching with Redis TTL indices",
      "Audit trail for agent context retrievals",
    ],
    stack: ["Go", "PostgreSQL", "pgvector", "Redis", "REST / gRPC"],
    approach:
      "Engineered in Go for low-latency memory query handling, storing embeddings alongside structured JSON metadata.",
    challenges:
      "Structuring vector similarity search queries that return relevant context in under 20ms.",
    solutions:
      "Combined HNSW indices in pgvector with Redis query caching for frequently retrieved user key-value facts.",
    currentStatus:
      "Beta testing within internal AXIOM agent prototypes.",
    futurePlans:
      "Exposing client SDKs for Next.js, Node.js, and Python agent frameworks.",
  },
  {
    id: "router-v2",
    name: "Router v2 — Model Routing Engine",
    status: "Active Research",
    year: "2026",
    tag: "Latency & Capability-Aware Prompt Dispatcher",
    overview:
      "Router v2 evaluates prompt intent, length, and technical complexity to automatically route queries to the optimal LLM provider.",
    whyCreated:
      "Simple prompts don't need heavyweight 70B models, while complex math or coding requires specialized reasoning models.",
    problem:
      "Manual model selection is confusing for users, and hardcoded rules lead to unnecessary costs or API rate limits.",
    features: [
      "Intent classifier for coding, math, general chat, and reasoning",
      "Latency-aware fallback routing on provider downtime",
      "Token budget estimator",
    ],
    stack: ["Node.js", "TypeScript", "OpenRouter API", "Groq", "Zod"],
    approach:
      "Analyzing incoming prompt features through lightweight token heuristics before dispatching to the target LLM provider.",
    challenges:
      "Accurately scoring prompt difficulty without introducing latency to the request.",
    solutions:
      "Used fast regex heuristics and lightweight classification rules running under 5ms prior to model dispatch.",
    currentStatus:
      "Research phase with active benchmarks comparing accuracy and cost savings.",
    futurePlans:
      "Integrating fallback hedging where requests are dispatched in parallel if a provider stalls.",
  },
  {
    id: "axiom-ui",
    name: "AXIOM UI & Design System",
    status: "Live & Active",
    year: "2026",
    tag: "Dark Futurist Component Library & Aesthetic Tokens",
    overview:
      "A complete UI component library and visual design system engineered for AXIOM web applications, featuring crimson red accents, glassmorphic panels, and accessible Radix UI primitives.",
    whyCreated:
      "To ensure consistent visual identity, dark mode contrast, typography hierarchy, and accessibility across all studio projects.",
    problem:
      "Generic bootstrap components fail to convey a premium, modern engineering aesthetic.",
    features: [
      "Custom CSS variables for HSL color tokens and glassmorphism",
      "Accessible Radix UI primitives (Accordion, Dialog, Select, Sonner)",
      "Dark and Light mode theme support with seamless toggling",
    ],
    stack: ["React 19", "Tailwind CSS v4", "Radix UI", "Lucide React", "CSS Modules"],
    approach:
      "Built with utility-first Tailwind classes merged via `clsx` and `tailwind-merge` (`cn` helper).",
    challenges:
      "Maintaining high contrast readability across glassmorphic layers in both light and dark themes.",
    solutions:
      "Tailored HSL theme tokens with calibrated background overlays and borders.",
    currentStatus:
      "Fully integrated across all pages of `axiom.studio`.",
    futurePlans:
      "Publishing as an open-source React component package.",
  },
];

function Projects() {
  const [activeId, setActiveId] = useState<string>("axiom-v1");

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-12">
        <Eyebrow>Systems & Projects Log</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Software engineered <span className="text-shine">for purpose.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Explore the projects built by <strong>Raj Choudhury</strong> and the <strong>AXIOM Studio</strong> team. Click on any project card below to review its architecture, features, challenges, and future roadmap.
        </p>
      </section>

      {/* Projects Overview Grid & Detail Inspector */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Project List Column */}
          <div className="space-y-4 lg:col-span-5">
            <Eyebrow className="mb-2">Select Project to Inspect</Eyebrow>
            {PROJECTS.map((p) => {
              const isSelected = activeId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`w-full text-left rounded-2xl border p-5 transition ${
                    isSelected
                      ? "border-crimson/60 bg-crimson/10 shadow-lg"
                      : "border-border bg-secondary/40 hover:bg-secondary/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded ${
                        p.status.includes("Live")
                          ? "bg-emerald-500/15 text-emerald-400"
                          : p.status.includes("Beta")
                          ? "bg-amber-500/15 text-amber-300"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {p.status}
                    </span>
                    <span className="eyebrow text-[10px]">{p.year}</span>
                  </div>
                  <div className="mt-3 font-display text-xl font-semibold text-foreground">
                    {p.name}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {p.tag}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded bg-background/60 px-2 py-0.5 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Column */}
          <div className="lg:col-span-7">
            {PROJECTS.filter((p) => p.id === activeId).map((p) => (
              <div key={p.id} className="glass-red rounded-3xl p-6 md:p-10 space-y-8 animate-rise">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Eyebrow>{p.tag}</Eyebrow>
                    <span className="font-mono text-xs text-crimson-soft">{p.year}</span>
                  </div>
                  <h2 className="hero-title mt-2 text-3xl md:text-4xl">{p.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.overview}
                  </p>
                </div>

                {/* Core Capabilities for AXIOM v1 */}
                {p.capabilities && (
                  <div className="rounded-2xl border border-crimson/30 bg-crimson/5 p-5">
                    <div className="eyebrow text-crimson-soft mb-3">Core Capabilities Breakdown</div>
                    <div className="grid gap-2 text-xs leading-relaxed">
                      {p.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <span className="text-crimson-soft font-bold">✓</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Problem & Solution */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                    <div className="eyebrow text-crimson-soft mb-1">Why & Problem Solved</div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {p.problem}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                    <div className="eyebrow text-foreground mb-1">Development Approach</div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {p.approach}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <div className="eyebrow mb-3">Key Features</div>
                  <ul className="grid gap-2 sm:grid-cols-2 text-xs">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson-soft mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                    <div className="eyebrow text-amber-400/90 mb-1">Technical Challenge</div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {p.challenges}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                    <div className="eyebrow text-emerald-400/90 mb-1">Engineering Solution</div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {p.solutions}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <div className="eyebrow mb-3">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-secondary/80 px-3 py-1 text-xs font-mono text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status & Roadmap */}
                <div className="pt-2 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="eyebrow">Status: </span>
                    <span className="font-medium text-foreground">{p.currentStatus}</span>
                  </div>
                  <div>
                    <span className="eyebrow">Future: </span>
                    <span className="text-muted-foreground">{p.futurePlans}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass rounded-3xl p-10 text-center">
          <Eyebrow>Future Development</Eyebrow>
          <h2 className="hero-title mt-4 text-3xl md:text-4xl">Have questions about our project architecture?</h2>
          <p className="mt-4 mx-auto max-w-lg text-xs md:text-sm text-muted-foreground">
            Explore our technical documentation or reach out directly to discuss implementation details.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/docs" className="rounded-lg glass-red px-6 py-2.5 text-sm font-medium">
              Open Documentation →
            </Link>
            <Link to="/contact" className="rounded-lg border border-border bg-secondary/80 px-6 py-2.5 text-sm font-medium hover:bg-secondary transition">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
