export const SITE_URL = "https://axiom.studio";

export const SITE_NAME = "AXIOM-AI WORKSPACE";

export const DEFAULT_TITLE = "AXIOM-AI WORKSPACE — Engineering Intelligence";

export const DEFAULT_DESCRIPTION =
  "AXIOM-AI WORKSPACE is an independent AI engineering collective building the interface between humans and machine intelligence.";

export const DEFAULT_KEYWORDS = [
  "Raj Choudhury developer",
  "AXIOM AI project",
  "AI assistant project",
  "Web development",
  "React developer",
  "AI technology",
  "Software projects",
  "Technology research",
  "TanStack Start",
  "Tailwind CSS",
  "Multi-model routing",
  "Ledger memory agent",
].join(", ");

export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      name: "Raj Choudhury",
      jobTitle: "Project Lead & Systems Engineer",
    },
    sameAs: [
      "https://github.com/axiom-studio",
      "https://linkedin.com/company/axiom",
      "https://instagram.com/axiom.studio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@axiom.studio",
      contactType: "customer service",
    },
  };
}

export function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function jsonLdBreadcrumb(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLdArticle(
  title: string,
  description: string,
  datePublished?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: datePublished ?? new Date().toISOString().split("T")[0],
    dateModified: datePublished ?? new Date().toISOString().split("T")[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
  };
}

export function jsonLdPerson(name: string, role: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description: description ?? `${name} — ${role} at ${SITE_NAME}`,
  };
}
