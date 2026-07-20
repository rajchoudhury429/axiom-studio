import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — AXIOM Studio" },
      {
        name: "description",
        content:
          "Architecture notes, AI routing diagrams, and forward research from AXIOM.",
      },
    ],
  }),
  component: Research,
});

const NOTES = [
  {
    id: "N-014",
    title: "Adaptive model routing under uncertainty",
    body: "When the router is unsure, hedge — dispatch two providers in parallel and rank on confidence.",
  },
  {
    id: "N-013",
    title: "Episodic memory as first-class type",
    body: "Memory typed by intent (fact, preference, task) retrieves better than one flat vector store.",
  },
  {
    id: "N-012",
    title: "The one-good-answer axiom",
    body: "Users don't want completions. They want one good answer, arrived at legibly.",
  },
  {
    id: "N-011",
    title: "Latency budgets as a design constraint",
    body: "Every model call has a 900ms budget. Above that we degrade gracefully to a smaller provider.",
  },
];

function Research() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-8">
        <Eyebrow>Field Notes</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Thinking in <span className="text-shine">public.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="glass rounded-3xl p-8">
            <Eyebrow>AI Routing · v2</Eyebrow>
            <h2 className="mt-2 font-display text-2xl">Architecture</h2>
            <div className="mt-6 rounded-2xl border border-border bg-input p-6 grid-bg">
              <svg viewBox="0 0 400 220" className="w-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--crimson-soft)" />
                    <stop offset="1" stopColor="var(--crimson)" />
                  </linearGradient>
                </defs>
                {[
                  ["Prompt", 30, 100],
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
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Prompts pass through an intent classifier and a policy-based
              router, which dispatches to one or more providers with graceful
              degradation and writes the trace into the ledger for later
              retrieval.
            </p>
          </div>

          <div className="space-y-4">
            {NOTES.map((n) => (
              <div
                key={n.id}
                className="glass rounded-2xl p-6 hover:red-glow transition"
              >
                <div className="flex items-center justify-between">
                  <div className="eyebrow">{n.id}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">
                    note
                  </div>
                </div>
                <div className="mt-2 font-display text-lg font-medium">
                  {n.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="glass-red rounded-3xl p-8 md:p-12">
          <Eyebrow>Open Questions</Eyebrow>
          <h3 className="hero-title mt-4 text-3xl md:text-4xl">
            What are we still trying to answer?
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Can memory be typed by intent without asking the user?",
              "What's the smallest reasoning contract that's still useful?",
              "How much of a router can be learned vs. specified?",
              "Where does human-in-the-loop stop being helpful?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-crimson-soft" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
