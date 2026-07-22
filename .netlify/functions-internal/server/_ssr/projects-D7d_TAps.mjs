import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-D7d_TAps.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROJECTS = [
	{
		name: "AXIOM v1",
		status: "Live",
		year: "2025",
		tag: "Multi-model reasoning surface",
		stack: [
			"Next.js",
			"Node",
			"MongoDB",
			"Redis",
			"Gemini",
			"Claude",
			"OpenRouter"
		],
		problem: "AI conversations are fragmented, forgetful, and locked to single providers.",
		solution: "A unified interface with model routing, persistent memory, and provider-agnostic orchestration.",
		architecture: "Edge gateway → intent classifier → routing plane → provider adapters → memory ledger."
	},
	{
		name: "Ledger",
		status: "Beta",
		year: "2026",
		tag: "Durable memory for conversational agents",
		stack: [
			"Postgres",
			"pgvector",
			"Redis",
			"Go"
		],
		problem: "Context windows are ephemeral. Users repeat themselves indefinitely.",
		solution: "A per-user memory store with typed episodic and semantic layers, retrievable across agents.",
		architecture: "Write-through vector store with typed schemas, TTL zones, and audit trail."
	},
	{
		name: "Router v2",
		status: "Research",
		year: "2026",
		tag: "Cost & capability aware model routing",
		stack: [
			"Rust",
			"gRPC",
			"OpenTelemetry"
		],
		problem: "The 'right' model varies per prompt — but users shouldn't choose.",
		solution: "A learned router that dispatches by cost, capability, and confidence, per turn.",
		architecture: "Feature extractor → policy head → provider fanout with hedging."
	}
];
function Projects() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-6 pt-8 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Systems Log" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
				children: ["What we've ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-shine",
					children: "actually shipped."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-muted-foreground",
				children: "Not a portfolio. A working index of the systems currently running under the AXIOM name — and a few we're still teaching to walk."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-6 pb-24 space-y-4",
		children: PROJECTS.map((p, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `overflow-hidden rounded-3xl border transition ${isOpen ? "border-crimson/50 bg-crimson/5" : "border-border bg-secondary/50"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? -1 : i),
					className: "w-full grid grid-cols-[1fr_auto] items-center gap-6 p-6 md:p-8 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${p.status === "Live" ? "bg-emerald-500/15 text-emerald-300" : p.status === "Beta" ? "bg-amber-500/15 text-amber-300" : "bg-secondary text-muted-foreground"}`,
								children: p.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-[10px]",
								children: p.year
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-3xl md:text-4xl font-semibold",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.tag
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-10 w-10 rounded-full glass-red flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`,
						children: "+"
					})]
				}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border p-6 md:p-8 grid gap-8 md:grid-cols-2 animate-rise",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Problem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.problem
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mt-6",
							children: "Solution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: p.solution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mt-6",
							children: "Architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs text-muted-foreground",
							children: p.architecture
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Stack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-mono",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 aspect-video rounded-xl border border-border bg-gradient-to-br from-[var(--graphite)] to-[var(--graphite-2)] grid-bg flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "glass-red rounded-full px-4 py-1.5 text-[11px] font-mono",
								children: "preview.render"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-lg glass-red px-4 py-2 text-xs font-medium",
								children: "Live Demo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-lg border border-border bg-secondary/80 px-4 py-2 text-xs font-medium",
								children: "GitHub"
							})]
						})
					] })]
				})]
			}, p.name);
		})
	})] });
}
//#endregion
export { Projects as component };
