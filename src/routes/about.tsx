import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Raj Choudhury & AXIOM Workspace" },
      {
        name: "description",
        content:
          "Learn about Raj Choudhury's technical background, engineering philosophy, and the story behind AXIOM-AI WORKSPACE.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About — Raj Choudhury & AXIOM Workspace" },
      {
        property: "og:description",
        content:
          "The background, problem-solving mindset, and vision of Raj Choudhury and the AXIOM engineering collective.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/about" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/about" }],
  }),
  component: About,
});

const TIMELINE = [
  {
    year: "Early Stage",
    title: "First Lines of Code",
    body: "Raj Choudhury began exploring web development, discovering the power of building interactive software using foundational web technologies. The core motivation was learning how browser systems work from first principles.",
  },
  {
    year: "Exploration Phase",
    title: "Deepening Full-Stack Engineering",
    body: "Expanding into React, TypeScript, server architecture, and relational database systems. Learning how to structure maintainable frontend code, handle API requests efficiently, and write clean interfaces.",
  },
  {
    year: "2026 · Focus on AI",
    title: "Integrating Machine Intelligence",
    body: "Recognizing that AI models need persistent context and multi-provider routing rather than stateless API wrappers. Prototype testing began for multi-model orchestrators.",
  },
  {
    year: "2026 · AXIOM Founded",
    title: "Building the Collective",
    body: "Forming AXIOM Workspace alongside Daniyal, Jigyashu, Banajit, and Abhijeet. Developing AXIOM v1 (reasoning surface) and Ledger (agent memory), unifying design, backend APIs, and frontend motion.",
  },
];

function About() {
  return (
    <PageShell>
      {/* Intro Header */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-16">
        <Eyebrow>About Raj Choudhury & AXIOM</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Craft over hype.
          <br />
          <span className="text-shine">Systems over static demos.</span>
        </h1>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          I'm <strong>Raj Choudhury</strong>, a developer and project lead focused on building full-stack web applications, AI systems, and human-centered user interfaces. <strong>AXIOM Workspace</strong> is our independent workspace created to build software that is practical, durable, and clear.
        </p>
      </section>

      {/* Background & Story */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-border/40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Background & Journey</Eyebrow>
            <h2 className="hero-title mt-4 text-3xl md:text-4xl">
              From curiosity to systematic engineering.
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-7 text-sm leading-relaxed text-muted-foreground">
            <p>
              My path into software development started with a simple desire: understanding how digital tools are constructed and how lines of code translate into real human interactions. Over time, that curiosity evolved into a dedicated pursuit of software engineering best practices.
            </p>
            <p>
              When artificial intelligence started rapidly advancing, I noticed a common gap: most applications were built as quick API wrappers without proper context management, fallback routing, or long-term state. I became fascinated by how we can make AI tools feel reliable, respectful of user focus, and deeply integrated into practical daily workflows.
            </p>
            <p>
              AXIOM Workspace was created to explore these questions alongside a small group of collaborators who share a passion for continuous learning, modular code architecture, and high-quality design.
            </p>
          </div>
        </div>
      </section>

      {/* How I Think */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border/40">
        <Eyebrow>Mindset & Methodology</Eyebrow>
        <h2 className="hero-title mt-4 text-4xl md:text-5xl">How I Think</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          Building software requires balancing conceptual thinking with rigorous execution. Here is how I approach engineering and problem-solving:
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Problem Solving",
              desc: "Break complex challenges into smaller, isolated sub-problems. Understand the core constraint — whether latency, state synchronization, or UI clarity — before writing code.",
            },
            {
              title: "Learning Technologies",
              desc: "Learn new tools by building functional prototypes rather than reading documentation in isolation. Verify how frameworks perform under stress.",
            },
            {
              title: "Building Practical Systems",
              desc: "Prioritize tangible utility over flashiness. High-quality code is readable, maintainable, and built to survive beyond current trends.",
            },
            {
              title: "Experimentation & Risk",
              desc: "Treat experiments as hypotheses. Test multiple approaches (e.g., comparing local vs. cloud AI routing) to find what works best empirically.",
            },
            {
              title: "Failure & Iteration",
              desc: "Expect bugs, performance bottlenecks, and edge cases. View failure as telemetry that points directly toward the next architectural improvement.",
            },
            {
              title: "UX & Accessibility",
              desc: "A great system must be effortless to navigate. Typography, spacing, dark mode contrast, and responsive layout are as vital as backend logic.",
            },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6">
              <div className="eyebrow text-crimson-soft">{item.title}</div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What Drives Me */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border/40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Motivation</Eyebrow>
            <h2 className="hero-title mt-4 text-3xl md:text-4xl">What Drives Me</h2>
          </div>
          <div className="space-y-6 lg:col-span-7 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
              <div className="font-medium text-foreground text-base">1. The Joy of Building Real Software</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Nothing matches the feeling of starting with an empty editor and turning an idea into a fast, responsive application that users can interact with seamlessly.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
              <div className="font-medium text-foreground text-base">2. Mastering the Craft</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Technology changes rapidly. The challenge of mastering TypeScript, learning new routing models, optimizing database queries, and exploring modern AI APIs keeps me motivated every day.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
              <div className="font-medium text-foreground text-base">3. Teamwork & Growth</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Collaborating with team members — discussing backend schemas with Daniyal, testing UI animations with Jigyashu, refining layouts with Banajit, and QA testing with Abhijeet — makes every project stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Trajectory */}
      <section className="mx-auto max-w-4xl px-6 py-20 border-t border-border/40">
        <Eyebrow>Evolution</Eyebrow>
        <h2 className="hero-title mt-4 text-4xl md:text-5xl">Development Timeline</h2>
        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-crimson/60 via-crimson/20 to-transparent" />
          {TIMELINE.map((t, i) => (
            <div
              key={t.year}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <div className="absolute left-4 top-1.5 h-4 w-4 rounded-full glass-red" />
              <div className="eyebrow text-crimson-soft">{t.year}</div>
              <div className="mt-1 font-display text-xl font-semibold text-foreground">
                {t.title}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass-red rounded-3xl p-10 md:p-14 text-center">
          <Eyebrow>Explore Further</Eyebrow>
          <h2 className="hero-title mt-4 text-3xl md:text-5xl">
            See how these principles come to life.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="rounded-lg glass-red px-6 py-3 text-sm font-medium">
              Browse Projects →
            </Link>
            <Link to="/team" className="rounded-lg border border-border bg-secondary/80 px-6 py-3 text-sm font-medium hover:bg-secondary transition">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
