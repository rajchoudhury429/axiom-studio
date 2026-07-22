import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-F3tUyW1n.js
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE = [
	{
		year: "2024 · Q1",
		title: "First signal",
		body: "Five engineers, one shared frustration with the state of AI tooling."
	},
	{
		year: "2024 · Q3",
		title: "The core",
		body: "AXIOM v0 prototype — a routing layer across Gemini, Claude, and DeepSeek."
	},
	{
		year: "2025 · Q1",
		title: "Studio formalized",
		body: "AXIOM Studio incorporated as an independent research collective."
	},
	{
		year: "2025 · Q4",
		title: "AXIOM v1 shipped",
		body: "First public release. Persistent memory, model routing, agent surfaces."
	},
	{
		year: "2026 · now",
		title: "Second generation",
		body: "Distributed agents, embedded reasoning, human-in-the-loop by default."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-5xl px-6 pt-8 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Doctrine" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
					children: [
						"A studio, not a startup.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-shine",
							children: "A discipline, not a demo."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "AXIOM Studio was founded on a single conviction: the interface between humans and machine intelligence deserves the same care as the intelligence itself. We are engineers first, researchers second, and evangelists never."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					["Mission", "Build tools that respect the shape of human attention. Reduce noise. Preserve intent."],
					["Vision", "A generation of AI systems that feel less like oracles and more like colleagues."],
					["Philosophy", "Craft over velocity. Systems over features. Clarity over cleverness."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed",
						children: d
					})]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Trajectory" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "hero-title mt-4 text-4xl md:text-5xl",
					children: "A short history."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-crimson/60 via-[var(--timeline-via)] to-transparent" }), TIMELINE.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-16 pb-10 last:pb-0 animate-rise",
						style: { animationDelay: `${i * .08}s` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-1.5 h-4 w-4 rounded-full glass-red" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: t.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-2xl font-semibold",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t.body
							})
						]
					}, t.year))]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-red rounded-3xl p-10 md:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Where we're going" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "hero-title mt-4 text-4xl md:text-6xl",
						children: "Toward an internet of agents."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-muted-foreground leading-relaxed",
						children: "The next decade will not be defined by bigger models but by better systems: memory that lasts, reasoning that respects context, and interfaces that vanish into intent. AXIOM is our contribution to that future."
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
