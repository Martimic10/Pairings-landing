/**
 * Single source of truth for Pairings marketing site copy and launch config.
 * Flip LAUNCHED to true and set appStoreUrl when the app ships.
 */

export const siteConfig = {
  name: "Pairings",
  tagline: "Find your people on the course.",
  description:
    "Just moved? Pairings matches you with golfers nearby who play your pace, your skill level, and your schedule.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pairings.app",
  contactEmail: "hello@pairings.app",
  supportEmail: "support@pairings.app",

  /** Set to true when the app is live on the App Store. */
  LAUNCHED: false as boolean,

  /** App Store URL — used when LAUNCHED is true. */
  appStoreUrl: "https://apps.apple.com/app/pairings/id0000000000",

  /** Apple Smart App Banner app ID — leave empty until launch. */
  appleAppId: "",

  /** Show App Store badge / Smart Banner only after launch. */
  get showAppStoreCta() {
    return this.LAUNCHED === true;
  },

  launchCities: [
    { value: "austin", label: "Austin, TX" },
    { value: "denver", label: "Denver, CO" },
    { value: "nashville", label: "Nashville, TN" },
    { value: "phoenix", label: "Phoenix, AZ" },
    { value: "charlotte", label: "Charlotte, NC" },
    { value: "raleigh", label: "Raleigh, NC" },
    { value: "tampa", label: "Tampa, FL" },
    { value: "orlando", label: "Orlando, FL" },
    { value: "dallas", label: "Dallas, TX" },
    { value: "atlanta", label: "Atlanta, GA" },
    { value: "wichita", label: "Wichita, KS" },
    { value: "other", label: "Somewhere else" },
  ] as const,

  movedOptions: [
    { value: "under_3_months", label: "Less than 3 months" },
    { value: "3_to_12_months", label: "3–12 months" },
    { value: "1_to_2_years", label: "1–2 years" },
    { value: "over_2_years", label: "Over 2 years" },
    { value: "planning_move", label: "Planning a move" },
    { value: "prefer_not", label: "Prefer not to say" },
  ] as const,

  /** Minimum waitlist count before showing a public number. */
  cityCountThreshold: 25,

  nav: [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#features", label: "Features" },
    { href: "/#faq", label: "FAQ" },
  ] as const,

  copy: {
    hero: {
      headline: "Find your people on the course.",
      subhead:
        "Just moved? Pairings matches you with golfers nearby who play your pace, your skill level, and your schedule.",
      ctaLabel: "Join the waitlist",
      appStoreCtaLabel: "Download on the App Store",
      trustLine: "Free to use. We'll only email you about launch.",
    },
    problem: {
      headline: "New city. New courses. No one to text.",
      lines: [
        "You know the feeling — bags unpacked, calendar open, and zero local golf buddies.",
        "Clubhouses are friendly, but walking up cold rarely turns into a regular game.",
        "Pairings is built for golfers who want real rounds with people nearby, not another social feed.",
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      headline: "From new in town to tee time",
      subhead: "Three steps. Real rounds with people nearby.",
      steps: [
        {
          number: 1,
          title: "Build your golf profile",
          description:
            "Share your handicap, home course, pace, and how you like to play — walk, ride, casual, or competitive.",
          mockup: "profile",
          phonePosition: "bottom",
        },
        {
          number: 2,
          title: "Swipe on golfers near you",
          description:
            "Browse people nearby by skill, course, and play style. Like the ones you'd actually want in your group.",
          mockup: "discover",
          phonePosition: "top",
        },
        {
          number: 3,
          title: "Match, then lock in a tee time",
          description:
            "When you both like each other, Pairings steers you to propose a real round — course, day, and tee time.",
          mockup: "rounds",
          phonePosition: "bottom",
        },
      ],
    },
    features: {
      headline: "Built for how golfers actually play",
      subhead: "Matching that respects skill, place, and vibe.",
      slides: [
        {
          id: "discover",
          title: "Swipe on golfers nearby",
          description:
            "Browse people by handicap, course, and play style.",
          mockup: "discover",
        },
        {
          id: "profile",
          title: "Build your golf profile",
          description:
            "Share how you play so matches feel natural from the first tee.",
          mockup: "profile",
        },
        {
          id: "golfer-profile",
          title: "See how they play",
          description:
            "Photos, essentials, and preferences before you commit to a round.",
          mockup: "golferProfile",
        },
        {
          id: "matches",
          title: "Keep the conversation going",
          description:
            "Matches and round chats in one place — less back-and-forth.",
          mockup: "matches",
        },
        {
          id: "open-rounds",
          title: "Join an open round",
          description:
            "See who's looking for a group nearby and hop in with one tap.",
          mockup: "openRounds",
        },
        {
          id: "rounds",
          title: "Track your rounds",
          description:
            "Upcoming, next up, and played — your golf calendar, sorted.",
          mockup: "rounds",
        },
        {
          id: "post-round",
          title: "Post an open round",
          description:
            "Course, day, spots, and style — fill a group without the group chat.",
          mockup: "postRound",
        },
      ] as const,
      items: [
        {
          title: "Skill-matched by handicap",
          description:
            "Find partners in your range so nobody feels lost or held back.",
        },
        {
          title: "Near your course",
          description:
            "Prioritize golfers who play where you play — or want to try your home track.",
        },
        {
          title: "Play style fit",
          description:
            "Walk or ride, leisurely or quick, friendly bets or none — match the vibe you want.",
        },
        {
          title: "Propose a round in one tap",
          description:
            "After a match, suggest a course, day, and tee time without the endless texting.",
        },
        {
          title: "Verified profiles & safety tools",
          description:
            "Report and block in-app. Photo verification is planned so you know who you're meeting.",
        },
        {
          title: "Built for people new in town",
          description:
            "Designed for relocators who need a first local foursome — not a dating app in disguise.",
        },
      ],
    },
    newcomers: {
      headline: "Built for newcomers",
      subhead:
        "Whether you landed last week or last year, Pairings helps you find people who still have room in their Saturday groups.",
      pickCityLabel: "See who's waiting near you",
      countTemplate: "{count} golfers on the waitlist near you",
      firstInTown: "Be one of the first in {city}",
    },
    safety: {
      headline: "Safety, said plainly",
      subhead: "Meet for golf. Stay in control.",
      points: [
        {
          title: "Public courses first",
          description:
            "Rounds start where golf happens — public and semi-private courses, not private homes or secluded spots.",
        },
        {
          title: "Report and block in-app",
          description:
            "If something feels off, report or block immediately. We review reports and take action.",
        },
        {
          title: "Photo verification (planned)",
          description:
            "We're building photo verification so profiles reflect real people. Until then, meet at the course with normal caution.",
        },
        {
          title: "Meet at the course",
          description:
            "Propose tee times at the clubhouse — not alone somewhere private. Your first meetup should be a round of golf.",
        },
      ],
    },
    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          question: "Is Pairings free?",
          answer:
            "You can get started for free. Pairings Pro unlocks the full experience — $9.99/month or $89/year.",
        },
        {
          question: "Which cities are you launching in?",
          answer:
            "We're starting with select metros (Austin, Denver, Nashville, Phoenix, Charlotte, Raleigh, Tampa, Orlando, Dallas, Atlanta, and Wichita). Join the waitlist for your city — or pick “Somewhere else” so we know where to expand next.",
        },
        {
          question: "Do I need a GHIN handicap?",
          answer:
            "No. You can share an approximate handicap or scoring range. A GHIN index helps with better matches, but it's not required to join.",
        },
        {
          question: "Is this a dating app?",
          answer:
            "No. Pairings is for finding playing partners and friends on the course — not romantic matching. If you're looking for a foursome, you're in the right place.",
        },
        {
          question: "How do you keep it safe?",
          answer:
            "We prioritize public courses, in-app report and block tools, and meeting at the tee — not private locations. Photo verification is planned. Always use your judgment and meet in public golf settings.",
        },
        {
          question: "When does it launch?",
          answer:
            "We're finishing the iOS app and opening city by city. Join the waitlist and we'll email you when Pairings is ready in your area. No spam — launch updates only.",
        },
      ],
    },
    finalCta: {
      headline: "Find your people on the course.",
      subhead:
        "Join the waitlist for your city. We'll email you the moment Pairings opens near you — free to use, no subscriptions.",
      proofPills: ["Free to use", "Built for newcomers"] as const,
    },
    thanks: {
      headline: "You're on the list.",
      subhead:
        "Thanks for joining. We'll email you when Pairings launches in your city.",
      shareLabel: "Share with a golf friend",
      shareCopied: "Link copied",
    },
    notFound: {
      headline: "Out of bounds.",
      subhead: "That page isn't on this course. Head back home or join the waitlist.",
    },
  },

  footer: {
    blurbLines: [
      "Built for golfers who just moved",
      "and need a real local game.",
      "Free to use — no subscriptions.",
    ] as const,
    watermark: "Find your four.",
    columns: [
      {
        title: "Product",
        links: [
          { href: "/#how-it-works", label: "How it works" },
          { href: "/#features", label: "Features" },
          { href: "/#faq", label: "FAQ" },
          { href: "/#waitlist", label: "Waitlist" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "/support", label: "Support" },
          { href: "/guidelines", label: "Guidelines" },
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ],
      },
      {
        title: "Connect",
        links: [
          { href: "mailto:hello@pairings.app", label: "Email" },
          { href: "mailto:support@pairings.app", label: "Support" },
          { href: "https://x.com/pairingsapp", label: "X / Twitter" },
        ],
      },
    ] as const,
  },

  social: {
    twitterHandle: "@pairingsapp",
  },
} as const;

export type LaunchCityValue = (typeof siteConfig.launchCities)[number]["value"];
export type MovedOptionValue = (typeof siteConfig.movedOptions)[number]["value"];

export function getCityLabel(value: string): string {
  const city = siteConfig.launchCities.find((c) => c.value === value);
  return city?.label ?? value;
}
