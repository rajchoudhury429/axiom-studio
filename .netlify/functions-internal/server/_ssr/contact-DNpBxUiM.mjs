import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageShell, t as Eyebrow } from "./site-CltB6ejn.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DNpBxUiM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WEB3FORMS_ACCESS_KEY = "b0ed214b-707e-4197-a1ae-eaf7a735610c";
var WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
function Globe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square w-full max-w-md mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full glass-red animate-pulse-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-4 rounded-full border border-crimson/40 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 100 100",
					className: "h-full w-full animate-spin-slow",
					role: "img",
					"aria-label": "Animated globe",
					children: [Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "50",
						cy: "50",
						rx: "48",
						ry: 4 + i * 4,
						fill: "none",
						stroke: "var(--crimson)",
						strokeOpacity: "0.25",
						strokeWidth: "0.2"
					}, i)), Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "50",
						cy: "50",
						ry: "48",
						rx: 4 + i * 4,
						fill: "none",
						stroke: "var(--crimson)",
						strokeOpacity: "0.15",
						strokeWidth: "0.2"
					}, `v${i}`))]
				})
			}),
			[
				[20, 30],
				[70, 20],
				[35, 70],
				[80, 60],
				[55, 45]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute h-2 w-2 rounded-full bg-crimson-soft",
				style: {
					left: `${x}%`,
					top: `${y}%`,
					boxShadow: "0 0 10px var(--crimson-soft)",
					animation: `float-slow ${3 + i}s ease-in-out infinite`
				}
			}, i))
		]
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [subject, setSubject] = (0, import_react.useState)("Engagement inquiry");
	const submissionIdRef = (0, import_react.useRef)(0);
	function validateForm(form) {
		const name = form.name.value.trim();
		const email = form.email.value.trim();
		const message = form.message.value.trim();
		if (!name) return "Name is required.";
		if (name.length < 2) return "Name must be at least 2 characters.";
		if (!email) return "Email is required.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
		if (!message) return "Message is required.";
		if (message.length < 10) return "Message must be at least 10 characters.";
		if (message.length > 5e3) return "Message must be under 5000 characters.";
		return null;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		const validationError = validateForm(e.currentTarget);
		if (validationError) {
			toast.error(validationError);
			setStatus("error");
			setErrorMsg(validationError);
			return;
		}
		const currentId = ++submissionIdRef.current;
		setStatus("sending");
		setErrorMsg("");
		const form = e.currentTarget;
		const formData = new FormData(form);
		formData.append("access_key", WEB3FORMS_ACCESS_KEY);
		formData.append("botcheck", "");
		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 15e3);
			const res = await fetch(WEB3FORMS_ENDPOINT, {
				method: "POST",
				body: formData,
				signal: controller.signal
			});
			clearTimeout(timeoutId);
			if (currentId !== submissionIdRef.current) return;
			const data = await res.json();
			if (data.success) {
				setSent(true);
				form.reset();
				setSubject("Engagement inquiry");
				toast.success("Message sent successfully. We'll reply within 48 hours.");
			} else {
				setStatus("error");
				setErrorMsg(data.message ?? "Something went wrong. Please try again.");
				toast.error(data.message ?? "Something went wrong. Please try again.");
			}
		} catch (err) {
			if (currentId !== submissionIdRef.current) return;
			setStatus("error");
			setErrorMsg("Network error. Please check your connection and try again.");
			toast.error("Network error. Please check your connection and try again.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 pt-8 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Open Channel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]",
			children: [
				"Say something",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-shine",
					children: "worth answering."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-8 grid gap-10 lg:grid-cols-[1fr_1fr] items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-red rounded-3xl p-8 md:p-10",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-14 w-14 rounded-full glass-red flex items-center justify-center animate-pulse-glow",
						children: "✓"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 font-display text-2xl",
						children: "Signal received."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "We reply to every real message, usually within 48 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSent(false);
							setStatus("idle");
							setErrorMsg("");
						},
						className: "mt-6 rounded-lg border border-border bg-secondary/80 px-5 py-2 text-sm font-medium hover:bg-secondary transition",
						children: "Send another message"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-2",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								autoComplete: "name",
								className: "w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none focus:border-crimson/60"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-2",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								required: true,
								type: "email",
								autoComplete: "email",
								className: "w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none focus:border-crimson/60"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-2",
							children: "Subject"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "subject",
							value: subject,
							onChange: (e) => setSubject(e.target.value),
							className: "w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Engagement inquiry" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Research collaboration" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Press" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Something else" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-2",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 6,
							maxLength: 5e3,
							className: "w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none focus:border-crimson/60 resize-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "botcheck",
						tabIndex: -1,
						autoComplete: "off",
						className: "hidden",
						"aria-hidden": "true"
					}),
					status === "error" && errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: errorMsg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: status === "sending",
						className: "w-full rounded-lg glass-red px-5 py-3 text-sm font-medium hover:brightness-110 transition disabled:opacity-60",
						children: status === "sending" ? "Transmitting…" : "Transmit →"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-3 sm:grid-cols-2",
			children: [
				["Email", "hello@axiom.studio"],
				["GitHub", "github.com/axiom-studio"],
				["LinkedIn", "linkedin.com/company/axiom"],
				["Instagram", "@axiom.studio"]
			].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 font-mono text-sm",
					children: v
				})]
			}, k))
		})] })]
	})] });
}
//#endregion
export { Contact as component };
