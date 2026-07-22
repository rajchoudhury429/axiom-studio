import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useTheme, r as createMessage } from "./ai-service-BH7JBtfI.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Moon, c as Check, i as Send, n as Trash2, o as MessageCircle, r as Sun, s as Copy, t as X } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
import { n as highlighter, t as one_dark_default } from "../_libs/react-syntax-highlighter+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-CltB6ejn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ThemeToggle({ className }) {
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggleTheme,
		className: cn("relative inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300", "text-muted-foreground hover:text-foreground hover:bg-secondary", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", className),
		"aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
		title: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative h-5 w-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: cn("absolute inset-0 h-5 w-5 transition-all duration-300", theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: cn("absolute inset-0 h-5 w-5 transition-all duration-300", theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0") })]
		})
	});
}
function ChatButton({ onClick, isOpen, ref }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		ref,
		onClick,
		className: cn("fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md shadow-lg transition-colors hover:bg-secondary", isOpen && "hidden"),
		whileHover: { scale: 1.05 },
		whileTap: { scale: .95 },
		"aria-label": "Open AI chat",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-1.5 rounded-full bg-crimson/20 animate-ping opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative h-6 w-6 text-crimson" })]
		})
	});
}
function ChatMessage({ message }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const isUser = message.role === "user";
	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(message.content);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex gap-3 animate-rise", isUser ? "justify-end" : "justify-start"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed", isUser ? "bg-crimson/20 text-foreground rounded-br-md" : "glass text-foreground rounded-bl-md"),
			children: [!isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-mono uppercase tracking-widest text-crimson-soft",
					children: "AXIOM AI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleCopy,
					className: "flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors",
					"aria-label": "Copy message",
					children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copied" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })] })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose prose-invert max-w-none dark:prose-invert",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
					components: {
						code({ node, inline, className, children, ...props }) {
							if (inline) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-black/20 px-1.5 py-0.5 text-xs font-mono text-crimson-soft",
								...props,
								children
							});
							const match = /language-(\w+)/.exec(className || "");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-3 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-2 top-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: async () => {
											try {
												await navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
											} catch {}
										},
										className: "rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono text-white/70 hover:text-white transition-colors",
										children: "Copy"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(highlighter, {
									style: one_dark_default,
									language: match?.[1] || "text",
									PreTag: "div",
									className: "rounded-lg !bg-black/40 !p-4 !text-xs",
									customStyle: {
										margin: 0,
										borderRadius: "0.5rem",
										fontSize: "0.75rem"
									},
									children: String(children).replace(/\n$/, "")
								})]
							});
						},
						p({ children }) {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 last:mb-0",
								children
							});
						},
						ul({ children }) {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mb-2 list-disc pl-4 last:mb-0",
								children
							});
						},
						ol({ children }) {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mb-2 list-decimal pl-4 last:mb-0",
								children
							});
						},
						a({ children, href }) {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-crimson-soft underline underline-offset-2 hover:text-crimson transition-colors",
								children
							});
						}
					},
					children: message.content
				})
			})]
		})
	});
}
var API_ENDPOINT = "/api/chat";
function ChatWindow({ messages, isOpen, onClose, onSendMessage, onClearHistory, isStreaming, setIsStreaming, updateLastMessage, triggerRef }) {
	const [input, setInput] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const messagesEndRef = (0, import_react.useRef)(null);
	const textareaRef = (0, import_react.useRef)(null);
	const abortControllerRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	const scrollToBottom = (0, import_react.useCallback)(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);
	(0, import_react.useEffect)(() => {
		scrollToBottom();
	}, [messages, scrollToBottom]);
	(0, import_react.useEffect)(() => {
		if (isOpen) return;
		triggerRef.current?.focus();
	}, [isOpen, triggerRef]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const container = containerRef.current;
		if (!container) return;
		const focusable = container.querySelectorAll("button, [href], input, textarea, select, [tabindex]:not([tabindex=\"-1\"])");
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		function handleTab(e) {
			if (e.key !== "Tab") return;
			if (focusable.length === 0) return;
			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				}
			} else if (document.activeElement === last) {
				e.preventDefault();
				first?.focus();
			}
		}
		container.addEventListener("keydown", handleTab);
		first?.focus();
		return () => {
			container.removeEventListener("keydown", handleTab);
		};
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		return () => {
			abortControllerRef.current?.abort();
		};
	}, []);
	async function handleSubmit(e) {
		e.preventDefault();
		const trimmed = input.trim();
		if (!trimmed || isStreaming) return;
		setError(null);
		onSendMessage(trimmed);
		setInput("");
		if (textareaRef.current) textareaRef.current.style.height = "auto";
		abortControllerRef.current = new AbortController();
		try {
			setIsStreaming(true);
			const res = await fetch(API_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: [...messages.map((m) => ({
					role: m.role,
					content: m.content
				})), {
					role: "user",
					content: trimmed
				}] }),
				signal: abortControllerRef.current.signal
			});
			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error(data.error || `HTTP ${res.status}`);
			}
			const reader = res.body?.getReader();
			if (!reader) throw new Error("No response stream available.");
			const decoder = new TextDecoder();
			let accumulated = "";
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				const text = decoder.decode(value, { stream: true });
				accumulated += text;
				updateLastMessage(accumulated);
			}
		} catch (err) {
			if (err instanceof Error && err.name === "AbortError") return;
			const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
			setError(message);
			updateLastMessage(accumulated || "Sorry, I encountered an error. Please try again.");
		} finally {
			setIsStreaming(false);
			abortControllerRef.current = null;
		}
	}
	function handleKeyDown(e) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	}
	function handleInputChange(e) {
		setInput(e.target.value);
		const textarea = e.target;
		textarea.style.height = "auto";
		textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref: containerRef,
		initial: {
			opacity: 0,
			scale: .95,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .95,
			y: 20
		},
		transition: {
			duration: .2,
			ease: "easeOut"
		},
		className: "flex h-[600px] w-[380px] flex-col rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl md:h-[650px] md:w-[400px]",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "AXIOM AI Chat",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold font-display",
						children: "AXIOM AI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClearHistory,
						className: "rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
						"aria-label": "Clear chat",
						title: "Clear chat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
						"aria-label": "Close chat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-live": "polite",
				"aria-atomic": "false",
				className: "flex-1 overflow-y-auto px-3 py-3 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatMessage, { message: msg }, msg.id)) }),
					isStreaming && messages[messages.length - 1]?.content === "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass rounded-2xl rounded-bl-md px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, {})
						})
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2 rounded-xl border border-border bg-input px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						ref: textareaRef,
						value: input,
						onChange: handleInputChange,
						onKeyDown: handleKeyDown,
						placeholder: "Ask AXIOM anything...",
						rows: 1,
						className: "max-h-40 min-h-[24px] flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground",
						disabled: isStreaming
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: !input.trim() || isStreaming,
						className: cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors", input.trim() && !isStreaming ? "bg-crimson text-white hover:bg-crimson/80" : "bg-muted text-muted-foreground"),
						"aria-label": "Send message",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-center text-[10px] text-muted-foreground",
					children: "Press Enter to send · Shift+Enter for new line"
				})]
			})
		]
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "inline-flex h-1.5 w-1.5 rounded-full bg-crimson-soft",
			animate: {
				opacity: [
					.3,
					1,
					.3
				],
				scale: [
					.8,
					1.1,
					.8
				]
			},
			transition: {
				duration: 1.2,
				repeat: Infinity,
				delay: i * .2,
				ease: "easeInOut"
			}
		}, i))
	});
}
var STORAGE_KEY = "axiom-chat-history";
function useChatHistory() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored);
				if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed.slice(-50));
				else setMessages([getWelcomeMessage()]);
			} else setMessages([getWelcomeMessage()]);
		} catch {
			setMessages([getWelcomeMessage()]);
		} finally {
			setIsLoaded(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isLoaded) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)));
		} catch {}
	}, [messages, isLoaded]);
	return {
		messages,
		isLoaded,
		addMessage: (0, import_react.useCallback)((message) => {
			setMessages((prev) => [...prev.slice(-49), message]);
		}, []),
		updateLastMessage: (0, import_react.useCallback)((content) => {
			setMessages((prev) => {
				const updated = [...prev];
				const last = updated[updated.length - 1];
				if (last && last.role === "assistant") updated[updated.length - 1] = {
					...last,
					content
				};
				return updated;
			});
		}, []),
		clearHistory: (0, import_react.useCallback)(() => {
			const welcome = getWelcomeMessage();
			setMessages([welcome]);
			localStorage.removeItem(STORAGE_KEY);
		}, [])
	};
}
function getWelcomeMessage() {
	return {
		id: crypto.randomUUID(),
		role: "assistant",
		content: "Hello! I'm the AXIOM-AI WORKSPACE AI assistant. I can help you learn more about our projects, technology stack, team, or research. What would you like to know?",
		timestamp: Date.now()
	};
}
function AIChat() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isStreaming, setIsStreaming] = (0, import_react.useState)(false);
	const chatButtonRef = (0, import_react.useRef)(null);
	const { messages, isLoaded, addMessage, updateLastMessage, clearHistory } = useChatHistory();
	const handleSendMessage = (0, import_react.useCallback)((content) => {
		const userMessage = createMessage("user", content);
		const assistantMessage = createMessage("assistant", "");
		addMessage(userMessage);
		addMessage(assistantMessage);
	}, [addMessage]);
	const handleClearHistory = (0, import_react.useCallback)(() => {
		clearHistory();
	}, [clearHistory]);
	if (!isLoaded) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed bottom-6 right-6 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWindow, {
			messages,
			isOpen,
			onClose: () => setIsOpen(false),
			onSendMessage: handleSendMessage,
			onClearHistory: handleClearHistory,
			isStreaming,
			setIsStreaming,
			updateLastMessage,
			triggerRef: chatButtonRef
		})
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatButton, {
		ref: chatButtonRef,
		onClick: () => setIsOpen(true),
		isOpen
	})] });
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("eyebrow text-xs font-mono tracking-widest text-[var(--eyebrow-color)] uppercase", className),
		children
	});
}
function PageShell({ children }) {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const links = [
		{
			to: "/",
			label: "Home"
		},
		{
			to: "/about",
			label: "About"
		},
		{
			to: "/team",
			label: "Team"
		},
		{
			to: "/projects",
			label: "Projects"
		},
		{
			to: "/skills",
			label: "Skills"
		},
		{
			to: "/technology",
			label: "Technology"
		},
		{
			to: "/research",
			label: "Research"
		},
		{
			to: "/journey",
			label: "Journey"
		},
		{
			to: "/docs",
			label: "Docs"
		},
		{
			to: "/contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: cn("fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent px-6 py-4 flex items-center justify-between", isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-3 shadow-lg" : "bg-transparent py-5"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3 group select-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-8 w-8 transition-transform group-hover:scale-105 duration-300",
							viewBox: "0 0 120 120",
							role: "img",
							"aria-label": "AXIOM-AI WORKSPACE logo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								stroke: "var(--crimson)",
								strokeWidth: "8",
								fill: "none",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,15 L 82,37" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,15 L 38,37" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,105 L 82,83" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,105 L 38,83" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 22,80 L 38,40 L 50,40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 26,68 L 46,68" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 44,40 L 76,80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 76,40 L 44,80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "70",
										y: "40",
										width: "28",
										height: "40",
										rx: "14",
										ry: "14"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold tracking-wider leading-none",
								children: "AXIOM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-mono tracking-widest text-[var(--eyebrow-color)] mt-0.5 leading-none",
								children: "STUDIO"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-1 glass p-1.5 rounded-full border border-border",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							activeProps: { className: "bg-crimson/12 border-crimson/25 text-crimson-soft font-semibold shadow-inner" },
							inactiveProps: { className: "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary" },
							className: "px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
							children: link.label
						}, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hidden md:inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-lg glass-red text-white hover:bg-crimson/20 transition",
								children: "Let's Connect"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
								className: "lg:hidden p-2 text-muted-foreground hover:text-foreground focus:outline-none",
								"aria-label": "Toggle mobile menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-6 h-5 relative flex flex-col justify-between items-end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-[2px] bg-foreground transition-all duration-300 rounded", isMobileMenuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-[2px] bg-foreground transition-all duration-300 rounded", isMobileMenuOpen ? "w-0 opacity-0" : "w-4") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-[2px] bg-foreground transition-all duration-300 rounded", isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5") })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ease-in-out", isMobileMenuOpen ? "translate-x-0" : "translate-x-full"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-3 overflow-y-auto mb-8 pr-2",
					children: links.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						onClick: () => setIsMobileMenuOpen(false),
						activeProps: { className: "border-crimson/40 bg-crimson/[0.08] text-foreground" },
						inactiveProps: { className: "border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50" },
						className: "w-full text-left rounded-xl border p-4 text-sm font-medium transition animate-rise",
						style: { animationDelay: `${i * .05}s` },
						children: link.label
					}, link.to))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setIsMobileMenuOpen(false),
						className: "w-full inline-flex items-center justify-center rounded-xl glass-red py-4 text-sm font-semibold text-white text-center hover:bg-crimson/20 transition",
						children: "Let's Connect"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				className: "flex-grow pt-24 pb-16 relative z-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-8 px-6 relative z-10 bg-background/50 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-6 w-6 opacity-60",
							viewBox: "0 0 120 120",
							role: "img",
							"aria-label": "AXIOM-AI WORKSPACE logo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								stroke: "var(--crimson)",
								strokeWidth: "8",
								fill: "none",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,15 L 82,37" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,15 L 38,37" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,105 L 82,83" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 60,105 L 38,83" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 22,80 L 38,40 L 50,40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 26,68 L 46,68" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 44,40 L 76,80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 76,40 L 44,80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "70",
										y: "40",
										width: "28",
										height: "40",
										rx: "14",
										ry: "14"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground font-mono",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" AXIOM STUDIO. ALL RIGHTS RESERVED."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-6",
						children: links.slice(0, 5).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider",
							children: link.label
						}, link.to))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIChat, {})
		]
	});
}
//#endregion
export { PageShell as n, Eyebrow as t };
