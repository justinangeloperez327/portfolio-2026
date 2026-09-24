import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { aboutFocusAreas } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Justin Angelo Perez, a software developer focused on web applications, framework design, developer experience, and software architecture.",
  alternates: { canonical: "/about" },
};

const process = [
  ["Understand", "Define the real problem, constraints and users before choosing architecture."],
  ["Simplify", "Remove concepts and mechanical work that do not improve the outcome."],
  ["Design", "Set clear boundaries, contracts, data flow and failure behavior."],
  ["Build", "Implement the smallest coherent version that proves the direction."],
  ["Test", "Validate behavior, edge cases, assumptions and the developer experience."],
  ["Refine", "Use evidence from implementation to improve both API and architecture."],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <div className="section-kicker">
          <span>About</span>
          <span>Justin Angelo Perez</span>
        </div>
        <div className="about-hero__grid">
          <h1>
            I build software
            <br />
            from the <em>inside out.</em>
          </h1>
          <div className="about-hero__meta">
            <strong>{siteConfig.title}</strong>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </header>

      <section className="about-story">
        <div className="about-console" aria-label="Current engineering interests">
          <div className="about-console__head">
            <span>engineering.profile</span>
            <span>active</span>
          </div>
          <div className="about-console__statement">
            <span>01</span>
            <strong>Understand the system. Then make it easier to use.</strong>
          </div>
          <div className="about-console__grid">
            <div><small>Application</small><strong>React · Next.js · Laravel · .NET</strong></div>
            <div><small>Systems</small><strong>Rust · C++ · APIs · Databases</strong></div>
            <div><small>Design</small><strong>Architecture · DX · UI/UX</strong></div>
            <div><small>Method</small><strong>Build · Measure · Refine</strong></div>
          </div>
        </div>

        <div className="about-story__copy">
          <span className="overline">Developer · Framework builder · Product engineer</span>
          <h2>I care about making difficult systems understandable.</h2>
          <p>
            My background is rooted in web application development. That work
            led me deeper into framework architecture, programming-language
            experiments, frontend systems and the design of developer-facing APIs.
          </p>
          <p>
            The recurring question is simple: how much complexity can the system
            absorb so the person using it has less to carry?
          </p>
        </div>
      </section>

      <section className="about-focus">
        <div className="section-kicker">
          <span>What I care about</span>
          <span>02</span>
        </div>
        <div className="about-focus__grid">
          {aboutFocusAreas.map((area) => (
            <article key={area.index}>
              <span>{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-kicker">
          <span>How I work</span>
          <span>03</span>
        </div>
        <div className="process-section__heading">
          <h2>Less ceremony.<br />More <em>signal.</em></h2>
          <p>
            A process only matters when it improves the decisions made inside it.
            Mine stays deliberately small and evidence-driven.
          </p>
        </div>
        <ol className="process-list">
          {process.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-cta">
        <span>Selected work</span>
        <h2>See the ideas under implementation.</h2>
        <Link href="/work">Explore work ↗</Link>
      </section>
    </main>
  );
}
