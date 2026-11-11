import Image from "next/image";

import { cn } from "@/lib/utils";

export const mockups = {
  discover: {
    src: "/mockups/discover.png",
    alt: "Pairings discover screen — swipe on golfers nearby",
  },
  profile: {
    src: "/mockups/profile.png",
    alt: "Pairings profile screen",
  },
  rounds: {
    src: "/mockups/rounds.png",
    alt: "Pairings my rounds screen",
  },
  matches: {
    src: "/mockups/matches.png",
    alt: "Pairings matches and rounds inbox",
  },
  openRounds: {
    src: "/mockups/open-rounds.png",
    alt: "Pairings open rounds screen",
  },
  postRound: {
    src: "/mockups/post-round.png",
    alt: "Pairings post an open round screen",
  },
  golferProfile: {
    src: "/mockups/golfer-profile.png",
    alt: "Pairings golfer profile screen",
  },
} as const;

export type MockupKey = keyof typeof mockups;

type AppScreenshotProps = {
  mockup: MockupKey;
  className?: string;
  priority?: boolean;
};

/** Full device screenshot — images already include the phone bezel. */
export function AppScreenshot({
  mockup,
  className,
  priority = false,
}: AppScreenshotProps) {
  const { src, alt } = mockups[mockup];

  return (
    <div className={cn("relative w-[300px] shrink-0", className)}>
      <Image
        src={src}
        alt={alt}
        width={1394}
        height={2810}
        className="h-auto w-full select-none"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
        priority={priority}
        draggable={false}
      />
    </div>
  );
}
