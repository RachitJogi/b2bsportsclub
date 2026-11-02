import type {
  AboutContent,
  EventItem,
  HomeContent,
  SiteSettings,
  Tournament,
} from "./types";

/**
 * Static content. Replace the fetchers in ./index.ts with CMS calls and this
 * file can be deleted.
 */

export const siteSettings: SiteSettings = {
  name: "B2B Sports Club",
  tagline: "New chapter. Same brotherhood.",
  description:
    "B2B Sports Club organises community cricket tournaments, auctions and events built around brotherhood, competition and unforgettable moments.",
  email: "hello@b2bsportsclub.in",
  instagramUrl: "https://www.instagram.com/",
  youtubeUrl: "https://www.youtube.com/",
  contacts: [
    { name: "Vineet Doshi", phone: "+91 90049 44400", tel: "+919004944400" },
    { name: "Vaibhav Bhatt", phone: "+91 88281 31806", tel: "+918828131806" },
  ],
};

export const homeContent: HomeContent = {
  heroEyebrow: "Registrations open",
  heroTitle: "Play the game.",
  heroHighlight: "Own the glory.",
  heroBody:
    "B2B Sports Club brings teams together for high-stakes cricket tournaments — live auctions, icon players, broadcast-quality coverage and prize money on the line.",
  features: [
    {
      title: "Live player auction",
      description:
        "Build your squad the exciting way — bid for players in a full auction night.",
      icon: "gavel",
    },
    {
      title: "Icon players",
      description:
        "Every team is anchored by one icon player to keep the competition balanced.",
      icon: "star",
    },
    {
      title: "Big prize pool",
      description:
        "Cash prizes for champions, runners-up and individual award winners.",
      icon: "trophy",
    },
    {
      title: "Broadcast & coverage",
      description:
        "Live streaming on YouTube and match-day stories on Instagram.",
      icon: "play",
    },
  ],
  steps: [
    {
      title: "Register your team",
      description: "Fill in the team sheet and confirm with the registration fee.",
    },
    {
      title: "Build in the auction",
      description: "Bid for players and assemble the squad you want to take on.",
    },
    {
      title: "Take the field",
      description: "Battle through every over and chase the trophy on match day.",
    },
  ],
  ctaTitle: "Are you ready to write your chapter?",
  ctaBody:
    "Slots are limited to ten teams. Register now and lock in your place on the turf.",
};

export const aboutContent: AboutContent = {
  headline: "Built by players, for players.",
  intro: [
    "B2B Sports Club started with a simple idea: friends who play together should be able to compete together on a stage that feels professional.",
    "From auction night to the final ball, we run every tournament like a broadcast event — with real stakes, real rivalries and memories that last long after the trophy is lifted.",
  ],
  mission:
    "To grow a community of sportspeople through well-run, high-energy tournaments that reward skill, teamwork and brotherhood.",
  values: [
    {
      title: "Brotherhood",
      description: "Rivals on the pitch, family off it.",
      icon: "heart",
    },
    {
      title: "Fair play",
      description: "Transparent rules, balanced teams, respect for the game.",
      icon: "shield",
    },
    {
      title: "Excellence",
      description: "Professional organisation, coverage and presentation.",
      icon: "medal",
    },
  ],
  stats: [
    { label: "Chapters played", value: "2" },
    { label: "Teams per tournament", value: "10" },
    { label: "Prize pool", value: "₹3,50,000" },
  ],
};

