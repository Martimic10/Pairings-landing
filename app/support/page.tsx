import type { Metadata } from "next";

import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${siteConfig.name}.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <LegalShell title="Support">
      {/* TODO: Must be reviewed by a lawyer before launch. */}
      <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-[var(--foreground)]">
        Placeholder draft — must be reviewed by a lawyer before launch.
      </p>
      <p>
        We&apos;re here to help with waitlist questions, account issues, and
        safety reports once the app launches.
      </p>

      <h2>Contact us</h2>
      <p>
        Email{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>{" "}
        and we&apos;ll get back to you as soon as we can.
      </p>

      <h2>Waitlist</h2>
      <p>
        Already joined but not sure if it worked? Check your inbox for a
        confirmation (and spam). You can also email us with the address you
        used and we&apos;ll look it up.
      </p>

      <h2>Safety &amp; reports</h2>
      <p>
        If you need to report concerning behavior once you&apos;re in the app,
        use in-app report tools first. For urgent safety concerns, contact
        local authorities, then let us know at{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>
        .
      </p>

      <h2>Account deletion</h2>
      <p>
        Request account or waitlist deletion by emailing{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>{" "}
        from the address associated with your account.
      </p>
    </LegalShell>
  );
}
