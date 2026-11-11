"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const ctaHref = siteConfig.showAppStoreCta
    ? siteConfig.appStoreUrl
    : "/#waitlist";
  const ctaLabel = siteConfig.showAppStoreCta
    ? siteConfig.copy.hero.appStoreCtaLabel
    : siteConfig.copy.hero.ctaLabel;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 flex justify-center px-4 pt-3 sm:pt-5">
        {/* Mobile: compact pill. Desktop: ~reference floating bar width */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[820px]">
          <div
            className={cn(
              "flex h-11 items-center justify-between gap-6 rounded-full border border-black/[0.06] bg-[#f3f3f3] pl-4 pr-2 shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:h-11 sm:pl-4 lg:h-12 lg:gap-8 lg:pl-5 lg:pr-1.5",
              open && "invisible lg:visible",
            )}
          >
            <Logo />

            <div className="flex items-center gap-1 lg:gap-2">
              <nav
                className="mr-1 hidden items-center gap-7 lg:flex"
                aria-label="Primary"
              >
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md text-[15px] font-medium text-black transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href={ctaHref}
                className="hidden rounded-full bg-white px-5 py-2 text-[15px] font-medium text-black shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-[var(--primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] lg:inline-flex"
              >
                {ctaLabel}
              </Link>

              <button
                type="button"
                className="inline-flex size-8 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <Menu className="size-[18px]" strokeWidth={2.25} />
              </button>
            </div>
          </div>

          {/* Mobile menu overlays — does not push hero */}
          <div
            id="mobile-nav"
            className={cn(
              "absolute inset-x-0 top-0 z-50 overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-[#f3f3f3] shadow-[0_24px_80px_rgba(0,0,0,0.14)] lg:hidden",
              open ? "block" : "hidden",
            )}
          >
            <div className="flex h-11 items-center justify-between pl-4 pr-2 sm:pl-4">
              <Logo />
              <button
                type="button"
                className="inline-flex size-8 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col px-4 pb-2 pt-4" aria-label="Mobile">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-black/[0.05] py-4 text-xl font-medium leading-none tracking-tight text-black last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-4 pt-3">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors hover:bg-[var(--primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
