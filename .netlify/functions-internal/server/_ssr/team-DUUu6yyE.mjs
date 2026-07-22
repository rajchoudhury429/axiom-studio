import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-DUUu6yyE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MEMBERS = [
	{
		name: "Raj Choudhury",
		role: "Project Lead",
		tags: [
			"Backend",
			"System Architecture",
			"AI Integration"
		],
		bio: "Systems architect and de-facto captain. Decides where the current runs.",
		skills: [
			"Distributed systems",
			"Model routing",
			"Rust",
			"Node",
			"K8s"
		],
		projects: [
			"AXIOM Core",
			"Router v2",
			"Ledger"
		],
		stats: [
			["5y", "Experience"],
			["12", "Systems shipped"],
			["24", "Papers read/mo"]
		]
	},
	{
		name: "Daniyal",
		role: "Backend Engineer",
		tags: [
			"Backend",
			"API",
			"Server Logic"
		],
		bio: "Writes servers that don't wake you up at 3am. Believes latency is a moral issue.",
		skills: [
			"Node",
			"Postgres",
			"Redis",
			"Go",
			"gRPC"
		],
		projects: [
			"API Gateway",
			"Auth service",
			"Rate shield"
		],
		stats: [
			["1y", "Experience"],
			["99.98%", "Uptime"],
			["18ms", "p50"]
		]
	},
	{
		name: "Jigyashu",
		role: "Frontend Engineer",
		tags: [
			"Frontend",
			"UI",
			"Animation"
		],
		bio: "Draws with code. Motion belongs where meaning lives — nowhere else.",
		skills: [
			"React",
			"Three.js",
			"GSAP",
			"Motion",
			"WebGL"
		],
		projects: [
			"AXIOM UI",
			"Motion kit",
			"3D lab"
		],
		stats: [
			["1y", "Experience"],
			["60fps", "Standard"],
			["21", "Shipped surfaces"]
		]
	},
	{
		name: "Banajit",
		role: "Frontend Engineer",
		tags: [
			"Frontend",
			"UX",
			"Interactive Design"
		],
		bio: "Interaction designer. Asks 'why' before 'how'. Prototypes in the browser.",
		skills: [
			"React",
			"Design systems",
			"Figma",
			"Accessibility",
			"Prototyping"
		],
		projects: [
			"Design tokens",
			"UX Lab",
			"Studio site"
		],
		stats: [
			["1y", "Experience"],
			["100%", "a11y target"],
			["14", "Design systems"]
		]
	},
	{
		name: "Abhijeet",
		role: "QA & Planning",
		tags: [
			"Planning",
			"QA",
			"Testing",
			"Docs"
		],
		bio: "Runs the plan. Breaks the software. Writes the manual nobody else will.",
		skills: [
			"Playwright",
			"Vitest",
			"Roadmapping",
			"Docs",
			"Release"
		],
		projects: [
			"Test harness",
			"Release train",
			"Docs portal"
		],
		stats: [
			["1y", "Experience"],
			["1,240", "Tests"],
			["0", "Missed releases"]
		]
	}
];
function Team() {
	const [active, setActive] = (0, import_react.useState)(0);
	const m = MEMBERS[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 pt-8 pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Five" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
			children: [
				"Five engineers.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-shine",
					children: "One current."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[320px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: MEMBERS.map((mm, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(i),
					className: `w-full text-left rounded-2xl border p-4 transition ${i === active ? "border-crimson/50 bg-crimson/[0.08]" : "border-border bg-secondary/50 hover:bg-secondary"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold ${i === active ? "glass-red" : "bg-secondary"}`,
							children: mm.name.split(" ").map((s) => s[0]).join("").slice(0, 2)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: mm.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow text-[10px] mt-0.5",
							children: mm.role
						})] })]
					})
				}) }, mm.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-red rounded-3xl p-8 md:p-12 animate-rise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: m.role }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-4xl md:text-5xl font-semibold",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: m.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-mono",
									children: t
								}, t))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-24 w-24 rounded-2xl bg-gradient-to-br from-crimson to-[var(--graphite-2)] flex items-center justify-center font-display text-3xl font-bold animate-pulse-glow",
								children: m.name.split(" ").map((s) => s[0]).join("").slice(0, 2)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground",
						children: m.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: m.stats.map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-secondary/50 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-semibold",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mt-1",
								children: l
							})]
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-3",
							children: "Signature skills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: m.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-crimson/40 bg-crimson/[0.08] px-3 py-1 text-xs font-medium",
								children: s
							}, s))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-3",
							children: "Recent projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm",
							children: m.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-crimson-soft" }), p]
							}, p))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [
							"GitHub",
							"LinkedIn",
							"Email"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-lg border border-border bg-secondary/80 px-4 py-2 text-xs font-medium hover:bg-secondary transition",
							children: s
						}, s))
					})
				]
			}, active)]
		})
	})] });
}
//#endregion
export { Team as component };
