import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs-Dg76_h9W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		id: "arch",
		title: "Architecture",
		body: "AXIOM is composed of four layers: the edge gateway, the routing plane, the provider adapters, and the memory ledger. Each layer exposes a narrow contract and can be replaced independently. The gateway handles auth, rate limiting, and tenancy. The router chooses among providers based on intent and policy. Adapters normalize provider quirks into a shared response envelope. The ledger persists interactions, retrievable across sessions and agents."
	},
	{
		id: "api",
		title: "API Reference",
		body: "All endpoints are versioned under /v1. Authentication uses short-lived bearer tokens issued by the gateway. POST /v1/converse accepts a message array and returns a routed completion. GET /v1/memory/:userId retrieves the current memory manifest. Rate limits are per-tenant and communicated via response headers."
	},
	{
		id: "modules",
		title: "Modules",
		body: "The codebase is split into @axiom/core (routing + provider adapters), @axiom/ledger (memory), @axiom/ui (design system + surfaces), @axiom/agents (planned), and @axiom/cli (developer tooling). Each module is independently versioned and published to a private registry."
	},
	{
		id: "structure",
		title: "Folder Structure",
		body: "apps/ hosts the deployable surfaces. packages/ hosts shared libraries. infra/ hosts deployment manifests. docs/ hosts this site. All packages follow the same top-level layout: src/, tests/, README.md, CHANGELOG.md."
	},
	{
		id: "future",
		title: "Future Plans",
		body: "v2 adds distributed agents and reasoning contracts. v3 adds auditable decision trails and multi-tenant memory partitioning. Long-term: an internet of agents with cryptographically verifiable transcripts."
	},
	{
		id: "contrib",
		title: "Contribution Guide",
		body: "Open an issue before opening a PR. All PRs require a passing test suite and a review from the module owner. Commit messages follow conventional commits. New modules require an ADR."
	}
];
function Docs() {
	const [active, setActive] = (0, import_react.useState)(SECTIONS[0].id);
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => SECTIONS.filter((s) => (s.title + s.body).toLowerCase().includes(q.toLowerCase())), [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:sticky lg:top-24 self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Docs" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search…",
							className: "w-full rounded-lg bg-input border-border px-3 py-2 text-sm outline-none font-mono"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "space-y-1",
						children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setActive(s.id);
								document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
							},
							className: `w-full text-left rounded-lg px-3 py-2 text-sm transition ${active === s.id ? "glass-red" : "hover:bg-secondary text-muted-foreground"}`,
							children: s.title
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-6 w-full rounded-lg border border-border bg-secondary/80 px-3 py-2 text-xs font-medium",
						children: "↓ Download PDF"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-title text-[clamp(2rem,4vw,3.4rem)]",
						children: ["Documentation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-shine",
							children: "."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground max-w-2xl",
						children: "Everything the machine needs to know, in a form humans can still read."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-16",
						children: [filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: s.id,
							className: "scroll-mt-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-3xl font-semibold",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `#${s.id}`,
										className: "eyebrow text-[10px] hover:text-foreground",
										children: ["#", s.id]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px bg-gradient-to-r from-crimson/50 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-sm leading-7 text-muted-foreground",
									children: s.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded-xl border border-border bg-input p-4 font-mono text-[12px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-crimson-soft",
										children: ["$ axiom docs open ", s.id]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2",
										children: [
											"→ opened section \"",
											s.title,
											"\""
										]
									})]
								})
							]
						}, s.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-8 text-center text-sm text-muted-foreground",
							children: [
								"No matches for \"",
								q,
								"\"."
							]
						})]
					})
				]
			})]
		})
	}) });
}
//#endregion
export { Docs as component };
