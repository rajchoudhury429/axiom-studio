import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXIOM-AI WORKSPACE — Raj Choudhury & Engineering Intelligence" },
      {
        name: "description",
        content:
          "AXIOM-AI WORKSPACE is an independent AI engineering collective led by Raj Choudhury. We build multi-model reasoning surfaces, durable memory stores, and modern web interfaces.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "AXIOM-AI WORKSPACE — Engineering Intelligence",
      },
      {
        property: "og:description",
        content:
          "Independent AI engineering collective building next-generation AI systems, web platforms, and experimental interfaces. Led by Raj Choudhury.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "AXIOM-AI WORKSPACE — Engineering Intelligence",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AXIOM-AI WORKSPACE — Raj Choudhury & Engineering Intelligence",
      },
      {
        name: "twitter:description",
        content:
          "Independent AI engineering collective building next-generation AI systems, web platforms, and experimental interfaces.",
      },
      { name: "twitter:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "AXIOM-AI WORKSPACE — Engineering Intelligence",
          description:
            "AXIOM-AI WORKSPACE is an independent AI engineering collective founded by Raj Choudhury building human-machine intelligence interfaces.",
          url: "https://axiom.studio",
          isPartOf: { "@type": "WebSite", url: "https://axiom.studio" },
          about: {
            "@type": "Organization",
            name: "AXIOM-AI WORKSPACE",
            url: "https://axiom.studio",
          },
        }),
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
              aria-hidden="true"
              role="presentation"
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

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-20">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Est. 2026 · Independent AI & Web Engineering</Eyebrow>
            <h1 className="hero-title mt-6 text-[clamp(2.8rem,7vw,6.2rem)]">
              Building the future,
              <br />
              <span className="text-shine">together.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Welcome to <strong>AXIOM Workspace</strong> — an independent engineering hub led by <strong>Raj Choudhury</strong> alongside a close team of 5 developers. We bridge the space between modern web development, artificial intelligence, and fluid UI design, building intelligent systems with craft, intent, and performance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 rounded-lg glass-red px-5 py-3 text-sm font-medium"
              >
                <span>Explore Projects</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/80 px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                Read About Us
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["05", "Engineers"],
                ["03", "Core Systems"],
                ["100%", "Open & Driven"],
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

