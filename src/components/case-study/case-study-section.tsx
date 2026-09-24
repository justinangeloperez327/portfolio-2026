import type { CaseStudySection as CaseStudySectionType } from "@/types/case-study";

type CaseStudySectionProps = {
  index: number;
  section: CaseStudySectionType;
};

function SectionArtifact({ sectionKey }: { sectionKey: string }) {
  if (sectionKey === "architecture") {
    return (
      <div className="case-artifact case-artifact--architecture" aria-label="Architecture concept">
        <span>Application</span><i />
        <span>Framework</span><i />
        <span>Runtime</span><i />
        <span>Infrastructure</span>
      </div>
    );
  }

  if (sectionKey === "implementation") {
    return (
      <div className="case-artifact case-artifact--implementation" aria-label="Implementation cycle">
        <div><span>01</span><strong>Contract</strong><small>Define the developer-facing behavior.</small></div>
        <div><span>02</span><strong>Implement</strong><small>Build the smallest coherent primitive.</small></div>
        <div><span>03</span><strong>Verify</strong><small>Test behavior, errors and edge cases.</small></div>
      </div>
    );
  }

  if (sectionKey === "developer-experience") {
    return (
      <div className="case-artifact case-artifact--metrics" aria-label="Developer experience goals">
        <div><strong>↓</strong><span>Mechanical work</span></div>
        <div><strong>↑</strong><span>Clarity</span></div>
        <div><strong>↑</strong><span>Feedback quality</span></div>
      </div>
    );
  }

  if (sectionKey === "result") {
    return (
      <div className="case-artifact case-artifact--status" aria-label="Current project state">
        <span><i /> Active development</span>
        <strong>Build → learn → refine</strong>
        <p>The work remains intentionally iterative; the implementation is used to validate the architecture.</p>
      </div>
    );
  }

  return null;
}

export function CaseStudySection({ index, section }: CaseStudySectionProps) {
  return (
    <section className={`case-section case-section--${section.key}`} id={section.key}>
      <div className="case-section__index">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{section.title}</span>
      </div>
      <div className="case-section__content">
        <h2>{section.title}</h2>
        <div className="case-section__copy">
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <SectionArtifact sectionKey={section.key} />
      </div>
    </section>
  );
}
