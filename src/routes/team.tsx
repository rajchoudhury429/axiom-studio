import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Raj Choudhury & AXIOM Collective" },
      {
        name: "description",
        content:
          "Meet the 5 engineers behind AXIOM-AI WORKSPACE: Raj Choudhury, Daniyal, Jigyashu, Banajit, and Abhijeet.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Team — Raj Choudhury & AXIOM Collective" },
      {
        property: "og:description",
        content:
          "Discover the roles, contributions, technical interests, and collaborative workflow of the AXIOM engineering team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/team" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/team" }],
  }),
  component: Team,
});

const MEMBERS = [
  {
    name: "Raj Choudhury",
    role: "Project Lead · Systems Architect",
    tags: ["Systems Architecture", "AI Orchestration", "Full-Stack"],
    bio: "Project Lead and Systems Architect at AXIOM Workspace. Raj oversees technical direction, system design, and AI model routing integrations. He focuses on orchestrating backend systems with responsive frontend surfaces.",
    responsibilities: "Overall architecture, AI provider integrations, multi-model routing logic, and setting technical milestones.",
    interests: "Multi-agent systems, latency budgets, stateful memory ledgers, and functional programming.",
    contribution: "Designed AXIOM v1 routing core, unified project standards, and leads technical decision-making.",
    workingStyle: "Systematic, context-driven, and focused on breaking down high-level ideas into modular components.",
    skills: ["React 19", "Vite", "Tailwind CSS v4", "Node.js", "Express.js", "SQLite", "Gemini SDK"],
    projects: ["AXIOM v1 Core", "Router v2", "Ledger Memory"],
  },
  {
    name: "Daniyal",
    role: "Backend Engineer · APIs",
    tags: ["Backend Systems", "API Design", "Database Schemas"],
    bio: "Backend specialist responsible for building resilient server handlers, database schemas, and external API communication channels. Ensures backend operations execute reliably under real load.",
    responsibilities: "Designing database models, implementing server handlers, managing API rate limits, and optimizing query speeds.",
    interests: "Relational database performance, gRPC streams, microservice communication, and server caching.",
    contribution: "Built backend API endpoints, authentication flows, and PostgreSQL data persistence for Ledger.",
    workingStyle: "Methodical and focused on server uptime, clear API contracts, and defensive error handling.",
    skills: ["Node.js", "Express.js", "SQLite", "better-sqlite3", "REST APIs", "pdf-parse"],
    projects: ["API Gateway", "Ledger Storage", "Server Handlers"],
  },
  {
    name: "Jigyashu",
    role: "Frontend Engineer · Motion",
    tags: ["Frontend", "Framer Motion", "WebGL & 3D"],
    bio: "Frontend engineer focused on interactive animations, micro-interactions, and visual feedback loops. Transforms static layouts into dynamic, fluid user experiences.",
    responsibilities: "Creating component micro-animations, implementing dark-futurist visual effects, and optimizing render performance.",
    interests: "Framer Motion, WebGL shaders, Three.js 3D canvas, CSS hardware acceleration, and GPU rendering.",
    contribution: "Created the AI Core interactive orbit visualizer, smooth page transitions, and motion utilities.",
    workingStyle: "Creative and detail-oriented, ensuring 60fps animations that enhance usability without bloating load times.",
    skills: ["React", "TypeScript", "Framer Motion", "Tailwind CSS v4", "Three.js & R3F", "Canvas"],
    projects: ["AI Core Orbit", "Motion Kit", "AXIOM Visual System"],
  },
  {
    name: "Banajit",
    role: "Frontend Engineer · UX",
    tags: ["Frontend", "UX Design", "Design Tokens"],
    bio: "Frontend and UX specialist focused on visual layout hierarchy, component reusability, and responsive design systems across desktop and mobile screens.",
    responsibilities: "Refining visual design tokens, building responsive layout grids, maintaining accessibility (a11y), and UI polish.",
    interests: "Design systems, mobile responsiveness, typography hierarchy, and accessibility standards.",
    contribution: "Engineered site layout shell, theme toggle infrastructure, and responsive CSS token systems.",
    workingStyle: "User-centric, prioritizing layout clarity, intuitive navigation, and consistent UI spacing.",
    skills: ["React", "Tailwind CSS v4", "CSS Variables", "TipTap & Quill", "Chart.js", "Web Speech API"],
    projects: ["Studio Design System", "Layout Shell", "Responsive Framework"],
  },
  {
    name: "Abhijeet",
    role: "Planning & QA Engineer",
    tags: ["Planning", "QA Testing", "Documentation"],
    bio: "Quality Assurance and project planning engineer. Responsible for systematically testing software flows, identifying edge cases, and writing documentation.",
    responsibilities: "Conducting manual & automated flow testing, auditing cross-browser compatibility, tracking issues, and managing documentation.",
    interests: "Test automation, browser testing, error monitoring, documentation structures, and release planning.",
    contribution: "Created test validation procedures, error boundary reporting, and documentation hub structure.",
    workingStyle: "Thorough and inquisitive, ensuring no breaking changes reach production without verification.",
    skills: ["Playwright", "Vitest", "TypeScript", "Markdown Docs", "QA Testing"],
    projects: ["QA Test Suite", "Docs Portal", "Error Monitoring"],
  },
];

