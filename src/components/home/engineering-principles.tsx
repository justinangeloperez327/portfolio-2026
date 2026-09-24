import { EditorialGrid } from "@/components/layout/editorial-grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/typography";
import { LinkArrow } from "@/components/ui";
import { SectionMarker } from "@/components/visual/section-marker";
import { homeContent } from "@/content";

const principles = homeContent.principles;

export function EngineeringPrinciples() {
  return (
    <Section className="home-section home-principles" id="engineering-principles">
      <div className="home-section__heading">
        <SectionMarker index="02" label="Engineering" />
        <SectionHeading>Principles behind the implementation.</SectionHeading>
      </div>
      <EditorialGrid>
        {principles.map((principle, index) => (
          <article className="principle" key={principle.title}>
            <span className="technical-label">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </EditorialGrid>
      <div className="home-section__action">
        <LinkArrow href="/engineering">Read the engineering approach</LinkArrow>
      </div>
    </Section>
  );
}
