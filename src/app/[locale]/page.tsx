import Link from "next/link";
import { ArcLogo } from "@/components/ArcLogo";
import Calculator from "@/components/Calculator";
import { RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";
import { TOOL_DATA, TOOL_SLUGS } from "@/lib/tools-data";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { CONTENT_REVISED } from "@/lib/content-revised";
import { ORG_ID } from "@/lib/schema";
import { getSeoData } from "@/i18n/get-seo-data";
import { getMessages } from "@/i18n/get-messages";

const RATIO_SLUG_MAP: Record<string, string> = {
  "16:9": "16-9",
  "9:16": "9-16",
  "1:1": "1-1",
  "4:5": "4-5",
  "4:3": "4-3",
  "3:2": "3-2",
  "5:4": "5-4",
  "21:9": "21-9",
  "2:1": "2-1",
};

const PLATFORM_SLUG_MAP: Record<string, string> = {
  "Instagram": "instagram",
  "YouTube": "youtube",
  "TikTok": "tiktok",
  "X / Twitter": "twitter",
  "LinkedIn": "linkedin",
  "Facebook": "facebook",
  "Pinterest": "pinterest",
};

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const alternates = getAlternates("/", localeConfig.urlPrefix);

  return {
    title: messages.meta?.siteTitle ?? "Aspect Ratio Calculator - Free Online Tool",
    description: messages.meta?.siteDescription ?? "Calculate and convert aspect ratios for Instagram, YouTube, TikTok, and more.",
    openGraph: {
      title: messages.meta?.siteTitle ?? "Aspect Ratio Calculator - Free Online Tool",
      description: messages.meta?.ogDescription ?? "Calculate and convert aspect ratios for social media, video, and photography.",
      url: `${BASE_URL}${localeConfig.urlPrefix}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates,
  };
}

export default async function Home({ params }: Props) {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const seoData = await getSeoData(localeConfig.code);

  const hp = messages.homePage ?? {};
  const prefix = localeConfig.urlPrefix; // "" for en, "/es" for es, etc.

  const appName = hp.heroTitle ? `${hp.heroTitle} ${hp.heroTitleAccent}` : "Aspect Ratio Calculator";
  const appUrl = `${BASE_URL}${prefix}`;

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "SoftwareApplication"],
    "name": appName,
    "description": messages.meta?.siteDescription ?? "Calculate and convert aspect ratios for video, images, social media, and screens. Free, fast, works offline.",
    "url": appUrl,
    "applicationCategory": "UtilityApplication",
    "applicationSubCategory": "Image and Video Tools",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Requires a modern web browser",
    "isAccessibleForFree": true,
    // The date the calculator itself last changed, from the same hand-maintained
    // file the sitemap reads. A homepage with no date in its structured data
    // loses every recency comparison an assistant makes between two answers.
    "dateModified": CONTENT_REVISED.home,
    // A date without an author is half a byline, and a model weighing two
    // answers reads both. The calculator is the site's own work, so the
    // organisation is genuinely its author — this is not a placeholder.
    "author": { "@id": ORG_ID },
    "inLanguage": localeConfig.code,
    "screenshot": `${BASE_URL}/og-image.png`,
    "featureList": [
      "Calculate dimensions while preserving aspect ratio",
      "Find the ratio of any width and height",
      "Image Wizard: upload any image for automatic dimension detection and platform-specific crop recommendations",
      "Presets for Instagram, YouTube, TikTok, X, LinkedIn, Facebook, Pinterest",
      "Cinema and broadcast ratios (16:9, 4:3, 1:1, 9:16, 21:9, 3:2, 4:5, 2:1, 5:4)",
      "CSS padding-bottom snippet for responsive containers",
      "Works offline as an installable PWA",
      "Available in 13+ languages",
    ],
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": hp.howToUse ?? "How to Use This Calculator",
    "description": "Three modes to calculate and convert aspect ratios for any dimensions, image, or social platform.",
    "totalTime": "PT30S",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": (hp.howToUseStep1Title ?? "Calculator:").replace(/:$/, ""),
        "text": hp.howToUseStep1Text ?? "Enter your original dimensions (the ratio locks automatically), then type a new width or height — the other dimension calculates instantly. Pick a platform preset to auto-fill recommended dimensions.",
        "url": `${appUrl}#calculator`,
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": (hp.howToUseStep2Title ?? "Find Ratio:").replace(/:$/, ""),
        "text": hp.howToUseStep2Text ?? "Enter any width and height to discover the simplified ratio, decimal value, closest standard match, and CSS padding-bottom value. Upload an image to instantly detect its dimensions.",
        "url": `${appUrl}#find-ratio`,
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": (hp.howToUseStep3Title ?? "Image Wizard:").replace(/:$/, ""),
        "text": hp.howToUseStep3Text ?? "Upload any image and choose where you want to use it — social media, websites, print, or personal use. Get instant recommendations with crop analysis and one-click dimension copying.",
        "url": `${appUrl}#image-wizard`,
      },
    ],
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      {/* No nonce, deliberately, and it is the reason this page can be cached.
        * Reading headers() for the CSP nonce made the busiest URL on the site
        * render on demand: Vercel served it `no-cache, no-store` with no ETag,
        * so Googlebot could never make a conditional request and every visit
        * was a full fetch. application/ld+json is data, not an executed script
        * — the layout has always shipped its own ld+json without a nonce — so
        * the nonce bought nothing and cost the homepage its cacheability. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />

      <div className="max-w-2xl mx-auto">
        {/* ── Hero ──
          * The mark sits beside the headline rather than above it, and its
          * size is derived from the type rather than chosen by eye: it spans
          * from the top of the headline's capitals to the bottom of the
          * tagline's descenders. Both figures are measured — see `.hero-lockup`
          * in globals.css. Below ~600px of container it stacks and centres,
          * which is what this block already did.
          */}
        {/* max-w-xl, matching Calculator's own root (Calculator.tsx:1636).
          * The page container is max-w-2xl; the calculator is max-w-xl inside
          * it, so mx-auto insets it by 48px a side. Without the same limit the
          * hero starts 48px left of the tab bar, "Original Size" and every
          * label under it — which is the mark appearing to stick out. It was
          * never a type-size problem, and no amount of resizing would have
          * closed it. */}
        <div className="hero-shell mx-auto mb-10 w-full max-w-xl">
          <div className="hero-lockup">
            <ArcLogo className="hero-mark" title={`${hp.heroTitle ?? "Aspect Ratio"} ${hp.heroTitleAccent ?? "Calculator"}`} />
            <h1 className="font-display font-semibold text-[var(--foreground)] tracking-tight title-glow">
              {hp.heroTitle ?? "Aspect Ratio"}{" "}
              <span className="text-[var(--accent)]">{hp.heroTitleAccent ?? "Calculator"}</span>
            </h1>
            <p className="hero-tagline text-[var(--muted)] text-sm">
              {hp.heroSubtitle ?? "Your everyday calculator for social media, video, photography and screens"}
            </p>
          </div>
        </div>

        <Calculator />

        {/* ── Articles ──
          * These were a list of bare links in an "Explore" block at the very
          * bottom of a 450-line page, below the ratio table and the platform
          * table. Nobody scrolls that far to discover that the site writes
          * anything. They are the second reason to come here after the
          * calculator, so they sit directly under it.
          */}
        <section className="mt-16" aria-labelledby="articles-heading">
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h2
              id="articles-heading"
              className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              {messages.blogPage?.blog ?? "Guides"}
            </h2>
            <Link
              href={`${prefix}/blog`}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
            >
              {messages.common?.readMore ?? "All guides"} &rarr;
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ARTICLE_SLUGS.map((slug) => {
              const a = seoData.ARTICLE_DATA[slug];
              return (
                <li key={slug}>
                  <Link
                    href={`${prefix}/blog/${slug}`}
                    className="block h-full rounded-lg border p-4 transition-colors hover:border-[var(--accent)]"
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    <span className="block font-semibold mb-1 text-[var(--foreground)]">
                      {a?.title ?? slug}
                    </span>
                    <span className="block text-sm text-[var(--muted)] leading-relaxed">
                      {a?.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ── SEO Content ── */}
        <section className="mt-20 space-y-6">
          <div className="seo-card">
            <h2 id="what-is-aspect-ratio" className="text-base font-semibold text-[var(--foreground)] mb-3">
              {hp.whatIsAspectRatio ?? "What is an Aspect Ratio?"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {hp.whatIsAspectRatioText ?? "An aspect ratio describes the proportional relationship between width and height. Written as W:H (e.g., 16:9), it tells you the shape of a screen, image, or video frame. A 16:9 ratio means for every 16 units of width, the height is 9 units \u2014 the standard for HD and 4K video. A 1:1 ratio is a perfect square, used for Instagram feed posts."}
            </p>
          </div>

          <div className="seo-card">
            <h2 id="common-aspect-ratios" className="text-base font-semibold text-[var(--foreground)] mb-4">
              {hp.commonAspectRatios ?? "Common Aspect Ratios"}
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <div className="-mx-2 overflow-x-auto px-2">
              <table className="w-full min-w-[22rem] text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>{hp.tableRatio ?? "Ratio"}</th>
                    <th>{hp.tableDecimal ?? "Decimal"}</th>
                    <th>{hp.tableUseCase ?? "Use Case"}</th>
                    <th>{hp.tableWhereUsed ?? "Where It\u2019s Used"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["16:9", "1.778", hp.tableRow169UseCase ?? "Widescreen video & streaming", hp.tableRow169Where ?? "YouTube, Netflix, TV, monitors"],
                    ["9:16", "0.563", hp.tableRow916UseCase ?? "Vertical video", hp.tableRow916Where ?? "TikTok, Instagram Reels, YouTube Shorts"],
                    ["1:1", "1.000", hp.tableRow11UseCase ?? "Square posts", hp.tableRow11Where ?? "Instagram feed, Facebook, profile images"],
                    ["4:5", "0.800", hp.tableRow45UseCase ?? "Portrait posts", hp.tableRow45Where ?? "Instagram portrait, social media feeds"],
                    ["4:3", "1.333", hp.tableRow43UseCase ?? "Classic TV & presentations", hp.tableRow43Where ?? "PowerPoint, iPad, legacy broadcasts"],
                    ["3:2", "1.500", hp.tableRow32UseCase ?? "Photography", hp.tableRow32Where ?? "DSLR cameras, 4x6 prints, 35mm film"],
                    ["5:4", "1.250", hp.tableRow54UseCase ?? "Portrait prints", hp.tableRow54Where ?? "8x10 prints, medium format cameras"],
                    ["2.39:1", "2.390", hp.tableRow2391UseCase ?? "Cinemascope / anamorphic", hp.tableRow2391Where ?? "Theatrical films, DCI projection"],
                    ["1.85:1", "1.850", hp.tableRow1851UseCase ?? "Theatrical flat", hp.tableRow1851Where ?? "Wide-release cinema, IMAX digital"],
                    ["21:9", "2.333", hp.tableRow219UseCase ?? "Ultrawide monitors", hp.tableRow219Where ?? "Gaming, ultrawide displays"],
                  ].map(([ratio, dec, use, where]) => {
                    const slug = RATIO_SLUG_MAP[ratio];
                    return (
                      <tr key={ratio}>
                        <td className="font-mono font-medium text-[var(--accent)]">
                          {slug ? (
                            <Link href={`${prefix}/ratio/${slug}`} className="hover:underline">{ratio}</Link>
                          ) : ratio}
                        </td>
                        <td className="font-mono text-[var(--foreground-dim)]">{dec}</td>
                        <td className="text-[var(--foreground)]">{use}</td>
                        <td className="text-[var(--muted)]">{where}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </div>

          <div className="seo-card">
            <h2 id="how-to-use" className="text-base font-semibold text-[var(--foreground)] mb-3">
              {hp.howToUse ?? "How to Use This Calculator"}
            </h2>
            <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                <p>
                  <strong className="text-[var(--foreground)]">{hp.howToUseStep1Title ?? "Calculator:"}</strong>{" "}
                  {hp.howToUseStep1Text ?? "Enter your original dimensions (the ratio locks automatically), then type a new width or height \u2014 the other dimension calculates instantly. Pick a platform preset to auto-fill recommended dimensions."}
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                <p>
                  <strong className="text-[var(--foreground)]">{hp.howToUseStep2Title ?? "Find Ratio:"}</strong>{" "}
                  {hp.howToUseStep2Text ?? "Enter any width and height to discover the simplified ratio, decimal value, closest standard match, and CSS padding-bottom value. Upload an image to instantly detect its dimensions."}
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                <p>
                  <strong className="text-[var(--foreground)]">{hp.howToUseStep3Title ?? "Image Wizard:"}</strong>{" "}
                  {hp.howToUseStep3Text ?? "Upload any image and choose where you want to use it \u2014 social media, websites, print, or personal use. Get instant recommendations with crop analysis and one-click dimension copying."}
                </p>
              </div>
            </div>
          </div>

          <div className="seo-card">
            <h2 id="social-media-sizes" className="text-base font-semibold text-[var(--foreground)] mb-4">
              {hp.socialMediaSizes ?? "Social Media Image Sizes (2026)"}
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <div className="-mx-2 overflow-x-auto px-2">
              <table className="w-full min-w-[22rem] text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>{hp.tablePlatform ?? "Platform"}</th>
                    <th>{hp.tableFormat ?? "Format"}</th>
                    <th>{hp.tableDimensions ?? "Dimensions"}</th>
                    <th>{hp.tableRatio ?? "Ratio"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Instagram", "Post", "1080 \u00d7 1080", "1:1"],
                    ["Instagram", "Story / Reel", "1080 \u00d7 1920", "9:16"],
                    ["Instagram", "Portrait", "1080 \u00d7 1350", "4:5"],
                    ["YouTube", "Video", "1920 \u00d7 1080", "16:9"],
                    ["YouTube", "Shorts", "1080 \u00d7 1920", "9:16"],
                    ["TikTok", "Video", "1080 \u00d7 1920", "9:16"],
                    ["X / Twitter", "Post", "1600 \u00d7 900", "16:9"],
                    ["X / Twitter", "Header", "1500 \u00d7 500", "3:1"],
                    ["LinkedIn", "Post", "1200 \u00d7 627", "1.91:1"],
                    ["LinkedIn", "Banner", "1584 \u00d7 396", "4:1"],
                    ["Facebook", "Post", "1200 \u00d7 630", "1.91:1"],
                    ["Facebook", "Cover", "820 \u00d7 312", "2.63:1"],
                    ["Pinterest", "Pin", "1000 \u00d7 1500", "2:3"],
                  ].map(([platform, format, dims, ratio], i) => {
                    const slug = PLATFORM_SLUG_MAP[platform];
                    return (
                      <tr key={i}>
                        <td className="font-medium text-[var(--foreground)]">
                          {slug ? (
                            <Link href={`${prefix}/platform/${slug}`} className="hover:underline">{platform}</Link>
                          ) : platform}
                        </td>
                        <td className="text-[var(--foreground)]">{format}</td>
                        <td className="font-mono text-[var(--foreground-dim)]">{dims}</td>
                        <td className="font-mono text-[var(--accent)]">{ratio}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </div>

          {/* ── Tools ──
            * Placed above Explore deliberately. The home page is one of only
            * six URLs Google currently has indexed for this site, so a link
            * from here is the strongest discovery signal available — and these
            * are the pages built to be found. */}
          <div className="seo-card">
            <h2 id="tools" className="text-base font-semibold text-[var(--foreground)] mb-4">
              {hp.toolsHeading ?? "Calculators and checkers"}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {TOOL_SLUGS.map((slug) => {
                const tm = (messages[TOOL_DATA[slug].ns] ?? {}) as Record<string, string>;
                return (
                  <li key={slug}>
                    <Link
                      href={`${prefix}/tools/${slug}`}
                      className="block p-3 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                    >
                      <span className="block text-sm font-medium text-[var(--foreground)]">
                        {tm.navLabel ?? slug}
                      </span>
                      <span className="block text-xs text-[var(--muted)] mt-0.5">
                        {tm.tagline}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href={`${prefix}/tools`}
              className="inline-block mt-3 text-sm text-[var(--accent)] hover:underline"
            >
              {hp.allTools ?? "All tools"} &rarr;
            </Link>
          </div>

          {/* ── Explore Section ── */}
          <div className="seo-card">
            <h2 id="explore" className="text-base font-semibold text-[var(--foreground)] mb-4">
              {hp.exploreAspectRatios ?? "Explore Aspect Ratios"}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 id="by-ratio" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  {hp.byRatio ?? "By Ratio"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {RATIO_SLUGS.map((slug) => (
                    <Link
                      key={slug}
                      href={`${prefix}/ratio/${slug}`}
                      className="px-3 py-1.5 text-sm font-mono rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {seoData.RATIO_DATA[slug]?.label ?? slug}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 id="by-platform" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  {hp.byPlatform ?? "By Platform"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PLATFORM_SLUGS.map((slug) => (
                    <Link
                      key={slug}
                      href={`${prefix}/platform/${slug}`}
                      className="px-3 py-1.5 text-sm rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {seoData.PLATFORM_DATA[slug]?.name ?? slug}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 id="by-tool" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  {hp.byTool ?? "Tools"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {TOOL_SLUGS.map((slug) => (
                    <Link
                      key={slug}
                      href={`${prefix}/tools/${slug}`}
                      className="px-3 py-1.5 text-sm rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {(messages[TOOL_DATA[slug].ns] ?? {}).navLabel ?? slug}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 id="guides" className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  {messages.blogPage?.blog ?? "Guides"}
                </h3>
                <ul className="space-y-1.5">
                  {ARTICLE_SLUGS.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`${prefix}/blog/${slug}`}
                        className="text-sm text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-colors"
                      >
                        {seoData.ARTICLE_DATA[slug]?.title ?? slug} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
