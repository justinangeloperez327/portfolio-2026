import { ProjectVisual } from "@/components/project/project-visual";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyHeaderProps = { study: CaseStudy };

export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const { project } = study;

  return (
    <header className="case-hero">
      <div className="section-kicker">
        <span>{project.category}</span>
        <span>{study.period ?? "2026"}</span>
      </div>

      <div className="case-hero__title">
        <h1>{project.name}</h1>
        <span className="case-status">{project.status}</span>
      </div>

      <div className="case-hero__summary">
        <p>{project.summary}</p>
        <dl>
          {study.role ? <div><dt>Role</dt><dd>{study.role}</dd></div> : null}
          <div><dt>Stack</dt><dd>{project.technologies.join(" · ")}</dd></div>
          <div><dt>Focus</dt><dd>Architecture · DX · Implementation</dd></div>
        </dl>
      </div>

      <ProjectVisual slug={project.slug} />
    </header>
  );
}
