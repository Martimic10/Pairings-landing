import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

export default function NotFound() {
  const { notFound } = siteConfig.copy;

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-14 text-center sm:py-20">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
          404
        </p>
        <h1 className="mt-3 text-[2rem] font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {notFound.headline}
        </h1>
        <p className="mt-4 text-[15px] text-[var(--muted-foreground)] sm:text-base">
          {notFound.subhead}
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/#waitlist">{siteConfig.copy.hero.ctaLabel}</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
