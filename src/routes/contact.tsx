import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Eyebrow } from "@/components/site";

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

function Globe() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full glass-red animate-pulse-glow" />
      <div className="absolute inset-4 rounded-full border border-[oklch(0.55_0.22_25/40%)] overflow-hidden">
        <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
          {Array.from({ length: 12 }).map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx="48"
              ry={4 + i * 4}
              fill="none"
              stroke="oklch(0.55 0.22 25 / 25%)"
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
              stroke="oklch(0.55 0.22 25 / 15%)"
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
          className="absolute h-2 w-2 rounded-full bg-[oklch(0.75_0.22_25)] shadow-[0_0_10px_oklch(0.75_0.22_25)]"
          style={{
            left: `${x}%`,
            top: `${y}%`,
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
      } else {
        setStatus("error");
        setErrorMsg(
          result.message ?? "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
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
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <div className="eyebrow mb-2">Name</div>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.22_25/60%)]"
                  />
                </label>
                <label className="block">
                  <div className="eyebrow mb-2">Email</div>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.22_25/60%)]"
                  />
                </label>
              </div>
              <label className="block">
                <div className="eyebrow mb-2">Subject</div>
                <select
                  name="subject"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none"
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
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.22_25/60%)] resize-none"
                />
              </label>
              {status === "error" && (
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
