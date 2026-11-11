import dynamic from "next/dynamic";

import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SafetySection } from "@/components/sections/safety";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const HowItWorksSection = dynamic(
  () =>
    import("@/components/sections/how-it-works").then(
      (m) => m.HowItWorksSection,
    ),
  { ssr: true },
);

const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/features").then((m) => m.FeaturesSection),
  { ssr: true },
);

const NewcomersSection = dynamic(
  () =>
    import("@/components/sections/newcomers").then((m) => m.NewcomersSection),
  { ssr: true },
);

const FaqSection = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FaqSection),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <NewcomersSection />
        <SafetySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
