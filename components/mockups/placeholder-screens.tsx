import { Calendar, Flag, MapPin, Shield, UserRound } from "lucide-react";
import type { ReactNode } from "react";

type ScreenProps = {
  title: string;
  description: string;
};

function ScreenShell({
  children,
  accent = "from-[#1f5b3a] to-[#2a7349]",
}: {
  children: ReactNode;
  accent?: string;
}) {
  return (
    <div className="flex h-full flex-col bg-[#f7f7f5]">
      <div className={`h-[42%] bg-gradient-to-br ${accent} px-4 pb-4 pt-12`}>
        <div className="h-full rounded-2xl bg-white/15" />
      </div>
      <div className="relative -mt-8 flex flex-1 flex-col rounded-t-[1.75rem] bg-white px-4 pb-5 pt-5">
        {children}
      </div>
    </div>
  );
}

export function SwipePlaceholderScreen({ title, description }: ScreenProps) {
  return (
    <ScreenShell>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1f5b3a]">
        Nearby
      </p>
      <p className="mt-1 text-base font-extrabold text-black">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-black/50">{description}</p>
      <div className="mt-4 rounded-2xl border border-[#ececec] p-3">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#eef4ef] text-[#1f5b3a]">
            <UserRound className="size-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-black">Alex R.</p>
            <p className="flex items-center gap-1 text-[10px] text-black/45">
              <MapPin className="size-3" /> HCP 12 · 3 mi
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          {["Walks", "Twilight"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f3f3f3] px-2 py-0.5 text-[10px] font-semibold text-black/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-center gap-4 pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#f3f3f3] text-sm font-bold text-[#d8402f]">
          ✕
        </span>
        <span className="flex size-10 items-center justify-center rounded-full bg-[#1f5b3a] text-sm font-bold text-white">
          ♥
        </span>
      </div>
    </ScreenShell>
  );
}

export function ProfilePlaceholderScreen({ title, description }: ScreenProps) {
  return (
    <ScreenShell accent="from-[#163a26] to-[#1f5b3a]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1f5b3a]">
        Profile
      </p>
      <p className="mt-1 text-base font-extrabold text-black">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-black/50">{description}</p>
      <ul className="mt-4 space-y-2">
        {[
          "Handicap · 8.4",
          "Home course · Riverside GC",
          "Pace · Casual",
          "Prefers · Walking",
        ].map((row) => (
          <li
            key={row}
            className="rounded-xl bg-[#f3f3f3] px-3 py-2 text-xs font-semibold text-black/70"
          >
            {row}
          </li>
        ))}
      </ul>
    </ScreenShell>
  );
}

export function MatchPlaceholderScreen({ title, description }: ScreenProps) {
  return (
    <ScreenShell accent="from-[#d8402f] to-[#1f5b3a]">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex -space-x-3">
          <span className="flex size-12 items-center justify-center rounded-full bg-[#eef4ef] text-[#1f5b3a] ring-2 ring-white">
            <UserRound className="size-5" />
          </span>
          <span className="flex size-12 items-center justify-center rounded-full bg-[#1f5b3a] text-white ring-2 ring-white">
            <Flag className="size-5" />
          </span>
        </div>
        <p className="mt-5 text-xl font-extrabold text-black">{title}</p>
        <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-black/50">
          {description}
        </p>
        <span className="mt-6 rounded-full bg-[#1f5b3a] px-5 py-2.5 text-xs font-semibold text-white">
          Propose a round
        </span>
      </div>
    </ScreenShell>
  );
}

export function TeeTimePlaceholderScreen({ title, description }: ScreenProps) {
  return (
    <ScreenShell accent="from-[#2a7349] to-[#163a26]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1f5b3a]">
        Round
      </p>
      <p className="mt-1 text-base font-extrabold text-black">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-black/50">{description}</p>
      <div className="mt-4 space-y-2">
        {[
          { icon: MapPin, label: "Course", value: "Municipal 18" },
          { icon: Calendar, label: "When", value: "Sat · 8:12 AM" },
          { icon: Flag, label: "Format", value: "Walk · Friendly" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center gap-3 rounded-xl bg-[#f3f3f3] px-3 py-2.5"
          >
            <row.icon className="size-4 text-[#1f5b3a]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-black/40">
                {row.label}
              </p>
              <p className="text-xs font-bold text-black">{row.value}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="mt-auto inline-flex justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white">
        Send proposal
      </span>
    </ScreenShell>
  );
}

export function SafetyPlaceholderScreen({ title, description }: ScreenProps) {
  return (
    <ScreenShell accent="from-[#16261c] to-[#1f5b3a]">
      <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-[#eef4ef] text-[#1f5b3a]">
        <Shield className="size-5" />
      </div>
      <p className="text-base font-extrabold text-black">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-black/50">{description}</p>
      <ul className="mt-4 space-y-2">
        {[
          "Meet at the course",
          "Report & block in-app",
          "Photo verification planned",
        ].map((item) => (
          <li
            key={item}
            className="rounded-xl border border-[#ececec] px-3 py-2.5 text-xs font-semibold text-black/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </ScreenShell>
  );
}

export function PlaceholderScreen({
  screen,
  title,
  description,
}: ScreenProps & {
  screen: "swipe" | "profile" | "match" | "teeTime" | "safety";
}) {
  switch (screen) {
    case "profile":
      return <ProfilePlaceholderScreen title={title} description={description} />;
    case "match":
      return <MatchPlaceholderScreen title={title} description={description} />;
    case "teeTime":
      return <TeeTimePlaceholderScreen title={title} description={description} />;
    case "safety":
      return <SafetyPlaceholderScreen title={title} description={description} />;
    case "swipe":
    default:
      return <SwipePlaceholderScreen title={title} description={description} />;
  }
}
