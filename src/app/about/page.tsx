import type { Metadata } from "next";
import Link from "next/link";
import { EditorialAccent } from "@/components/typography";
import { BrushDivider, InkWash, RedSeal } from "@/components/visual";
import { siteConfig } from "@/config/site";
import {
  aboutFocusAreas,
  engineeringPrinciples,
  resumeTechnologies,
} from "@/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Justin Angelo Perez, a software developer focused on web applications, framework design, developer experience, and software architecture.",
  alternates: { canonical: "/about" },
};

const process = [
  ["Understand", "Define the problem, constraints, and users before choosing architecture."],
  ["Simplify", "Remove concepts and mechanical work that do not improve the outcome."],
  ["Design", "Set clear boundaries, contracts, data flow, and failure behavior."],
  ["Build", "Implement the smallest coherent version that proves the direction."],
  ["Verify", "Test behavior, edge cases, assumptions, and developer experience."],
  ["Refine", "Use implementation evidence to improve the API and architecture."],
] as const;

export default function AboutPage() {
  return (
    <main className="sumi-page about-page-v3">
      <header className="sumi-page-hero about-page-v3__hero">
        <InkWash className="sumi-page-hero__wash" size="lg" />
        <div className="sumi-section-index">
          <span>About</span>
          <span>{siteConfig.location}</span>
        </div>
        <div className="sumi-page-hero__grid">
          <h1 className="page-display">I build software<br />from the <EditorialAccent>inside out.</EditorialAccent></h1>
          <div>
            <p>
              My work spans application development, framework design, language
              experiments, and the architecture that connects them.
            </p>
            <RedSeal />
          </div>
        </div>
      </header>

      <section className="about-v3-story">
        <div className="sumi-section-index"><span>01</span><span>Story</span></div>
        <div className="about-v3-story__grid">
          <h2 className="section-display">Difficult systems should still be understandable.</h2>
          <div>
            <p>
              My background is rooted in web application development. Building
              products pushed me deeper into frameworks, programming-language
              experiments, frontend systems, and developer-facing APIs.
            </p>
            <p>
              The recurring question is how much complexity the system can absorb
              so the developer has less mechanical work without losing clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="about-v3-focus">
        <div className="sumi-section-index"><span>02</span><span>What I care about</span></div>
        <div className="about-v3-focus__grid">
          {aboutFocusAreas.map((area) => (
            <article key={area.index}>
              <span>{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-v3-principles">
        <div className="sumi-section-index sumi-section-index--light">
          <span>03</span><span>Engineering</span>
        </div>
        <div className="about-v3-principles__list">
          {engineeringPrinciples.map((principle) => (
            <article key={principle.index}>
              <span>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-v3-process">
        <div className="sumi-section-index"><span>04</span><span>Process</span></div>
        <div className="about-v3-process__heading">
          <h2 className="editorial-statement">Less ceremony.<br />More <EditorialAccent>signal.</EditorialAccent></h2>
          <p>A process matters when it improves the decisions made inside it.</p>
        </div>
        <ol>
          {process.map(([title, detail], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-v3-stack">
        <BrushDivider />
        <div className="sumi-section-index"><span>05</span><span>Technology</span></div>
        <div className="about-v3-stack__list">
          {resumeTechnologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <Link className="sumi-text-link" href="/projects">See the work ↗</Link>
      </section>
    </main>
  );
}
