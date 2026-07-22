import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as ThemeProvider, t as SYSTEM_PROMPT } from "./ai-service-BH7JBtfI.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-HsZD1OTP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B6Y4UhT2.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-6",
					children: "Signal Lost"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "hero-title text-7xl text-shine",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "This node isn't part of the lattice. The path you followed doesn't resolve."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-flex items-center gap-2 rounded-lg glass-red px-5 py-2.5 text-sm font-medium",
					children: "Return to Core"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-6",
					children: "System Fault"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "hero-title text-4xl",
					children: "Runtime Anomaly"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "An unexpected signal disrupted this view. Try again, or return to the core."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-lg glass-red px-5 py-2 text-sm font-medium",
						children: "Retry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-5 py-2 text-sm font-medium",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AXIOM-AI WORKSPACE — Engineering Intelligence" },
			{
				name: "description",
				content: "AXIOM-AI WORKSPACE is an independent AI engineering collective building the interface between humans and machine intelligence."
			},
			{
				name: "author",
				content: "AXIOM-AI WORKSPACE"
			},
			{
				name: "theme-color",
				content: "#0a0203"
			},
			{
				name: "color-scheme",
				content: "dark light"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "googlebot",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "AXIOM-AI WORKSPACE — Engineering Intelligence"
			},
			{
				property: "og:description",
				content: "Independent AI engineering collective building next-generation AI systems."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE — Engineering Intelligence"
			},
			{
				property: "og:site_name",
				content: "AXIOM-AI WORKSPACE"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "AXIOM-AI WORKSPACE — Engineering Intelligence"
			},
			{
				name: "twitter:description",
				content: "Independent AI engineering collective building next-generation AI systems."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE — Engineering Intelligence"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.ico"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "canonical",
				href: "https://axiom.studio"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "AXIOM-AI WORKSPACE",
				url: "https://axiom.studio",
				description: "AXIOM-AI WORKSPACE is an independent AI engineering collective building the interface between humans and machine intelligence.",
				foundingDate: "2026",
				sameAs: [
					"https://github.com/axiom-studio",
					"https://linkedin.com/company/axiom",
					"https://instagram.com/axiom.studio"
				],
				contactPoint: {
					"@type": "ContactPoint",
					email: "hello@axiom.studio",
					contactType: "customer service"
				}
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "AXIOM-AI WORKSPACE",
				url: "https://axiom.studio",
				description: "AXIOM-AI WORKSPACE is an independent AI engineering collective building the interface between humans and machine intelligence.",
				inLanguage: "en-US",
				potentialAction: {
					"@type": "SearchAction",
					target: {
						"@type": "EntryPoint",
						urlTemplate: "https://axiom.studio/?s={search_term_string}"
					},
					"query-input": "required name=search_term_string"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            ` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./routes-D6GzW7Gb.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "AXIOM-AI WORKSPACE — Building The Future Together" },
			{
				name: "description",
				content: "The engineering headquarters of AXIOM-AI WORKSPACE. A collective of engineers, researchers, and designers building machine intelligence with intention."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "AXIOM-AI WORKSPACE — Building The Future Together"
			},
			{
				property: "og:description",
				content: "The engineering headquarters of AXIOM-AI WORKSPACE. Building machine intelligence with intention."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE — Engineering Intelligence"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "AXIOM-AI WORKSPACE — Building The Future Together"
			},
			{
				name: "twitter:description",
				content: "The engineering headquarters of AXIOM-AI WORKSPACE. Building machine intelligence with intention."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE — Engineering Intelligence"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "AXIOM-AI WORKSPACE — Building The Future Together",
				description: "The engineering headquarters of AXIOM-AI WORKSPACE. A collective of engineers, researchers, and designers building machine intelligence with intention.",
				url: "https://axiom.studio",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-F3tUyW1n.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "The doctrine, history and future goals of AXIOM-AI WORKSPACE, an independent AI engineering collective founded in 2026."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "About — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "The doctrine, history and future goals of AXIOM-AI WORKSPACE, an independent AI engineering collective founded in 2026."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/about"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "About AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "About — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "The doctrine, history and future goals of AXIOM-AI WORKSPACE, an independent AI engineering collective founded in 2026."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "About AXIOM-AI WORKSPACE"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: "About — AXIOM-AI WORKSPACE",
				description: "The doctrine, history and future goals of AXIOM-AI WORKSPACE, an independent AI engineering collective founded in 2026.",
				url: "https://axiom.studio/about",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-DNpBxUiM.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "Open a channel with AXIOM-AI WORKSPACE. For engagements, research collaborations, and press."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Contact — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "Open a channel with AXIOM-AI WORKSPACE. For engagements, research collaborations, and press."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/contact"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Contact AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "Open a channel with AXIOM-AI WORKSPACE. For engagements, research collaborations, and press."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "Contact AXIOM-AI WORKSPACE"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact — AXIOM-AI WORKSPACE",
				description: "Open a channel with AXIOM-AI WORKSPACE. For engagements, research collaborations, and press.",
				url: "https://axiom.studio/contact",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./docs-Dg76_h9W.mjs");
var Route$8 = createFileRoute("/docs")({
	head: () => ({
		meta: [
			{ title: "Documentation — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "Technical documentation, architecture references, and contribution guides for AXIOM-AI WORKSPACE."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Documentation — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "Technical documentation, architecture references, and contribution guides for AXIOM-AI WORKSPACE."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/docs"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Documentation"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Documentation — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "Technical documentation, architecture references, and contribution guides for AXIOM-AI WORKSPACE."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Documentation"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/docs"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Documentation — AXIOM-AI WORKSPACE",
				description: "Technical documentation, architecture references, and contribution guides for AXIOM-AI WORKSPACE.",
				url: "https://axiom.studio/docs",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./journey-DLh8ktll.mjs");
var Route$7 = createFileRoute("/journey")({
	head: () => ({
		meta: [
			{ title: "Journey — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "The roadmap of AXIOM-AI WORKSPACE: planning, research, development, testing, and future versions."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Journey — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "The roadmap of AXIOM-AI WORKSPACE: planning, research, development, testing, and future versions."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/journey"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Journey"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Journey — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "The roadmap of AXIOM-AI WORKSPACE: planning, research, development, testing, and future versions."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Journey"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/journey"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Journey — AXIOM-AI WORKSPACE",
				description: "The roadmap of AXIOM-AI WORKSPACE: planning, research, development, testing, and future versions.",
				url: "https://axiom.studio/journey",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-D7d_TAps.mjs");
var Route$6 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projects — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "Systems built by AXIOM-AI WORKSPACE. AXIOM v1, Ledger durable memory, routing infrastructure, and forward research."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Projects — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "Systems built by AXIOM-AI WORKSPACE. AXIOM v1, Ledger durable memory, routing infrastructure, and forward research."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/projects"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Projects"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Projects — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "Systems built by AXIOM-AI WORKSPACE. AXIOM v1, Ledger durable memory, routing infrastructure, and forward research."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Projects"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/projects"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Projects — AXIOM-AI WORKSPACE",
				description: "Systems built by AXIOM-AI WORKSPACE. AXIOM v1, Ledger durable memory, routing infrastructure, and forward research.",
				url: "https://axiom.studio/projects",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./research-W1Xht_gJ.mjs");
var Route$5 = createFileRoute("/research")({
	head: () => ({
		meta: [
			{ title: "Research — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "Architecture notes, AI routing diagrams, and forward research from AXIOM-AI WORKSPACE. Model routing, episodic memory, and latency budgets."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Research — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "Architecture notes, AI routing diagrams, and forward research from AXIOM-AI WORKSPACE."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/research"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Research"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Research — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "Architecture notes, AI routing diagrams, and forward research from AXIOM-AI WORKSPACE."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Research"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/research"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Research — AXIOM-AI WORKSPACE",
				description: "Architecture notes, AI routing diagrams, and forward research from AXIOM-AI WORKSPACE.",
				url: "https://axiom.studio/research",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const baseUrl = "https://axiom.studio";
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		"/",
		"/about",
		"/team",
		"/projects",
		"/skills",
		"/technology",
		"/research",
		"/journey",
		"/docs",
		"/contact"
	].map((p) => `  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$2 = () => import("./skills-kXFSwuOg.mjs");
var Route$3 = createFileRoute("/skills")({
	head: () => ({
		meta: [
			{ title: "Skills — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "The technology galaxy powering AXIOM-AI WORKSPACE — a network of interconnected disciplines and skills spanning AI, systems, and design."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Skills — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "The technology galaxy powering AXIOM-AI WORKSPACE — a network of interconnected disciplines and skills spanning AI, systems, and design."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/skills"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Skills"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Skills — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "The technology galaxy powering AXIOM-AI WORKSPACE — a network of interconnected disciplines and skills spanning AI, systems, and design."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Skills"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/skills"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Skills — AXIOM-AI WORKSPACE",
				description: "The technology galaxy powering AXIOM-AI WORKSPACE — a network of interconnected disciplines and skills spanning AI, systems, and design.",
				url: "https://axiom.studio/skills",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./team-DUUu6yyE.mjs");
var Route$2 = createFileRoute("/team")({
	head: () => ({
		meta: [
			{ title: "Team — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "Meet the five engineers behind AXIOM-AI WORKSPACE: Raj Choudhury, Daniyal, Jigyashu, Banajit, and Abhijeet."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Team — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "Meet the five engineers behind AXIOM-AI WORKSPACE: Raj Choudhury, Daniyal, Jigyashu, Banajit, and Abhijeet."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/team"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Team"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Team — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "Meet the five engineers behind AXIOM-AI WORKSPACE: Raj Choudhury, Daniyal, Jigyashu, Banajit, and Abhijeet."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Team"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/team"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: "Team — AXIOM-AI WORKSPACE",
				description: "Meet the five engineers behind AXIOM-AI WORKSPACE: Raj Choudhury, Daniyal, Jigyashu, Banajit, and Abhijeet.",
				url: "https://axiom.studio/team",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./technology-HJnxdX6j.mjs");
var Route$1 = createFileRoute("/technology")({
	head: () => ({
		meta: [
			{ title: "Technology — AXIOM-AI WORKSPACE" },
			{
				name: "description",
				content: "The technology stack powering AXIOM-AI WORKSPACE, and why each piece is here. React, Next.js, TypeScript, Tailwind, Framer Motion, and more."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Technology — AXIOM-AI WORKSPACE"
			},
			{
				property: "og:description",
				content: "The technology stack powering AXIOM-AI WORKSPACE, and why each piece is here."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://axiom.studio/technology"
			},
			{
				property: "og:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AXIOM-AI WORKSPACE Technology Stack"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Technology — AXIOM-AI WORKSPACE"
			},
			{
				name: "twitter:description",
				content: "The technology stack powering AXIOM-AI WORKSPACE, and why each piece is here."
			},
			{
				name: "twitter:image",
				content: "https://axiom.studio/og-image.png"
			},
			{
				name: "twitter:image:alt",
				content: "AXIOM-AI WORKSPACE Technology Stack"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://axiom.studio/technology"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Technology — AXIOM-AI WORKSPACE",
				description: "The technology stack powering AXIOM-AI WORKSPACE, and why each piece is here.",
				url: "https://axiom.studio/technology",
				isPartOf: {
					"@type": "WebSite",
					url: "https://axiom.studio"
				},
				about: {
					"@type": "Organization",
					name: "AXIOM-AI WORKSPACE",
					url: "https://axiom.studio"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
var GROQ_MODEL = "llama-3.3-70b-versatile";
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey) return Response.json({ error: "AI service is not configured." }, { status: 500 });
	let payload;
	try {
		payload = await request.json();
	} catch {
		return Response.json({ error: "Invalid request body." }, { status: 400 });
	}
	if (!payload.messages || !Array.isArray(payload.messages)) return Response.json({ error: "Messages array is required." }, { status: 400 });
	const messages = [{
		role: "system",
		content: SYSTEM_PROMPT
	}, ...payload.messages.map((msg) => ({
		role: msg.role === "assistant" ? "assistant" : "user",
		content: msg.content
	}))];
	try {
		const res = await fetch(GROQ_API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: GROQ_MODEL,
				messages,
				temperature: .7,
				max_tokens: 2048,
				top_p: .95,
				stream: true
			})
		});
		if (!res.ok) {
			const errorText = await res.text();
			console.error(`[chat] Groq API error ${res.status}:`, errorText.slice(0, 500));
			if (res.status === 429) return Response.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 });
			if (res.status === 400) return Response.json({ error: "Invalid request. Please try again." }, { status: 400 });
			return Response.json({ error: `AI service error: ${res.status}` }, { status: res.status });
		}
		const reader = res.body?.getReader();
		if (!reader) return Response.json({ error: "No response stream available." }, { status: 500 });
		const encoder = new TextEncoder();
		const decoder = new TextDecoder();
		const stream = new ReadableStream({ async start(controller) {
			try {
				while (true) {
					const { done, value } = await reader.read();
					if (done) {
						controller.close();
						break;
					}
					const lines = decoder.decode(value, { stream: true }).split("\n");
					for (const line of lines) {
						const trimmed = line.trim();
						if (!trimmed || !trimmed.startsWith("data:")) continue;
						const data = trimmed.slice(5).trim();
						if (data === "[DONE]") {
							controller.close();
							break;
						}
						try {
							const content = JSON.parse(data).choices?.[0]?.delta?.content;
							if (content) controller.enqueue(encoder.encode(content));
						} catch {}
					}
				}
			} catch (err) {
				console.error("[chat] Stream error:", err);
				controller.error(err);
			}
		} });
		return new Response(stream, { headers: {
			"Content-Type": "text/plain",
			"Transfer-Encoding": "chunked",
			"Cache-Control": "no-cache"
		} });
	} catch (err) {
		console.error("[chat] Fetch failed:", err);
		return Response.json({ error: "Failed to reach the AI service." }, { status: 502 });
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$9.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	DocsRoute: Route$8.update({
		id: "/docs",
		path: "/docs",
		getParentRoute: () => Route$12
	}),
	JourneyRoute: Route$7.update({
		id: "/journey",
		path: "/journey",
		getParentRoute: () => Route$12
	}),
	ProjectsRoute: Route$6.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$12
	}),
	ResearchRoute: Route$5.update({
		id: "/research",
		path: "/research",
		getParentRoute: () => Route$12
	}),
	SitemapDotxmlRoute: Route$4.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$12
	}),
	SkillsRoute: Route$3.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$12
	}),
	TeamRoute: Route$2.update({
		id: "/team",
		path: "/team",
		getParentRoute: () => Route$12
	}),
	TechnologyRoute: Route$1.update({
		id: "/technology",
		path: "/technology",
		getParentRoute: () => Route$12
	}),
	ApiChatRoute: Route.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
