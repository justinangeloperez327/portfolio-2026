import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const buildLog = [
  { date: "SEP 2026", title: "Berserk", detail: "Enterprise framework architecture and developer experience." },
  { date: "SEP 2026", title: "Gungnir", detail: "Coroutine-based C++ framework foundations." },
  { date: "SEP 2026", title: "Densleaf", detail: "Application-oriented language grammar." },
  { date: "SEP 2026", title: "Quagmire", detail: "Compiled frontend framework experiments." },
] as const;

const capabilities = [
  ["Framework Engineering", "Rust and C++ framework architecture, conventions, tooling and developer-facing APIs."],
  ["Web Applications", "React, Next.js, Laravel and .NET applications designed around maintainable product systems."],
  ["Language & Tooling", "Compiler concepts, application grammar and tools that reduce mechanical development work."],
  ["Product Engineering", "Interfaces, APIs, data flows and architecture shaped around real operational needs."],
] as const;

const technologies = {
  Languages: ["Rust", "C++", "C#", "TypeScript", "PHP", "JavaScript", "SQL"],
  Frameworks: ["Next.js", "React", "Laravel", ".NET", "Node.js", "Tailwind CSS"],
  Engineering: ["REST APIs", "Clean Architecture", "Modular Monoliths", "CI/CD", "Testing", "Performance"],
} as const;

export default function HomePage() {
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
    <main className="editorial-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="landing-hero">
        <div className="landing-meta"><span>Portfolio 2026</span><span>Software Developer</span></div>
        <h1>I build<br /><em>software,</em><br />frameworks<br />& systems.</h1>
        <div className="landing-bottom">
          <p>Focused on clarity, performance and developer experience.</p>
          <span>{siteConfig.location}</span>
          <a href="#about">Explore ↓</a>
        </div>
      </section>

      <section className="editorial-section intro-section" id="about">
        <div className="section-label"><span>01</span><span>About</span></div>
        <div className="section-display">
          <h2>I build software around <em>clarity, performance</em> and developer experience.</h2>
        </div>
        <div className="section-support">
          <p>My work spans web applications, framework design, language experiments and software architecture. I care about reducing complexity without hiding how a system works.</p>
          <dl>
            <div><dt>Location</dt><dd>{siteConfig.location}</dd></div>
            <div><dt>Focus</dt><dd>Frameworks · Web Applications · Developer Experience</dd></div>
          </dl>
        </div>
      </section>

      <section className="editorial-section updates-section">
        <div className="section-label"><span>02</span><span>Build log</span></div>
        <h2 className="section-title">Currently building.</h2>
        <div className="update-list">
          {buildLog.map((item) => (
            <article key={item.title}>
              <span>{item.date}</span><h3>{item.title}</h3><p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section work-section">
        <div className="section-label"><span>03</span><span>Selected work</span></div>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <Link className="gallery-project" href={`/work/${project.slug}`} key={project.slug}>
              <div className="gallery-visual" aria-hidden="true"><span>{project.name.slice(0, 2).toUpperCase()}</span></div>
              <div className="gallery-info">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{project.name}</h3><p>{project.summary}</p></div>
                <div className="gallery-meta"><span>{project.category}</span><span>{project.status}</span><span>View ↗</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="editorial-section capability-section">
        <div className="section-label"><span>04</span><span>What I build</span></div>
        <div className="capability-list">
          {capabilities.map(([title, body], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="editorial-section principles-section">
        <div className="section-label light"><span>05</span><span>How I think</span></div>
        <p><span>01</span>Clarity<br />before<br /><em>cleverness.</em></p>
        <p className="right"><span>02</span>Developer<br />experience is<br /><em>architecture.</em></p>
        <p><span>03</span>Performance<br />with<br /><em>purpose.</em></p>
      </section>

      <section className="editorial-section technology-section">
        <div className="section-label"><span>06</span><span>Tools</span></div>
        <h2 className="section-title">Tools I work with.</h2>
        <div className="technology-grid">
          {Object.entries(technologies).map(([group, items]) => (
            <div key={group}><h3>{group}</h3><p>{items.join(" · ")}</p></div>
          ))}
        </div>
      </section>

      <section className="editorial-section about-preview">
        <div className="profile-visual" aria-hidden="true"><span>JAP</span></div>
        <div className="profile-copy">
          <div className="section-label"><span>07</span><span>Profile</span></div>
          <h2>More than<br />just code.</h2>
          <p>I enjoy taking systems that feel complicated and finding a structure that makes them easier to understand, build and maintain.</p>
          <Link href="/about">Read about me ↗</Link>
        </div>
      </section>

      <section className="editorial-contact">
        <div className="section-label light"><span>08</span><span>Contact</span></div>
        <h2>Have something<br />worth building?</h2>
        <Link href="/contact">LET&apos;S TALK. ↗</Link>
      </section>
    </main>
  );
}
