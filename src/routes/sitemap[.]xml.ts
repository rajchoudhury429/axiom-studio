import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = "https://axiom.studio";
        const paths = [
          "/",
          "/about",
          "/team",
          "/projects",
          "/skills",
          "/technology",
          "/research",
          "/journey",
          "/docs",
          "/contact",
        ];

        const urls = paths
          .map(
            (p) => `  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
