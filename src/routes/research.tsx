import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Exploration — Raj Choudhury & AXIOM" },
      {
        name: "description",
        content:
          "Engineering research notes, experiments, and architectural investigations conducted at AXIOM Studio.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Research & Exploration — Raj Choudhury & AXIOM" },
      {
        property: "og:description",
        content:
          "Multi-model routing benchmarks, agentic memory ledgers, latency budgets, and human-machine surface design.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/research" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/research" }],
  }),
  component: Research,
});

interface ResearchPillar {
  id: string;
  category: "Completed Result" | "Active Research";
  title: string;
  exploring: string;
  whyItMatters: string;
  questions: string[];
  experiments: string;
  lessonsLearned: string;
  nextSteps: string;
}

const PILLARS: ResearchPillar[] = [
  {
    id: "RES-01",
    category: "Completed Result",
    title: "Multi-Model Fallback & Hedging Routing",
    exploring: "Dispatching user prompts across heterogeneous LLM endpoints (Gemini, Claude, Groq) with automated fallback.",
    whyItMatters: "Single LLM providers experience latency spikes, rate limits, or unexpected downtime. A fallback router ensures 99.9% chat availability.",
    questions: [
      "How fast can an intent classifier route queries without adding latency?",
      "When should requests be hedged in parallel versus sequenced sequentially?",
    ],
    experiments: "Benchmarked 500 prompts across Groq, Gemini, and Claude endpoints measuring p50/p99 latency.",
    lessonsLearned: "Fast regex and keyword intent classification (< 5ms) outperforms calling a separate micro-LLM classifier.",
    nextSteps: "Integrating dynamic token pricing models into the router decision matrix.",
  },
  {
    id: "RES-02",
    category: "Completed Result",
    title: "SSE Chunk Line Buffering for Real-Time Streaming",
    exploring: "Handling network stream chunk boundaries in Server-Sent Events (SSE) without losing text tokens or breaking JSON frames.",
    whyItMatters: "Raw TCP/HTTP streams deliver arbitrary text byte chunks that frequently break JSON tokens across network packet boundaries.",
    questions: [
      "How to parse chunked SSE streams cleanly across all browser engines?",
      "How to prevent corrupted tokens when JSON lines split mid-packet?",
    ],
    experiments: "Simulated packet fragmentations across mobile network conditions using custom stream adapters.",
    lessonsLearned: "Keeping a trailing string buffer for incomplete lines and popping complete `\n` delimited strings resolves parsing exceptions completely.",
    nextSteps: "Extending the SSE stream reader with automatic retry reconnection.",
  },
  {
    id: "RES-03",
    category: "Active Research",
    title: "Episodic & Semantic Agent Memory (Ledger)",
    exploring: "Structuring persistent user memory as typed episodic (events), semantic (facts), and task preference records.",
    whyItMatters: "Stateless chat windows force users to repeat preferences and background information endlessly.",
    questions: [
      "Can user intent be automatically classified into memory categories?",
      "How to vector search relevant user facts in under 20ms?",
    ],
    experiments: "Constructed HNSW vector indices using PostgreSQL pgvector combined with Redis hot-memory caches.",
    lessonsLearned: "Typed memory layers query significantly faster than dumping all chat transcripts into a single flat vector database.",
    nextSteps: "Testing auto-summarization pipelines that compress old episodic memories into semantic facts.",
  },
  {
    id: "RES-04",
    category: "Active Research",
    title: "Latency Budgets as a UI Constraint",
    exploring: "Enforcing strict 900ms latency budgets per AI model response to maintain natural human-computer interaction flow.",
    whyItMatters: "Delays over 1.5 seconds degrade user attention and make interactive AI tools feel sluggish.",
    questions: [
      "What is the maximum tolerable delay before users abandon a prompt query?",
      "How to gracefully degrade output quality if a model stalls?",
    ],
    experiments: "Tested progressive UI loading states, streaming indicators, and model fallback triggers under artificial network throttling.",
    lessonsLearned: "Displaying typing telemetry indicators immediately improves perceived response speed by over 40%.",
    nextSteps: "Implementing automated model switching if the primary API model takes longer than 800ms to return the first token.",
  },
];

