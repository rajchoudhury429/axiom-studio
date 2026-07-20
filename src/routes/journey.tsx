import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — AXIOM Studio" },
      {
        name: "description",
        content:
          "The roadmap of AXIOM: planning, research, development, testing, and future versions.",
      },
    ],
  }),
  component: Journey,
});

const STAGES = [
  {
    phase: "Phase 00",
    title: "Planning",
    body: "Field research, interviews, and a five-page thesis nobody has read since.",
    state: "done",
  },
  {
    phase: "Phase 01",
    title: "Research",
    body: "Model surveys, latency benchmarks, memory typology. We took notes.",
    state: "done",
  },
  {
    phase: "Phase 02",
    title: "Development",
    body: "AXIOM v1 hand-built from the routing layer up. First provider adapters online.",
    state: "done",
  },
  {
    phase: "Phase 03",
    title: "Testing",
    body: "1,240 tests, four release rehearsals, one production incident (unrelated).",
    state: "done",
  },
  {
    phase: "Phase 04",
    title: "AXIOM v1",
    body: "Public release. Persistent memory, model routing, agent surfaces.",
    state: "done",
  },
  {
    phase: "Phase 05",
    title: "AXIOM v2",
    body: "Distributed agents, embedded reasoning, human-in-the-loop by default.",
    state: "active",
  },
  {
    phase: "Phase 06",
    title: "AXIOM v3",
    body: "Reasoning contracts. Auditable decision trails. Multi-tenant memory.",
    state: "next",
  },
  {
    phase: "Phase 07",
    title: "Future",
    body: "The interface disappears. Intent stays.",
    state: "future",
  },
];

function Journey() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-8">
        <Eyebrow>Roadmap</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          The line between
          <br />
          <span className="text-shine">then and next.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative">
          {STAGES.map((s, i) => (
            <div
              key={s.phase}
              className="relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_1fr] gap-6 pb-12 animate-rise"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="relative">
                <div
                  className={`relative z-10 h-6 w-6 rounded-full border-2 ${
                    s.state === "done"
                      ? "bg-crimson border-crimson-soft"
                      : s.state === "active"
                        ? "bg-white border-crimson-soft animate-pulse-glow"
                        : "bg-transparent border-border"
                  }`}
                />
                {i < STAGES.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-[-48px] w-px bg-gradient-to-b from-crimson/60 to-border" />
                )}
                <div className="eyebrow mt-3 text-[9px]">{s.phase}</div>
              </div>
              <div className="md:col-span-1">
                <div
                  className={`font-display text-3xl md:text-4xl font-semibold ${s.state === "future" ? "text-muted-foreground" : ""}`}
                >
                  {s.title}
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest">
                  <span
                    className={
                      s.state === "done"
                        ? "text-emerald-400"
                        : s.state === "active"
                          ? "text-crimson-soft"
                          : s.state === "next"
                            ? "text-amber-300"
                            : "text-muted-foreground"
                    }
                  >
                    {s.state}
                  </span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div
                  className={`rounded-2xl p-5 ${s.state === "active" ? "glass-red" : "glass"}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
