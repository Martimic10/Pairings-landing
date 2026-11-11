import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-extrabold tracking-tight text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded-md",
        className,
      )}
    >
      <Image
        src="/pairings-mark-v2.png"
        alt=""
        width={28}
        height={28}
        className="size-6 shrink-0 rounded-[22%] sm:size-7"
        priority
        unoptimized
      />
      <span className="text-base sm:text-lg">Pairings</span>
      <span className="sr-only">home</span>
    </Link>
  );
}
