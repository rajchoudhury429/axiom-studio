import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology Stack — Raj Choudhury & AXIOM" },
      {
        name: "description",
        content:
          "The technology stack powering AXIOM Studio and why each piece is here. React, Next.js, TypeScript, Tailwind, Framer Motion, Go, Node, Postgres, and AI models.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Technology Stack — Raj Choudhury & AXIOM" },
      {
        property: "og:description",
        content:
          "Every tool selected with purpose. Explore the complete frontend, backend, database, and AI ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/technology" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/technology" }],
  }),
  component: Tech,
});

interface TechCardItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  category: "Frontend" | "Backend" | "AI & ML" | "Databases" | "Dev Tools";
  whatItDoes: string;
  whySelected: string;
  whereUsed: string;
  ecosystemRole: string;
}

const TECH_CARDS: TechCardItem[] = [
  {
    id: "react",
    name: "React",
    badge: "UI",
    tagline: "Component model that scales with team size, not just app size.",
    category: "Frontend",
    whatItDoes: "Declarative component-based UI library for building interactive web interfaces.",
    whySelected: "Offers standard component lifecycle management, concurrent rendering, and widespread ecosystem support.",
    whereUsed: "Primary UI framework across all pages, modals, navigation shells, and chat windows.",
    ecosystemRole: "Renders the visual client layer, handling state synchronization and user events.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    badge: "APP",
    tagline: "Hybrid rendering, edge routes, and a stable production surface.",
    category: "Frontend",
    whatItDoes: "Full-stack React framework supporting SSR, SSG, and edge server routes.",
    whySelected: "Simplifies server-side rendering, routing conventions, and edge function deployments.",
    whereUsed: "Full-stack application architecture references and edge rendering pipelines.",
    ecosystemRole: "Manages serverless application hosting and hybrid rendering routes.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    badge: "LANG",
    tagline: "Types are documentation the compiler enforces.",
    category: "Frontend",
    whatItDoes: "Typed superset of JavaScript providing static type checking at compile time.",
    whySelected: "Prevents runtime null/undefined crashes and provides self-documenting code contracts across team members.",
    whereUsed: "Used universally across all `.ts` and `.tsx` source files in the repository.",
    ecosystemRole: "Enforces strict data type contracts between frontend UI components and backend server endpoints.",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    badge: "UI",
    tagline: "Design tokens as class utilities — no runtime cost, no dead CSS.",
    category: "Frontend",
    whatItDoes: "Utility-first CSS framework for styling components via composable class tokens.",
    whySelected: "Eliminates runtime CSS overhead while providing theme variable customization and fast developer iteration.",
    whereUsed: "All component styling, glassmorphic panels, grid backgrounds, typography, and responsive layouts.",
    ecosystemRole: "Defines visual theme design tokens, dark mode colors, responsive breakpoints, and glassmorphism.",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    badge: "MOTION",
    tagline: "Motion that respects layout and accessibility, not just aesthetics.",
    category: "Frontend",
    whatItDoes: "Motion library for React used to create smooth component animations and page transitions.",
    whySelected: "Enables declarative micro-interactions, layout animations, and exit transitions without heavy GPU overhead.",
    whereUsed: "AI Core orbit rotation, floating background particles, modal overlays, and card transitions.",
    ecosystemRole: "Provides visual feedback and smooth UI transitions during user interactions.",
  },
  {
    id: "gsap",
    name: "GSAP",
    badge: "MOTION",
    tagline: "Timeline-based orchestration for scenes that need to be authored, not tweened.",
    category: "Frontend",
    whatItDoes: "High-performance JavaScript animation library for complex timeline sequences.",
    whySelected: "Unmatched precision for multi-step canvas animations and SVG path morphs.",
    whereUsed: "Complex vector animation sequences and promotional canvas scenes.",
    ecosystemRole: "Orchestrates multi-stage interactive canvas motion.",
  },
  {
    id: "threejs",
    name: "Three.js",
    badge: "3D",
    tagline: "The lowest-level WebGL abstraction we still trust to ship.",
    category: "Frontend",
    whatItDoes: "3D graphics library for creating WebGL interactive scenes in the browser.",
    whySelected: "Provides low-level WebGL shaders, camera controls, and lighting models.",
    whereUsed: "Interactive 3D constellation visualizer on the Skills page and 3D lab.",
    ecosystemRole: "Renders real-time 3D particle systems and GPU-accelerated graphics.",
  },
  {
    id: "r3f",
    name: "R3F",
    badge: "3D",
    tagline: "Declarative Three.js. Scenes reconcile like components.",
    category: "Frontend",
    whatItDoes: "React renderer for Three.js enabling declarative 3D scene construction.",
    whySelected: "Allows 3D meshes and lighting to be composed as standard React components.",
    whereUsed: "Declarative 3D canvas components and particle fields.",
    ecosystemRole: "Connects React component state to Three.js WebGL scenes.",
  },
  {
    id: "node",
    name: "Node",
    badge: "RUNTIME",
    tagline: "Ubiquitous, boring, and available on every host we care about.",
    category: "Backend",
    whatItDoes: "Asynchronous event-driven JavaScript runtime environment for backend logic.",
    whySelected: "Fast non-blocking I/O performance for handling asynchronous API requests and SSE text streaming.",
    whereUsed: "Backend server handlers (`/api/chat`), environment key resolution, and request validation.",
    ecosystemRole: "Serves as the primary execution engine for API routing and serverless handlers.",
  },
  {
    id: "express",
    name: "Express",
    badge: "SERVER",
    tagline: "Minimal middleware surface. Predictable failure modes.",
    category: "Backend",
    whatItDoes: "Fast, unopinionated, minimal web framework for Node.js.",
    whySelected: "Simple middleware chaining, route management, and light memory footprint.",
    whereUsed: "Backend API routing gateways and microservices.",
    ecosystemRole: "Handles HTTP request parsing and middleware validation.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    badge: "DATA",
    tagline: "Document store for shapes that evolve faster than schemas.",
    category: "Databases",
    whatItDoes: "NoSQL document database storing JSON-like flexible documents.",
    whySelected: "Flexible schema design for rapidly evolving unstructured text and metadata logs.",
    whereUsed: "Unstructured conversation storage and document schemas.",
    ecosystemRole: "Provides dynamic document storage for variable telemetry structures.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    badge: "DATA",
    tagline: "Relational truth. Everything eventually joins something else.",
    category: "Databases",
    whatItDoes: "Powerful open-source relational database management system with ACID compliance.",
    whySelected: "Relational integrity combined with the pgvector extension for AI similarity search.",
    whereUsed: "Stores user memory vectors, agent context schemas, and audit logs in Ledger.",
    ecosystemRole: "Provides durable, queryable state for persistent AI memory.",
  },
  {
    id: "redis",
    name: "Redis",
    badge: "DATA",
    tagline: "The cache, the queue, the ephemeral state — one dial to turn.",
    category: "Databases",
    whatItDoes: "In-memory key-value data structure store used as a cache and message broker.",
    whySelected: "Sub-2ms read/write speeds for caching hot memory vectors and rate limiting.",
    whereUsed: "API rate limiting and ephemeral memory caching in backend services.",
    ecosystemRole: "Accelerates memory lookup speeds and shields backend servers from rate spikes.",
  },
  {
    id: "gemini",
    name: "Gemini",
    badge: "MODEL",
    tagline: "Long context and multimodal by default.",
    category: "AI & ML",
    whatItDoes: "Multimodal AI model suite developed by Google DeepMind with million-token context windows.",
    whySelected: "Exceptional performance on long-context document analysis and structured code synthesis.",
    whereUsed: "Core reasoning model in AXIOM v1 multi-model router.",
    ecosystemRole: "Processes complex prompts, multimodal documents, and long codebases.",
  },
  {
    id: "claude",
    name: "Claude",
    badge: "MODEL",
    tagline: "Reasoning under ambiguity. First choice for high-stakes prompts.",
    category: "AI & ML",
    whatItDoes: "Advanced reasoning LLM family built by Anthropic specializing in logic and code review.",
    whySelected: "Superior precision for complex multi-step reasoning, architectural analysis, and prompt safety.",
    whereUsed: "High-complexity prompt routing in AXIOM v1 and Router v2.",
    ecosystemRole: "Primary model for analytical logic and structural code verification.",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    badge: "MODEL",
    tagline: "Cost-effective inference where latency budget is tight.",
    category: "AI & ML",
    whatItDoes: "High-performance open reasoning model optimized for mathematical and code inference.",
    whySelected: "Highly efficient token generation with rapid response speeds and low token cost.",
    whereUsed: "Rapid prompt completion and code snippet generation.",
    ecosystemRole: "Delivers fast cost-effective inference for lightweight query tasks.",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    badge: "MODEL",
    tagline: "One key, many providers. Fallback discipline built in.",
    category: "AI & ML",
    whatItDoes: "Universal API gateway providing access to dozens of top-tier open and proprietary LLM models.",
    whySelected: "Eliminates single-provider dependencies and enforces automated fallback routing.",
    whereUsed: "Provider orchestration layer in AXIOM Router v2.",
    ecosystemRole: "Acts as the fallback proxy gateway across external model providers.",
  },
];

