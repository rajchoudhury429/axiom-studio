"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import type { ChatMessage } from "@/lib/ai-service";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: ChatMessage;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const isUser = message.role === "user";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }

  return (
    <div
      className={cn(
        "flex gap-3 animate-rise",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-crimson/20 text-foreground rounded-br-md"
            : "glass text-foreground rounded-bl-md",
        )}
      >
        {!isUser && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-crimson-soft">
              AXIOM AI
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Copy message"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}
        <div className="prose prose-invert max-w-none dark:prose-invert">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                if (inline) {
                  return (
                    <code
                      className="rounded bg-black/20 px-1.5 py-0.5 text-xs font-mono text-crimson-soft"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                const match = /language-(\w+)/.exec(className || "");
                return (
                  <div className="relative mt-3 mb-3">
                    <div className="absolute right-2 top-2">
                      <button
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(
                              String(children).replace(/\n$/, ""),
                            );
                          } catch {
                            // clipboard not available
                          }
                        }}
                        className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono text-white/70 hover:text-white transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match?.[1] || "text"}
                      PreTag="div"
                      className="rounded-lg !bg-black/40 !p-4 !text-xs"
                      customStyle={{
                        margin: 0,
                        borderRadius: "0.5rem",
                        fontSize: "0.75rem",
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                );
              },
              p({ children }) {
                return <p className="mb-2 last:mb-0">{children}</p>;
              },
              ul({ children }) {
                return (
                  <ul className="mb-2 list-disc pl-4 last:mb-0">{children}</ul>
                );
              },
              ol({ children }) {
                return (
                  <ol className="mb-2 list-decimal pl-4 last:mb-0">
                    {children}
                  </ol>
                );
              },
              a({ children, href }) {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson-soft underline underline-offset-2 hover:text-crimson transition-colors"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
