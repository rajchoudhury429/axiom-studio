import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { toast } from "sonner";
import { DEFAULT_KEYWORDS } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Raj Choudhury & AXIOM Studio" },
      {
        name: "description",
        content:
          "Get in touch with Raj Choudhury and the AXIOM team for project collaborations, technical inquiries, research partnerships, and feedback.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Contact — Raj Choudhury & AXIOM Studio" },
      {
        property: "og:description",
        content:
          "Open a communication channel with AXIOM Studio for technical engagements and software projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axiom.studio/contact" },
      { property: "og:image", content: "https://axiom.studio/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://axiom.studio/contact" }],
  }),
  component: Contact,
});

const WEB3FORMS_ACCESS_KEY =
  (typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    : undefined) || "b0ed214b-707e-4197-a1ae-eaf7a735610c";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function Globe() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full glass-red animate-pulse-glow" />
      <div className="absolute inset-4 rounded-full border border-crimson/40 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full animate-spin-slow"
          role="img"
          aria-label="Animated globe"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="48"
              ry={4 + i * 4}
              fill="none"
              stroke="var(--crimson)"
              strokeOpacity="0.25"
              strokeWidth="0.2"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={`v${i}`}
              cx="50"
              cy="50"
              ry="48"
              rx={4 + i * 4}
              fill="none"
              stroke="var(--crimson)"
              strokeOpacity="0.15"
              strokeWidth="0.2"
            />
          ))}
        </svg>
      </div>
      {[
        [20, 30],
        [70, 20],
        [35, 70],
        [80, 60],
        [55, 45],
      ].map(([x, y], i) => (
        <div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-crimson-soft"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            boxShadow: "0 0 10px var(--crimson-soft)",
            animation: `float-slow ${3 + i}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [subject, setSubject] = useState("Project Collaboration");
  const submissionIdRef = useRef(0);

  function validateForm(form: HTMLFormElement): string | null {
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name) return "Please enter your name.";
    if (name.length < 2) return "Name must be at least 2 characters.";
    if (!email) return "Please enter your email address.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!message) return "Please enter a message.";
    if (message.length < 10) return "Message must be at least 10 characters long.";

    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      const timeoutId = setTimeout(() => controller.abort(), 15_000);

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (currentId !== submissionIdRef.current) return;

      const data = await res.json();

      if (data.success) {
        setSent(true);
        form.reset();
        setSubject("Project Collaboration");
        toast.success("Message sent successfully. We'll reply within 48 hours.");
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Failed to send message. Please try again.");
        toast.error(data.message ?? "Failed to send message. Please try again.");
      }
    } catch (err) {
      if (currentId !== submissionIdRef.current) return;
      setStatus("error");
      setErrorMsg("Network error. Please check your internet connection and try again.");
      toast.error("Network error. Please check your internet connection and try again.");
    }
  }

  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-6">
        <Eyebrow>Open Communication Channel</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Get in touch <span className="text-shine">with our team.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Whether you are a recruiter, collaborator, client, or fellow technology builder exploring AI software, we welcome project inquiries and technical discussions.
        </p>
      </section>

      {/* Reasons to Contact & Form */}
      <section className="mx-auto max-w-7xl px-6 py-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="glass-red rounded-3xl p-8 md:p-10">
          <Eyebrow className="mb-4">Send a Message</Eyebrow>
          {sent ? (
            <div className="text-center py-10 space-y-4">
              <div className="mx-auto h-14 w-14 rounded-full glass-red flex items-center justify-center text-emerald-400 font-bold text-xl animate-pulse-glow">
                ✓
              </div>
              <div className="font-display text-2xl text-foreground">Message Sent Successfully</div>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Raj Choudhury and the AXIOM team. We review every inquiry and typically reply within 24 to 48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setStatus("idle");
                  setErrorMsg("");
                }}
                className="mt-4 rounded-lg border border-border bg-secondary/80 px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <div className="eyebrow mb-2">Your Name</div>
                  <input
                    name="name"
                    required
                    placeholder="e.g. Alex Smith"
                    autoComplete="name"
                    className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm outline-none focus:border-crimson/60"
                  />
                </label>
                <label className="block">
                  <div className="eyebrow mb-2">Email Address</div>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="alex@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm outline-none focus:border-crimson/60"
                  />
                </label>
              </div>
              <label className="block">
                <div className="eyebrow mb-2">Inquiry Type / Subject</div>
                <select
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm outline-none focus:border-crimson/60 text-foreground"
                >
                  <option>Project Collaboration</option>
                  <option>Client / Consulting Engagement</option>
                  <option>Technical Feedback & Discussion</option>
                  <option>General Partnership Inquiry</option>
                </select>
              </label>
              <label className="block">
                <div className="eyebrow mb-2">Your Message</div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Share details about your project, idea, or questions..."
                  maxLength={5000}
                  className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm outline-none focus:border-crimson/60 resize-none"
                />
              </label>
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              {status === "error" && errorMsg && (
                <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive">
                  {errorMsg}
                </div>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl glass-red px-5 py-3.5 text-sm font-medium hover:brightness-110 transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Sending Message…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>

        {/* Why Contact Us & Direct Links */}
        <div className="space-y-8">
          <div>
            <Eyebrow className="mb-2">Why Connect With Us</Eyebrow>
            <h2 className="font-display text-2xl font-semibold mb-4">Opportunities for Engagement</h2>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="glass rounded-xl p-4">
                <strong className="text-foreground text-sm block mb-1">1. Project Collaborations</strong>
                <span className="text-muted-foreground">
                  Partner with Raj and the AXIOM team on multi-model AI routing, custom web applications, or design system engineering.
                </span>
              </div>
              <div className="glass rounded-xl p-4">
                <strong className="text-foreground text-sm block mb-1">2. Technical & Architecture Reviews</strong>
                <span className="text-muted-foreground">
                  Discuss full-stack web architectures, React 19 / TanStack Start integration, and API backend strategies.
                </span>
              </div>
              <div className="glass rounded-xl p-4">
                <strong className="text-foreground text-sm block mb-1">3. Feedback & General Inquiries</strong>
                <span className="text-muted-foreground">
                  Share suggestions, feature requests, or general thoughts on our open projects and research notes.
                </span>
              </div>
            </div>
          </div>

          <Globe />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Email", "hello@axiom.studio"],
              ["GitHub", "github.com/axiom-studio"],
              ["LinkedIn", "linkedin.com/company/axiom"],
              ["Instagram", "@axiom.studio"],
            ].map(([k, v]) => (
              <div key={k} className="glass rounded-xl p-3.5">
                <div className="eyebrow text-[10px]">{k}</div>
                <div className="mt-1 font-mono text-xs text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
