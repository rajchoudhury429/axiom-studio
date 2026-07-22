"use client";

import { motion, MotionProps } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export function ChatButton({ onClick, isOpen, ref }: ChatButtonProps) {
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md shadow-lg transition-colors hover:bg-secondary",
        isOpen && "hidden",
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Open AI chat"
    >
      <div className="relative">
        <span className="absolute -inset-1.5 rounded-full bg-crimson/20 animate-ping opacity-75" />
        <MessageCircle className="relative h-6 w-6 text-crimson" />
      </div>
    </motion.button>
  );
}
