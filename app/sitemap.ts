import type { MetadataRoute } from "next";
import { getTournaments } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tournaments = await getTournaments();
  const staticPaths = ["", "/about", "/contact", "/register", "/tournaments", "/events"];
  return [
    ...staticPaths.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...tournaments.map((t) => ({ url: `${SITE_URL}/tournaments/${t.slug}` })),
  ];
}
