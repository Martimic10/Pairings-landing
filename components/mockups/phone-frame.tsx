import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; no glow/shadow applied. */
  active?: boolean;
};

/** Realistic iPhone-proportion frame (~9:19.5). Size via className width. */
export function PhoneFrame({
  children,
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[300px] shrink-0",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-[2.75rem] bg-[#1c1c1e] p-[10px]">
        <span className="absolute top-[18%] -left-[2px] h-8 w-[3px] rounded-l-sm bg-[#2a2a2c]" />
        <span className="absolute top-[28%] -left-[2px] h-14 w-[3px] rounded-l-sm bg-[#2a2a2c]" />
        <span className="absolute top-[38%] -left-[2px] h-14 w-[3px] rounded-l-sm bg-[#2a2a2c]" />
        <span className="absolute top-[30%] -right-[2px] h-20 w-[3px] rounded-r-sm bg-[#2a2a2c]" />

        <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-white">
          <div className="absolute left-1/2 top-3 z-30 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}
