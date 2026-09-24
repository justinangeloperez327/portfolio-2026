import { ReadingColumn } from "@/components/layout/reading-column";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/typography";
import { SectionMarker } from "@/components/visual/section-marker";
import type { CaseStudySection as CaseStudySectionType } from "@/types/case-study";

type CaseStudySectionProps = {
  index: number;
  section: CaseStudySectionType;
};

export function CaseStudySection({ index, section }: CaseStudySectionProps) {
  return (
    <Section className="case-study-section" id={section.key}>
      <div className="case-study-section__heading">
        <SectionMarker
          index={String(index + 1).padStart(2, "0")}
          label={section.title}
        />
        <SectionHeading>{section.title}</SectionHeading>
      </div>
      <ReadingColumn className="case-study-section__body">
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ReadingColumn>
    </Section>
  );
}