function Tech() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<TechCardItem | null>(null);

  const categories = ["All", "Frontend", "Backend", "AI & ML", "Databases"];

  const filtered = TECH_CARDS.filter(
    (t) => activeCategory === "All" || t.category === activeCategory
  );

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTech(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <PageShell>
      {/* Header Section with Staggered Entry Animation */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-6 pt-8 pb-4"
      >
        <Eyebrow>The Stack</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Every choice,
          <br />
          <span className="text-shine">on purpose.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
          Click any card to inspect full technical rationales, project usage sites, and ecosystem roles.
        </p>
      </motion.section>

      {/* Category Filter Tabs with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-7xl px-6 py-4"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                c === activeCategory
                  ? "glass-red text-white shadow-[0_0_10px_var(--crimson)]"
                  : "border border-border bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.section>

      {/* 3-Column Technology Card Grid (1-col on mobile, 2-col on tablet, 3-col on desktop/laptop) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {filtered.map((t, index) => (
            <motion.button
              key={t.id}
              onClick={() => setSelectedTech(t)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-left rounded-2xl border border-border bg-secondary/50 p-4 sm:p-5 transition-all duration-200 group hover:border-crimson/50 hover:bg-secondary hover:shadow-[0_0_15px_rgba(235,50,75,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-crimson-soft transition-colors">
                    {t.name}
                  </div>
                  <span className="eyebrow text-[9px] uppercase tracking-widest text-muted-foreground font-mono">
                    {t.badge}
                  </span>
                </div>
                <div className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors line-clamp-2">
                  {t.tagline}
                </div>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center justify-end text-[10px] font-mono text-crimson-soft opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                Inspect details →
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Fully Responsive Animated Detail Window / Overlay Modal */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Floating Glass Detail Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg md:max-w-xl glass-red rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-crimson/50 shadow-[0_0_35px_rgba(235,50,75,0.3)] space-y-4 sm:space-y-6 max-h-[85vh] sm:max-h-[90vh] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Bar with Title, Badge, and Close Button */}
              <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-3 sm:pb-4 flex-shrink-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      {selectedTech.name}
                    </h2>
                    <span className="eyebrow text-[9px] sm:text-[10px] font-mono tracking-widest px-2 py-0.5 rounded bg-crimson/20 text-crimson-soft border border-crimson/40">
                      {selectedTech.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground font-mono">
                    Category: {selectedTech.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTech(null)}
                  className="rounded-full h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center border border-border bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-crimson/50 transition flex-shrink-0"
                  aria-label="Close detail window"
                >
                  ✕
                </button>
              </div>

              {/* Animated Emblem Banner */}
              <div className="aspect-[2.5/1] sm:aspect-video w-full rounded-xl sm:rounded-2xl border border-border/80 bg-input grid-bg flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <div className="glass-red rounded-full h-14 w-14 sm:h-20 sm:w-20 flex items-center justify-center font-display text-xl sm:text-2xl font-bold text-white animate-pulse-glow shadow-[0_0_20px_var(--crimson)]">
                  {selectedTech.name.slice(0, 2)}
                </div>
              </div>

              {/* Detailed Breakdown with Responsive Scrollbar */}
              <div className="space-y-3 text-[11px] sm:text-xs text-muted-foreground leading-relaxed overflow-y-auto pr-1 sm:pr-2 flex-grow">
                <div className="rounded-lg sm:rounded-xl border border-border/60 bg-secondary/30 p-3 sm:p-3.5">
                  <strong className="text-foreground text-xs block mb-0.5 sm:mb-1">What It Does</strong>
                  <span>{selectedTech.whatItDoes}</span>
                </div>

                <div className="rounded-lg sm:rounded-xl border border-border/60 bg-secondary/30 p-3 sm:p-3.5">
                  <strong className="text-foreground text-xs block mb-0.5 sm:mb-1">Why Selected</strong>
                  <span>{selectedTech.whySelected}</span>
                </div>

                <div className="rounded-lg sm:rounded-xl border border-border/60 bg-secondary/30 p-3 sm:p-3.5">
                  <strong className="text-foreground text-xs block mb-0.5 sm:mb-1">Where Used in AXIOM Studio</strong>
                  <span>{selectedTech.whereUsed}</span>
                </div>

                <div className="rounded-lg sm:rounded-xl border border-border/60 bg-secondary/30 p-3 sm:p-3.5">
                  <strong className="text-foreground text-xs block mb-0.5 sm:mb-1">Ecosystem Role</strong>
                  <span>{selectedTech.ecosystemRole}</span>
                </div>
              </div>

              {/* Close Action Button */}
              <div className="pt-2 flex justify-end flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedTech(null)}
                  className="rounded-lg sm:rounded-xl glass-red px-5 sm:px-6 py-2 sm:py-2.5 text-xs font-semibold text-white hover:brightness-110 transition"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Architecture Philosophy Section with Entry Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 border-t border-border/40 mt-8"
      >
        <div className="glass-red rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <Eyebrow>Architecture Philosophy</Eyebrow>
          <h2 className="hero-title mt-4 text-2xl sm:text-3xl md:text-4xl">Modularity & Independence</h2>
          <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Our technology choices prioritize decoupled interfaces. By keeping API adapters, UI components, and memory stores isolated behind strict TypeScript interfaces, we can swap underlying models or database backends without breaking the user experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <Link to="/research" className="rounded-lg glass-red px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium">
              Explore Research Notes →
            </Link>
            <Link to="/docs" className="rounded-lg border border-border bg-secondary/80 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-secondary transition">
              Technical Documentation
            </Link>
          </div>
        </div>
      </motion.section>
    </PageShell>
  );
}
