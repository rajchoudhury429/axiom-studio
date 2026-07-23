import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { DEFAULT_KEYWORDS } from "@/lib/seo";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Technical Stack — Raj Choudhury & AXIOM" },
      {
        name: "description",
        content:
          "Categorized technical capabilities across Frontend, Backend, AI systems, UI/UX, Databases, Dev Tools, and Hosting at AXIOM Workspace.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Skills & Technical Stack — Raj Choudhury & AXIOM" },
      {
        property: "og:description",
        content:
          "Explore the technologies, tools, and learning methodology powering Raj Choudhury and the AXIOM collective.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/skills" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/skills" }],
  }),
  component: Skills,
});

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  usageInProjects: string;
  skillsList: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    badge: "UI / UX",
    description: "Building responsive, modern, and accessible user interfaces with clean component architectures.",
    usageInProjects: "Used across all web applications, rendering React 19 pages with Vite, Tailwind CSS v4, and Rich Text editors.",
    skillsList: ["React 19", "Vite", "Tailwind CSS v4", "TipTap", "React Quill", "Chart.js"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    badge: "SERVER",
    description: "Engineering server API controllers, local endpoint routing, and token validation logic.",
    usageInProjects: "Powering notes database synchronizations, dashboard statistics, system telemetry endpoints, and auth tokens.",
    skillsList: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role Validation", "Cors Routing"],
  },
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    badge: "MODEL",
    description: "Orchestrating text intelligence generators, optical scan parsers, and document loaders.",
    usageInProjects: "Engaging Gemini AI for context reviews, Tesseract.js for OCR image scans, and pdf-parse for doc extraction.",
    skillsList: ["Google Generative AI", "Gemini SDK", "Tesseract.js OCR", "pdf-parse API", "Prompt Injection"],
  },
  {
    id: "design",
    title: "UI/UX & Motion Systems",
    badge: "DESIGN",
    description: "Creating high-tech dark themes, WebGL visualizers, and interactive screen overlays.",
    usageInProjects: "Displaying rotating Three.js canvas orbs, debounced sliders, and collapsible bottom hexagon menus.",
    skillsList: ["Three.js", "React Three Fiber", "Framer Motion", "HUD Style Guide", "Keyboard Nav", "Volume Sliders"],
  },
  {
    id: "database",
    title: "Database & Data",
    badge: "DATA",
    description: "Storing local relational database records and handling migrations/schema configurations.",
    usageInProjects: "Persisting tasks, notes folders, calendars, chapter checklists, and chat sessions in SQLite files.",
    skillsList: ["SQLite", "SQLite3 Core", "better-sqlite3", "Relational Schemas", "Sync SQL speed"],
  },
  {
    id: "automation",
    title: "OS Automation",
    badge: "OS AUTO",
    description: "Invoking native Windows scripts and starting executable programs from browser triggers.",
    usageInProjects: "Powering launcher-server endpoints, volume helper files, and pyautogui playback sequences.",
    skillsList: ["Tkinter GUI", "PyAutoGUI automation", "PowerShell Helper", "HTTP port 5050", "start exe command"],
  },
  {
    id: "tools",
    title: "Development Tools",
    badge: "TOOLS",
    description: "Managing local projects dependencies, build bundling, code syntax linting, and git version history.",
    usageInProjects: "Compiling client bundles in Vite, linting script files via oxlint, and saving Git chronologies.",
    skillsList: ["Vite Compiler", "Oxlint validation", "Git & GitHub", "npm scripts", "Nodemon reloading"],
  },
];

type SkillNode = {
  name: string;
  short: string;
  badge: string;
  cat: string;
  ring: "inner" | "outer";
  description: string;
  usage: string;
};

