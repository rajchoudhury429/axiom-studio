import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Team — AXIOM Studio" },
    { name: "description", content: "Meet the five engineers behind AXIOM: Raj, Daniyal, Jigyashu, Banajit, and Abhijeet." },
  ]}),
  component: Team,
});

const MEMBERS = [
  {
    name: "Raj Choudhury", role: "Project Lead", tags: ["Backend", "System Architecture", "AI Integration"],
    bio: "Systems architect and de-facto captain. Decides where the current runs.",
    skills: ["Distributed systems", "Model routing", "Rust", "Node", "K8s"],
    projects: ["AXIOM Core", "Router v2", "Ledger"],
    stats: [["7y", "Experience"], ["12", "Systems shipped"], ["24", "Papers read/mo"]],
  },
  {
    name: "Daniyal", role: "Backend Engineer", tags: ["Backend", "API", "Server Logic"],
    bio: "Writes servers that don't wake you up at 3am. Believes latency is a moral issue.",
    skills: ["Node", "Postgres", "Redis", "Go", "gRPC"],
    projects: ["API Gateway", "Auth service", "Rate shield"],
    stats: [["1y", "Experience"], ["99.98%", "Uptime"], ["18ms", "p50"]],
  },
  {
    name: "Jigyashu", role: "Frontend Engineer", tags: ["Frontend", "UI", "Animation"],
    bio: "Draws with code. Motion belongs where meaning lives — nowhere else.",
    skills: ["React", "Three.js", "GSAP", "Motion", "WebGL"],
    projects: ["AXIOM UI", "Motion kit", "3D lab"],
    stats: [["1y", "Experience"], ["60fps", "Standard"], ["21", "Shipped surfaces"]],
  },
  {
    name: "Banajit", role: "Frontend Engineer", tags: ["Frontend", "UX", "Interactive Design"],
    bio: "Interaction designer. Asks 'why' before 'how'. Prototypes in the browser.",
    skills: ["React", "Design systems", "Figma", "Accessibility", "Prototyping"],
    projects: ["Design tokens", "UX Lab", "Studio site"],
    stats: [["1y", "Experience"], ["100%", "a11y target"], ["14", "Design systems"]],
  },
  {
    name: "Abhijeet", role: "QA & Planning", tags: ["Planning", "QA", "Testing", "Docs"],
    bio: "Runs the plan. Breaks the software. Writes the manual nobody else will.",
    skills: ["Playwright", "Vitest", "Roadmapping", "Docs", "Release"],
    projects: ["Test harness", "Release train", "Docs portal"],
    stats: [["1y", "Experience"], ["1,240", "Tests"], ["0", "Missed releases"]],
  },
];

function Team() {
  const [active, setActive] = useState(0);
  const m = MEMBERS[active];
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-6">
        <Eyebrow>The Five</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Five engineers.<br/><span className="text-shine">One current.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <ul className="space-y-2">
            {MEMBERS.map((mm, i) => (
              <li key={mm.name}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl border p-4 transition ${
                    i === active
                      ? "border-[oklch(0.55_0.22_25/50%)] bg-[oklch(0.55_0.22_25/8%)]"
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold ${i===active ? "glass-red" : "bg-white/5"}`}>
                      {mm.name.split(" ").map(s=>s[0]).join("").slice(0,2)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{mm.name}</div>
                      <div className="eyebrow text-[10px] mt-0.5">{mm.role}</div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          <div className="glass-red rounded-3xl p-8 md:p-12 animate-rise" key={active}>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <Eyebrow>{m.role}</Eyebrow>
                <div className="mt-3 font-display text-4xl md:text-5xl font-semibold">{m.name}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map(t => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.24_25)] to-[oklch(0.2_0.1_20)] flex items-center justify-center font-display text-3xl font-bold animate-pulse-glow">
                  {m.name.split(" ").map(s=>s[0]).join("").slice(0,2)}
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{m.bio}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {m.stats.map(([n, l]) => (
                <div key={l} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="font-display text-3xl font-semibold">{n}</div>
                  <div className="eyebrow mt-1">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <div className="eyebrow mb-3">Signature skills</div>
                <div className="flex flex-wrap gap-2">
                  {m.skills.map(s => (
                    <span key={s} className="rounded-full border border-[oklch(0.55_0.22_25/40%)] bg-[oklch(0.55_0.22_25/8%)] px-3 py-1 text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="eyebrow mb-3">Recent projects</div>
                <ul className="space-y-2 text-sm">
                  {m.projects.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["GitHub", "LinkedIn", "Email"].map(s => (
                <button key={s} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium hover:bg-white/[0.06] transition">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
