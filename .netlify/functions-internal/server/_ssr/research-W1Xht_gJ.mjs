import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-W1Xht_gJ.js
var import_jsx_runtime = require_jsx_runtime();
var NOTES = [
	{
		id: "N-014",
		title: "Adaptive model routing under uncertainty",
		body: "When the router is unsure, hedge — dispatch two providers in parallel and rank on confidence."
	},
	{
		id: "N-013",
		title: "Episodic memory as first-class type",
		body: "Memory typed by intent (fact, preference, task) retrieves better than one flat vector store."
	},
	{
		id: "N-012",
		title: "The one-good-answer axiom",
		body: "Users don't want completions. They want one good answer, arrived at legibly."
	},
	{
		id: "N-011",
		title: "Latency budgets as a design constraint",
		body: "Every model call has a 900ms budget. Above that we degrade gracefully to a smaller provider."
	}
];
function Research() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-6 pt-8 pb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Field Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
				children: ["Thinking in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-shine",
					children: "public."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-6 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "AI Routing · v2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: "Architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 rounded-2xl border border-border bg-input p-6 grid-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 400 220",
								className: "w-full",
								role: "img",
								"aria-label": "AXIOM-AI WORKSPACE architecture diagram",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "g",
										x1: "0",
										x2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0",
											stopColor: "var(--crimson-soft)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "1",
											stopColor: "var(--crimson)"
										})]
									}) }),
									[
										[
											"Prompt",
											30,
											100
										],
										[
											"Classifier",
											130,
											60
										],
										[
											"Router",
											130,
											140
										],
										[
											"Gemini",
											260,
											30
										],
										[
											"Claude",
											260,
											90
										],
										[
											"DeepSeek",
											260,
											150
										],
										[
											"Ledger",
											260,
											210
										]
									].map(([t, x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: x - 40,
										y: y - 14,
										width: "80",
										height: "28",
										rx: "8",
										fill: "var(--graphite)",
										stroke: "url(#g)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x,
										y: y + 4,
										textAnchor: "middle",
										fontSize: "10",
										style: {
											fill: "var(--foreground)",
											fontFamily: "JetBrains Mono"
										},
										children: t
									})] }, t)),
									[
										[
											70,
											100,
											90,
											60
										],
										[
											70,
											100,
											90,
											140
										],
										[
											170,
											60,
											220,
											30
										],
										[
											170,
											60,
											220,
											90
										],
										[
											170,
											140,
											220,
											90
										],
										[
											170,
											140,
											220,
											150
										],
										[
											170,
											140,
											220,
											210
										]
									].map(([x1, y1, x2, y2], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1,
										y1,
										x2,
										y2,
										stroke: "var(--crimson)",
										strokeOpacity: "0.5",
										strokeDasharray: "3 3"
									}, i)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "220",
										cy: "90",
										r: "3",
										fill: "var(--crimson-soft)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
											attributeName: "r",
											values: "3;6;3",
											dur: "1.6s",
											repeatCount: "indefinite"
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted-foreground leading-relaxed",
							children: "Prompts pass through an intent classifier and a policy-based router, which dispatches to one or more providers with graceful degradation and writes the trace into the ledger for later retrieval."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6 hover:red-glow transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: n.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-mono text-muted-foreground",
									children: "note"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-display text-lg font-medium",
								children: n.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: n.body
							})
						]
					}, n.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-red rounded-3xl p-8 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Open Questions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "hero-title mt-4 text-3xl md:text-4xl",
						children: "What are we still trying to answer?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm",
						children: [
							"Can memory be typed by intent without asking the user?",
							"What's the smallest reasoning contract that's still useful?",
							"How much of a router can be learned vs. specified?",
							"Where does human-in-the-loop stop being helpful?"
						].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1.5 w-1.5 rounded-full bg-crimson-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q })]
						}, q))
					})
				]
			})
		})
	] });
}
//#endregion
export { Research as component };
