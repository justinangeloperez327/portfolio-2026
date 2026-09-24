import type { Metadata } from "next";
import Link from "next/link";
import { ProjectVisual } from "@/components/project/project-visual";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected framework, language, frontend and application engineering work by Justin Angelo Perez.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="work-page">
      <header className="work-hero">
        <div className="section-kicker">
          <span>Selected work</span>
          <span>2026</span>
        </div>
        <div className="work-hero__grid">
          <h1>Ideas turned<br />into <em>systems.</em></h1>
          <p>
            Frameworks, language experiments and product work focused on
            developer experience, architecture and practical software design.
          </p>
        </div>
      </header>

      <section className="work-grid" aria-label="Project index">
        {projects.map((project, index) => (
          <article className="work-card" key={project.slug}>
            <Link className="work-card__visual" href={`/work/${project.slug}`}>
              <ProjectVisual slug={project.slug} compact />
            </Link>
            <div className="work-card__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <span>{project.status}</span>
            </div>
            <h2><Link href={`/work/${project.slug}`}>{project.name}</Link></h2>
            <p>{project.summary}</p>
            <div className="work-card__footer">
              <div>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
              <Link href={`/work/${project.slug}`}>Case study ↗</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
