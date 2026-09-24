import { EditorialGrid } from "@/components/layout/editorial-grid";
import { DisplayHeading, Eyebrow, Lede } from "@/components/typography";
import { MetadataList, StatusIndicator, Tag } from "@/components/ui";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyHeaderProps = {
  study: CaseStudy;
};

export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const { project } = study;
  const metadata = [
    { label: "Category", value: project.category },
    { label: "Status", value: project.status },
    ...(study.role ? [{ label: "Role", value: study.role }] : []),
    ...(study.period ? [{ label: "Period", value: study.period }] : []),
  ];

  return (
    <header className="case-study-header">
      <EditorialGrid>
        <div className="case-study-header__title">
          <Eyebrow>{project.category}</Eyebrow>
          <DisplayHeading>{project.name}</DisplayHeading>
        </div>
        <div className="case-study-header__summary">
          <Lede>{project.summary}</Lede>
          <StatusIndicator label={project.status} />
        </div>
        <div className="case-study-header__stack">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <div className="case-study-header__metadata">
          <MetadataList items={metadata} />
        </div>
      </EditorialGrid>
    </header>
  );
}
