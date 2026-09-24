import type { Metadata } from "next";
import { EditorialGrid, PageShell, Section } from "@/components/layout";
import { DisplayHeading, Eyebrow, Lede, SectionHeading } from "@/components/typography";
import { LinkArrow, MetadataList, Tag } from "@/components/ui";
import { InkRule } from "@/components/visual/ink-rule";
import { SectionMarker } from "@/components/visual/section-marker";
import { siteConfig } from "@/config/site";
import {
  resumeCapabilities,
  resumeCurrentWork,
  resumeTechnologies,
} from "@/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume overview for Justin Angelo Perez, software developer focused on web applications, architecture, frameworks, and developer experience.",
};

export default function ResumePage() {
  return (
    <PageShell>
      <section className="resume-intro" aria-labelledby="resume-title">
        <EditorialGrid>
          <div className="resume-intro__title">
            <Eyebrow>Professional profile · 2026</Eyebrow>
            <DisplayHeading>
              <span id="resume-title">Resume</span>
            </DisplayHeading>
          </div>
          <div className="resume-intro__lede">
            <Lede>
              Software developer working across application engineering,
              architecture, framework design, and developer experience.
            </Lede>
          </div>
        </EditorialGrid>
      </section>

      <InkRule />

      <Section className="resume-section" id="profile">
        <div className="resume-section__heading">
          <SectionMarker index="01" label="Profile" />
          <SectionHeading>{siteConfig.name}</SectionHeading>
        </div>
        <div className="resume-profile">
          <p className="lede">
            I build web applications and explore the framework, language, and
            runtime decisions that shape how developers work with software.
          </p>
          <MetadataList
            items={[
              { label: "Role", value: siteConfig.title },
              { label: "Location", value: siteConfig.location },
              { label: "Focus", value: "Architecture · DX · Web systems" },
            ]}
          />
        </div>
      </Section>

      <Section className="resume-section" id="capabilities">
        <div className="resume-section__heading">
          <SectionMarker index="02" label="Capabilities" />
          <SectionHeading>Areas of practice.</SectionHeading>
        </div>
        <div className="resume-capabilities">
          {resumeCapabilities.map((capability, index) => (
            <div key={capability}>
              <span className="technical-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{capability}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="resume-section" id="technology">
        <div className="resume-section__heading">
          <SectionMarker index="03" label="Technology" />
          <SectionHeading>Tools and languages used across the work.</SectionHeading>
        </div>
        <div className="resume-technologies" aria-label="Technology list">
          {resumeTechnologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </Section>

      <Section className="resume-section" id="current-work">
        <div className="resume-section__heading">
          <SectionMarker index="04" label="Current work" />
          <SectionHeading>Independent engineering projects.</SectionHeading>
        </div>
        <div className="resume-projects">
          {resumeCurrentWork.map((project, index) => (
            <article key={project.name}>
              <span className="technical-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </div>
              <LinkArrow href={project.href}>Case study</LinkArrow>
            </article>
          ))}
        </div>
      </Section>

      <Section className="resume-section resume-history" id="experience">
        <div className="resume-section__heading">
          <SectionMarker index="05" label="Experience" />
          <SectionHeading>Professional history.</SectionHeading>
        </div>
        <div className="resume-history__notice">
          <p>
            Employment chronology, education, and verified dates will be added
            from the source resume rather than reconstructed from incomplete
            portfolio context.
          </p>
          <LinkArrow href="/contact">Request professional information</LinkArrow>
        </div>
      </Section>
    </PageShell>
  );
}
