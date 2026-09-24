import type { CaseStudySection } from "@/types/case-study";

type CaseStudyNavProps = {
  sections: readonly CaseStudySection[];
};

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  return (
    <nav className="case-study-nav" aria-label="Case study sections">
      <p className="technical-label">On this page</p>
      <ol>
        {sections.map((section, index) => (
          <li key={section.key}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <a href={`#${section.key}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