const SKILL_NODES: SkillNode[] = [
  // Inner Ring (8 Core Skills)
  {
    name: "React 19",
    short: "React",
    badge: "UI",
    cat: "Frontend",
    ring: "inner",
    description: "Declarative component-based UI library for building interactive web interfaces.",
    usage: "Primary UI framework rendering all student widgets, planners, and layout dashboards.",
  },
  {
    name: "SQLite Database",
    short: "SQLite",
    badge: "DATA",
    cat: "Database",
    ring: "inner",
    description: "Embedded SQL database engine for zero-config local persistence.",
    usage: "Persists student notes, flashcards, countdown goals, and timetables locally via SQLite schemas.",
  },
  {
    name: "Node.js",
    short: "Node",
    badge: "RUNTIME",
    cat: "Backend",
    ring: "inner",
    description: "Asynchronous JavaScript server environment.",
    usage: "Executes the main API server process, routing REST payloads and file buffers.",
  },
  {
    name: "Google Generative AI",
    short: "Gemini",
    badge: "AI",
    cat: "AI & ML",
    ring: "inner",
    description: "Google DeepMind's LLM reasoning SDK for text, chat, and prompt analysis.",
    usage: "Acts as the intelligence engine behind note explanations and PDF analysis.",
  },
  {
    name: "Python",
    short: "Python",
    badge: "LANG",
    cat: "OS Automation",
    ring: "inner",
    description: "High-level scripting runtime for system scripts and app launchers.",
    usage: "Invokes external programs, playback macros, and local servers outside the browser context.",
  },
  {
    name: "Tailwind CSS v4",
    short: "Tailwind",
    badge: "STYLING",
    cat: "Frontend",
    ring: "inner",
    description: "Utility-first design tokens CSS compiler.",
    usage: "Styles the dark sci-fi HUD theme, grid layers, and collapsible navigation hexagon docks.",
  },
  {
    name: "Express.js",
    short: "Express",
    badge: "SERVER",
    cat: "Backend",
    ring: "inner",
    description: "Minimal web framework routing backend server endpoints.",
    usage: "Handles authorization guards, study timer counters, and file exploration queries.",
  },
  {
    name: "Framer Motion",
    short: "Motion",
    badge: "ANIMATION",
    cat: "UI/UX",
    ring: "inner",
    description: "Declarative motion UI transitions library.",
    usage: "Animates auto-hiding indicator dots and sliding menu docks in desktop layouts.",
  },

  // Outer Ring (14 Skills)
  {
    name: "Vite",
    short: "Vite",
    badge: "BUILD",
    cat: "Tools",
    ring: "outer",
    description: "Ultra-fast frontend build tool and dev server.",
    usage: "Bundles frontend assets and provides fast Hot Module Replacement during development.",
  },
  {
    name: "Three.js",
    short: "Three.js",
    badge: "3D ENGINE",
    cat: "UI/UX",
    ring: "outer",
    description: "WebGL 3D graphics rendering engine.",
    usage: "Renders low-level canvas vectors for rotating futuristic dashboard cores.",
  },
  {
    name: "React Three Fiber",
    short: "R3F",
    badge: "3D BRIDGE",
    cat: "UI/UX",
    ring: "outer",
    description: "React wrapper for declarative Three.js integration.",
    usage: "Maintains WebGL meshes and updates properties based on React component states.",
  },
  {
    name: "Chart.js",
    short: "Chart",
    badge: "GRAPH",
    cat: "Frontend",
    ring: "outer",
    description: "Lightweight HTML5 canvas charting library.",
    usage: "Configures visual graph styles for data dashboards.",
  },
  {
    name: "react-chartjs-2",
    short: "Chart.js 2",
    badge: "CHART WRAP",
    cat: "Frontend",
    ring: "outer",
    description: "React bindings for Chart.js rendering.",
    usage: "Synchronizes dashboard metrics datasets with the canvas render context.",
  },
  {
    name: "TipTap",
    short: "TipTap",
    badge: "EDITOR",
    cat: "Frontend",
    ring: "outer",
    description: "Headless rich text editor framework.",
    usage: "Handles typing state schemas and custom formatting options inside notebooks.",
  },
  {
    name: "Quill Editor",
    short: "Quill",
    badge: "EDITOR",
    cat: "Frontend",
    ring: "outer",
    description: "Robust rich text editor using delta formats.",
    usage: "Renders fallback document editing sheets inside note detail sections.",
  },
  {
    name: "Web Speech API",
    short: "Speech",
    badge: "AUDIO",
    cat: "UI/UX",
    ring: "outer",
    description: "Browser native Speech Synthesis and Recognition.",
    usage: "Listens for voice commands and speaks chatbot responses without network keys.",
  },
  {
    name: "better-sqlite3",
    short: "sqlite3",
    badge: "DRIVER",
    cat: "Database",
    ring: "outer",
    description: "Fast synchronous SQLite driver for Node.",
    usage: "Avoids async overheads for rapid C-Drive read/write operations.",
  },
  {
    name: "Tesseract.js",
    short: "Tesseract",
    badge: "OCR",
    cat: "AI & ML",
    ring: "outer",
    description: "Optical Character Recognition parsing engine.",
    usage: "Ingests scanned document uploads to output editable text fields locally.",
  },
  {
    name: "PDF.js",
    short: "PDF.js",
    badge: "PDF",
    cat: "AI & ML",
    ring: "outer",
    description: "Client-side PDF page renderer.",
    usage: "Extracts text bounds and displays pages within the smart PDF workspace.",
  },
  {
    name: "pdf-parse",
    short: "pdf-parse",
    badge: "PDF PARSER",
    cat: "AI & ML",
    ring: "outer",
    description: "Backend PDF binary buffer text extractor.",
    usage: "Extracts raw text strings from student book uploads for summaries.",
  },
  {
    name: "Tkinter GUI",
    short: "Tkinter",
    badge: "DESKTOP UI",
    cat: "OS Automation",
    ring: "outer",
    description: "Python standard GUI toolkit.",
    usage: "Renders the desktop launcher program interface on port 5050.",
  },
  {
    name: "PowerShell scripts",
    short: "PowerShell",
    badge: "SHELL",
    cat: "OS Automation",
    ring: "outer",
    description: "Native Windows shell execution scripts.",
    usage: "Queries and sets master volume configurations via backend helper systems.",
  },
];