function Research() {
  const [activeTab, setActiveTab] = useState<"All" | "Completed Result" | "Active Research">("All");

  const filtered = PILLARS.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-8">
        <Eyebrow>Field Notes & Architecture</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Engineering research, <span className="text-shine">empirically tested.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Our research is grounded in real engineering experiments: benchmarking LLM latencies, building durable memory schemas, and refining user interface interactions.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="glass rounded-3xl p-6 md:p-8">
            <Eyebrow>System Blueprint</Eyebrow>
            <h2 className="mt-2 font-display text-2xl">AXIOM Multi-Model & Memory Routing</h2>
            <div className="mt-6 rounded-2xl border border-border bg-input p-6 grid-bg">
              <svg
                viewBox="0 0 400 220"
                className="w-full"
                role="img"
                aria-label="AXIOM-AI WORKSPACE architecture diagram"
              >
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--crimson-soft)" />
                    <stop offset="1" stopColor="var(--crimson)" />
                  </linearGradient>
                </defs>
                {[
                  ["User Prompt", 30, 100],
                  ["Classifier", 130, 60],
                  ["Router", 130, 140],
                  ["Gemini", 260, 30],
                  ["Claude", 260, 90],
                  ["DeepSeek", 260, 150],
                  ["Ledger", 260, 210],
                ].map(([t, x, y]) => (
                  <g key={t as string}>
                    <rect
                      x={(x as number) - 40}
                      y={(y as number) - 14}
                      width="80"
                      height="28"
                      rx="8"
                      fill="var(--graphite)"
                      stroke="url(#g)"
                    />
                    <text
                      x={x as number}
                      y={(y as number) + 4}
                      textAnchor="middle"
                      fontSize="10"
                      style={{
                        fill: "var(--foreground)",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      {t}
                    </text>
                  </g>
                ))}
                {[
                  [70, 100, 90, 60],
                  [70, 100, 90, 140],
                  [170, 60, 220, 30],
                  [170, 60, 220, 90],
                  [170, 140, 220, 90],
                  [170, 140, 220, 150],
                  [170, 140, 220, 210],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--crimson)"
                    strokeOpacity="0.5"
                    strokeDasharray="3 3"
                  />
                ))}
                <circle cx="220" cy="90" r="3" fill="var(--crimson-soft)">
                  <animate
                    attributeName="r"
                    values="3;6;3"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Prompts flow through intent classification and routing layers before querying provider endpoints and saving execution telemetry into Ledger memory.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-secondary/30 p-6">
              <div className="eyebrow text-crimson-soft">Research Approach</div>
              <h3 className="mt-2 font-display text-xl">Empirical Verification</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                We clearly distinguish between completed technical results and ongoing exploratory research. We avoid claiming formal academic discoveries, focusing instead on software engineering benchmarks and production system improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mx-auto max-w-7xl px-6 py-8 border-t border-border/40">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <Eyebrow>Research Pillars</Eyebrow>
            <h2 className="hero-title mt-2 text-3xl md:text-4xl">Investigations & Findings</h2>
          </div>
          <div className="flex gap-2">
            {(["All", "Completed Result", "Active Research"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  activeTab === tab
                    ? "glass-red"
                    : "border border-border bg-secondary/80 hover:bg-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Research Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <div key={item.id} className="glass rounded-2xl p-6 flex flex-col justify-between hover:red-glow transition space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded ${
                      item.category === "Completed Result"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-300"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="eyebrow text-[10px] text-muted-foreground">{item.id}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  <strong>What we explore: </strong> {item.exploring}
                </p>

                <div className="mt-4 space-y-3 text-xs leading-relaxed">
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <strong className="text-foreground">Why It Matters: </strong>
                    <span className="text-muted-foreground">{item.whyItMatters}</span>
                  </div>

                  <div>
                    <strong className="text-foreground">Questions Investigated: </strong>
                    <ul className="mt-1 list-disc pl-4 text-muted-foreground space-y-1">
                      {item.questions.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-foreground">Experiments Conducted: </strong>
                    <span className="text-muted-foreground">{item.experiments}</span>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
                    <strong className="text-emerald-400">Lessons Learned: </strong>
                    <span className="text-muted-foreground">{item.lessonsLearned}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border/40 text-xs">
                <strong className="text-crimson-soft">Next Steps: </strong>
                <span className="text-muted-foreground">{item.nextSteps}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-red rounded-3xl p-10 text-center">
          <Eyebrow>Research Partnerships</Eyebrow>
          <h2 className="hero-title mt-4 text-3xl md:text-4xl">Interested in technical exchanges or benchmarks?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg glass-red px-6 py-2.5 text-sm font-medium">
              Reach Out →
            </Link>
            <Link to="/docs" className="rounded-lg border border-border bg-secondary/80 px-6 py-2.5 text-sm font-medium hover:bg-secondary transition">
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
