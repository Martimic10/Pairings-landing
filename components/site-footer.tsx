import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/siteConfig";

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { footer } = siteConfig;

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-xs shrink-0">
            <Logo />
            <div className="mt-4 space-y-0.5 text-sm leading-relaxed text-black sm:mt-5">
              {footer.blurbLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-block text-sm text-black/70 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-20">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-medium text-black/45 sm:text-base">
                  {column.title}
                </p>
                <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                  {column.links.map((link) => {
                    const className =
                      "text-sm font-medium text-black transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-sm";

                    if (isExternalHref(link.href)) {
                      const isHttp = link.href.startsWith("http");
                      return (
                        <li key={link.href + link.label}>
                          <a
                            href={link.href}
                            className={className}
                            {...(isHttp
                              ? {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {})}
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={link.href}>
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden pb-6 text-center sm:mt-16 sm:pb-8 lg:mt-20">
          <p
            className="select-none text-[clamp(2.25rem,11vw,8.5rem)] font-extrabold leading-[0.9] tracking-tight text-black/[0.07]"
            aria-hidden="true"
          >
            {footer.watermark}
          </p>
          <p className="mt-4 text-xs text-black/40">
            © {year} {siteConfig.name}. Free to use.
          </p>
        </div>
      </div>
    </footer>
  );
}
