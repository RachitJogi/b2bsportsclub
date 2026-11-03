/**
 * Typed content models. These mirror the shape we expect from the CMS, so the
 * UI never depends on where the data comes from.
 */

export type IconName =
  | "calendar"
  | "map-pin"
  | "users"
  | "star"
  | "trophy"
  | "medal"
  | "target"
  | "zap"
  | "shield"
  | "play"
  | "camera"
  | "phone"
  | "mail"
  | "gavel"
  | "heart";

export interface ContactPerson {
  name: string;
  phone: string;
  /** Digits-only value for tel: links. */
  tel: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  email: string;
  instagramUrl: string;
  youtubeUrl: string;
  contacts: ContactPerson[];
}

export interface Prize {
  title: string;
  amount: string;
  badge: string;
  icon: IconName;
  tier: "gold" | "silver" | "award";
}

export interface Fact {
  label: string;
  value: string;
  icon: IconName;
}

export interface TournamentSchedule {
  title: string;
  /** ISO 8601 date (YYYY-MM-DD). */
  date: string;
  description: string;
}

export type TournamentStatus = "registration-open" | "upcoming" | "completed";

export interface Tournament {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  sport: string;
  status: TournamentStatus;
  /** ISO 8601 date (YYYY-MM-DD). */
  startDate: string;
  venue: string;
  city: string;
  teams: number;
  facts: Fact[];
  prizes: Prize[];
  schedule: TournamentSchedule[];
  rules: string[];
}

export interface EventItem {
  slug: string;
  title: string;
  summary: string;
  /** ISO 8601 date (YYYY-MM-DD). */
  date: string;
  time: string;
  venue: string;
  city: string;
  category: string;
  /** Slug of a related tournament, if any. */
  tournamentSlug?: string;
  icon: IconName;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}

export interface Step {
  title: string;
  description: string;
}

export interface HomeContent {
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroBody: string;
  features: Feature[];
  steps: Step[];
  ctaTitle: string;
  ctaBody: string;
}

export interface AboutContent {
  headline: string;
  intro: string[];
  mission: string;
  values: Feature[];
  stats: { label: string; value: string }[];
}

/** Home page storytelling content (hero + six sections). */
export interface HomeStory {
  hero: {
    brand: string;
    title: string;
    highlight: string;
    tagline: string;
  };
  welcome: {
    paragraphs: string[];
    refrain: string[];
    closing: string;
    banner: string;
  };
  brotherhood: {
    title: string;
    paragraphs: string[];
    pointsTitle: string;
    points: Feature[];
    closing: string;
  };
  journey: {
    title: string;
    intro: string;
    paragraphs: string[];
    milestones: { label: string; title: string; description: string; icon: IconName }[];
    closing: string[];
  };
  comingSoon: {
    title: string;
    subtitle: string;
    tagline: string;
    paragraphs: string[];
    highlightsTitle: string;
    highlights: Fact[];
    closingTitle: string;
    closing: string;
    tournamentSlug: string;
  };
  why: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    missionLabel: string;
    mission: string;
    elements: Feature[];
  };
  final: {
    title: string;
    paragraphs: string[];
    actions: string;
    signoff: string;
  };
}
