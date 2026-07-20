import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — AXIOM Studio" },
      {
        name: "description",
        content:
          "The technology galaxy powering AXIOM — a network of interconnected disciplines and skills.",
      },
    ],
  }),
  component: Skills,
});

type Skill = { name: string; cat: string };
const SKILLS: Skill[] = [
  { name: "System Design", cat: "Backend" },
  { name: "Distributed Systems", cat: "Backend" },
  { name: "Postgres", cat: "Backend" },
  { name: "Redis", cat: "Backend" },
  { name: "Go", cat: "Backend" },
  { name: "Node", cat: "Backend" },
  { name: "React", cat: "Frontend" },
  { name: "Three.js", cat: "Frontend" },
  { name: "Motion", cat: "Frontend" },
  { name: "GSAP", cat: "Frontend" },
  { name: "Design Systems", cat: "Design" },
  { name: "Prototyping", cat: "Design" },
  { name: "Model Routing", cat: "AI" },
  { name: "RAG", cat: "AI" },
  { name: "Agents", cat: "AI" },
  { name: "Vector Search", cat: "AI" },
  { name: "Research", cat: "Research" },
  { name: "Roadmapping", cat: "Leadership" },
  { name: "Playwright", cat: "Testing" },
  { name: "Vitest", cat: "Testing" },
  { name: "Planning", cat: "Planning" },
  { name: "Documentation", cat: "Planning" },
];

const CATS = [
  "All",
  "Backend",
  "Frontend",
  "AI",
  "Design",
  "Research",
  "Leadership",
  "Testing",
  "Planning",
] as const;

function Skills() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const filtered = useMemo(
    () => SKILLS.filter((s) => cat === "All" || s.cat === cat),
    [cat],
  );

  // deterministic positions
  const nodes = useMemo(() => {
    return filtered.map((s, i) => {
      const golden = Math.PI * (3 - Math.sqrt(5));
      const t = (i + 0.5) / filtered.length;
      const r = 40 * Math.sqrt(t);
      const a = i * golden;
      return {
        ...s,
        x: 50 + Math.cos(a) * r,
        y: 50 + Math.sin(a) * r,
        size: 18 + ((i * 13) % 22),
      };
    });
  }, [filtered]);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-8">
        <Eyebrow>The Galaxy</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          A network,
          <br />
          <span className="text-shine">not a checklist.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Skills aren't scored. They're linked. Filter a discipline to see how
          our practice folds in on itself.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                c === cat
                  ? "glass-red"
                  : "border border-border bg-secondary/80 hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative aspect-square max-w-3xl mx-auto rounded-3xl border border-border bg-input grid-bg overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
            >
              {nodes.map((n, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="var(--crimson)"
                  strokeOpacity="0.25"
                  strokeWidth="0.15"
                />
              ))}
            </svg>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full glass-red animate-pulse-glow flex items-center justify-center font-display text-xs">
            AXIOM
          </div>
          {nodes.map((n, i) => (
            <div
              key={n.name + i}
              className="absolute group cursor-pointer"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                transform: "translate(-50%,-50%)",
              }}
            >
              <div
                style={{ width: n.size, height: n.size }}
                className="rounded-full glass-red group-hover:scale-125 transition-transform"
              />
              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 mt-1 whitespace-nowrap rounded-md bg-popover border border-border px-2 py-0.5 text-[10px] opacity-0 group-hover:opacity-100 transition">
                {n.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-2 md:grid-cols-4 sm:grid-cols-2">
          {filtered.map((s) => (
            <div
              key={s.name}
              className="glass rounded-xl px-4 py-3 flex items-center justify-between"
            >
              <span className="text-sm">{s.name}</span>
              <span className="eyebrow text-[9px]">{s.cat}</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
