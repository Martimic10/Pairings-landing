import type { Metadata } from "next";

import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: `How we expect people to treat each other on ${siteConfig.name}.`,
  alternates: { canonical: "/guidelines" },
};

export default function GuidelinesPage() {
  return (
    <LegalShell title="Community Guidelines">
      {/* TODO: Must be reviewed by a lawyer before launch. */}
      <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-[var(--foreground)]">
        Placeholder draft — must be reviewed by a lawyer before launch.
      </p>
      <p>
        Pairings is for golfers looking for playing partners and friends.
        These guidelines keep the fairway friendly.
      </p>

      <h2>Be a good playing partner</h2>
      <ul>
        <li>Be honest about your handicap, availability, and play style.</li>
        <li>Show up on time for rounds you accept, or cancel early.</li>
        <li>Keep chats focused on golf and making plans.</li>
      </ul>

      <h2>This is not a dating app</h2>
      <p>
        Do not use Pairings to solicit romantic or sexual connections. Repeated
        unwanted advances will lead to removal.
      </p>

      <h2>Meet safely</h2>
      <ul>
        <li>Propose tee times at public or semi-private courses.</li>
        <li>Do not pressure anyone to meet somewhere private.</li>
        <li>Use report and block if someone makes you uncomfortable.</li>
      </ul>

      <h2>No harassment or discrimination</h2>
      <p>
        Harassment, hate speech, threats, and discrimination of any kind are
        not allowed. We will remove accounts that violate this.
      </p>

      <h2>Photos &amp; profiles</h2>
      <p>
        Use recent photos of yourself. Do not post misleading images or
        someone else&apos;s likeness. Verification features (when available)
        help keep profiles real.
      </p>

      <h2>Enforcement</h2>
      <p>
        We may warn, suspend, or permanently remove accounts that break these
        guidelines. Questions:{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>
        .
      </p>
    </LegalShell>
  );
}
