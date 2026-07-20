import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_TIMEOUT = 15_000;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const accessKey =
          process.env.NITRO_WEB3FORMS_ACCESS_KEY ??
          process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
          console.error("[contact] Missing WEB3FORMS access key");
          return Response.json(
            { success: false, message: "Contact form is not configured." },
            { status: 500 },
          );
        }

        let payload: Record<string, unknown>;
        try {
          payload = await request.json();
        } catch {
          return Response.json(
            { success: false, message: "Invalid request body." },
            { status: 400 },
          );
        }

        const name =
          typeof payload.name === "string" ? payload.name.trim() : "";
        const email =
          typeof payload.email === "string" ? payload.email.trim() : "";
        const subject =
          typeof payload.subject === "string" ? payload.subject.trim() : "";
        const message =
          typeof payload.message === "string" ? payload.message.trim() : "";
        const botcheck =
          typeof payload.botcheck === "string" ? payload.botcheck : "";

        if (!name || !email || !message) {
          return Response.json(
            {
              success: false,
              message: "Name, email, and message are required.",
            },
            { status: 400 },
          );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return Response.json(
            { success: false, message: "Please enter a valid email address." },
            { status: 400 },
          );
        }

        if (botcheck) {
          return Response.json(
            { success: false, message: "Spam detected." },
            { status: 400 },
          );
        }

        const body = new URLSearchParams();
        body.set("access_key", accessKey);
        body.set("from_name", name);
        body.set("replyto", email);
        body.set("subject", subject || "New contact form submission");
        body.set("name", name);
        body.set("email", email);
        body.set("message", message);
        body.set("botcheck", "");

        for (const [key, value] of Object.entries(payload)) {
          if (value == null) continue;
          if (
            [
              "access_key",
              "accessKey",
              "botcheck",
              "from_name",
              "replyto",
              "subject",
              "name",
              "email",
              "message",
            ].includes(key)
          )
            continue;
          body.set(
            key,
            typeof value === "string" ? value : JSON.stringify(value),
          );
        }

        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(
            () => controller.abort(),
            WEB3FORMS_TIMEOUT,
          );

          const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent":
                "Mozilla/5.0 (compatible; AXIOM-Studio/1.0; +https://axiom.studio)",
              Origin: request.headers.get("origin") ?? "https://axiom.studio",
              Referer:
                request.headers.get("referer") ??
                "https://axiom.studio/contact",
            },
            body: body.toString(),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);
          const data = await res.json();

          if (!res.ok) {
            console.error(
              `[contact] Web3Forms error ${res.status}:`,
              JSON.stringify(data),
            );
            return Response.json(
              {
                success: false,
                message:
                  (data as Record<string, unknown>).message ??
                  "Mail service returned an error.",
              },
              { status: res.status },
            );
          }

          return Response.json(data, { status: res.status });
        } catch (err) {
          if (err instanceof Error && err.name === "AbortError") {
            console.error("[contact] Web3Forms request timed out");
            return Response.json(
              {
                success: false,
                message: "Request timed out. Please try again.",
              },
              { status: 504 },
            );
          }

          console.error("[contact] Web3Forms fetch failed:", err);
          return Response.json(
            { success: false, message: "Failed to reach the mail service." },
            { status: 502 },
          );
        }
      },
    },
  },
});
