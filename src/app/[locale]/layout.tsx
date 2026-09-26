import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { ArcLogoSprite } from "@/components/ArcLogo";
import { I18nProvider } from "@/components/I18nProvider";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieConsent } from "@/components/CookieConsent";
import { getMessages } from "@/i18n/get-messages";
import { notFound } from "next/navigation";
import { getLocaleFromSegment, urlSegmentToLocale, LOCALES, BASE_URL, LOCALE_SEGMENTS } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { graph, organizationNode, websiteNode, jsonLd } from "@/lib/schema";
import { getSeoData } from "@/i18n/get-seo-data";
import { RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";
import type { FooterSeoData } from "@/components/Footer";

const dmSans = localFont({
  src: "../../fonts/dm-sans.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = localFont({
  src: "../../fonts/jetbrains-mono.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

const playfairDisplay = localFont({
  src: "../../fonts/playfair-display.woff2",
  variable: "--font-display",
  weight: "300 900",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALE_SEGMENTS.map((locale) => ({ locale }));
}

/* Any segment that is not one of the 13 locales is a 404, not a locale.
 *
 * [locale] accepted ANY value and getLocaleFromSegment() fell back to English,
 * so /openapi.json served the English homepage with a 200. The proxy skips
 * every path containing a dot, so all of them landed here — /llms.txt,
 * /rss.xml, any dotted path at all — each returning a full copy of the
 * homepage. A soft 404 says "found" about a page that is not there, and
 * nothing downstream can tell the difference.
 *
 * dynamicParams = false is declared, and the segment is ALSO checked here, in
 * the layout every locale route passes through. The belt-and-braces was
 * originally because the home page read headers() for a CSP nonce, which forced
 * it to render on demand, and a dynamically rendered route never consults
 * generateStaticParams. That nonce is gone (see the note beside the ld+json in
 * page.tsx) and the home page prerenders again — but the runtime check stays,
 * because it holds whichever way the page below happens to render, and the next
 * dynamic API someone reaches for should not silently reopen a soft 404. */
export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d11" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: segment } = await params;
  if (!urlSegmentToLocale(segment)) notFound();
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);

  return {
    metadataBase: new URL(BASE_URL),
    title: messages.meta?.siteTitle ?? "Aspect Ratio Calculator - Free Online Tool",
    description: messages.meta?.siteDescription ?? "Calculate and convert aspect ratios for Instagram, YouTube, TikTok, and more.",
    keywords: [
      "aspect ratio calculator",
      "aspect ratio calculator online",
      "aspect ratio calculator free",
      "image size calculator",
      "video aspect ratio",
      "instagram dimensions",
      "youtube video size",
      "social media image sizes",
    ],
    manifest: "/manifest.json",
    openGraph: {
      title: messages.meta?.siteTitle ?? "Aspect Ratio Calculator - Free Online Tool",
      description: messages.meta?.ogDescription ?? "Calculate and convert aspect ratios for social media, video, and photography.",
      type: "website",
      url: `${BASE_URL}${localeConfig.urlPrefix}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aspect Ratio Calculator" }],
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
    },
    alternates: getAlternates("/", localeConfig.urlPrefix),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: segment } = await params;
  if (!urlSegmentToLocale(segment)) notFound();
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const { RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA } = await getSeoData(localeConfig.code);

  const footerSeoData: FooterSeoData = {
    ratioLabels: Object.fromEntries(RATIO_SLUGS.map((s) => [s, RATIO_DATA[s]?.label ?? s])),
    platformNames: Object.fromEntries(PLATFORM_SLUGS.map((s) => [s, PLATFORM_DATA[s]?.name ?? s])),
    articleTitles: Object.fromEntries(ARTICLE_SLUGS.map((s) => [s, ARTICLE_DATA[s]?.title ?? s])),
  };

  return (
    <html lang={localeConfig.code} dir={localeConfig.dir} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* Declared, not just conventional: a reader or crawler should not
          * have to guess /feed.xml by trying paths. */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Aspect Ratio Calculator — guides"
          href="/feed.xml"
        />
        {/* Who this site is, once, sitewide. Every template's own JSON-LD
          * references these two nodes by @id instead of redescribing them.
          * No nonce: reading headers() here would make all 364 pages dynamic,
          * and application/ld+json is data, not an executed script. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(graph([organizationNode(), websiteNode(localeConfig)])),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}>
        <I18nProvider locale={localeConfig.code} dir={localeConfig.dir} messages={messages}>
          <ThemeProvider>
            {/* One mask definition for the whole document; every <ArcLogo/>
              * references it by <use>. */}
            <ArcLogoSprite />
            {/* Replaces a floating language switcher that was the only
              * sitewide chrome above the fold. */}
            <SiteHeader />
            {children}
            <Footer locale={localeConfig.code} seoData={footerSeoData} />
            <InstallPrompt />
            <ServiceWorkerRegistrar />
            <FeedbackWidget />
            <Analytics />
            <AnalyticsScripts />
            <CookieConsent />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
