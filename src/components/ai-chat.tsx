"use client";

import { useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatButton } from "@/components/ai-chat-button";
import { ChatWindow } from "@/components/ai-chat-window";
import { useChatHistory } from "@/hooks/use-chat-history";
import { createMessage } from "@/lib/ai-service";

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const { messages, isLoaded, addMessage, updateLastMessage, clearHistory } =
    useChatHistory();

  const handleSendMessage = useCallback(
    (content: string) => {
      const userMessage = createMessage("user", content);
      const assistantMessage = createMessage("assistant", "");
      addMessage(userMessage);
      addMessage(assistantMessage);
    },
    [addMessage],
  );

  const handleClearHistory = useCallback(() => {
    clearHistory();
  }, [clearHistory]);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 flex justify-end pointer-events-none"
          >
            <div className="pointer-events-auto">
              <ChatWindow
                messages={messages}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSendMessage={handleSendMessage}
                onClearHistory={handleClearHistory}
                isStreaming={isStreaming}
                setIsStreaming={setIsStreaming}
                updateLastMessage={updateLastMessage}
                triggerRef={chatButtonRef}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ChatButton
        ref={chatButtonRef}
        onClick={() => setIsOpen(true)}
        isOpen={isOpen}
      />
    </>
  );
}
