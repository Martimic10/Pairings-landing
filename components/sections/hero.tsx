import { PhoneMockup } from "@/components/mockups/phone-mockup";
import { WaitlistForm } from "@/components/waitlist-form";
import { siteConfig } from "@/lib/siteConfig";

export function HeroSection() {
  const { hero } = siteConfig.copy;

  return (
    <section className="relative overflow-x-clip bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-14 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-12">
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 text-balance text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-4xl lg:text-[2.75rem]">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-[15px] leading-relaxed text-[var(--muted-foreground)] sm:mt-5 sm:text-base lg:mx-0 lg:text-lg">
            {hero.subhead}
          </p>
          <div className="mt-7 rounded-[1.75rem] border border-[var(--border)] bg-white p-3.5 text-left shadow-sm sm:mt-8 sm:rounded-3xl sm:p-5">
            <WaitlistForm id="waitlist" compact analyticsContext="hero" />
          </div>
        </div>

        <div className="relative mx-auto flex w-full items-center justify-center lg:justify-end">
          <PhoneMockup className="w-[280px] sm:w-[300px] lg:w-[320px]" />
        </div>
      </div>
    </section>
  );
}
