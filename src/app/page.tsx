import type { Metadata } from "next";
import Link from "next/link";
import { ProjectVisual } from "@/components/project/project-visual";
import { EditorialAccent } from "@/components/typography";
import { BrushDivider, InkMark, InkReveal, InkWash, RedSeal } from "@/components/visual";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const principles = [
  {
    title: "Clarity before cleverness.",
    body: "APIs, boundaries, and naming should make a system easier to reason about before they make it impressive.",
  },
  {
    title: "Complexity belongs inside the system.",
    body: "Framework plumbing should absorb repetitive work without hiding the ideas a developer still needs to understand.",
  },
  {
    title: "Performance is part of design.",
    body: "Good developer experience and efficient execution should reinforce each other rather than compete.",
  },
] as const;

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    sameAs: [siteConfig.social.github],
    knowsAbout: [
      "Framework design",
      "Web application development",
      "Developer experience",
      "Software architecture",
    ],
  };

  return (
    <main className="sumi-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="sumi-hero" aria-labelledby="home-title">
        <InkWash className="sumi-hero__wash sumi-hero__wash--one" size="lg" />
        <InkWash className="sumi-hero__wash sumi-hero__wash--two" size="md" />

        <div className="sumi-hero__meta">
          <span>Software Developer</span>
          <span>Portfolio · 2026</span>
        </div>

        <div className="sumi-hero__grid">
          <div className="sumi-hero__copy">
            <p className="sumi-kicker">Frameworks · Products · Developer tools</p>
            <InkReveal>
              <h1 id="home-title" className="identity-display">
                <span>Justin</span>
                <span>Angelo Perez</span>
              </h1>
            </InkReveal>
            <p className="sumi-hero__lede">
              I build software systems that make difficult engineering clearer
              and easier to work with.
            </p>
            <div className="sumi-actions">
              <Link href="/projects">View projects <span aria-hidden="true">↗</span></Link>
              <Link href="/about">About <span aria-hidden="true">↗</span></Link>
            </div>
          </div>

          <div className="sumi-hero__art" aria-hidden="true">
            <InkMark className="sumi-hero__mark" />
            <div className="sumi-hero__figure">
              <span>Software</span>
              <strong>01</strong>
              <span>Systems</span>
            </div>
            <RedSeal />
          </div>
        </div>

        <div className="sumi-hero__foot">
          <span>{siteConfig.location}</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <section className="sumi-intro">
        <div className="sumi-section-index">
          <span>01</span>
          <span>Philosophy</span>
        </div>
        <div className="sumi-intro__grid">
          <h2 className="editorial-statement">
            I like hard systems.
            <br />
            I just don&apos;t think they should{" "}
            <EditorialAccent>feel hard.</EditorialAccent>
          </h2>
          <div>
            <p>
              My work moves between application development, framework design,
              language experiments, and software architecture.
            </p>
            <p>
              I focus on the details developers feel every day: naming,
              workflows, defaults, performance, and boundaries that make a
              system understandable.
            </p>
            <Link className="sumi-text-link" href="/about">How I approach software ↗</Link>
          </div>
        </div>
      </section>

      <section className="sumi-projects">
        <div className="sumi-section-index">
          <span>02</span>
          <span>Selected Projects</span>
        </div>
        <div className="sumi-projects__heading">
          <h2 className="section-display">Ideas turned into systems.</h2>
          <Link className="sumi-text-link" href="/projects">All projects ↗</Link>
        </div>

        <div className="sumi-projects__list">
          {featured.map((project, index) => (
            <article className="sumi-project" key={project.slug}>
              <Link className="sumi-project__visual" href={`/projects/${project.slug}`}>
                <ProjectVisual slug={project.slug} />
              </Link>
              <div className="sumi-project__copy">
                <div className="sumi-project__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3 className="project-name"><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <div className="sumi-project__stack">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <Link className="sumi-text-link" href={`/projects/${project.slug}`}>
                  Explore project ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sumi-principles">
        <InkWash className="sumi-principles__wash" size="lg" />
        <div className="sumi-section-index sumi-section-index--light">
          <span>03</span>
          <span>Engineering Philosophy</span>
        </div>
        <div className="sumi-principles__statement">
          <h2 className="editorial-statement editorial-statement--light">
            Complexity belongs
            <br />
            <EditorialAccent>inside the system.</EditorialAccent>
          </h2>
          <p>
            The interface a developer touches should be deliberate, legible,
            and proportionate to the problem being solved.
          </p>
        </div>
        <div className="sumi-principles__list">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sumi-contact">
        <BrushDivider />
        <div className="sumi-section-index">
          <span>04</span>
          <span>Contact</span>
        </div>
        <div className="sumi-contact__grid">
          <h2 className="section-display">
            Have something
            <br />
            difficult to build?
          </h2>
          <div>
            <p>
              If the problem involves software architecture, frameworks,
              products, or developer tooling, start with the problem.
            </p>
            <Link href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
