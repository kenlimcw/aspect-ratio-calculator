import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
          <InstallPrompt />
          <ServiceWorkerRegistrar />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
