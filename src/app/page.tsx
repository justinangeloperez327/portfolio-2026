import type { Metadata } from "next";
import {
  ContactCallout,
  EngineeringPrinciples,
  Hero,
  ProfileSummary,
  SelectedWork,
} from "@/components/home";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    sameAs: ["https://github.com/justinangeloperez327"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    knowsAbout: [
      "Software architecture",
      "Web application development",
      "Framework design",
      "Developer experience",
    ],
  };

  return (
    <main id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <div className="container-page">
        <SelectedWork />
        <EngineeringPrinciples />
        <ProfileSummary />
        <ContactCallout />
      </div>
    </main>
  );
}