function Introduction() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Identity & Leadership</Eyebrow>
            <h2 className="hero-title mt-4 text-3xl md:text-4xl">
              Who is Raj Choudhury & What is AXIOM?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Raj Choudhury is a systems-focused developer and project lead passionate about software engineering, artificial intelligence, and intuitive user experiences.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-7 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong>AXIOM Workspace</strong> is built on the belief that intelligent software should feel responsive, transparent, and genuinely useful. Rather than building disposable chat wrappers or generic portfolio templates, Raj and the team build complete systems — combining multi-model AI routing, persistent episodic memory, and human-centered frontend interfaces.
            </p>
            <p>
              Our technical stack is rooted in <strong>React, Vite, Tailwind CSS v4, Node.js, Express.js, SQLite, and Python OS Launcher</strong>. On top of this core, we integrate multi-provider AI backends (Gemini SDK, Tesseract.js, and PDF.js) alongside smooth UI animations with Framer Motion and WebGL.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                <div className="font-medium text-foreground text-sm">Human-Machine Surface</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Designing intuitive web interfaces where AI assistance feels natural, responsive, and grounded.
                </div>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                <div className="font-medium text-foreground text-sm">Collaborative Engineering</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  A 5-person team specializing across systems architecture, backend APIs, frontend motion, UX, and testing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <Eyebrow>What We Build</Eyebrow>
        <h2 className="hero-title mt-4 text-4xl md:text-5xl">
          Practical software, durable memory, and modern web applications.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          We focus on building software systems that prioritize speed, reliability, and human usability. Every project starts with a clear real-world goal — whether that means reducing AI latency, building persistent context, or refining full-stack web applications.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Multi-Model AI Surfaces",
            desc: "Unified interfaces like AXIOM v1 that dynamically route prompt queries across multiple AI models (Gemini, Claude, DeepSeek) based on task intent and confidence.",
            tech: ["TanStack Router", "React 19", "Groq API", "Multi-provider SDKs"],
          },
          {
            title: "Durable Agent Memory",
            desc: "Memory layers like Ledger that store typed episodic and semantic user context across sessions using PostgreSQL, pgvector, and Redis.",
            tech: ["Go", "PostgreSQL", "pgvector", "Redis", "REST/gRPC"],
          },
          {
            title: "Full-Stack Web Apps",
            desc: "Responsive, high-performance web applications built with TypeScript, Tailwind CSS v4, and modern framework architectures.",
            tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Nitro"],
          },
        ].map((item) => (
          <div key={item.title} className="glass rounded-2xl p-6 flex flex-col justify-between hover:red-glow transition">
            <div>
              <div className="eyebrow text-crimson-soft">{item.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 font-mono text-[10px]">
              {item.tech.map((t) => (
                <span key={t} className="rounded bg-secondary/80 px-2 py-0.5 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
        <div>
          <Eyebrow>Our Philosophy</Eyebrow>
          <h2 className="hero-title mt-4 text-4xl md:text-5xl">
            Software built with <span className="text-crimson-soft">intent & clarity.</span>
          </h2>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            We believe the best tools do not overwhelm users with unnecessary complexity. Instead, they refine interactions so that technology feels invisible and empowering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            [
              "Context Over Noise",
              "AI systems should retain history and intent across conversations rather than restarting from zero on every turn.",
            ],
            [
              "Optimal Model Routing",
              "Selecting the right tool or LLM for each specific task rather than relying on a single monolithic provider.",
            ],
            [
              "Fluid User Experience",
              "A modern web interface should be visually captivating, fast-loading, accessible, and responsive on all devices.",
            ],
            [
              "Continuous Iteration",
              "Building real prototypes, testing under real conditions, and learning from failure through tight team iteration.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <div className="eyebrow text-foreground">{t}</div>
              <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamOverview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Eyebrow>Collaborative Approach</Eyebrow>
          <h2 className="hero-title mt-4 text-4xl md:text-5xl">The AXIOM Team</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            A tight-knit engineering team combining diverse skillsets across system design, backend architectures, frontend animations, UX design, and QA.
          </p>
        </div>
        <Link to="/team" className="text-sm font-medium text-crimson-soft hover:underline">
          Meet the full team →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { name: "Raj Choudhury", role: "Project Lead · Systems", task: "Architecture, system integration & AI orchestration" },
          { name: "Daniyal", role: "Backend Engineer · APIs", task: "Server handlers, database schemas & API routing" },
          { name: "Jigyashu", role: "Frontend Engineer · Motion", task: "Framer Motion, animations & visual interaction" },
          { name: "Banajit", role: "Frontend Engineer · UX", task: "Design systems, layout hierarchy & responsiveness" },
          { name: "Abhijeet", role: "Planning & QA Engineer", task: "System testing, code quality & project roadmap" },
        ].map((m) => (
          <div key={m.name} className="glass rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="font-display font-semibold text-base">{m.name}</div>
              <div className="eyebrow text-[10px] mt-1 text-crimson-soft">{m.role}</div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                {m.task}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-crimson/40 bg-gradient-to-br from-crimson/20 via-background to-background p-10 md:p-16 text-center">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <Eyebrow>Connect & Collaborate</Eyebrow>
        <h2 className="hero-title relative mt-6 text-4xl md:text-6xl">
          Interested in our projects
          <br />
          or collaboration?
        </h2>
        <p className="relative mt-6 mx-auto max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
          Whether you are a recruiter, collaborator, client, or fellow developer exploring AI technologies, we welcome technical discussions and partnership opportunities.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg glass-red px-6 py-3 text-sm font-medium"
          >
            Get in Touch →
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/80 px-6 py-3 text-sm font-medium hover:bg-secondary transition"
          >
            View Projects
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/50 px-6 py-3 text-sm font-medium hover:bg-secondary transition"
          >
            Documentation Hub
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <Introduction />
      <WhatWeBuild />
      <Philosophy />
      <TeamOverview />
      <CTA />
    </PageShell>
  );
}
