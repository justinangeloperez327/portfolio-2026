import type { Metadata } from "next";
import { EditorialGrid, PageShell, Section } from "@/components/layout";
import { DisplayHeading, Eyebrow, Lede } from "@/components/typography";
import { ProjectLink, Tag } from "@/components/ui";
import { InkRule } from "@/components/visual/ink-rule";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected framework, programming language, frontend, and application engineering work by Justin Angelo Perez.",
};

const categories = [...new Set(projects.map((project) => project.category))];

export default function WorkPage() {
  return (
    <PageShell>
      <section className="work-intro" aria-labelledby="work-title">
        <EditorialGrid>
          <div className="work-intro__title">
            <Eyebrow>Selected systems · 2026</Eyebrow>
            <DisplayHeading>
              <span id="work-title">Work</span>
            </DisplayHeading>
          </div>
          <div className="work-intro__lede">
            <Lede>
              Frameworks, language experiments, frontend systems, and
              applications shaped by developer experience and architectural
              clarity.
            </Lede>
          </div>
        </EditorialGrid>
      </section>

      <InkRule />

      <Section className="work-index" id="project-index">
        <div className="work-index__meta">
          <p className="technical-label">
            {String(projects.length).padStart(2, "0")} projects
          </p>
          <div className="work-index__categories" aria-label="Project categories">
            {categories.map((category) => (
              <Tag key={category}>{category}</Tag>
            ))}
          </div>
        </div>

        <div className="work-index__projects">
          {projects.map((project, index) => (
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
      </Section>
    </PageShell>
  );
}
