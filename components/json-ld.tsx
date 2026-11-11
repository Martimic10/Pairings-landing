import { siteConfig } from "@/lib/siteConfig";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    description: siteConfig.description,
    logo: `${siteConfig.url}/pairings-mark-v2.png`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const mobileApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    operatingSystem: "iOS",
    applicationCategory: "SportsApplication",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(siteConfig.LAUNCHED
      ? { downloadUrl: siteConfig.appStoreUrl }
      : { releaseNotes: "Pre-release — join the waitlist." }),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graphs = [organization, website, mobileApp, faqPage];

  return (
    <>
      {graphs.map((data) => (
        <script
          key={data["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
