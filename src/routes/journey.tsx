import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey & Roadmap — Raj Choudhury & AXIOM" },
      {
        name: "description",
        content:
          "The evolution of AXIOM Studio: from early coding explorations to multi-model AI systems, team collaboration, and future roadmaps.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Journey & Roadmap — Raj Choudhury & AXIOM" },
      {
        property: "og:description",
        content:
          "Chronological timeline of milestones, engineering experiments, current developments, and long-term vision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/journey" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/journey" }],
  }),
  component: Journey,
});

interface Milestone {
  phase: string;
  period: string;
  title: string;
  description: string;
  details: string;
  state: "completed" | "active" | "next" | "future";
}

const MILESTONES: Milestone[] = [
  {
    phase: "Phase 01",
    period: "Early Stage",
    title: "Web Fundamentals & Programming",
    description: "Beginning the technical journey with foundational HTML, CSS, JavaScript, and browser rendering principles.",
    details: "Raj Choudhury starts exploring software engineering by building small interactive web pages, understanding DOM events, CSS styling, and client-side logic from first principles.",
    state: "completed",
  },
  {
    phase: "Phase 02",
    period: "Exploration Phase",
    title: "Full-Stack Web Engineering",
    description: "Deepening technical expertise into React, TypeScript, backend API creation, and relational database management.",
    details: "Building full-stack web applications, learning state management patterns, component lifecycle optimization, and REST API architecture. Testing modern build bundlers like Vite.",
    state: "completed",
  },
  {
    phase: "Phase 03",
    period: "AXIOM Development",
    title: "AI Integration & Architecture",
    description: "Forming AXIOM Studio alongside Daniyal, Jigyashu, Banajit, and Abhijeet to engineer practical AI surfaces.",
    details: "Designing the multi-model AI routing engine (AXIOM v1) and agent memory store (Ledger). Establishing unified UI design tokens, dark mode glassmorphism, and Framer Motion animations.",
    state: "completed",
  },
  {
    phase: "Phase 04",
    period: "Current Phase",
    title: "Platform Launch & Optimization",
    description: "Live deployment of `axiom.studio`, embedded AI assistant integration, and SSE streaming optimizations.",
    details: "Fixing real-time SSE stream buffering, adding fallback environment configs across Nitro and Netlify serverless runtimes, and launching an interactive documentation hub.",
    state: "active",
  },
  {
    phase: "Phase 05",
    period: "Next Milestones",
    title: "Voice Interaction & Document OCR",
    description: "Integrating client-side audio voice input and Optical Character Recognition (OCR) for document analysis.",
    details: "Developing browser Web Speech / Whisper API integration for hands-free voice interactions, alongside client Tesseract / WASM OCR processing for scanning PDFs and study notes.",
    state: "next",
  },
  {
    phase: "Phase 06",
    period: "Future Roadmap",
    title: "Open Component Library & Multi-Agent Frameworks",
    description: "Publishing AXIOM UI as an open-source React package and expanding agentic memory protocols.",
    details: "Packaging dark-futurist Radix UI component primitives for public distribution and refining multi-agent memory synchronization protocols in Ledger v2.",
    state: "future",
  },
];

function Journey() {
  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-8">
        <Eyebrow>Milestone Timeline</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          The engineering path <span className="text-shine">from then to next.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          A chronological index of our development stages — tracking how early programming curiosity evolved into AXIOM Studio, active production systems, and long-term project roadmaps.
        </p>
      </section>

      {/* Timeline List */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative border-l border-border/60 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {MILESTONES.map((m) => (
            <div key={m.phase} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 h-5 w-5 rounded-full border-2 transition ${
                  m.state === "completed"
                    ? "bg-emerald-500 border-emerald-400"
                    : m.state === "active"
                    ? "bg-crimson border-crimson-soft animate-pulse-glow"
                    : m.state === "next"
                    ? "bg-amber-500 border-amber-400"
                    : "bg-secondary border-border"
                }`}
              />

              <div className="glass rounded-2xl p-6 md:p-8 hover:red-glow transition space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-crimson-soft">{m.phase}</span>
                    <span className="text-xs font-mono text-muted-foreground">· {m.period}</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded ${
                      m.state === "completed"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : m.state === "active"
                        ? "bg-crimson/20 text-crimson-soft"
                        : m.state === "next"
                        ? "bg-amber-500/15 text-amber-300"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {m.state}
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {m.title}
                </h2>

                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {m.description}
                </p>

                <p className="text-xs leading-relaxed text-muted-foreground border-t border-border/40 pt-3">
                  {m.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-red rounded-3xl p-10 text-center">
          <Eyebrow>Follow Our Growth</Eyebrow>
          <h2 className="hero-title mt-4 text-3xl md:text-4xl">Interested in our current & future milestones?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="rounded-lg glass-red px-6 py-2.5 text-sm font-medium">
              View Active Projects →
            </Link>
            <Link to="/contact" className="rounded-lg border border-border bg-secondary/80 px-6 py-2.5 text-sm font-medium hover:bg-secondary transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
