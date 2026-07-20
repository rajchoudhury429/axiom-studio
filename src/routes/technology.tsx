import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/technology")({
  head: () => ({ meta: [
    { title: "Technology — AXIOM Studio" },
    { name: "description", content: "The technology stack powering AXIOM Studio, and why each piece is here." },
  ]}),
  component: Tech,
});

const TECH = [
  { name: "React", cat: "UI", why: "Component model that scales with team size, not just app size." },
  { name: "Next.js", cat: "App", why: "Hybrid rendering, edge routes, and a stable production surface." },
  { name: "TypeScript", cat: "Lang", why: "Types are documentation the compiler enforces." },
  { name: "Tailwind", cat: "UI", why: "Design tokens as class utilities — no runtime cost, no dead CSS." },
  { name: "Framer Motion", cat: "Motion", why: "Motion that respects layout and accessibility, not just aesthetics." },
  { name: "GSAP", cat: "Motion", why: "Timeline-based orchestration for scenes that need to be authored, not tweened." },
  { name: "Three.js", cat: "3D", why: "The lowest-level WebGL abstraction we still trust to ship." },
  { name: "R3F", cat: "3D", why: "Declarative Three.js. Scenes reconcile like components." },
  { name: "Node", cat: "Runtime", why: "Ubiquitous, boring, and available on every host we care about." },
  { name: "Express", cat: "Server", why: "Minimal middleware surface. Predictable failure modes." },
  { name: "MongoDB", cat: "Data", why: "Document store for shapes that evolve faster than schemas." },
  { name: "PostgreSQL", cat: "Data", why: "Relational truth. Everything eventually joins something else." },
  { name: "Redis", cat: "Data", why: "The cache, the queue, the ephemeral state — one dial to turn." },
  { name: "Gemini", cat: "Model", why: "Long context and multimodal by default." },
  { name: "Claude", cat: "Model", why: "Reasoning under ambiguity. First choice for high-stakes prompts." },
  { name: "DeepSeek", cat: "Model", why: "Cost-effective inference where latency budget is tight." },
  { name: "OpenRouter", cat: "Model", why: "One key, many providers. Fallback discipline built in." },
];

function Tech() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-4">
        <Eyebrow>The Stack</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Every choice,<br/><span className="text-shine">on purpose.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-3 md:grid-cols-3 sm:grid-cols-2">
          {TECH.map((t, i) => {
            const isOpen = open === i;
            return (
              <button key={t.name} onClick={() => setOpen(isOpen ? null : i)}
                className={`text-left rounded-2xl border p-5 transition group ${
                  isOpen ? "border-[oklch(0.55_0.22_25/50%)] bg-[oklch(0.55_0.22_25/6%)] md:col-span-2 md:row-span-2" : "border-white/8 bg-white/[0.02] hover:bg-white/[0.05]"
                }`}>
                <div className="flex items-center justify-between">
                  <div className="font-display text-xl font-semibold">{t.name}</div>
                  <span className="eyebrow text-[9px]">{t.cat}</span>
                </div>
                <div className={`mt-3 text-sm leading-relaxed ${isOpen ? "text-foreground" : "text-muted-foreground line-clamp-2"}`}>
                  {t.why}
                </div>
                {isOpen && (
                  <div className="mt-6 aspect-video rounded-xl border border-white/10 bg-black/40 grid-bg flex items-center justify-center animate-rise">
                    <div className="glass-red rounded-full h-20 w-20 flex items-center justify-center font-display text-lg animate-pulse-glow">
                      {t.name.slice(0,2)}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
