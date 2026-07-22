import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-kXFSwuOg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SKILLS = [
	{
		name: "System Design",
		cat: "Backend"
	},
	{
		name: "Distributed Systems",
		cat: "Backend"
	},
	{
		name: "Postgres",
		cat: "Backend"
	},
	{
		name: "Redis",
		cat: "Backend"
	},
	{
		name: "Go",
		cat: "Backend"
	},
	{
		name: "Node",
		cat: "Backend"
	},
	{
		name: "React",
		cat: "Frontend"
	},
	{
		name: "Three.js",
		cat: "Frontend"
	},
	{
		name: "Motion",
		cat: "Frontend"
	},
	{
		name: "GSAP",
		cat: "Frontend"
	},
	{
		name: "Design Systems",
		cat: "Design"
	},
	{
		name: "Prototyping",
		cat: "Design"
	},
	{
		name: "Model Routing",
		cat: "AI"
	},
	{
		name: "RAG",
		cat: "AI"
	},
	{
		name: "Agents",
		cat: "AI"
	},
	{
		name: "Vector Search",
		cat: "AI"
	},
	{
		name: "Research",
		cat: "Research"
	},
	{
		name: "Roadmapping",
		cat: "Leadership"
	},
	{
		name: "Playwright",
		cat: "Testing"
	},
	{
		name: "Vitest",
		cat: "Testing"
	},
	{
		name: "Planning",
		cat: "Planning"
	},
	{
		name: "Documentation",
		cat: "Planning"
	}
];
var CATS = [
	"All",
	"Backend",
	"Frontend",
	"AI",
	"Design",
	"Research",
	"Leadership",
	"Testing",
	"Planning"
];
function Skills() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => SKILLS.filter((s) => cat === "All" || s.cat === cat), [cat]);
	const nodes = (0, import_react.useMemo)(() => {
		return filtered.map((s, i) => {
			const golden = Math.PI * (3 - Math.sqrt(5));
			const t = (i + .5) / filtered.length;
			const r = 40 * Math.sqrt(t);
			const a = i * golden;
			return {
				...s,
				x: 50 + Math.cos(a) * r,
				y: 50 + Math.sin(a) * r,
				size: 18 + i * 13 % 22
			};
		});
	}, [filtered]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 pt-8 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Galaxy" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
				children: [
					"A network,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-shine",
						children: "not a checklist."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-muted-foreground",
				children: "Skills aren't scored. They're linked. Filter a discipline to see how our practice folds in on itself."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 mb-8",
				children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-full px-4 py-1.5 text-xs font-medium transition ${c === cat ? "glass-red" : "border border-border bg-secondary/80 hover:bg-secondary"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square max-w-3xl mx-auto rounded-3xl border border-border bg-input grid-bg overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute inset-0 h-full w-full",
							viewBox: "0 0 100 100",
							"aria-hidden": "true",
							role: "presentation",
							children: nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: "50",
								y1: "50",
								x2: n.x,
								y2: n.y,
								stroke: "var(--crimson)",
								strokeOpacity: "0.25",
								strokeWidth: "0.15"
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full glass-red animate-pulse-glow flex items-center justify-center font-display text-xs",
						children: "AXIOM"
					}),
					nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute group cursor-pointer",
						style: {
							left: `${n.x}%`,
							top: `${n.y}%`,
							transform: "translate(-50%,-50%)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								width: n.size,
								height: n.size
							},
							className: "rounded-full glass-red group-hover:scale-125 transition-transform"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute left-1/2 top-full -translate-x-1/2 mt-1 whitespace-nowrap rounded-md bg-popover border border-border px-2 py-0.5 text-[10px] opacity-0 group-hover:opacity-100 transition",
							children: n.name
						})]
					}, n.name + i))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-2 md:grid-cols-4 sm:grid-cols-2",
				children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-xl px-4 py-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-[9px]",
						children: s.cat
					})]
				}, s.name))
			})
		]
	})] });
}
//#endregion
export { Skills as component };
