import { EditorialGrid } from "@/components/layout/editorial-grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/typography";
import { LinkArrow } from "@/components/ui";
import { SectionMarker } from "@/components/visual/section-marker";

const principles = [
  {
    number: "01",
    title: "Clarity before cleverness",
    body: "Architecture should make the system easier to understand, extend, and operate—not merely demonstrate technical complexity.",
  },
  {
    number: "02",
    title: "Developer experience is architecture",
    body: "APIs, conventions, naming, defaults, and failure modes shape how reliably developers can use a system.",
  },
  {
    number: "03",
    title: "Performance with purpose",
    body: "Performance decisions should be measurable and tied to real constraints rather than used as an excuse for unnecessary complexity.",
  },
] as const;

export function EngineeringPrinciples() {
  return (
    <Section className="home-section home-principles" id="engineering-principles">
      <div className="home-section__heading">
        <SectionMarker index="02" label="Engineering" />
        <SectionHeading>Principles behind the implementation.</SectionHeading>
      </div>
      <EditorialGrid>
        {principles.map((principle) => (
          <article className="principle" key={principle.number}>
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
