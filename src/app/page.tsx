import type { Metadata } from "next";
import Link from "next/link";
import { ProjectVisual } from "@/components/project/project-visual";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const capabilities = [
  {
    title: "Framework Engineering",
    body: "Designing conventions, APIs, tooling, data layers and framework-owned workflows that make application development feel coherent.",
  },
  {
    title: "Product Engineering",
    body: "Building web products with clear information architecture, maintainable frontend systems, resilient APIs and deliberate interaction design.",
  },
  {
    title: "Developer Experience",
    body: "Reducing friction through better defaults, naming, documentation, errors and workflows instead of hiding complexity behind magic.",
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
    sameAs: ["https://github.com/justinangeloperez327"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    knowsAbout: [
      "Framework design",
      "Web application development",
      "Developer experience",
      "Software architecture",
    ],
  };

  return (
    <main className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="hero">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span>Software Developer</span>
            <span>Abu Dhabi · UAE</span>
          </div>
          <h1>
            Software with
            <br />
            <em>less friction.</em>
          </h1>
          <p className="hero__lede">
            I design frameworks, products and developer tools around clarity,
            speed and a better development experience.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/work">
              View selected work <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="button button--ghost"
              href="https://github.com/justinangeloperez327"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero__system" aria-label="Current engineering focus">
          <div className="hero__system-head">
            <span>Current focus</span>
            <span className="live-status"><i /> Building</span>
          </div>
          <div className="hero__system-title">
            <span>01</span>
            <strong>Developer experience is part of the architecture.</strong>
          </div>
          <div className="hero__system-grid">
            <div><span>Frameworks</span><strong>Berserk · Gungnir</strong></div>
            <div><span>Language</span><strong>Densleaf</strong></div>
            <div><span>Frontend</span><strong>Quagmire</strong></div>
            <div><span>Product</span><strong>Construction systems</strong></div>
          </div>
          <div className="hero__signal" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="section-kicker">
          <span>About</span>
          <span>01</span>
        </div>
        <div className="intro__grid">
          <h2>
            I like hard systems.
            <br />
            I just don&apos;t think
            <br />
            they should <em>feel hard.</em>
          </h2>
          <div className="intro__copy">
            <p>
              My work moves between application development, framework design,
              language experiments and software architecture.
            </p>
            <p>
              I focus on the parts developers feel every day: APIs, naming,
              workflows, defaults, performance and the boundaries that make a
              system understandable.
            </p>
            <Link className="text-link" href="/about">
              More about how I work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="selected-work">
        <div className="section-kicker">
          <span>Selected work</span>
          <span>02</span>
        </div>

        <div className="selected-work__intro">
          <h2>Projects built to test better ways of building software.</h2>
          <Link className="text-link" href="/work">
            See all work <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="project-stack">
          {featured.map((project, index) => (
            <article className="project-feature" key={project.slug}>
              <Link href={`/work/${project.slug}`} className="project-feature__visual">
                <ProjectVisual slug={project.slug} />
              </Link>
              <div className="project-feature__content">
                <div className="project-feature__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.name}</Link>
                </h3>
                <p>{project.summary}</p>
                <div className="project-feature__stack">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <Link className="text-link" href={`/work/${project.slug}`}>
                  Explore case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities">
        <div className="section-kicker section-kicker--light">
          <span>What I do</span>
          <span>03</span>
        </div>
        <div className="capabilities__heading">
          <h2>Build the system.<br />Improve the experience.</h2>
          <p>
            Good engineering is not only about what the system can do. It is
            also about how clearly people can understand, operate and extend it.
          </p>
        </div>
        <div className="capabilities__list">
          {capabilities.map((capability, index) => (
            <article key={capability.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="build-strip">
        <div>
          <span>Now building</span>
          <strong>Berserk</strong>
          <span>Enterprise Rust framework</span>
        </div>
        <div>
          <span>Exploring</span>
          <strong>Densleaf</strong>
          <span>Application-oriented language</span>
        </div>
        <div>
          <span>Shipping with</span>
          <strong>React + .NET</strong>
          <span>Product systems</span>
        </div>
      </section>

      <section className="home-contact">
        <div className="section-kicker section-kicker--light">
          <span>Contact</span>
          <span>04</span>
        </div>
        <div className="home-contact__content">
          <h2>Have a difficult software problem?</h2>
          <Link href="/contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
