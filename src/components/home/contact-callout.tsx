import { EditorialGrid } from "@/components/layout/editorial-grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/typography";
import { LinkArrow } from "@/components/ui";
import { InkRule } from "@/components/visual/ink-rule";
import { SectionMarker } from "@/components/visual/section-marker";

export function ContactCallout() {
  return (
    <Section className="home-section home-contact" id="contact">
      <InkRule />
      <EditorialGrid className="home-contact__grid">
        <div className="home-contact__heading">
          <SectionMarker index="04" label="Contact" />
          <SectionHeading>Start with the problem worth solving.</SectionHeading>
        </div>
        <div className="home-contact__action">
          <p>
            For software engineering, architecture, framework, and product
            development conversations.
          </p>
          <LinkArrow href="/contact">Contact</LinkArrow>
        </div>
      </EditorialGrid>
    </Section>
  );
}
