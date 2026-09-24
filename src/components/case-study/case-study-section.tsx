import type { CaseStudySection as CaseStudySectionType } from "@/types/case-study";

type CaseStudySectionProps = { index: number; section: CaseStudySectionType };

export function CaseStudySection({ index, section }: CaseStudySectionProps) {
  return (
    <section className="case-section" id={section.key}>
      <div className="case-section-label"><span>{String(index + 1).padStart(2, "0")}</span><span>{section.title}</span></div>
      <div className="case-section-body">
        <h2>{section.title}</h2>
        <div>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </section>
  );
}
