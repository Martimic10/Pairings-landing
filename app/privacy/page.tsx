import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>Last updated: November 11, 2026</p>
      <p>
        This Privacy Policy explains how {siteConfig.name} (&quot;Pairings,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
        shares, and protects information when you visit{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={siteConfig.url}
        >
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </a>
        , join our waitlist, or use the Pairings iOS app (the
        &quot;Service&quot;).
      </p>
      <p>
        Pairings is free to use. We do not sell your personal information.
      </p>

      <h2>Who this applies to</h2>
      <p>
        This policy covers visitors to our marketing website, waitlist
        signups, and people who create an account in the Pairings app.
      </p>

      <h2>Information we collect</h2>
      <p>Depending on how you use Pairings, we may collect:</p>
      <ul>
        <li>
          <strong>Account &amp; profile:</strong> email address, display name,
          handicap or scoring range, home course, city or metro, play-style
          preferences (for example walk/ride, pace, schedule), bio, and other
          details you choose to add.
        </li>
        <li>
          <strong>Photos &amp; media:</strong> profile photos and any
          verification images you submit. Photos are used for your profile and,
          when available, safety verification.
        </li>
        <li>
          <strong>Matching &amp; messaging:</strong> likes, passes, matches,
          round proposals, and messages you send through the app.
        </li>
        <li>
          <strong>Location:</strong> with your permission, approximate or
          precise location so we can show golfers and courses near you. You can
          turn location off in iOS Settings at any time. We do not continuously
          track you in the background without a purpose disclosed in the app.
        </li>
        <li>
          <strong>Waitlist:</strong> email, city, optional &quot;moved
          recently&quot; answer, optional other-city text, and referral or
          source info when you sign up on the website.
        </li>
        <li>
          <strong>Device &amp; usage:</strong> device type, OS version, app
          version, crash logs, and in-app interactions needed to operate and
          improve the Service.
        </li>
        <li>
          <strong>Support:</strong> information you include when you email us
          for help or safety reports.
        </li>
        <li>
          <strong>Communications preferences:</strong> whether you receive
          launch emails, product updates, or push notifications (if you enable
          them).
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>Create and manage your account and profile.</li>
        <li>Match you with nearby golfers and help you propose or join rounds.</li>
        <li>Show relevant content based on location, preferences, and activity.</li>
        <li>Operate safety features such as report, block, and (when available) verification.</li>
        <li>Send waitlist and launch emails for your city, and transactional messages about your account.</li>
        <li>Send push notifications you opt into (for example matches or round updates).</li>
        <li>Diagnose bugs, prevent abuse and spam, and improve the product.</li>
        <li>Comply with law and enforce our Terms and Community Guidelines.</li>
      </ul>

      <h2>How we share information</h2>
      <p>We do not sell personal information. We may share information:</p>
      <ul>
        <li>
          <strong>With other users:</strong> profile details you choose to make
          visible (such as name, photos, handicap range, home course, and play
          style). Exact contact details are not shown until you choose to share
          them after a match.
        </li>
        <li>
          <strong>With service providers:</strong> vendors that help us run
          Pairings (for example hosting, database, authentication, email
          delivery, crash reporting, and privacy-friendly analytics), under
          agreements that limit their use of your data to providing services to
          us.
        </li>
        <li>
          <strong>For legal and safety reasons:</strong> if required by law, or
          to protect the rights, safety, or property of Pairings, our users, or
          the public.
        </li>
        <li>
          <strong>Business transfers:</strong> if we are involved in a merger,
          acquisition, or asset sale, your information may transfer as part of
          that transaction, subject to this policy or a successor policy.
        </li>
      </ul>

      <h2>Apple App Store privacy labels</h2>
      <p>
        Data types we may collect in the app (depending on features you use)
        include Contact Info, Location, User Content (photos, messages,
        profile), Identifiers, and Usage Data. We use this data to provide the
        Service, personalize matching, and for analytics and app functionality —
        not for third-party advertising. See our App Store listing for the
        current privacy nutrition labels.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          <strong>Location:</strong> control via iOS Settings → Pairings →
          Location.
        </li>
        <li>
          <strong>Notifications:</strong> control via iOS Settings →
          Notifications → Pairings.
        </li>
        <li>
          <strong>Marketing / waitlist email:</strong> use unsubscribe links in
          emails or contact us at{" "}
          <a
            className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
            href={`mailto:${siteConfig.supportEmail}`}
          >
            {siteConfig.supportEmail}
          </a>
          .
        </li>
        <li>
          <strong>Profile visibility:</strong> edit or remove profile content
          in the app where available.
        </li>
      </ul>

      <h2>Account &amp; data deletion</h2>
      <p>
        You may request deletion of your account and associated personal data
        by using in-app account deletion (when available) or by emailing{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>{" "}
        from the address on your account. We will delete or anonymize your data
        within a reasonable period, except where we must retain limited records
        for legal, security, fraud-prevention, or dispute-resolution reasons.
      </p>
      <p>
        To remove a waitlist signup only, email us with the address you used.
      </p>

      <h2>Retention</h2>
      <p>
        We keep information only as long as needed to provide the Service and
        for the purposes above, including legal and security obligations.
        Waitlist emails are retained until launch communications for your area
        are complete or you ask to be removed.
      </p>

      <h2>Security</h2>
      <p>
        We use administrative, technical, and organizational measures designed
        to protect personal information. No method of transmission or storage
        is 100% secure; we cannot guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>
        Pairings is not directed to children under 17. We do not knowingly
        collect personal information from anyone under 17. If you believe a
        child has provided us information, contact{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>{" "}
        and we will take appropriate steps to delete it.
      </p>

      <h2>International users</h2>
      <p>
        Pairings is operated from the United States. If you access the Service
        from another country, your information may be processed in the U.S. or
        other locations where our providers operate.
      </p>

      <h2>U.S. state privacy rights</h2>
      <p>
        Depending on where you live (for example California), you may have
        rights to request access to, correction of, or deletion of personal
        information, and to appeal a denial of a request. To exercise these
        rights, email{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>
        . We do not sell or &quot;share&quot; personal information for
        cross-context behavioral advertising as those terms are commonly
        defined under state privacy laws.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        revised version on this page and update the &quot;Last updated&quot;
        date. Material changes may also be communicated in the app or by email
        when appropriate.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions:{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>
      <p>
        Support &amp; deletion requests:{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>
        . See also our{" "}
        <Link
          href="/support"
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
        >
          Support
        </Link>{" "}
        page.
      </p>
      <p className="text-sm text-[var(--muted-foreground)]/80">
        This policy is provided for transparency and App Store / website use.
        Have counsel review it before relying on it for launch.
      </p>
    </LegalShell>
  );
}
