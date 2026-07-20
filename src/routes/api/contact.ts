import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
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

        const body = new URLSearchParams();
        body.set("access_key", accessKey);
        for (const [key, value] of Object.entries(payload)) {
          if (value == null) continue;
          if (key === "access_key" || key === "accessKey") continue;
          body.set(
            key,
            typeof value === "string" ? value : JSON.stringify(value),
          );
        }

        try {
          const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: body.toString(),
          });
          const data = await res.json();
          return Response.json(data, { status: res.status });
        } catch {
          return Response.json(
            { success: false, message: "Failed to reach the mail service." },
            { status: 502 },
          );
        }
      },
    },
  },
});
