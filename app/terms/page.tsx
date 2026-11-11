import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell } from "@/components/legal-shell";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${siteConfig.name} website and iOS app.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use">
      <p>Last updated: November 11, 2026</p>
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of
        the {siteConfig.name} website, waitlist, and iOS app (together, the
        &quot;Service&quot;), operated by Pairings (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;).
      </p>
      <p>
        By accessing or using the Service, you agree to these Terms. If you do
        not agree, do not use the Service.
      </p>

      <h2>The Service</h2>
      <p>
        Pairings helps golfers find playing partners nearby, match based on
        preferences, message after a match, and propose or join rounds. The
        core Service is free to use. Features, cities, and availability may
        change as we launch and improve the product.
      </p>
      <p>
        Joining the waitlist does not guarantee that Pairings will launch in
        your city on a specific date, or that you will receive an invitation.
      </p>

      <h2>Eligibility</h2>
      <ul>
        <li>
          You must be at least 17 years old (or the age of majority where you
          live, if higher) to create an account or use the app.
        </li>
        <li>
          You must provide accurate profile information and not impersonate
          another person.
        </li>
        <li>
          You may only create one account for yourself unless we expressly
          allow otherwise.
        </li>
        <li>
          The Service is currently intended for use in the United States.
        </li>
      </ul>

      <h2>Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your login
        credentials and for activity under your account. Notify us promptly at{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>{" "}
        if you suspect unauthorized access. We may suspend or terminate
        accounts that violate these Terms or our{" "}
        <Link
          href="/guidelines"
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
        >
          Community Guidelines
        </Link>
        .
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use Pairings to solicit dating, romantic, or sexual connections;
          Pairings is for golf partners and golf friendships.
        </li>
        <li>Harass, threaten, stalk, discriminate against, or abuse anyone.</li>
        <li>
          Post illegal, abusive, pornographic, or misleading content, or use
          someone else&apos;s photos or identity.
        </li>
        <li>Spam, scrape, reverse engineer, or disrupt the Service.</li>
        <li>
          Circumvent safety tools, create fake accounts, or manipulate matching.
        </li>
        <li>
          Use the Service for any unlawful purpose or in violation of course
          rules or local laws when you meet to play.
        </li>
      </ul>
      <p>
        You agree to follow our{" "}
        <Link
          href="/guidelines"
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
        >
          Community Guidelines
        </Link>
        , which are part of how we moderate the Service.
      </p>

      <h2>User content</h2>
      <p>
        You retain ownership of content you submit (such as photos, bio text,
        and messages). You grant Pairings a worldwide, non-exclusive,
        royalty-free license to host, store, display, and otherwise use that
        content as needed to operate and improve the Service.
      </p>
      <p>
        You represent that you have the rights to the content you upload and
        that it does not violate others&apos; rights or these Terms. We may
        remove content or restrict accounts that violate these Terms.
      </p>

      <h2>Safety disclaimer</h2>
      <p>
        Pairings provides tools such as report and block, and may offer photo
        verification, but we do not conduct comprehensive background checks and
        cannot guarantee the identity, intentions, or behavior of any user.
      </p>
      <p>
        Always exercise caution when meeting someone new. Meet at a public golf
        course or other public place — not in private homes or isolated
        locations. Pairings is not responsible for offline interactions or
        rounds arranged through the app.
      </p>
      <p>
        If you feel unsafe, contact local authorities and report the issue to
        us via in-app tools or{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>
        .
      </p>

      <h2>Third-party services</h2>
      <p>
        The Service may link to or rely on third parties (for example Apple,
        maps, hosting, or analytics). Their terms and privacy policies apply to
        their services. We are not responsible for third-party sites or
        services.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Pairings name, logos, app, website, and related materials are owned
        by us or our licensors. You may not copy, modify, or distribute our
        branding or software except as allowed by these Terms or with our prior
        written permission.
      </p>

      <h2>App Store</h2>
      <p>
        If you download the app from the Apple App Store, you also agree to
        Apple&apos;s applicable terms. Apple is not a party to these Terms and
        has no obligation to provide maintenance or support for the app. In the
        event of a failure to conform to an applicable warranty, you may notify
        Apple for a refund of the purchase price (if any); to the maximum
        extent permitted by law, Apple has no other warranty obligation with
        respect to the app.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
        INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT
        PERMITTED BY LAW. WE DO NOT WARRANT THAT THE SERVICE WILL BE
        UNINTERRUPTED, ERROR-FREE, OR SECURE.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, PAIRINGS AND ITS OFFICERS,
        DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
        PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE OR
        INTERACTIONS WITH OTHER USERS.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR THE
        SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID US (IF
        ANY) IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S.
        DOLLARS (US $100).
      </p>
      <p>
        Some jurisdictions do not allow certain limitations; in those places,
        our liability is limited to the maximum extent permitted by law.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless Pairings and its team from
        claims, damages, and expenses (including reasonable attorneys&apos;
        fees) arising from your use of the Service, your content, or your
        violation of these Terms or applicable law.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the Service at any time and may request account
        deletion as described in our{" "}
        <Link
          href="/privacy"
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        . We may suspend or terminate access if you violate these Terms, create
        risk for other users, or for other legitimate operational reasons. Some
        provisions of these Terms survive termination (including ownership,
        disclaimers, and limitations of liability).
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. We will post the revised
        Terms on this page and update the &quot;Last updated&quot; date.
        Continued use of the Service after changes become effective constitutes
        acceptance of the updated Terms. If you do not agree, stop using the
        Service.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the United States, without
        regard to conflict-of-law rules, except where mandatory consumer
        protections in your jurisdiction apply. If we specify a governing
        state in a later update, that state&apos;s laws will control to the
        extent permitted by law.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.contactEmail}`}
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>
      <p>
        Support:{" "}
        <a
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
          href={`mailto:${siteConfig.supportEmail}`}
        >
          {siteConfig.supportEmail}
        </a>{" "}
        ·{" "}
        <Link
          href="/support"
          className="font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
        >
          Support page
        </Link>
        .
      </p>
      <p className="text-sm text-[var(--muted-foreground)]/80">
        These Terms are a working draft for the website and App Store listing.
        Have counsel review them before launch.
      </p>
    </LegalShell>
  );
}
