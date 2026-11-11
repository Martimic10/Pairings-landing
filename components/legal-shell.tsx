import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type LegalShellProps = {
  title: string;
  children: ReactNode;
};

export function LegalShell({ title, children }: LegalShellProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <p className="text-sm font-semibold text-[var(--primary)]">
          <Link href="/" className="rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]">
            ← Back home
          </Link>
        </p>
        <h1 className="mt-4 text-[1.85rem] font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {title}
        </h1>
        <div className="prose-legal mt-8 space-y-5 text-[15px] text-[var(--muted-foreground)] sm:mt-10 sm:space-y-6 sm:text-base [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-extrabold [&_h2]:text-[var(--foreground)] sm:[&_h2]:mt-10 sm:[&_h2]:text-xl [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
