import type { Metadata } from "next";
import Link from "next/link";
import { ProjectVisual } from "@/components/project/project-visual";
import { EditorialAccent } from "@/components/typography";
import { BrushDivider, InkWash } from "@/components/visual";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Frameworks, language experiments, frontend systems, and software projects by Justin Angelo Perez.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="sumi-page projects-page">
      <header className="sumi-page-hero">
        <InkWash className="sumi-page-hero__wash" size="lg" />
        <div className="sumi-section-index">
          <span>Projects</span>
          <span>2026</span>
        </div>
        <div className="sumi-page-hero__grid">
          <h1 className="page-display">
            Ideas turned
            <br />
            into <EditorialAccent>systems.</EditorialAccent>
          </h1>
          <p>
            Frameworks, language experiments, frontend tooling, and product work
            focused on architecture and developer experience.
          </p>
        </div>
      </header>

      <section className="projects-index" aria-label="Project index">
        {projects.map((project, index) => {
          const mirrored = (index + 1) % 2 === 0;

          return (
            <article
              className={`projects-index__item projects-index__item--landscape ${mirrored ? "projects-index__item--mirrored" : ""}`}
              key={project.slug}
            >
              <div className="projects-index__media" aria-hidden="true">
                <ProjectVisual slug={project.slug} mirrored={mirrored} />
              </div>

              <div className="projects-index__overlay" aria-hidden="true" />

              <div className="projects-index__copy">
                <div className="sumi-project__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>

                <h2 className="project-name">
                  <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                </h2>

                <p>{project.summary}</p>

                <div className="sumi-project__stack">
                  {project.technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <Link
                  className="sumi-text-link"
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.name} project`}
                >
                  View project ↗
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <div className="projects-page__end">
        <BrushDivider />
      </div>
    </main>
  );
}
