import type { MetadataRoute } from "next";
import { BASE_URL } from "@/i18n/config";

/* Who is allowed to read this site, stated one crawler at a time.
 *
 * The wildcard group cannot express the decision, because the vendors split
 * their crawlers by PURPOSE and only honour the most specific group that names
 * them. OpenAI runs GPTBot to gather training data and OAI-SearchBot to build
 * the index ChatGPT cites; Anthropic and Perplexity draw the same line. One
 * `User-Agent: *` rule says the same thing to both, so whatever it says, half
 * of it is an accident.
 *
 * The policy here: answer bots yes, training bots no.
 *
 * Being in an answer with a link is distribution — it is the modern equivalent
 * of ranking, and refusing it costs citations and referrals for nothing. Being
 * in a training corpus is not: the model absorbs the content and attributes
 * nothing, and once a set is trained the decision cannot be withdrawn. Those
 * are different trades and they get different answers.
 *
 * NOTE ON GROUPS: a crawler that matches a named group ignores `*` entirely, so
 * every bot allowed below must carry its own `Allow: /`. Naming a bot and
 * leaving its group empty is how sites accidentally serve a blank policy.
 */

/** Crawlers that build the indexes assistants cite, and link back. Allowed. */
const ANSWER_BOTS = ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"];

/** Fetched live when a person asks an assistant about this page. Allowed —
 *  blocking these means a user who asks about us gets told nothing is there. */
const FETCH_BOTS = ["ChatGPT-User", "Claude-User", "Perplexity-User"];

/** Corpus builders for model training. Declined — no attribution, no recall.
 *  Applebot-Extended is listed here and Applebot is NOT: Apple splits training
 *  from indexing, and we decline only the first. */
const TRAINING_BOTS = ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...ANSWER_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...FETCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...TRAINING_BOTS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
