import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const experiments = projects.filter((project) => !project.featured);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    sameAs: ["https://github.com/justinangeloperez327"],
    address: { "@type": "PostalAddress", addressLocality: "Abu Dhabi", addressCountry: "AE" },
    knowsAbout: ["Framework design", "Web application development", "Developer experience", "Software architecture"],
  };

  return (
    <main className="story-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="story-hero">
        <div className="story-kicker">
          <span>Justin Angelo Perez</span><span>Software Developer</span><span>Abu Dhabi · UAE</span>
        </div>
        <h1>Can software<br />feel <em>simpler?</em></h1>
        <div className="story-hero-foot">
          <p>I build frameworks, products and systems around clarity, performance and developer experience.</p>
          <a href="#story">Scroll to begin the story ↓</a>
        </div>
      </section>

      <section className="story-intro" id="story">
        <p className="chapter">Chapter I · About</p>
        <h2>I design software<br />for <em>humans first.</em></h2>
        <div className="story-copy">
          <p>My work moves between application development, framework design and programming-language experiments. The goal stays the same: make difficult systems easier to understand and use.</p>
          <p className="story-place">Based in<br /><strong>ABU DHABI</strong></p>
        </div>
        <div className="marquee-words" aria-label="Areas of focus">
          <span>FRAMEWORKS</span><span>WEB APPLICATIONS</span><span>DEVELOPER EXPERIENCE</span>
        </div>
      </section>

      <section className="story-work">
        <header className="story-section-head">
          <p className="chapter">Chapter II · Selected work</p>
          <h2>Where ideas<br />become <em>systems.</em></h2>
        </header>
        <div className="featured-projects">
          {featured.map((project, index) => (
            <Link className="feature-project" href={`/work/${project.slug}`} key={project.slug}>
              <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-stage" aria-hidden="true"><span>{project.name.slice(0, 1)}</span></div>
              <div className="project-story">
                <p>{project.category} · {project.status}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <span>View project ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-manifesto">
        <p className="chapter">Chapter III · Philosophy</p>
        <p className="manifesto-line">POWERFUL <em>when needed.</em></p>
        <p className="manifesto-line align-right">SIMPLE <em>when used.</em></p>
        <p className="manifesto-line">FAST <em>by design.</em></p>
      </section>

      <section className="story-lab">
        <header className="story-section-head">
          <p className="chapter">The lab</p>
          <h2>Things I&apos;m<br /><em>building.</em></h2>
        </header>
        <div className="lab-list">
          {projects.map((project, index) => (
            <Link href={`/work/${project.slug}`} key={project.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.name}</strong>
              <span>{project.category}</span>
              <span>{project.technologies.join(" · ")}</span>
              <span>↗</span>
            </Link>
          ))}
        </div>
        {experiments.length > 0 && <p className="lab-note">Experiments are shown as active explorations, not finished products.</p>}
      </section>

      <section className="story-engineering">
        <p className="chapter">Chapter IV · Engineering</p>
        <h2>Behind the interface,<br />there is <em>engineering.</em></h2>
        <div className="engineering-words">
          <span>Framework Design</span><span>Application Architecture</span><span>Developer Experience</span><span>Performance</span><span>Frontend Engineering</span>
        </div>
        <Link href="/about">More about how I work ↗</Link>
      </section>

      <section className="story-about">
        <div className="portrait-placeholder" aria-hidden="true"><span>JAP</span></div>
        <div>
          <p className="chapter">Chapter V · About</p>
          <h2>More than<br />just code.</h2>
          <p>I care about turning complex technical ideas into products and tools that developers can reason about, maintain and enjoy using.</p>
          <Link href="/about">About me ↗</Link>
        </div>
      </section>

      <section className="story-contact">
        <p className="chapter">Start a conversation</p>
        <h2>Have something<br />worth <em>building?</em></h2>
        <Link href="/contact">LET&apos;S TALK. ↗</Link>
        <div><span>{siteConfig.location}</span><span>GitHub · Portfolio 2026</span></div>
      </section>
    </main>
  );
}
