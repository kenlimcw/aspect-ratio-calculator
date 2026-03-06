import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { I18nProvider } from "@/components/I18nProvider";
import { getMessages } from "@/i18n/get-messages";
import { getLocaleFromSegment, LOCALES, BASE_URL, LOCALE_SEGMENTS } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d11" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: segment } = await params;
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
      </head>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}>
        <I18nProvider locale={localeConfig.code} dir={localeConfig.dir} messages={messages}>
          <ThemeProvider>
            <div className="fixed top-3 end-3 z-40">
              <LanguageSwitcher />
            </div>
            {children}
            <Footer locale={localeConfig.code} seoData={footerSeoData} />
            <InstallPrompt />
            <ServiceWorkerRegistrar />
            <FeedbackWidget />
            <Analytics />
          </ThemeProvider>
        </I18nProvider>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K2FFY9EBDL"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K2FFY9EBDL');
        `}</Script>
        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vqoklhyc4l");
        `}</Script>
      </body>
    </html>
  );
}
