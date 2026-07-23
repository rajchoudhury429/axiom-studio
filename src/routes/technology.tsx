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
          "The technology stack powering AXIOM Workspace and why each piece is here. React, Vite, Tailwind CSS, Framer Motion, Node, SQLite, and AI models.",
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
    name: "React 19",
    badge: "UI",
    tagline: "Component-based rendering for structured HUD dashboards.",
    category: "Frontend",
    whatItDoes: "Component-based library powering the user views, dashboard, and planners.",
    whySelected: "Reconciliation model fits perfectly with live background polling loops.",
    whereUsed: "Symmetrical grid study widgets, rich notes, and AI workspace page.",
    ecosystemRole: "Handles client UI state synchronization and user event handling.",
  },
  {
    id: "vite",
    name: "Vite",
    badge: "BUILD",
    tagline: "Instant HMR and fast bundle compilation.",
    category: "Frontend",
    whatItDoes: "Frontend build bundler and development server.",
    whySelected: "Fast developer feedback loop and modern ES module building.",
    whereUsed: "Development server running on port 5173, compiles frontend files.",
    ecosystemRole: "Bundles frontend assets, styles, and libraries for client delivery.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    badge: "STYLING",
    tagline: "Design tokens for glowing sci-fi HUD interfaces.",
    category: "Frontend",
    whatItDoes: "Utility-first CSS styling framework.",
    whySelected: "No-overhead utility classes for glassmorphic panels and responsive grids.",
    whereUsed: "Entire styling layer, header specs, and layout layouts.",
    ecosystemRole: "Defines the visual sci-fi HUD theme, colors, and layouts.",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    badge: "MOTION",
    tagline: "Fluid animations for the collapsible dock and menus.",
    category: "Frontend",
    whatItDoes: "Motion library for React components.",
    whySelected: "Simplifies building smooth auto-hiding indicators and layout transitions.",
    whereUsed: "Collapsible bottom dock, splash screen, and modal fades.",
    ecosystemRole: "Provides visual micro-interactions and smooth dock collapses.",
  },
  {
    id: "threejs",
    name: "Three.js",
    badge: "3D ENGINE",
    tagline: "Lowest-level WebGL graphics abstraction engine.",
    category: "Frontend",
    whatItDoes: "Creates and displays animated 3D graphics in a web browser using WebGL.",
    whySelected: "Unmatched browser performance and particle management for rich visualizer cores.",
    whereUsed: "Renders the complex geometry of the rotating HUD core elements.",
    ecosystemRole: "Acts as the low-level rendering context for 3D meshes.",
  },
  {
    id: "r3f",
    name: "React Three Fiber",
    badge: "3D BRIDGE",
    tagline: "Declarative Three.js component wrapper.",
    category: "Frontend",
    whatItDoes: "Reconciles Three.js meshes and cameras as standard React JSX elements.",
    whySelected: "Integrates WebGL rendering seamlessly with React state updates.",
    whereUsed: "Primary canvas wrapper for the central rotating Axiom orb.",
    ecosystemRole: "Bridges React components lifecycle directly into WebGL render loops.",
  },
  {
    id: "chartjs",
    name: "Chart.js",
    badge: "ANALYTICS",
    tagline: "Canvas-based lightweight data visualization.",
    category: "Frontend",
    whatItDoes: "Renders high-performance charts and dashboard graph widgets.",
    whySelected: "Extremely simple configuration and minimal memory footprint.",
    whereUsed: "Dashboard statistics, progress charts, and subject analytics.",
    ecosystemRole: "Draws weekly study charts and chapters progress on dashboard templates.",
  },
  {
    id: "react-chartjs-2",
    name: "react-chartjs-2",
    badge: "CHART WRAP",
    tagline: "React wrapper components for Chart.js integrations.",
    category: "Frontend",
    whatItDoes: "Exposes Chart.js instances as configurable React components.",
    whySelected: "Enables re-rendering of canvas graphics on component state updates.",
    whereUsed: "Analytical metrics cards and focus-time charts.",
    ecosystemRole: "Coordinates canvas updates with client-side statistics arrays.",
  },
  {
    id: "tiptap",
    name: "TipTap",
    badge: "EDITOR",
    tagline: "Headless rich text editor for custom note architectures.",
    category: "Frontend",
    whatItDoes: "Framework-agnostic customizable rich text editor editor.",
    whySelected: "Provides absolute control over DOM tags, custom extensions, and node schemas.",
    whereUsed: "Smart Notes detailed document writer component.",
    ecosystemRole: "Manages typing states and structures markdown outputs for notes.",
  },
  {
    id: "quill",
    name: "Quill Editor",
    badge: "EDITOR",
    tagline: "Robust rich text editor with API-driven contents.",
    category: "Frontend",
    whatItDoes: "Pre-built rich text editor utilizing React wrappers (`react-quill-new`).",
    whySelected: "Reliable fallback formatting and inline styling features.",
    whereUsed: "Alternative writing sheets inside the notebook panel.",
    ecosystemRole: "Captures and displays rich document formats with high speed.",
  },
  {
    id: "speech",
    name: "Web Speech API",
    badge: "AUDIO",
    tagline: "Browser-native voice synthesis and recognition.",
    category: "Frontend",
    whatItDoes: "Standard browser APIs for Speech-to-Text and Text-to-Speech.",
    whySelected: "Zero-cost native implementation with no API key keys required.",
    whereUsed: "Voice Chat mode and hands-free voice nav controls.",
    ecosystemRole: "Captures wake-word triggers and reads text responses back to users.",
  },
  {
    id: "node",
    name: "Node.js",
    badge: "RUNTIME",
    tagline: "Backend environment for server handlers and REST endpoints.",
    category: "Backend",
    whatItDoes: "Event-driven, asynchronous JavaScript runtime.",
    whySelected: "Non-blocking I/O model handles multiple file uploads and prompt streams.",
    whereUsed: "Primary server running on port 5000, environment scripts.",
    ecosystemRole: "Runs the Express REST server and manages local disk routing.",
  },
  {
    id: "express",
    name: "Express.js",
    badge: "SERVER",
    tagline: "Lightweight routing plane for AXIOM client queries.",
    category: "Backend",
    whatItDoes: "Web routing framework for Node.js APIs.",
    whySelected: "Simple middleware chaining for token parsing and file uploads.",
    whereUsed: "System, AI, PDF, Notes, Tasks, and Auth route handlers.",
    ecosystemRole: "Processes REST requests and serves data to the frontend client.",
  },
  {
    id: "sqlite",
    name: "SQLite",
    badge: "DATABASE",
    tagline: "Embedded relational database engine.",
    category: "Databases",
    whatItDoes: "Embedded database engine saving all tables into a local file.",
    whySelected: "Requires zero service configuration or setup, perfect for student offline workspaces.",
    whereUsed: "Primary datastore containing notes, folders, and calendar timetable databases.",
    ecosystemRole: "Maintains relational schema schemas and integrity constraints.",
  },
  {
    id: "better-sqlite3",
    name: "better-sqlite3",
    badge: "DB DRIVER",
    tagline: "Fastest synchronous SQLite wrapper for Node.",
    category: "Databases",
    whatItDoes: "Node wrapper providing blocking SQL executions.",
    whySelected: "Avoids async overheads for ultra-fast local C-Drive reads and writes.",
    whereUsed: "Database adapter middleware files inside backend configuration.",
    ecosystemRole: "Executes SQL query strings synchronously on port 5000.",
  },
  {
    id: "gemini",
    name: "Google Generative AI",
    badge: "AI BRAIN",
    tagline: "Gemini models for smart notes and PDF summarization.",
    category: "AI & ML",
    whatItDoes: "Google's SDK connecting backend requests to Gemini model endpoints.",
    whySelected: "Million-token context window supports full-text notes and PDF analysis.",
    whereUsed: "AI workspace chatbot, smart summary generators, and doubt-solver.",
    ecosystemRole: "Injects reasoning, analysis, and quiz synthesis capabilities.",
  },
  {
    id: "tesseract",
    name: "Tesseract.js",
    badge: "OCR",
    tagline: "Optical Character Recognition inside the browser.",
    category: "AI & ML",
    whatItDoes: "JavaScript port of the Tesseract OCR engine.",
    whySelected: "Extracts text from images locally, saving network bandwidth.",
    whereUsed: "OCR scanner card in notes and workspace uploads.",
    ecosystemRole: "Transports physical books/scans into editable digital text.",
  },
  {
    id: "pdfjs",
    name: "PDF.js",
    badge: "PDF RENDER",
    tagline: "Mozilla PDF rendering engine for browsers.",
    category: "AI & ML",
    whatItDoes: "Client-side library translating PDF documents into canvas drawings.",
    whySelected: "Renders multi-page documents inside custom web frames without plugins.",
    whereUsed: "PDF workspace document preview panels.",
    ecosystemRole: "Provides client-side PDF visual page indexing.",
  },
  {
    id: "pdf-parse",
    name: "pdf-parse",
    badge: "PDF PARSER",
    tagline: "Backend PDF text extractor.",
    category: "AI & ML",
    whatItDoes: "Node parsing library extracting raw characters out of uploaded PDF buffers.",
    whySelected: "Converts binary documents into clean text strings for AI summaries.",
    whereUsed: "Express file parser controllers (`POST /api/pdf/parse`).",
    ecosystemRole: "Prepares raw text logs for context summaries.",
  },
  {
    id: "python",
    name: "Python",
    badge: "AUTOMATION",
    tagline: "High-level programming language for background scripting.",
    category: "Dev Tools",
    whatItDoes: "Background runtime for task orchestrations and system automation scripts.",
    whySelected: "Comprehensive standard library and native OS integration capabilities.",
    whereUsed: "PyAutoGUI macro plays (`automation.py`) and Tkinter applications.",
    ecosystemRole: "Hosts local scripting commands outside the web browser.",
  },
  {
    id: "tkinter",
    name: "Tkinter GUI",
    badge: "DESKTOP UI",
    tagline: "Python GUI wrapper standard library.",
    category: "Dev Tools",
    whatItDoes: "Desktop graphical interface engine running the local OS launcher.",
    whySelected: "Bundled directly with Python, requiring zero external DLL components.",
    whereUsed: "Launcher console window (`launcher_app.py`) running on port 5050.",
    ecosystemRole: "Listens for launch triggers to spawn C-Drive executable files.",
  },
  {
    id: "powershell",
    name: "PowerShell & Exec",
    badge: "OS CONTROL",
    tagline: "Windows system command invocation controller.",
    category: "Dev Tools",
    whatItDoes: "PowerShell script invocations via backend volumeHelper.js.",
    whySelected: "Safely updates master volume, network cards, and reads system diagnostics.",
    whereUsed: "Command Center diagnostics telemetry and slide volume settings.",
    ecosystemRole: "Enables hardware volume slider debounces and Wi-Fi state toggles.",
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
              className="fixed inset-0 bg-background/90"
            />

            {/* Floating Glass Detail Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                  <strong className="text-foreground text-xs block mb-0.5 sm:mb-1">Where Used in AXIOM Workspace</strong>
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
