"use client";

import {
  AppScreenshot,
  type MockupKey,
} from "@/components/mockups/app-screenshot";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  const { howItWorks } = siteConfig.copy;

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-black/45">{howItWorks.eyebrow}</p>
          <h2 className="mt-2 text-[1.75rem] font-extrabold tracking-tight text-black sm:text-3xl lg:text-[2.75rem]">
            {howItWorks.headline}
          </h2>
          <p className="mt-3 text-[15px] text-black/55 sm:text-base lg:text-lg">
            {howItWorks.subhead}
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {howItWorks.steps.map((step) => {
            const phoneOnTop = step.phonePosition === "top";

            const phone = (
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2",
                  phoneOnTop ? "top-6 -translate-y-[45%]" : "bottom-0 translate-y-[45%]",
                )}
              >
                <div className="relative">
                  <AppScreenshot
                    mockup={step.mockup as MockupKey}
                    className="w-[240px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:w-[250px] lg:w-[260px]"
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-x-0 h-16",
                      phoneOnTop
                        ? "bottom-0 bg-gradient-to-t from-[#f3f3f3] to-transparent"
                        : "top-0 bg-gradient-to-b from-[#f3f3f3] to-transparent",
                    )}
                  />
                </div>
              </div>
            );

            const copy = (
              <div className="relative z-10 px-6 py-7 sm:px-7 sm:py-8">
                <h3 className="text-lg font-extrabold tracking-tight text-black sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-black/55">
                  {step.description}
                </p>
              </div>
            );

            return (
              <li
                key={step.number}
                className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] bg-[#f3f3f3] sm:min-h-[460px] lg:min-h-[480px]"
              >
                {phoneOnTop ? (
                  <>
                    <div className="relative h-[55%] min-h-[230px] overflow-hidden">
                      {phone}
                    </div>
                    <div className="mt-auto">{copy}</div>
                  </>
                ) : (
                  <>
                    {copy}
                    <div className="relative mt-auto h-[55%] min-h-[230px] overflow-hidden">
                      {phone}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
