import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected framework, language, frontend and application engineering work by Justin Angelo Perez.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="subpage work-page">
      <header className="subpage-hero">
        <div className="section-label"><span>Portfolio</span><span>2026</span></div>
        <h1>Selected<br /><em>work.</em></h1>
        <p>Frameworks, applications and experiments exploring better ways to build software.</p>
      </header>
      <section className="work-catalog" aria-label="Project index">
        {projects.map((project, index) => (
          <Link href={`/work/${project.slug}`} className="catalog-project" key={project.slug}>
            <div className="catalog-head"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span><span>{project.status}</span></div>
            <div className="catalog-visual" aria-hidden="true"><span>{project.name.slice(0, 2).toUpperCase()}</span></div>
            <div className="catalog-copy"><h2>{project.name}</h2><p>{project.summary}</p><span>View project ↗</span></div>
          </Link>
        ))}
      </section>
    </main>
  );
}
