import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  resumeCapabilities,
  resumeCurrentWork,
  resumeTechnologies,
} from "@/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume overview for Justin Angelo Perez, software developer focused on web applications, architecture, frameworks and developer experience.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-hero">
        <div className="section-kicker">
          <span>Resume</span>
          <span>2026</span>
        </div>
        <div className="resume-hero__grid">
          <div>
            <h1>Justin Angelo<br /><em>Perez.</em></h1>
            <p>{siteConfig.title}</p>
          </div>
          <dl>
            <div><dt>Based in</dt><dd>{siteConfig.location}</dd></div>
            <div><dt>Focus</dt><dd>Architecture · DX · Web systems</dd></div>
            <div><dt>Work</dt><dd>Frameworks · Products · Tooling</dd></div>
          </dl>
        </div>
      </header>

      <section className="resume-summary">
        <span>Profile</span>
        <h2>
          I build web applications and the systems that make building them better.
        </h2>
        <p>
          Product engineering, framework design and developer experience with a
          bias toward clear boundaries, practical performance and maintainable
          software.
        </p>
      </section>

      <section className="resume-section">
        <div className="section-kicker">
          <span>Core expertise</span>
          <span>01</span>
        </div>
        <div className="resume-expertise">
          {resumeCapabilities.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-kicker">
          <span>Technology</span>
          <span>02</span>
        </div>
        <div className="resume-tech">
          {resumeTechnologies.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-kicker">
          <span>Selected engineering work</span>
          <span>03</span>
        </div>
        <div className="resume-project-list">
          {resumeCurrentWork.map((project, index) => (
            <Link href={project.href} key={project.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{project.name}</strong>
                <small>{project.detail}</small>
              </div>
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="resume-contact">
        <p>For verified professional history, project context or collaboration:</p>
        <Link href="/contact">Start a conversation ↗</Link>
      </section>
    </main>
  );
}
