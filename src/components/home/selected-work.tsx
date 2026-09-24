import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/typography";
import { LinkArrow, ProjectLink } from "@/components/ui";
import { SectionMarker } from "@/components/visual/section-marker";
import { projects } from "@/data/projects";

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section className="home-section" id="selected-work">
      <div className="home-section__heading">
        <SectionMarker index="01" label="Selected work" />
        <SectionHeading>Systems built around clear ideas.</SectionHeading>
      </div>
      <div className="home-projects">
        {featured.map((project, index) => (
          <ProjectLink
            key={project.slug}
            href={`/work/${project.slug}`}
            index={String(index + 1).padStart(2, "0")}
            name={project.name}
            category={project.category}
            summary={project.summary}
          />
        ))}
      </div>
      <div className="home-section__action">
        <LinkArrow href="/work">Explore all work</LinkArrow>
      </div>
    </Section>
  );
}
