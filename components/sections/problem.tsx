import { siteConfig } from "@/lib/siteConfig";

export function ProblemSection() {
  const { problem } = siteConfig.copy;

  return (
    <section className="border-y border-[var(--border)] bg-[#f7f7f5]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <h2 className="max-w-2xl text-balance text-[1.75rem] font-extrabold tracking-tight text-black sm:text-3xl lg:text-4xl">
          {problem.headline}
        </h2>
        <ul className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {problem.lines.map((line, index) => (
            <li
              key={line}
              className="relative rounded-2xl bg-white p-5 pl-5 sm:rounded-none sm:bg-transparent sm:p-0 sm:pl-4"
            >
              <span
                className="absolute left-0 top-5 hidden h-8 w-1 rounded-full bg-[var(--primary)] sm:top-1.5 sm:block"
                aria-hidden="true"
              />
              <span
                className="mb-3 inline-flex size-7 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white sm:hidden"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-black/60 sm:text-base">
                <span className="sr-only">Point {index + 1}. </span>
                {line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
