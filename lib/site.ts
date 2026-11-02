import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

/** Builds consistent per-page metadata (title, description, canonical, social). */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}
