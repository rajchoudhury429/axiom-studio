import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageShell, Eyebrow } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXIOM Studio — Building The Future Together" },
      {
        name: "description",
        content:
          "The engineering headquarters of AXIOM. A collective of engineers, researchers, and designers building machine intelligence with intention.",
      },
    ],
  }),
  component: Home,
});

const TEAM = [
  { name: "Raj Choudhury", role: "Project Lead · Systems", angle: 270 },
  { name: "Daniyal", role: "Backend · APIs", angle: 342 },
  { name: "Jigyashu", role: "Frontend · Motion", angle: 54 },
  { name: "Banajit", role: "Frontend · UX", angle: 126 },
  { name: "Abhijeet", role: "Planning · QA", angle: 198 },
];

function AICore() {
  const ref = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / r.width;
        const y = (e.clientY - (r.top + r.height / 2)) / r.height;
        setMx(x);
        setMy(y);
        rafRef.current = 0;
      });
    };
    window.addEventListener("mousemove", on, { passive: true });
    return () => {
      window.removeEventListener("mousemove", on);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      style={{
        transform: `perspective(1200px) rotateX(${my * -6}deg) rotateY(${mx * 6}deg)`,
      }}
    >
      {/* orbit rings */}
      {[0.55, 0.72, 0.9].map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-border"
          style={{
            transform: `scale(${s})`,
            animation: `spin-slow ${18 + i * 8}s linear ${i % 2 ? "reverse" : ""} infinite`,
          }}
        >
          <div
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-soft"
            style={{ boxShadow: "0 0 20px var(--crimson-soft)" }}
          />
        </div>
      ))}

      {/* inner glow core */}
      <div className="absolute inset-[26%] rounded-full bg-gradient-to-br from-[var(--ai-core-from)] via-[var(--ai-core-via)] to-[var(--ai-core-to)] blur-[2px]" />
      <div className="absolute inset-[30%] rounded-full glass-red animate-pulse-glow" />
      <div className="absolute inset-[38%] rounded-full bg-crimson dark:mix-blend-screen opacity-70 blur-md" />
      <div className="absolute inset-[42%] rounded-full bg-white opacity-90 blur-[2px]" />

      {/* team nodes */}
      {TEAM.map((m, i) => {
        const a = (m.angle * Math.PI) / 180;
        const r = 46; // percent
        const x = 50 + Math.cos(a) * r;
        const y = 50 + Math.sin(a) * r;
        return (
          <div
            key={m.name}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 -m-1 rounded-full animate-ping-ring bg-crimson/40"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <div className="glass-red flex h-12 w-12 items-center justify-center rounded-full text-[11px] font-display font-semibold">
                {m.name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center">
                <div className="text-[11px] font-medium">{m.name}</div>
                <div className="eyebrow text-[9px] mt-0.5">{m.role}</div>
              </div>
            </div>
            {/* connector line to center */}
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 100 100"
            >
              <line
                x1="50"
                y1="50"
                x2={50 - Math.cos(a) * r}
                y2={50 - Math.sin(a) * r}
                stroke="var(--crimson)"
                strokeOpacity="0.4"
                strokeWidth="0.2"
                strokeDasharray="1 1"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 animate-grid-pan [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 31) % 100}%`,
              opacity: 0.2 + ((i * 11) % 60) / 100,
              animation: `float-slow ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Est. 2024 · Independent Research</Eyebrow>
            <h1 className="hero-title mt-6 text-[clamp(2.8rem,7vw,6.2rem)]">
              Building the future,
              <br />
              <span className="text-shine">together.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              AXIOM is a collective of five engineers architecting a new kind of
              AI interface — one that reasons, routes and remembers. This is the
              studio behind the system.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 rounded-lg glass-red px-5 py-3 text-sm font-medium"
              >
                <span>Enter the Lab</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/80 px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                Read the Doctrine
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["05", "Engineers"],
                ["17", "Systems"],
                ["∞", "Ambition"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-semibold">{n}</div>
                  <div className="eyebrow mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <AICore />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>Studio Mission</Eyebrow>
          <h2 className="hero-title mt-4 text-4xl md:text-5xl">
            Machines should meet us{" "}
            <span className="text-crimson-soft">where we think.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            [
              "Reason",
              "Systems that hold context across sessions, not just tokens.",
            ],
            ["Route", "The best model for the moment, chosen with intent."],
            ["Remember", "Every interaction becomes part of a durable ledger."],
            ["Return", "The final surface belongs to the human — always."],
          ].map(([t, d]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <div className="eyebrow">{t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <Eyebrow>Featured System</Eyebrow>
          <h2 className="hero-title mt-4 text-4xl md:text-5xl">AXIOM v1</h2>
        </div>
        <Link
          to="/projects"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          All projects →
        </Link>
      </div>
      <div className="glass-red relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="eyebrow">Multi-model reasoning surface</div>
            <p className="mt-4 text-lg leading-relaxed">
              A unified interface that routes prompts across Gemini, Claude,
              DeepSeek and OpenRouter — with memory, orchestration, and a design
              system built for intent, not chatter.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              {["Next.js", "Node", "MongoDB", "Redis", "Gemini", "Claude"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/80 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[var(--graphite)] to-[var(--graphite-2)]">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-red rounded-full h-32 w-32 animate-pulse-glow flex items-center justify-center font-display text-2xl">
                AX
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div style={{ y }} className="grid gap-4 md:grid-cols-4">
        {[
          ["05", "Core Engineers", "Distributed globally"],
          ["17", "Live Systems", "In production"],
          ["100K+", "Requests routed", "Across model providers"],
          ["99.98%", "Uptime", "Last 90 days"],
        ].map(([n, l, s]) => (
          <div
            key={l}
            className="glass rounded-2xl p-6 hover:red-glow transition"
          >
            <div className="font-display text-4xl font-semibold">{n}</div>
            <div className="mt-2 text-sm font-medium">{l}</div>
            <div className="eyebrow mt-1">{s}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-crimson/40 bg-gradient-to-br from-crimson/20 via-background to-background p-12 md:p-20 text-center">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <Eyebrow>Interface Request</Eyebrow>
        <h2 className="hero-title relative mt-6 text-5xl md:text-7xl">
          Have a problem
          <br />
          worth solving?
        </h2>
        <p className="relative mt-6 mx-auto max-w-xl text-muted-foreground">
          We take on a small number of engagements each quarter. Research,
          systems, and the occasional impossible ask.
        </p>
        <Link
          to="/contact"
          className="relative mt-10 inline-flex items-center gap-2 rounded-lg glass-red px-6 py-3 text-sm font-medium"
        >
          Open a channel →
        </Link>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <Mission />
      <Featured />
      <Stats />
      <CTA />
    </PageShell>
  );
}
