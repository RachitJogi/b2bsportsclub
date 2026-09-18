import type { Metadata } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "B2B Sports Club — Path to Glory, Chapter 2",
  description:
    "Registrations are open for Path to Glory Chapter 2 — a 10-team cricket tournament by B2B Sports Club. New chapter. Same brotherhood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
