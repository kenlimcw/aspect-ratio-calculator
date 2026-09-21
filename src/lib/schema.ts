import { BASE_URL, LOCALES, type LocaleConfig } from "@/i18n/config";

/* The site's identity, in one place.
 *
 * Every page used to hand-roll its own JSON-LD, so the same organisation was
 * described slightly differently on each template, or — for Organization and
 * WebSite — not at all. Search engines and assistants reconcile a site to an
 * entity they already know by matching these nodes, so "slightly differently"
 * is the failure mode: two descriptions of one company read as two companies.
 *
 * Nodes carry a stable `@id` and reference each other by it, rather than
 * repeating themselves. One `@graph` per page, emitted from the layout.
 */

export const SITE_NAME = "Aspect Ratio Calculator";
export const ORG_ID = `${BASE_URL}/#organization`;
export const SITE_ID = `${BASE_URL}/#website`;

const SITE_DESCRIPTION =
  "A free tool to calculate, convert and compare aspect ratios for social media, " +
  "video, photography, web design and screens. Runs entirely in the browser.";

/** Live, first-party profiles, for Organization.sameAs.
 *
 * EMPTY ON PURPOSE — not an oversight. sameAs asserts "these accounts are us",
 * and it is the single strongest signal for tying this site to an entity a
 * search engine already has a record of. A URL here that is dead, parked, or
 * someone else's is worse than no array at all, because the claim is checked.
 *
 * Add real, live profile URLs and they flow into the schema automatically. Two
 * playbook rows stay unearned until there are at least three of them.
 */
export const SAME_AS: string[] = [];

interface Node {
  "@type": string;
  "@id"?: string;
  [key: string]: unknown;
}

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${BASE_URL}/contact`,
      availableLanguage: LOCALES.map((l) => l.hreflang),
    },
    ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
  };
}

export function websiteNode(locale: LocaleConfig): Node {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${BASE_URL}${locale.urlPrefix}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: LOCALES.map((l) => l.hreflang),
    /* No potentialAction / SearchAction here, deliberately.
     *
     * The sitelinks searchbox requires a real internal search endpoint that
     * accepts a query and returns results. This site has none. Declaring a
     * SearchAction whose target 404s is not a shortcut to the rich result — it
     * is a false statement in structured data, and the usual consequence is
     * that the engine stops trusting the rest of the graph. It goes in when
     * search exists, and not before. */
  };
}

/** Wrap nodes as one @graph document. */
export function graph(nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Serialise for dangerouslySetInnerHTML.
 *  `<` is escaped so a string in the data can never close the script element. */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