const WORKFLOW = [
  {
    phase: "1. Planning & Architecture",
    desc: "Every feature starts with a clear technical discussion led by Raj and Abhijeet. We outline system requirements, API contracts, database models, and UI flows before writing code.",
  },
  {
    phase: "2. UI/UX & Design Systems",
    desc: "Banajit structures the component layout wireframes while Jigyashu designs interactive visual states, ensuring color contrast, typography, and motion feel seamless.",
  },
  {
    phase: "3. Backend & API Integration",
    desc: "Daniyal implements server endpoints, database schemas, and streaming handlers. Raj integrates multi-model AI routing logic and error fallbacks.",
  },
  {
    phase: "4. Frontend & Motion Engineering",
    desc: "Jigyashu and Banajit assemble frontend React components, applying Framer Motion transitions, responsive Tailwind CSS rules, and accessibility labels.",
  },
  {
    phase: "5. Testing, Debugging & QA",
    desc: "Abhijeet tests user flows across devices, auditing edge cases, form validations, stream error recoveries, and console performance.",
  },
  {
    phase: "6. Code Review & Documentation",
    desc: "The entire team conducts peer code reviews to maintain code quality, update the documentation hub, and ensure clean deployment.",
  },
];

function Team() {
  const [active, setActive] = useState(0);
  const m = MEMBERS[active];

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-6">
        <Eyebrow>The Engineering Team</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Five engineers.
          <br />
          <span className="text-shine">One shared focus.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          AXIOM Workspace is powered by five developers collaborating closely across systems design, backend APIs, frontend motion, UX, and quality assurance.
        </p>
      </section>

      {/* Member Interactive Showcase */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <ul className="space-y-2">
            {MEMBERS.map((mm, i) => (
              <li key={mm.name}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl border p-4 transition ${
                    i === active
                      ? "border-crimson/50 bg-crimson/[0.08]"
                      : "border-border bg-secondary/50 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold ${
                        i === active ? "glass-red" : "bg-secondary"
                      }`}
                    >
                      {mm.name
                        .split(" ")
                        .map((s) => s[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{mm.name}</div>
                      <div className="eyebrow text-[10px] mt-0.5 text-crimson-soft">
                        {mm.role.split("·")[0]}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          <div
            className="glass-red rounded-3xl p-8 md:p-12"
            key={active}
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <Eyebrow>{m.role}</Eyebrow>
                <div className="mt-3 font-display text-3xl md:text-4xl font-semibold">
                  {m.name}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-crimson to-[var(--graphite-2)] flex items-center justify-center font-display text-2xl font-bold animate-pulse-glow">
                  {m.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {m.bio}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                <div className="eyebrow text-crimson-soft mb-1">Main Responsibilities</div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {m.responsibilities}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                <div className="eyebrow text-crimson-soft mb-1">AXIOM Contribution</div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {m.contribution}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                <div className="eyebrow text-foreground mb-1">Technical Interests</div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {m.interests}
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-secondary/40 p-4">
                <div className="eyebrow text-foreground mb-1">Working Style</div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {m.workingStyle}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="eyebrow mb-3">Key Technologies</div>
              <div className="flex flex-wrap gap-2">
                {m.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-crimson/40 bg-crimson/[0.08] px-3 py-1 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Together Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/40">
        <Eyebrow>Team Workflow & Dynamics</Eyebrow>
        <h2 className="hero-title mt-4 text-4xl md:text-5xl">How We Work Together</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          Building complete software products requires clear communication, shared standards, and structured engineering phases.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW.map((w) => (
            <div key={w.phase} className="glass rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="eyebrow text-crimson-soft">{w.phase}</div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass-red rounded-3xl p-10 text-center">
          <Eyebrow>Collaborate With Us</Eyebrow>
          <h2 className="hero-title mt-4 text-3xl md:text-4xl">Want to discuss a project with the team?</h2>
          <p className="mt-4 mx-auto max-w-lg text-xs md:text-sm text-muted-foreground">
            We welcome technical exchanges, project feedback, and collaboration opportunities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-lg glass-red px-6 py-2.5 text-sm font-medium">
              Contact Team →
            </Link>
            <Link to="/projects" className="rounded-lg border border-border bg-secondary/80 px-6 py-2.5 text-sm font-medium hover:bg-secondary transition">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
