import type { Metadata } from "next";
import { Inter, Shippori_Mincho, Yuji_Syuku } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { SkipLink } from "@/components/ui";
import { PaperGrain } from "@/components/visual/paper-grain";
import { siteConfig } from "@/config/site";
import "./globals.css";
import "./typography-fonts.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-shippori",
  display: "swap",
});

const yujiSyuku = Yuji_Syuku({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yuji",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${shipporiMincho.variable} ${yujiSyuku.variable}`}>
        <PaperGrain />
        <SkipLink />
        <SiteHeader />
        <MobileNavigation />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
