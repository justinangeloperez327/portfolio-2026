import type { CaseStudy } from "@/types/case-study";

type CaseStudyHeaderProps = { study: CaseStudy };

export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const { project } = study;
  return (
    <header className="case-hero">
      <div className="section-label"><span>{project.category}</span><span>{study.period ?? "2026"}</span></div>
      <h1>{project.name}</h1>
      <div className="case-hero-summary">
        <p>{project.summary}</p>
        <dl>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          {study.role ? <div><dt>Role</dt><dd>{study.role}</dd></div> : null}
          <div><dt>Stack</dt><dd>{project.technologies.join(" · ")}</dd></div>
        </dl>
      </div>
      <div className="case-visual" aria-hidden="true"><span>{project.name.slice(0, 2).toUpperCase()}</span></div>
    </header>
  );
}
