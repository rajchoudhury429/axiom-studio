import { useState, useEffect, useCallback } from "react";
import type { ChatMessage } from "@/lib/ai-service";

const STORAGE_KEY = "axiom-chat-history";
const MAX_HISTORY = 50;

export function useChatHistory() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ChatMessage[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed.slice(-MAX_HISTORY));
        } else {
          setMessages([getWelcomeMessage()]);
        }
      } else {
        setMessages([getWelcomeMessage()]);
      }
    } catch {
      setMessages([getWelcomeMessage()]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(messages.slice(-MAX_HISTORY)),
      );
    } catch {
      // localStorage full or unavailable
    }
  }, [messages, isLoaded]);

  const addMessage = useCallback((message: ChatMessage) => {
    setMessages((prev) => [...prev.slice(-MAX_HISTORY + 1), message]);
  }, []);

  const updateLastMessage = useCallback((content: string) => {
    setMessages((prev) => {
      const updated = [...prev];
      const last = updated[updated.length - 1];
      if (last && last.role === "assistant") {
        updated[updated.length - 1] = { ...last, content };
      }
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    const welcome = getWelcomeMessage();
    setMessages([welcome]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    messages,
    isLoaded,
    addMessage,
    updateLastMessage,
    clearHistory,
  };
}

function getWelcomeMessage(): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "Hello! I'm the AXIOM-AI WORKSPACE AI assistant. I can help you learn more about our projects, technology stack, team, or research. What would you like to know?",
    timestamp: Date.now(),
  };
}
