import { Flag, Lock, ScanFace, Users } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";

const icons = [Flag, Lock, ScanFace, Users];

export function SafetySection() {
  const { safety } = siteConfig.copy;

  return (
    <section className="border-y border-[var(--border)] bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-[1.75rem] font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            {safety.headline}
          </h2>
          <p className="mt-3 text-[15px] text-white/75 sm:text-base lg:text-lg">
            {safety.subhead}
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {safety.points.map((point, index) => {
            const Icon = icons[index]!;
            return (
              <li key={point.title} className="flex gap-3.5 sm:gap-4">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-white sm:size-10">
                  <Icon className="size-4 sm:size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold sm:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {point.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
