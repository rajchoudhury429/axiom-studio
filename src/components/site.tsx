import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "eyebrow text-xs font-mono tracking-widest text-[var(--eyebrow-color)] uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/technology", label: "Technology" },
    { to: "/research", label: "Research" },
    { to: "/journey", label: "Journey" },
    { to: "/docs", label: "Docs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent px-6 py-4 flex items-center justify-between",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border/40 py-3 shadow-lg"
            : "bg-transparent py-5",
        )}
      >
        <Link to="/" className="flex items-center gap-3 group select-none">
          <svg
            className="h-8 w-8 transition-transform group-hover:scale-105 duration-300"
            viewBox="0 0 120 120"
          >
            <g
              stroke="var(--crimson)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 60,15 L 82,37" />
              <path d="M 60,15 L 38,37" />
              <path d="M 60,105 L 82,83" />
              <path d="M 60,105 L 38,83" />
              <path d="M 22,80 L 38,40 L 50,40" />
              <path d="M 26,68 L 46,68" />
              <path d="M 44,40 L 76,80" />
              <path d="M 76,40 L 44,80" />
              <rect x="70" y="40" width="28" height="40" rx="14" ry="14" />
            </g>
          </svg>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-wider leading-none">
              AXIOM
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[var(--eyebrow-color)] mt-0.5 leading-none">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass p-1.5 rounded-full border border-border">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                className:
                  "bg-crimson/12 border-crimson/25 text-crimson-soft font-semibold shadow-inner",
              }}
              inactiveProps={{
                className:
                  "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary",
              }}
              className="px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-lg glass-red text-white hover:bg-crimson/20 transition"
          >
            Let's Connect
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between items-end">
              <span
                className={cn(
                  "h-[2px] bg-foreground transition-all duration-300 rounded",
                  isMobileMenuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6",
                )}
              />
              <span
                className={cn(
                  "h-[2px] bg-foreground transition-all duration-300 rounded",
                  isMobileMenuOpen ? "w-0 opacity-0" : "w-4",
                )}
              />
              <span
                className={cn(
                  "h-[2px] bg-foreground transition-all duration-300 rounded",
                  isMobileMenuOpen
                    ? "w-6 -rotate-45 -translate-y-[9px]"
                    : "w-5",
                )}
              />
            </div>
          </button>

          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-3 overflow-y-auto mb-8 pr-2">
          {links.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              activeProps={{
                className:
                  "border-crimson/40 bg-crimson/[0.08] text-foreground",
              }}
              inactiveProps={{
                className:
                  "border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50",
              }}
              className="w-full text-left rounded-xl border p-4 text-sm font-medium transition animate-rise"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center rounded-xl glass-red py-4 text-sm font-semibold text-white text-center hover:bg-crimson/20 transition"
          >
            Let's Connect
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-16 relative z-10">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 opacity-60" viewBox="0 0 120 120">
              <g
                stroke="var(--crimson)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 60,15 L 82,37" />
                <path d="M 60,15 L 38,37" />
                <path d="M 60,105 L 82,83" />
                <path d="M 60,105 L 38,83" />
                <path d="M 22,80 L 38,40 L 50,40" />
                <path d="M 26,68 L 46,68" />
                <path d="M 44,40 L 76,80" />
                <path d="M 76,40 L 44,80" />
                <rect x="70" y="40" width="28" height="40" rx="14" ry="14" />
              </g>
            </svg>
            <div className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} AXIOM STUDIO. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.slice(0, 5).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
