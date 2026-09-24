import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { resumeCapabilities, resumeCurrentWork, resumeTechnologies } from "@/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume overview for Justin Angelo Perez, software developer focused on web applications, architecture, frameworks and developer experience.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="subpage resume-page">
      <header className="subpage-hero resume-hero">
        <div className="section-label"><span>Resume</span><span>2026</span></div>
        <h1>Justin Angelo<br /><em>Perez.</em></h1>
        <div className="resume-identity"><strong>{siteConfig.title}</strong><span>{siteConfig.location}</span></div>
      </header>

      <section className="resume-block">
        <div className="section-label"><span>01</span><span>Profile</span></div>
        <div className="resume-lead">
          <h2>I build web applications and explore the framework, language and runtime decisions that shape developer experience.</h2>
          <dl><div><dt>Role</dt><dd>{siteConfig.title}</dd></div><div><dt>Location</dt><dd>{siteConfig.location}</dd></div><div><dt>Focus</dt><dd>Architecture · DX · Web systems</dd></div></dl>
        </div>
      </section>

      <section className="resume-block">
        <div className="section-label"><span>02</span><span>Core expertise</span></div>
        <div className="resume-expertise">
          {resumeCapabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="resume-block">
        <div className="section-label"><span>03</span><span>Technology</span></div>
        <div className="resume-tech">{resumeTechnologies.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="resume-block">
        <div className="section-label"><span>04</span><span>Selected projects</span></div>
        <div className="resume-project-list">
          {resumeCurrentWork.map((project, index) => (
            <Link href={project.href} key={project.name}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{project.name}</strong><small>{project.detail}</small></div><span>↗</span></Link>
          ))}
        </div>
      </section>

      <section className="resume-block resume-history">
        <div className="section-label"><span>05</span><span>Professional history</span></div>
        <div className="resume-history-note">
          <h2>Verified history only.</h2>
          <p>Employment chronology, education and dates will be added from the source resume rather than reconstructed from incomplete portfolio context.</p>
          <Link href="/contact">Request professional information ↗</Link>
        </div>
      </section>
    </main>
  );
}
