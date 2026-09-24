import type { CaseStudySection } from "@/types/case-study";

type CaseStudyNavProps = { sections: readonly CaseStudySection[] };

export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  return (
    <nav className="case-nav" aria-label="Case study sections">
      <span>On this page</span>
      <ol>
        {sections.map((section, index) => (
          <li key={section.key}><span>{String(index + 1).padStart(2, "0")}</span><a href={`#${section.key}`}>{section.title}</a></li>
        ))}
      </ol>
    </nav>
  );
}
