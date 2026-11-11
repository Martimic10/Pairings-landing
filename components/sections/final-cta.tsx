import { PhoneMockup } from "@/components/mockups/phone-mockup";
import { WaitlistForm } from "@/components/waitlist-form";
import { siteConfig } from "@/lib/siteConfig";

export function FinalCtaSection() {
  const { finalCta } = siteConfig.copy;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col justify-between rounded-[1.75rem] bg-[#f3f3f3] p-6 sm:rounded-[2rem] sm:p-10 lg:p-12">
            <div>
              <h2 className="max-w-md text-balance text-[1.75rem] font-extrabold tracking-tight text-black sm:text-3xl lg:text-[2.75rem] lg:leading-[1.1]">
                {finalCta.headline}
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-black/55 sm:mt-4 sm:text-base lg:text-lg">
                {finalCta.subhead}
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <WaitlistForm
                id="waitlist-final"
                panel
                analyticsContext="final_cta"
              />
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#f3f3f3] px-4 py-10 sm:min-h-[520px] sm:rounded-[2rem] sm:px-6 sm:py-12 lg:min-h-[600px]">
            <div className="pointer-events-none absolute left-3 top-6 z-20 sm:left-8 sm:top-10 lg:left-10 lg:top-14">
              <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:px-4 sm:py-2 sm:text-sm">
                {finalCta.proofPills[0]}
              </span>
            </div>
            <div className="pointer-events-none absolute right-3 top-16 z-20 sm:right-8 sm:top-24 lg:right-10 lg:top-28">
              <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:px-4 sm:py-2 sm:text-sm">
                {finalCta.proofPills[1]}
              </span>
            </div>
            <PhoneMockup className="w-[260px] sm:w-[280px] lg:w-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
