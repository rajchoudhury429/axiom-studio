import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — AXIOM Studio" },
    { name: "description", content: "Systems built by AXIOM. AXIOM v1, routing infrastructure, and forward research." },
  ]}),
  component: Projects,
});

const PROJECTS = [
  {
    name: "AXIOM v1", status: "Live", year: "2025",
    tag: "Multi-model reasoning surface",
    stack: ["Next.js", "Node", "MongoDB", "Redis", "Gemini", "Claude", "OpenRouter"],
    problem: "AI conversations are fragmented, forgetful, and locked to single providers.",
    solution: "A unified interface with model routing, persistent memory, and provider-agnostic orchestration.",
    architecture: "Edge gateway → intent classifier → routing plane → provider adapters → memory ledger.",
  },
  {
    name: "Ledger", status: "Beta", year: "2026",
    tag: "Durable memory for conversational agents",
    stack: ["Postgres", "pgvector", "Redis", "Go"],
    problem: "Context windows are ephemeral. Users repeat themselves indefinitely.",
    solution: "A per-user memory store with typed episodic and semantic layers, retrievable across agents.",
    architecture: "Write-through vector store with typed schemas, TTL zones, and audit trail.",
  },
  {
    name: "Router v2", status: "Research", year: "2026",
    tag: "Cost & capability aware model routing",
    stack: ["Rust", "gRPC", "OpenTelemetry"],
    problem: "The 'right' model varies per prompt — but users shouldn't choose.",
    solution: "A learned router that dispatches by cost, capability, and confidence, per turn.",
    architecture: "Feature extractor → policy head → provider fanout with hedging.",
  },
];

function Projects() {
  const [open, setOpen] = useState(0);
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12">
        <Eyebrow>Systems Log</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          What we've <span className="text-shine">actually shipped.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Not a portfolio. A working index of the systems currently running under the
          AXIOM name — and a few we're still teaching to walk.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 space-y-4">
        {PROJECTS.map((p, i) => {
          const isOpen = open === i;
          return (
            <div key={p.name} className={`overflow-hidden rounded-3xl border transition ${isOpen ? "border-[oklch(0.55_0.22_25/50%)] bg-[oklch(0.55_0.22_25/5%)]" : "border-white/8 bg-white/[0.02]"}`}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full grid grid-cols-[1fr_auto] items-center gap-6 p-6 md:p-8 text-left">
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${p.status === "Live" ? "bg-emerald-500/15 text-emerald-300" : p.status === "Beta" ? "bg-amber-500/15 text-amber-300" : "bg-white/5 text-muted-foreground"}`}>{p.status}</span>
                    <span className="eyebrow text-[10px]">{p.year}</span>
                  </div>
                  <div className="mt-3 font-display text-3xl md:text-4xl font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.tag}</div>
                </div>
                <div className={`h-10 w-10 rounded-full glass-red flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}>+</div>
              </button>
              {isOpen && (
                <div className="border-t border-white/5 p-6 md:p-8 grid gap-8 md:grid-cols-2 animate-rise">
                  <div>
                    <div className="eyebrow">Problem</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>
                    <div className="eyebrow mt-6">Solution</div>
                    <p className="mt-2 text-sm leading-relaxed">{p.solution}</p>
                    <div className="eyebrow mt-6">Architecture</div>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">{p.architecture}</p>
                  </div>
                  <div>
                    <div className="eyebrow">Stack</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map(s => (
                        <span key={s} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono">{s}</span>
                      ))}
                    </div>
                    <div className="mt-6 aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-[oklch(0.15_0.05_20)] to-[oklch(0.06_0.01_20)] grid-bg flex items-center justify-center">
                      <div className="glass-red rounded-full px-4 py-1.5 text-[11px] font-mono">preview.render</div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <button className="rounded-lg glass-red px-4 py-2 text-xs font-medium">Live Demo</button>
                      <button className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium">GitHub</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </PageShell>
  );
}
