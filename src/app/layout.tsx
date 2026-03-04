import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";

// Fonts self-hosted as WOFF2 variable fonts committed to the repo.
// No requests are made to Google or any external server at build time or runtime.
const dmSans = localFont({
  src: "../fonts/dm-sans.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

const playfairDisplay = localFont({
  src: "../fonts/playfair-display.woff2",
  variable: "--font-display",
  weight: "300 900",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d11" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aspect-ratio-calculator.com"),
  title: "Aspect Ratio Calculator - Free Online Tool",
  description:
    "Calculate and convert aspect ratios for Instagram, YouTube, TikTok, and more. Resize dimensions instantly. Free, fast, works offline.",
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
    title: "Aspect Ratio Calculator - Free Online Tool",
    description: "Calculate and convert aspect ratios for social media, video, and photography. Free, fast, works offline.",
    type: "website",
    url: "https://aspect-ratio-calculator.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aspect Ratio Calculator",
      },
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Footer />
          <InstallPrompt />
          <ServiceWorkerRegistrar />
          <FeedbackWidget />
          <Analytics />
        </ThemeProvider>
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
