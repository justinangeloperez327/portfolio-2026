import { PageShell } from "@/components/layout/page-shell";
import { InkRule } from "@/components/visual/ink-rule";
import type { CaseStudy } from "@/types/case-study";
import { CaseStudyHeader } from "./case-study-header";
import { CaseStudyNav } from "./case-study-nav";
import { CaseStudySection } from "./case-study-section";

type CaseStudyLayoutProps = {
  study: CaseStudy;
};

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <PageShell className="case-study">
      <CaseStudyHeader study={study} />
      <InkRule />
      <div className="case-study__content">
        <aside className="case-study__aside">
          <CaseStudyNav sections={study.sections} />
        </aside>
        <div className="case-study__sections">
          {study.sections.map((section, index) => (
            <CaseStudySection key={section.key} index={index} section={section} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
