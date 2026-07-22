import { createFileRoute } from "@tanstack/react-router";
import { SYSTEM_PROMPT } from "@/lib/ai-service";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey =
          process.env.GROQ_API_KEY ||
          process.env.NITRO_GROQ_API_KEY ||
          process.env.VITE_GROQ_API_KEY ||
          (typeof import.meta !== "undefined" && import.meta.env
            ? import.meta.env.VITE_GROQ_API_KEY || import.meta.env.GROQ_API_KEY
            : undefined);

        if (!apiKey) {
          return Response.json(
            { error: "AI service is not configured. Please set GROQ_API_KEY in environment." },
            { status: 500 },
          );
        }

        let payload: { messages: Array<{ role: string; content: string }> };
        try {
          payload = await request.json();
        } catch {
          return Response.json(
            { error: "Invalid request body." },
            { status: 400 },
          );
        }

        if (!payload.messages || !Array.isArray(payload.messages)) {
          return Response.json(
            { error: "Messages array is required." },
            { status: 400 },
          );
        }

        const filteredMessages = payload.messages.filter(
          (msg) => msg && typeof msg.content === "string" && msg.content.trim() !== ""
        );

        const messages = [
          { role: "system", content: SYSTEM_PROMPT },
          ...filteredMessages.map((msg) => ({
            role: msg.role === "assistant" ? "assistant" : "user",
            content: msg.content.trim(),
          })),
        ];

        try {
          const res = await fetch(GROQ_API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: GROQ_MODEL,
              messages,
              temperature: 0.7,
              max_tokens: 2048,
              top_p: 0.95,
              stream: true,
            }),
          });

          if (!res.ok) {
            const errorText = await res.text();
            console.error(
              `[chat] Groq API error ${res.status}:`,
              errorText.slice(0, 500),
            );

            if (res.status === 429) {
              return Response.json(
                { error: "Rate limit exceeded. Please try again later." },
                { status: 429 },
              );
            }

            if (res.status === 400) {
              return Response.json(
                { error: "Invalid request to AI provider." },
                { status: 400 },
              );
            }

            return Response.json(
              { error: `AI service error: ${res.status}` },
              { status: res.status },
            );
          }

          const reader = res.body?.getReader();
          if (!reader) {
            return Response.json(
              { error: "No response stream available." },
              { status: 500 },
            );
          }

          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          const stream = new ReadableStream({
            async start(controller) {
              let buffer = "";
              try {
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) {
                    if (buffer.trim()) {
                      const trimmed = buffer.trim();
                      if (trimmed.startsWith("data:")) {
                        const data = trimmed.slice(5).trim();
                        if (data && data !== "[DONE]") {
                          try {
                            const parsed = JSON.parse(data);
                            const content = parsed.choices?.[0]?.delta?.content;
                            if (content) controller.enqueue(encoder.encode(content));
                          } catch {
                            // ignore partial trailing
                          }
                        }
                      }
                    }
                    controller.close();
                    break;
                  }

                  buffer += decoder.decode(value, { stream: true });
                  const lines = buffer.split("\n");
                  buffer = lines.pop() || "";

                  for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed || !trimmed.startsWith("data:")) continue;

                    const data = trimmed.slice(5).trim();
                    if (data === "[DONE]") {
                      controller.close();
                      return;
                    }

                    try {
                      const parsed = JSON.parse(data);
                      const content = parsed.choices?.[0]?.delta?.content;
                      if (content) {
                        controller.enqueue(encoder.encode(content));
                      }
                    } catch {
                      // Skip malformed JSON chunks
                    }
                  }
                }
              } catch (err) {
                console.error("[chat] Stream error:", err);
                controller.error(err);
              }
            },
          });

          return new Response(stream, {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "no-cache",
            },
          });
        } catch (err) {
          console.error("[chat] Fetch failed:", err);
          return Response.json(
            { error: "Failed to reach the AI service." },
            { status: 502 },
          );
        }
      },
    },
  },
});
