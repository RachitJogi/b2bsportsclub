import { cache } from "react";
import {
  aboutContent,
  events,
  homeContent,
  homeStory,
  siteSettings,
  tournaments,
} from "./data";
import type {
  AboutContent,
  EventItem,
  HomeContent,
  HomeStory,
  SiteSettings,
  Tournament,
} from "./types";

export * from "./types";

/**
 * Content access layer. Every page reads content through these functions only.
 * They are async and wrapped in React `cache` so swapping in a CMS client
 * (e.g. Contentful) requires no changes to pages or components.
 */

export const getSiteSettings = cache(
  async (): Promise<SiteSettings> => siteSettings
);

export const getHomeContent = cache(
  async (): Promise<HomeContent> => homeContent
);

export const getAboutContent = cache(
  async (): Promise<AboutContent> => aboutContent
);

export const getTournaments = cache(async (): Promise<Tournament[]> =>
  [...tournaments].sort((a, b) => b.startDate.localeCompare(a.startDate))
);

export const getTournamentBySlug = cache(
  async (slug: string): Promise<Tournament | undefined> =>
    tournaments.find((t) => t.slug === slug)
);

export const getFeaturedTournament = cache(
  async (): Promise<Tournament | undefined> =>
    tournaments.find((t) => t.status === "registration-open") ?? tournaments[0]
);

/** Events from `from` (default: today) onwards, soonest first. */
export const getUpcomingEvents = cache(
  async (from: string = new Date().toISOString().slice(0, 10)): Promise<
    EventItem[]
  > =>
    events
      .filter((e) => e.date >= from)
      .sort((a, b) => a.date.localeCompare(b.date))
);

export const getHomeStory = cache(async (): Promise<HomeStory> => homeStory);
