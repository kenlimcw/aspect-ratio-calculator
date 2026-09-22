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
 * rows stay partly unearned until there are at least three platforms here, so
 * this list is expected to grow — but every entry must be a profile that exists
 * and is ours, and an empty slot is always better than a wrong one.
 */
export const SAME_AS: string[] = [
  // The canonical form, as the YouTube Data API reports snippet.customUrl.
  // Handles are case-insensitive and both URLs resolve, but sameAs is an
  // identity claim and the identifier may as well be the one the platform
  // itself considers canonical.
  "https://www.youtube.com/@aspectratiocalc",
];

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
    /* Now true, and only now.
     *
     * This was deliberately absent while the site had no search: a SearchAction
     * whose target 404s is not a shortcut to the sitelinks searchbox, it is a
     * false statement in structured data, and the usual price is the engine
     * discounting the rest of the graph. /search is a real endpoint that takes
     * q and returns results, so the claim is now one the site can keep. */
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}${locale.urlPrefix}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
