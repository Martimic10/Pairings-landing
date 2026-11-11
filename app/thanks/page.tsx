import type { Metadata } from "next";
import Link from "next/link";

import { ShareButton } from "@/components/share-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "You're on the list",
  description: siteConfig.copy.thanks.subhead,
  robots: { index: false, follow: false },
  alternates: { canonical: "/thanks" },
};

export default function ThanksPage() {
  const { thanks } = siteConfig.copy;

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--primary)]">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 text-[2rem] font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            {thanks.headline}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:text-base lg:text-lg">
            {thanks.subhead}
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <ShareButton />
            <Button asChild variant="ghost" size="lg">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
