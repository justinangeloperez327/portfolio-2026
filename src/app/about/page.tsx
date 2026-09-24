import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { aboutFocusAreas } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Justin Angelo Perez, a software developer focused on web applications, framework design, developer experience, and software architecture.",
  alternates: { canonical: "/about" },
};

const process = ["Understand", "Simplify", "Design", "Build", "Test", "Refine"] as const;

export default function AboutPage() {
  return (
    <main className="subpage about-page">
      <header className="subpage-hero about-hero">
        <div className="section-label"><span>About</span><span>01</span></div>
        <h1>Justin<br />Angelo<br /><em>Perez.</em></h1>
        <div className="hero-sidecopy"><strong>{siteConfig.title}</strong><span>{siteConfig.location}</span></div>
      </header>

      <section className="about-story">
        <div className="profile-visual large" aria-hidden="true"><span>JAP</span></div>
        <div className="about-story-copy">
          <p className="eyebrow-copy">Developer · Builder · Learner</p>
          <h2>I care about making difficult systems understandable.</h2>
          <p>My background is rooted in web application development. That interest has expanded into framework design, language experiments, .NET architecture, Rust, C++, React and TypeScript.</p>
          <p>I use those projects to study the same recurring question from different levels of the stack: how can powerful software remain understandable to the person building with it?</p>
        </div>
      </section>

      <section className="editorial-section about-focus">
        <div className="section-label"><span>02</span><span>What I care about</span></div>
        <div className="capability-list">
          {aboutFocusAreas.map((area) => (
            <article key={area.index}><span>{area.index}</span><h3>{area.title}</h3><p>{area.body}</p></article>
          ))}
        </div>
      </section>

      <section className="editorial-section process-section">
        <div className="section-label"><span>03</span><span>How I work</span></div>
        <h2 className="section-title">Build, inspect, revise.</h2>
        <ol className="process-list">
          {process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
        </ol>
        <div className="process-note">
          <p>I prefer implementation over abstraction for its own sake. I reuse strong libraries where they create leverage and build custom boundaries only when they create a clearer contract.</p>
          <p>The same principle applies to architecture: introduce structure when it makes responsibilities easier to understand, not because a pattern is fashionable.</p>
        </div>
      </section>

      <section className="page-cta">
        <span>Selected work</span><h2>See the ideas<br />under implementation.</h2><Link href="/work">Explore work ↗</Link>
      </section>
    </main>
  );
}
