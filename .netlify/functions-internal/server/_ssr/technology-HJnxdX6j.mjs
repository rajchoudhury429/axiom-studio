import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology-HJnxdX6j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TECH = [
	{
		name: "React",
		cat: "UI",
		why: "Component model that scales with team size, not just app size."
	},
	{
		name: "Next.js",
		cat: "App",
		why: "Hybrid rendering, edge routes, and a stable production surface."
	},
	{
		name: "TypeScript",
		cat: "Lang",
		why: "Types are documentation the compiler enforces."
	},
	{
		name: "Tailwind",
		cat: "UI",
		why: "Design tokens as class utilities — no runtime cost, no dead CSS."
	},
	{
		name: "Framer Motion",
		cat: "Motion",
		why: "Motion that respects layout and accessibility, not just aesthetics."
	},
	{
		name: "GSAP",
		cat: "Motion",
		why: "Timeline-based orchestration for scenes that need to be authored, not tweened."
	},
	{
		name: "Three.js",
		cat: "3D",
		why: "The lowest-level WebGL abstraction we still trust to ship."
	},
	{
		name: "R3F",
		cat: "3D",
		why: "Declarative Three.js. Scenes reconcile like components."
	},
	{
		name: "Node",
		cat: "Runtime",
		why: "Ubiquitous, boring, and available on every host we care about."
	},
	{
		name: "Express",
		cat: "Server",
		why: "Minimal middleware surface. Predictable failure modes."
	},
	{
		name: "MongoDB",
		cat: "Data",
		why: "Document store for shapes that evolve faster than schemas."
	},
	{
		name: "PostgreSQL",
		cat: "Data",
		why: "Relational truth. Everything eventually joins something else."
	},
	{
		name: "Redis",
		cat: "Data",
		why: "The cache, the queue, the ephemeral state — one dial to turn."
	},
	{
		name: "Gemini",
		cat: "Model",
		why: "Long context and multimodal by default."
	},
	{
		name: "Claude",
		cat: "Model",
		why: "Reasoning under ambiguity. First choice for high-stakes prompts."
	},
	{
		name: "DeepSeek",
		cat: "Model",
		why: "Cost-effective inference where latency budget is tight."
	},
	{
		name: "OpenRouter",
		cat: "Model",
		why: "One key, many providers. Fallback discipline built in."
	}
];
function Tech() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 pt-8 pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Stack" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
			children: [
				"Every choice,",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-shine",
					children: "on purpose."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 md:grid-cols-3 sm:grid-cols-2",
			children: TECH.map((t, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? null : i),
					className: `text-left rounded-2xl border p-5 transition group ${isOpen ? "border-crimson/50 bg-crimson/[0.06] md:col-span-2 md:row-span-2" : "border-border bg-secondary/50 hover:bg-secondary"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-[9px]",
								children: t.cat
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mt-3 text-sm leading-relaxed ${isOpen ? "text-foreground" : "text-muted-foreground line-clamp-2"}`,
							children: t.why
						}),
						isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 aspect-video rounded-xl border border-border bg-input grid-bg flex items-center justify-center animate-rise",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "glass-red rounded-full h-20 w-20 flex items-center justify-center font-display text-lg animate-pulse-glow",
								children: t.name.slice(0, 2)
							})
						})
					]
				}, t.name);
			})
		})
	})] });
}
//#endregion
export { Tech as component };