export const tournaments: Tournament[] = [
  {
    slug: "path-to-glory-chapter-2",
    name: "Path to Glory — Chapter 2",
    tagline: "New chapter. Same brotherhood.",
    summary:
      "Ten teams, one icon player each and a single destination. The rivalry gets bigger and the stakes get higher.",
    description: [
      "Step onto the turf, represent your team, battle through every over and chase the ultimate glory.",
      "Squads are built in a live auction, with one icon player anchoring every team. Matches are broadcast live on YouTube and covered on Instagram.",
    ],
    sport: "Cricket",
    status: "registration-open",
    startDate: "2026-11-28",
    venue: "Seven Eleven Turf",
    city: "Mira Road",
    teams: 10,
    facts: [
      { label: "Tournament date", value: "28 Nov 2026", icon: "calendar" },
      { label: "Venue", value: "Seven Eleven Turf, Mira Road", icon: "map-pin" },
      { label: "Teams", value: "10 teams", icon: "users" },
      { label: "Icon player", value: "1 per team", icon: "star" },
    ],
    prizes: [
      { title: "Champions", amount: "₹2,00,000", badge: "1st place", icon: "trophy", tier: "gold" },
      { title: "Runners-up", amount: "₹1,25,000", badge: "2nd place", icon: "medal", tier: "silver" },
      { title: "MVP", amount: "₹10,000", badge: "MVP", icon: "star", tier: "award" },
      { title: "Best Batsman", amount: "₹5,000", badge: "Batting", icon: "target", tier: "award" },
      { title: "Best Bowler", amount: "₹5,000", badge: "Bowling", icon: "zap", tier: "award" },
      { title: "Best Fielder", amount: "₹5,000", badge: "Fielding", icon: "shield", tier: "award" },
    ],
    schedule: [
      {
        title: "Player auction",
        date: "2026-10-23",
        description: "Squads are built, strategies unfold and the bids rise.",
      },
      {
        title: "Tournament day",
        date: "2026-11-28",
        description: "League matches, knockouts and the grand final in one day.",
      },
    ],
    rules: [
      "Each team registers a squad and nominates one icon player.",
      "Squads are completed through the live auction.",
      "Matches follow the format announced on the tournament day.",
      "Organisers' decisions on the field are final.",
    ],
  },
  {
    slug: "path-to-glory-chapter-1",
    name: "Path to Glory — Chapter 1",
    tagline: "Where the brotherhood began.",
    summary:
      "The inaugural B2B Sports Club tournament that set the standard for everything that followed.",
    description: [
      "Chapter 1 introduced the auction format and the icon player concept to our community.",
      "It ended with a packed final and a promise of a bigger Chapter 2.",
    ],
    sport: "Cricket",
    status: "completed",
    startDate: "2025-11-15",
    venue: "Seven Eleven Turf",
    city: "Mira Road",
    teams: 8,
    facts: [
      { label: "Tournament date", value: "15 Nov 2025", icon: "calendar" },
      { label: "Venue", value: "Seven Eleven Turf, Mira Road", icon: "map-pin" },
      { label: "Teams", value: "8 teams", icon: "users" },
    ],
    prizes: [
      { title: "Champions", amount: "₹1,00,000", badge: "1st place", icon: "trophy", tier: "gold" },
      { title: "Runners-up", amount: "₹50,000", badge: "2nd place", icon: "medal", tier: "silver" },
    ],
    schedule: [
      {
        title: "Tournament day",
        date: "2025-11-15",
        description: "A full day of cricket ending with the grand final.",
      },
    ],
    rules: ["Eight teams, league plus knockout format."],
  },
];

export const events: EventItem[] = [
  {
    slug: "player-auction-2026",
    title: "Path to Glory Player Auction",
    summary: "Build your army before you take the field. Squads are made here.",
    date: "2026-10-23",
    time: "7:00 PM",
    venue: "To be announced",
    city: "Mumbai",
    category: "Auction",
    tournamentSlug: "path-to-glory-chapter-2",
    icon: "gavel",
  },
  {
    slug: "path-to-glory-chapter-2-tournament-day",
    title: "Path to Glory — Chapter 2 Tournament Day",
    summary: "Ten teams, one destination. The grand final decides the champions.",
    date: "2026-11-28",
    time: "8:00 AM",
    venue: "Seven Eleven Turf",
    city: "Mira Road",
    category: "Tournament",
    tournamentSlug: "path-to-glory-chapter-2",
    icon: "trophy",
  },
  {
    slug: "club-meetup-2027",
    title: "B2B Community Meetup",
    summary: "An evening to meet fellow players, share highlights and plan Chapter 3.",
    date: "2027-01-17",
    time: "6:00 PM",
    venue: "To be announced",
    city: "Mumbai",
    category: "Community",
    icon: "users",
  },
];
