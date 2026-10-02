import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { SiteProvider } from "./components/SiteProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "সাইবার পুলিশ ইউনিট | বাংলাদেশ পুলিশ",
    template: "%s | সাইবার পুলিশ ইউনিট",
  },
  description:
    "বাংলাদেশ পুলিশের বিশেষায়িত ও স্বতন্ত্র সাইবার পুলিশ ইউনিট — সাইবার অপরাধ দমন, ডিজিটাল নিরাপত্তা ও প্রযুক্তিভিত্তিক তদন্ত।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Tiro+Bangla&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </SiteProvider>
      </body>
    </html>
  );
}
