import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PageShell, Eyebrow } from "@/components/site";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AXIOM Studio" },
      {
        name: "description",
        content:
          "Open a channel with AXIOM Studio. For engagements, research collaborations, and press.",
      },
    ],
  }),
  component: Contact,
});

const WEB3FORMS_ACCESS_KEY = "48be367c-789b-4f7e-a4fd-39668dec8b10";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function Globe() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full glass-red animate-pulse-glow" />
      <div className="absolute inset-4 rounded-full border border-crimson/40 overflow-hidden">
        <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
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
  const [subject, setSubject] = useState("Engagement inquiry");
  const submissionIdRef = useRef(0);

  function validateForm(form: HTMLFormElement): string | null {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) return "Name is required.";
    if (name.length < 2) return "Name must be at least 2 characters.";
    if (!email) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!message) return "Message is required.";
    if (message.length < 10) return "Message must be at least 10 characters.";
    if (message.length > 5000) return "Message must be under 5000 characters.";

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
        setSubject("Engagement inquiry");
        toast.success(
          "Message sent successfully. We'll reply within 48 hours.",
        );
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

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-8">
        <Eyebrow>Open Channel</Eyebrow>
        <h1 className="hero-title mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
          Say something
          <br />
          <span className="text-shine">worth answering.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
        <div className="glass-red rounded-3xl p-8 md:p-10">
          {sent ? (
            <div className="text-center py-10">
              <div className="mx-auto h-14 w-14 rounded-full glass-red flex items-center justify-center animate-pulse-glow">
                ✓
              </div>
              <div className="mt-6 font-display text-2xl">Signal received.</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every real message, usually within 48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setStatus("idle");
                  setErrorMsg("");
                }}
                className="mt-6 rounded-lg border border-border bg-secondary/80 px-5 py-2 text-sm font-medium hover:bg-secondary transition"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <div className="eyebrow mb-2">Name</div>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none focus:border-crimson/60"
                  />
                </label>
                <label className="block">
                  <div className="eyebrow mb-2">Email</div>
                  <input
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none focus:border-crimson/60"
                  />
                </label>
              </div>
              <label className="block">
                <div className="eyebrow mb-2">Subject</div>
                <select
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none"
                >
                  <option>Engagement inquiry</option>
                  <option>Research collaboration</option>
                  <option>Press</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block">
                <div className="eyebrow mb-2">Message</div>
                <textarea
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  className="w-full rounded-lg bg-input border-border px-4 py-3 text-sm outline-none focus:border-crimson/60 resize-none"
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
                <p className="text-sm text-destructive">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg glass-red px-5 py-3 text-sm font-medium hover:brightness-110 transition disabled:opacity-60"
              >
                {status === "sending" ? "Transmitting…" : "Transmit →"}
              </button>
            </form>
          )}
        </div>

        <div>
          <Globe />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              ["Email", "hello@axiom.studio"],
              ["GitHub", "github.com/axiom-studio"],
              ["LinkedIn", "linkedin.com/company/axiom"],
              ["Instagram", "@axiom.studio"],
            ].map(([k, v]) => (
              <div key={k} className="glass rounded-xl p-4">
                <div className="eyebrow">{k}</div>
                <div className="mt-1 font-mono text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