function Skills() {
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

  // Concentric Polar Orbit Calculation for Zero Overlaps & Exact Line Centering
  const nodes = useMemo(() => {
    const innerNodes = SKILL_NODES.filter((s) => s.ring === "inner");
    const outerNodes = SKILL_NODES.filter((s) => s.ring === "outer");

    const innerPos = innerNodes.map((s, i) => {
      const angle = (i / innerNodes.length) * 2 * Math.PI - Math.PI / 2; // -90 deg start (top)
      const r = 24; // 24% radius
      return {
        ...s,
        x: 50 + Math.cos(angle) * r,
        y: 50 + Math.sin(angle) * r,
        size: 42,
      };
    });

    const outerPos = outerNodes.map((s, i) => {
      const angle = (i / outerNodes.length) * 2 * Math.PI - Math.PI / 2 + Math.PI / 8; // Offset start
      const r = 38; // 38% radius
      return {
        ...s,
        x: 50 + Math.cos(angle) * r,
        y: 50 + Math.sin(angle) * r,
        size: 38,
      };
    });

    return [...innerPos, ...outerPos];
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedNode(null);
        setSelectedCategory(null);
      }
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
        className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-4"
      >
        <Eyebrow>Technical Skill Set</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Tools, technologies,
          <br />
          <span className="text-shine">and engineering capabilities.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          A structured overview of the technical stack, frameworks, backend APIs, and design systems used by <strong>Raj Choudhury</strong> and the <strong>AXIOM Workspace</strong> team. Click any orb or category card to open full details.
        </p>
      </motion.section>

      {/* Galaxy Visual Constellation with Interactive Orbs */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 py-6"
      >
        <div className="relative aspect-square max-w-2xl mx-auto rounded-2xl sm:rounded-3xl border border-border bg-input grid-bg overflow-hidden shadow-xl">
          {/* SVG Connector Lines pointing to exact orb centers (n.x, n.y) */}
          <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
              role="presentation"
            >
              {nodes.map((n, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="var(--crimson)"
                  strokeOpacity="0.4"
                  strokeWidth="0.25"
                />
              ))}
            </svg>
          </div>

          {/* Central Core Orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 sm:h-16 sm:w-16 rounded-full glass-red animate-pulse-glow flex items-center justify-center font-display text-[11px] sm:text-xs font-semibold tracking-wider text-white shadow-[0_0_20px_var(--crimson)] z-10 select-none">
            AXIOM
          </div>

          {/* Skill Orbs Centered Exactly at (n.x, n.y) */}
          {nodes.map((n, i) => (
            <motion.button
              key={n.name + i}
              onClick={() => setSelectedNode(n)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="absolute cursor-pointer group z-10"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: n.size,
                height: n.size,
                x: "-50%",
                y: "-50%",
              }}
            >
              {/* Glowing Orb Circle */}
              <div className="h-full w-full rounded-full glass-red border border-crimson/60 flex items-center justify-center group-hover:border-crimson group-hover:shadow-[0_0_18px_var(--crimson)] transition-all duration-300">
                <span className="font-display font-semibold text-[8px] sm:text-[9px] md:text-[10px] text-white tracking-tight select-none text-center px-1 leading-none">
                  {n.short}
                </span>
              </div>

              {/* Skill Name Label Tag Positioned Beneath Orb */}
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover/95 border border-border px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono text-foreground opacity-95 group-hover:opacity-100 group-hover:border-crimson/70 transition-all duration-200 shadow-lg pointer-events-none">
                {n.name}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Categorized Skills Breakdown Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 border-t border-border/40 mt-8">
        <Eyebrow>Categorized Expertise</Eyebrow>
        <h2 className="hero-title mt-4 text-3xl sm:text-4xl md:text-5xl">Technology Categories</h2>
        <p className="mt-4 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Click any card to open detailed project usage profiles and technology breakdowns.
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-left glass rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-crimson/50 hover:shadow-[0_0_20px_rgba(235,50,75,0.15)] transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="eyebrow text-crimson-soft text-xs">{cat.title}</div>
                  <span className="eyebrow text-[9px] uppercase tracking-widest text-muted-foreground font-mono">
                    {cat.badge}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground font-medium line-clamp-2">
                  {cat.description}
                </p>
                <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  <strong>Usage: </strong> {cat.usageInProjects}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                {cat.skillsList.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary/80 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
                {cat.skillsList.length > 4 && (
                  <span className="text-[10px] font-mono text-crimson-soft self-center">
                    +{cat.skillsList.length - 4} more
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Floating Detail Window Modal for Node Click */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
              className="fixed inset-0 bg-background/90"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg glass-red rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-crimson/50 shadow-[0_0_35px_rgba(235,50,75,0.3)] space-y-4 sm:space-y-6 max-h-[85vh] sm:max-h-[90vh] flex flex-col justify-between overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-3 flex-shrink-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      {selectedNode.name}
                    </h3>
                    <span className="eyebrow text-[9px] font-mono tracking-widest px-2 py-0.5 rounded bg-crimson/20 text-crimson-soft border border-crimson/40">
                      {selectedNode.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground font-mono">
                    Category: {selectedNode.cat}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedNode(null)}
                  className="rounded-full h-7 w-7 flex items-center justify-center border border-border bg-secondary/80 text-muted-foreground hover:text-foreground transition flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-[2.5/1] w-full rounded-xl border border-border/80 bg-input grid-bg flex items-center justify-center flex-shrink-0">
                <div className="glass-red rounded-full h-16 w-16 flex items-center justify-center font-display text-xl font-bold text-white animate-pulse-glow shadow-[0_0_20px_var(--crimson)]">
                  {selectedNode.short}
                </div>
              </div>

              <div className="space-y-3 text-xs text-muted-foreground leading-relaxed overflow-y-auto pr-1 flex-grow">
                <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                  <strong className="text-foreground text-xs block mb-0.5">Description</strong>
                  <span>{selectedNode.description}</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                  <strong className="text-foreground text-xs block mb-0.5">Usage in AXIOM Projects</strong>
                  <span>{selectedNode.usage}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedNode(null)}
                  className="rounded-xl glass-red px-5 py-2 text-xs font-semibold text-white hover:brightness-110 transition"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Detail Window Modal for Category Click */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="fixed inset-0 bg-background/90"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg md:max-w-xl glass-red rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-crimson/50 shadow-[0_0_35px_rgba(235,50,75,0.3)] space-y-4 sm:space-y-6 max-h-[85vh] sm:max-h-[90vh] flex flex-col justify-between overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-3 flex-shrink-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      {selectedCategory.title}
                    </h3>
                    <span className="eyebrow text-[9px] font-mono tracking-widest px-2 py-0.5 rounded bg-crimson/20 text-crimson-soft border border-crimson/40">
                      {selectedCategory.badge}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full h-7 w-7 flex items-center justify-center border border-border bg-secondary/80 text-muted-foreground hover:text-foreground transition flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs text-muted-foreground leading-relaxed overflow-y-auto pr-1 flex-grow">
                <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                  <strong className="text-foreground text-xs block mb-0.5">Overview</strong>
                  <span>{selectedCategory.description}</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                  <strong className="text-foreground text-xs block mb-0.5">Project Integration</strong>
                  <span>{selectedCategory.usageInProjects}</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                  <strong className="text-foreground text-xs block mb-1">Key Technologies & Libraries</strong>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedCategory.skillsList.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-mono text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-xl glass-red px-5 py-2 text-xs font-semibold text-white hover:brightness-110 transition"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* How I Learn Technologies */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-border/40"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Learning Methodology</Eyebrow>
            <h2 className="hero-title mt-4 text-3xl md:text-4xl">How I Learn Technologies</h2>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Technology evolves constantly. Here is the structured approach Raj and the team use to evaluate, test, and adopt new software tools.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {[
              {
                step: "1. Official Documentation & Fundamentals",
                text: "Read official guides and specifications to understand the core architecture, mental model, and design trade-offs of the tool before writing code.",
              },
              {
                step: "2. Isolated Prototype Testing",
                text: "Build a minimal, standalone sandbox prototype to test key features, benchmarking performance, edge case handling, and Developer Experience (DX).",
              },
              {
                step: "3. Integration & Peer Review",
                text: "Introduce the technology into a real project branch (e.g. testing TanStack Start or Tailwind v4) and conduct peer code reviews with the team.",
              },
              {
                step: "4. Refinement & Best Practices",
                text: "Document key learnings, establish internal code conventions, and refine integration patterns for long-term maintainability.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5">
                <div className="font-medium text-foreground text-xs sm:text-sm">{s.step}</div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="glass-red rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center">
          <Eyebrow>See Skills in Action</Eyebrow>
          <h2 className="hero-title mt-4 text-2xl sm:text-3xl md:text-4xl">Explore how these technologies power our projects</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/projects" className="rounded-lg glass-red px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium">
              Explore Projects →
            </Link>
            <Link to="/technology" className="rounded-lg border border-border bg-secondary/80 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-secondary transition">
              Technology Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
