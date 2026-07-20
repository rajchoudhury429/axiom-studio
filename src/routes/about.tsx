import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AXIOM Studio" },
      {
        name: "description",
        content:
          "The doctrine, history and future goals of AXIOM Studio, an independent AI engineering collective.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  {
    year: "2024 · Q1",
    title: "First signal",
    body: "Five engineers, one shared frustration with the state of AI tooling.",
  },
  {
    year: "2024 · Q3",
    title: "The core",
    body: "AXIOM v0 prototype — a routing layer across Gemini, Claude, and DeepSeek.",
  },
  {
    year: "2025 · Q1",
    title: "Studio formalized",
    body: "AXIOM Studio incorporated as an independent research collective.",
  },
  {
    year: "2025 · Q4",
    title: "AXIOM v1 shipped",
    body: "First public release. Persistent memory, model routing, agent surfaces.",
  },
  {
    year: "2026 · now",
    title: "Second generation",
    body: "Distributed agents, embedded reasoning, human-in-the-loop by default.",
  },
];

function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-16">
        <Eyebrow>The Doctrine</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          A studio, not a startup.
          <br />
          <span className="text-shine">A discipline, not a demo.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          AXIOM Studio was founded on a single conviction: the interface between
          humans and machine intelligence deserves the same care as the
          intelligence itself. We are engineers first, researchers second, and
          evangelists never.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "Mission",
              "Build tools that respect the shape of human attention. Reduce noise. Preserve intent.",
            ],
            [
              "Vision",
              "A generation of AI systems that feel less like oracles and more like colleagues.",
            ],
            [
              "Philosophy",
              "Craft over velocity. Systems over features. Clarity over cleverness.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="glass rounded-2xl p-8">
              <div className="eyebrow">{t}</div>
              <p className="mt-4 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Eyebrow>Trajectory</Eyebrow>
        <h2 className="hero-title mt-4 text-4xl md:text-5xl">
          A short history.
        </h2>
        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-crimson/60 via-[var(--timeline-via)] to-transparent" />
          {TIMELINE.map((t, i) => (
            <div
              key={t.year}
              className="relative pl-16 pb-10 last:pb-0 animate-rise"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="absolute left-4 top-1.5 h-4 w-4 rounded-full glass-red" />
              <div className="eyebrow">{t.year}</div>
              <div className="mt-1 font-display text-2xl font-semibold">
                {t.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{t.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="glass-red rounded-3xl p-10 md:p-16">
          <Eyebrow>Where we're going</Eyebrow>
          <h2 className="hero-title mt-4 text-4xl md:text-6xl">
            Toward an internet of agents.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            The next decade will not be defined by bigger models but by better
            systems: memory that lasts, reasoning that respects context, and
            interfaces that vanish into intent. AXIOM is our contribution to
            that future.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
