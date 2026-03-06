import { headers } from "next/headers";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import { RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA, RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";

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

export default async function Home() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aspect Ratio Calculator",
    "description": "Calculate and convert aspect ratios for video, images, social media, and screens. Free, fast, works offline.",
    "url": "https://aspect-ratio-calculator.com",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Requires a modern web browser",
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        {/* ── Hero Title ── */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--foreground)] mb-3 tracking-tight title-glow">
            Aspect Ratio{" "}
            <span className="text-[var(--accent)]">Calculator</span>
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base">
            Calculate dimensions for social media, video, photography, and screens
          </p>
        </div>

        <Calculator />

        {/* ── SEO Content ── */}
        <section className="mt-20 space-y-6">
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              What is an Aspect Ratio?
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              An aspect ratio describes the proportional relationship between
              width and height. Written as W:H (e.g., 16:9), it tells you the
              shape of a screen, image, or video frame. A 16:9 ratio means for
              every 16 units of width, the height is 9 units &mdash; the
              standard for HD and 4K video. A 1:1 ratio is a perfect square,
              used for Instagram feed posts.
            </p>
          </div>

          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              Common Aspect Ratios
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>Ratio</th>
                    <th>Decimal</th>
                    <th>Use Case</th>
                    <th>Where It&apos;s Used</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["16:9", "1.778", "Widescreen video & streaming", "YouTube, Netflix, TV, monitors"],
                    ["9:16", "0.563", "Vertical video", "TikTok, Instagram Reels, YouTube Shorts"],
                    ["1:1", "1.000", "Square posts", "Instagram feed, Facebook, profile images"],
                    ["4:5", "0.800", "Portrait posts", "Instagram portrait, social media feeds"],
                    ["4:3", "1.333", "Classic TV & presentations", "PowerPoint, iPad, legacy broadcasts"],
                    ["3:2", "1.500", "Photography", "DSLR cameras, 4x6 prints, 35mm film"],
                    ["5:4", "1.250", "Portrait prints", "8x10 prints, medium format cameras"],
                    ["2.39:1", "2.390", "Cinemascope / anamorphic", "Theatrical films, DCI projection"],
                    ["1.85:1", "1.850", "Theatrical flat", "Wide-release cinema, IMAX digital"],
                    ["21:9", "2.333", "Ultrawide monitors", "Gaming, ultrawide displays"],
                  ].map(([ratio, dec, use, where]) => {
                    const slug = RATIO_SLUG_MAP[ratio];
                    return (
                      <tr key={ratio}>
                        <td className="font-mono font-medium text-[var(--accent)]">
                          {slug ? (
                            <Link href={`/ratio/${slug}`} className="hover:underline">{ratio}</Link>
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

          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              How to Use This Calculator
            </h2>
            <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                <p>
                  <strong className="text-[var(--foreground)]">Calculator:</strong> Enter your original dimensions
                  (the ratio locks automatically), then type a new width or height
                  &mdash; the other dimension calculates instantly. Pick a platform
                  preset to auto-fill recommended dimensions.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                <p>
                  <strong className="text-[var(--foreground)]">Find Ratio:</strong> Enter any width and height to
                  discover the simplified ratio, decimal value, closest standard
                  match, and CSS padding-bottom value. Upload an image to instantly
                  detect its dimensions.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                <p>
                  <strong className="text-[var(--foreground)]">Image Wizard:</strong> Upload any image and choose where
                  you want to use it &mdash; social media, websites, print, or
                  personal use. Get instant recommendations with crop analysis and
                  one-click dimension copying.
                </p>
              </div>
            </div>
          </div>

          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              Social Media Image Sizes (2026)
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>Platform</th>
                    <th>Format</th>
                    <th>Dimensions</th>
                    <th>Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Instagram", "Post", "1080 × 1080", "1:1"],
                    ["Instagram", "Story / Reel", "1080 × 1920", "9:16"],
                    ["Instagram", "Portrait", "1080 × 1350", "4:5"],
                    ["YouTube", "Video", "1920 × 1080", "16:9"],
                    ["YouTube", "Shorts", "1080 × 1920", "9:16"],
                    ["TikTok", "Video", "1080 × 1920", "9:16"],
                    ["X / Twitter", "Post", "1600 × 900", "16:9"],
                    ["X / Twitter", "Header", "1500 × 500", "3:1"],
                    ["LinkedIn", "Post", "1200 × 627", "1.91:1"],
                    ["LinkedIn", "Banner", "1584 × 396", "4:1"],
                    ["Facebook", "Post", "1200 × 630", "1.91:1"],
                    ["Facebook", "Cover", "820 × 312", "2.63:1"],
                    ["Pinterest", "Pin", "1000 × 1500", "2:3"],
                  ].map(([platform, format, dims, ratio], i) => {
                    const slug = PLATFORM_SLUG_MAP[platform];
                    return (
                      <tr key={i}>
                        <td className="font-medium text-[var(--foreground)]">
                          {slug ? (
                            <Link href={`/platform/${slug}`} className="hover:underline">{platform}</Link>
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

          {/* ── Explore Section ── */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              Explore Aspect Ratios
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  By Ratio
                </h3>
                <div className="flex flex-wrap gap-2">
                  {RATIO_SLUGS.map((slug) => (
                    <Link
                      key={slug}
                      href={`/ratio/${slug}`}
                      className="px-3 py-1.5 text-sm font-mono rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {RATIO_DATA[slug].label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  By Platform
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PLATFORM_SLUGS.map((slug) => (
                    <Link
                      key={slug}
                      href={`/platform/${slug}`}
                      className="px-3 py-1.5 text-sm rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {PLATFORM_DATA[slug].name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                  Guides
                </h3>
                <ul className="space-y-1.5">
                  {ARTICLE_SLUGS.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/blog/${slug}`}
                        className="text-sm text-[var(--foreground-dim)] hover:text-[var(--accent)] transition-colors"
                      >
                        {ARTICLE_DATA[slug].title} →
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
