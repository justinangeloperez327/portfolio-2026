import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { SkipLink } from "@/components/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Justin Angelo Perez",
    template: "%s | Justin Angelo Perez",
  },
  description: "Software developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <SiteHeader />
        <MobileNavigation />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
