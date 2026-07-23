"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Send } from "lucide-react";
import { ChatMessage } from "@/components/ai-chat-message";
import type { ChatMessage as ChatMessageType } from "@/lib/ai-service";
import { cn } from "@/lib/utils";

const API_ENDPOINT = "/api/chat";

interface ChatWindowProps {
  messages: ChatMessageType[];
  isOpen: boolean;
  onClose: () => void;
  onSendMessage: (content: string) => void;
  onClearHistory: () => void;
  isStreaming: boolean;
  setIsStreaming: (streaming: boolean) => void;
  updateLastMessage: (content: string) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function ChatWindow({
  messages,
  isOpen,
  onClose,
  onSendMessage,
  onClearHistory,
  isStreaming,
  setIsStreaming,
  updateLastMessage,
  triggerRef,
}: ChatWindowProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) return;
    triggerRef.current?.focus();
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    container.addEventListener("keydown", handleTab);
    first?.focus();
    return () => {
      container.removeEventListener("keydown", handleTab);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    setError(null);
    onSendMessage(trimmed);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    abortControllerRef.current = new AbortController();
    let accumulated = "";

    try {
      setIsStreaming(true);

      const validMessages = messages
        .filter((m) => m && m.content && m.content.trim() !== "")
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...validMessages,
            { role: "user", content: trimmed },
          ],
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error || `HTTP ${res.status}`,
        );
      }

      const reader = res.body?.getReader();
      if (!reader) {
        throw new Error("No response stream available.");
      }

      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        accumulated += text;
        updateLastMessage(accumulated);
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      updateLastMessage(
        accumulated || "Sorry, I encountered an error. Please try again.",
      );
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex h-[calc(100dvh-100px)] max-h-[600px] w-full sm:w-[380px] sm:h-[600px] sm:max-h-[600px] md:w-[400px] md:h-[650px] md:max-h-[650px] flex-col rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="AXIOM AI Chat"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="relative h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-sm font-semibold font-display">AXIOM AI</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onClearHistory}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Clear chat"
            title="Clear chat"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="flex-1 overflow-y-auto px-3 py-3 space-y-3"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </AnimatePresence>

        {isStreaming && messages[messages.length - 1]?.content === "" && (
          <div className="flex justify-start">
            <div className="glass rounded-2xl rounded-bl-md px-4 py-3">
              <TypingIndicator />
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-border p-3">
        <div className="flex items-end gap-2 rounded-xl border border-border bg-input px-3 py-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask AXIOM anything..."
            rows={1}
            className="max-h-40 min-h-[24px] flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            disabled={isStreaming}
          />
          <button
            type="submit"
            disabled={!input.trim() || isStreaming}
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
              input.trim() && !isStreaming
                ? "bg-crimson text-white hover:bg-crimson/80"
                : "bg-muted text-muted-foreground",
            )}
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
          Press Enter to send · Shift+Enter for new line
        </p>
      </form>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-flex h-1.5 w-1.5 rounded-full bg-crimson-soft"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
