import type {
  AboutContent,
  EventItem,
  HomeContent,
  HomeStory,
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

export const homeStory: HomeStory = {
  hero: {
    brand: "B2B Sports Club",
    title: "Where Passion Meets Competition.",
    highlight: "Where Brotherhood Builds Champions.",
    tagline: "Mumbai's Turf Cricket Community. One Game. Countless Memories.",
  },
  welcome: {
    paragraphs: [
      "Welcome to B2B Sports Club — where cricket is more than just a game. It’s about passion, teamwork, competition, and the brotherhood that brings people together.",
      "We are a Mumbai-based sports community dedicated to organizing exciting turf cricket tournaments, competitive cricket leagues, player auctions, and sporting events across Mumbai. From thrilling match-day moments to unforgettable championship victories, we create platforms where players showcase their talent, teams build their legacy, and friendships turn into lifelong connections.",
    ],
    refrain: [
      "Every tournament tells a story.",
      "Every match creates a memory.",
      "Every champion earns their glory.",
    ],
    closing:
      "Welcome to the B2B Sports Club family — where every game has a purpose and every player has a chance to shine.",
    banner: "PATH TO GLORY - CHAPTER 2 | REGISTRATION CLOSED",
  },
  brotherhood: {
    title: "More than cricket. It's a brotherhood.",
    paragraphs: [
      "At B2B Sports Club, we believe sports have the power to connect people beyond boundaries. Our tournaments bring together passionate cricketers, competitive teams, sports enthusiasts, and cricket lovers from across Mumbai.",
      "From intense turf cricket battles to professionally organized tournaments featuring team owners, player icons, exciting auctions, and competitive match formats, we focus on delivering an experience that goes beyond the scoreboard.",
    ],
    pointsTitle: "What makes B2B Sports Club special?",
    points: [
      {
        title: "Competitive Turf Cricket",
        description:
          "High-energy matches where skill, strategy, and teamwork make the difference.",
        icon: "zap",
      },
      {
        title: "Organized Cricket Tournaments",
        description:
          "Structured tournaments designed to deliver a memorable sporting experience.",
        icon: "shield",
      },
      {
        title: "Exciting Player Auctions",
        description:
          "Bringing strategy and team-building together before the first ball is bowled.",
        icon: "gavel",
      },
      {
        title: "A Strong Sporting Community",
        description:
          "Connecting players, owners, teams, and cricket enthusiasts across Mumbai.",
        icon: "users",
      },
      {
        title: "Champions, Memories & Recognition",
        description: "Celebrating outstanding performances and the spirit of the game.",
        icon: "medal",
      },
    ],
    closing:
      "We don't just organize tournaments. We create experiences that players look forward to and memories they carry forward.",
  },
  journey: {
    title: "Our Journey. Our Champions. Our Glory.",
    intro:
      "Every tournament we organize adds another chapter to the B2B Sports Club story.",
    paragraphs: [
      "From the electrifying battles of WCC 4.0, where Turbo Titans claimed the championship, to the exciting journey of the Golden Leaf Cup and other competitive cricket events, our tournaments have brought teams together to compete, connect, and celebrate the spirit of cricket.",
      "Each edition has strengthened our community and raised the excitement for what comes next.",
    ],
    milestones: [
      {
        label: "WCC 4.0",
        title: "Turbo Titans claimed the championship",
        description: "Electrifying battles that crowned a champion.",
        icon: "trophy",
      },
      {
        label: "Golden Leaf Cup",
        title: "A journey of competitive cricket",
        description: "Teams coming together to compete, connect and celebrate.",
        icon: "star",
      },
      {
        label: "And more",
        title: "Other competitive cricket events",
        description: "Each edition strengthening the community.",
        icon: "target",
      },
    ],
    closing: [
      "The journey continues.",
      "The competition gets bigger.",
      "And the next chapter awaits.",
    ],
  },
  comingSoon: {
    title: "Coming Soon: Path To Glory – Chapter 2",
    subtitle: "New Chapter. Same Brotherhood. Bigger Dreams.",
    tagline: "The wait is over. The next battle for glory is here!",
    paragraphs: [
      "Path To Glory – Chapter 2 is set to bring together competitive teams, passionate players, strategic team-building, and unforgettable cricketing moments for another exciting edition of the B2B Sports Club experience.",
      "With the player auction setting the stage and every match bringing a fresh challenge, teams will compete for more than just a trophy — they will compete for pride, recognition, and a place in the history of the tournament.",
    ],
    highlightsTitle: "Tournament Highlights",
    highlights: [
      { label: "Tournament Date", value: "28 November 2026", icon: "calendar" },
      { label: "Venue", value: "Seven Eleven Turf, Mira Road", icon: "map-pin" },
      { label: "Player Auction", value: "TBD", icon: "gavel" },
      { label: "Teams", value: "10", icon: "users" },
      { label: "Professional Marquee Players", value: "1 per team", icon: "star" },
      { label: "Professional Icon Players", value: "1 per team", icon: "medal" },
      { label: "Live Broadcast", value: "YouTube", icon: "play" },
      { label: "Social Media Coverage", value: "Instagram", icon: "camera" },
    ],
    closingTitle: "The Glory Awaits. Are You Ready?",
    closing:
      "Ten teams. One destination. A journey built on teamwork, determination, and the hunger to become champions.",
    tournamentSlug: "path-to-glory-chapter-2",
  },
  why: {
    title: "Why B2B Sports Club?",
    subtitle: "Built for the Game. Driven by the Community.",
    paragraphs: [
      "We bring together the key elements that make a cricket tournament truly memorable: competitive cricket, organized execution, team spirit, player recognition, and a passionate sporting community.",
      "Whether you're a player looking for your next challenge, a team owner building a winning squad, or a cricket enthusiast who loves the excitement of turf cricket, B2B Sports Club is where you belong.",
    ],
    missionLabel: "Our mission is simple:",
    mission:
      "To create engaging sporting experiences that bring people together, encourage healthy competition, and build a stronger cricket community across Mumbai.",
    elements: [
      { title: "Competitive cricket", description: "", icon: "zap" },
      { title: "Organized execution", description: "", icon: "shield" },
      { title: "Team spirit", description: "", icon: "users" },
      { title: "Player recognition", description: "", icon: "medal" },
      { title: "Passionate community", description: "", icon: "heart" },
    ],
  },
  final: {
    title: "Your next cricket story starts here.",
    paragraphs: [
      "Every great innings starts with a single ball. Every champion starts with a dream. And every unforgettable tournament begins with people who share a passion for the game.",
    ],
    actions: "Be a part of the action. Join the community. Compete with pride. Celebrate the brotherhood.",
    signoff: "B2B Sports Club — Play Together. Compete Stronger. Rise to Glory.",
  },
};
