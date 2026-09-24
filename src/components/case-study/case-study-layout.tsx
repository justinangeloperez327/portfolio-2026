import Link from "next/link";
import { projects } from "@/data/projects";
import type { CaseStudy } from "@/types/case-study";
import { CaseStudyHeader } from "./case-study-header";
import { CaseStudyNav } from "./case-study-nav";
import { CaseStudySection } from "./case-study-section";

type CaseStudyLayoutProps = { study: CaseStudy };

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  const currentIndex = projects.findIndex((project) => project.slug === study.project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="subpage case-study">
      <CaseStudyHeader study={study} />
      <div className="case-layout">
        <aside><CaseStudyNav sections={study.sections} /></aside>
        <div className="case-sections">
          {study.sections.map((section, index) => <CaseStudySection key={section.key} index={index} section={section} />)}
        </div>
      </div>
      {nextProject ? (
        <Link className="next-project" href={`/work/${nextProject.slug}`}>
          <span>Next project</span><strong>{nextProject.name}</strong><span>↗</span>
        </Link>
      ) : null}
    </main>
  );
}
