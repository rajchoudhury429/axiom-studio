import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D6GzW7Gb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TEAM = [
	{
		name: "Raj Choudhury",
		role: "Project Lead · Systems",
		angle: 270
	},
	{
		name: "Daniyal",
		role: "Backend · APIs",
		angle: 342
	},
	{
		name: "Jigyashu",
		role: "Frontend · Motion",
		angle: 54
	},
	{
		name: "Banajit",
		role: "Frontend · UX",
		angle: 126
	},
	{
		name: "Abhijeet",
		role: "Planning · QA",
		angle: 198
	}
];
function AICore() {
	const ref = (0, import_react.useRef)(null);
	const [mx, setMx] = (0, import_react.useState)(0);
	const [my, setMy] = (0, import_react.useState)(0);
	const rafRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const on = (e) => {
			if (rafRef.current) return;
			rafRef.current = requestAnimationFrame(() => {
				const r = el.getBoundingClientRect();
				const x = (e.clientX - (r.left + r.width / 2)) / r.width;
				const y = (e.clientY - (r.top + r.height / 2)) / r.height;
				setMx(x);
				setMy(y);
				rafRef.current = 0;
			});
		};
		window.addEventListener("mousemove", on, { passive: true });
		return () => {
			window.removeEventListener("mousemove", on);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative mx-auto aspect-square w-full max-w-[560px]",
		style: { transform: `perspective(1200px) rotateX(${my * -6}deg) rotateY(${mx * 6}deg)` },
		children: [
			[
				.55,
				.72,
				.9
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-full border border-border",
				style: {
					transform: `scale(${s})`,
					animation: `spin-slow ${18 + i * 8}s linear ${i % 2 ? "reverse" : ""} infinite`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-soft",
					style: { boxShadow: "0 0 20px var(--crimson-soft)" }
				})
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[26%] rounded-full bg-gradient-to-br from-[var(--ai-core-from)] via-[var(--ai-core-via)] to-[var(--ai-core-to)] blur-[2px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[30%] rounded-full glass-red animate-pulse-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[38%] rounded-full bg-crimson dark:mix-blend-screen opacity-70 blur-md" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[42%] rounded-full bg-white opacity-90 blur-[2px]" }),
			TEAM.map((m, i) => {
				const a = m.angle * Math.PI / 180;
				const r = 46;
				const x = 50 + Math.cos(a) * r;
				const y = 50 + Math.sin(a) * r;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute",
					style: {
						left: `${x}%`,
						top: `${y}%`,
						transform: "translate(-50%, -50%)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 -m-1 rounded-full animate-ping-ring bg-crimson/40",
								style: { animationDelay: `${i * .4}s` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "glass-red flex h-12 w-12 items-center justify-center rounded-full text-[11px] font-display font-semibold",
								children: m.name.split(" ").map((s) => s[0]).join("").slice(0, 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] font-medium",
									children: m.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow text-[9px] mt-0.5",
									children: m.role
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2",
						viewBox: "0 0 100 100",
						"aria-hidden": "true",
						role: "presentation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "50",
							y1: "50",
							x2: 50 - Math.cos(a) * r,
							y2: 50 - Math.sin(a) * r,
							stroke: "var(--crimson)",
							strokeOpacity: "0.4",
							strokeWidth: "0.2",
							strokeDasharray: "1 1"
						})
					})]
				}, m.name);
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30 animate-grid-pan [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute h-[2px] w-[2px] rounded-full bg-white/40",
					style: {
						left: `${i * 53 % 100}%`,
						top: `${i * 31 % 100}%`,
						opacity: .2 + i * 11 % 60 / 100,
						animation: `float-slow ${6 + i % 5}s ease-in-out ${i * .2}s infinite`
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-14 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Est. 2024 · Independent Research" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-title mt-6 text-[clamp(2.8rem,7vw,6.2rem)]",
							children: [
								"Building the future,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-shine",
									children: "together."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: "AXIOM is a collective of five engineers architecting a new kind of AI interface — one that reasons, routes and remembers. This is the studio behind the system."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects",
								className: "group relative inline-flex items-center gap-2 rounded-lg glass-red px-5 py-3 text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enter the Lab" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/80 px-5 py-3 text-sm font-medium hover:bg-secondary transition",
								children: "Read the Doctrine"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid grid-cols-3 gap-6 max-w-md",
							children: [
								["05", "Engineers"],
								["17", "Systems"],
								["∞", "Ambition"]
							].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-semibold",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mt-1",
								children: l
							})] }, l))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AICore, {})
					})]
				})
			})
		]
	});
}
function Mission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Studio Mission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "hero-title mt-4 text-4xl md:text-5xl",
				children: [
					"Machines should meet us",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-crimson-soft",
						children: "where we think."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [
					["Reason", "Systems that hold context across sessions, not just tokens."],
					["Route", "The best model for the moment, chosen with intent."],
					["Remember", "Every interaction becomes part of a durable ledger."],
					["Return", "The final surface belongs to the human — always."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: d
					})]
				}, t))
			})]
		})
	});
}
function Featured() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Featured System" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "hero-title mt-4 text-4xl md:text-5xl",
				children: "AXIOM v1"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projects",
				className: "text-sm text-muted-foreground hover:text-foreground",
				children: "All projects →"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-red relative overflow-hidden rounded-3xl p-8 md:p-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Multi-model reasoning surface"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed",
						children: "A unified interface that routes prompts across Gemini, Claude, DeepSeek and OpenRouter — with memory, orchestration, and a design system built for intent, not chatter."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2 font-mono text-[11px]",
						children: [
							"Next.js",
							"Node",
							"MongoDB",
							"Redis",
							"Gemini",
							"Claude"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-border bg-secondary/80 px-2.5 py-1",
							children: t
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[var(--graphite)] to-[var(--graphite-2)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-red rounded-full h-32 w-32 animate-pulse-glow flex items-center justify-center font-display text-2xl",
							children: "AX"
						})
					})]
				})]
			})
		})]
	});
}
function Stats() {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y },
			className: "grid gap-4 md:grid-cols-4",
			children: [
				[
					"05",
					"Core Engineers",
					"Distributed globally"
				],
				[
					"17",
					"Live Systems",
					"In production"
				],
				[
					"100K+",
					"Requests routed",
					"Across model providers"
				],
				[
					"99.98%",
					"Uptime",
					"Last 90 days"
				]
			].map(([n, l, s]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6 hover:red-glow transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl font-semibold",
						children: n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm font-medium",
						children: l
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mt-1",
						children: s
					})
				]
			}, l))
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto max-w-7xl px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-crimson/40 bg-gradient-to-br from-crimson/20 via-background to-background p-12 md:p-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Interface Request" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "hero-title relative mt-6 text-5xl md:text-7xl",
					children: [
						"Have a problem",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"worth solving?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative mt-6 mx-auto max-w-xl text-muted-foreground",
					children: "We take on a small number of engagements each quarter. Research, systems, and the occasional impossible ask."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "relative mt-10 inline-flex items-center gap-2 rounded-lg glass-red px-6 py-3 text-sm font-medium",
					children: "Open a channel →"
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mission, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Home as component };
