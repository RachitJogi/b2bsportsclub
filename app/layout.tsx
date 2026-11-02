import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "./globals.css";
import "./site.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getSiteSettings } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${site.name} — Cricket tournaments & events`, template: `%s | ${site.name}` },
    description: site.description,
    applicationName: site.name,
    openGraph: { siteName: site.name, type: "website", locale: "en_IN" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0d22",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
