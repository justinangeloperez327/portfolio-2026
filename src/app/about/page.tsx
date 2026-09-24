import type { Metadata } from "next";
import { EditorialGrid, PageShell, ReadingColumn, Section } from "@/components/layout";
import { DisplayHeading, Eyebrow, Lede, SectionHeading } from "@/components/typography";
import { LinkArrow, MetadataList } from "@/components/ui";
import { InkRule } from "@/components/visual/ink-rule";
import { SectionMarker } from "@/components/visual/section-marker";
import { siteConfig } from "@/config/site";
import { aboutFocusAreas } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Justin Angelo Perez, a software developer focused on web applications, framework design, developer experience, and software architecture.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="about-intro" aria-labelledby="about-title">
        <EditorialGrid>
          <div className="about-intro__title">
            <Eyebrow>Developer · Builder · Learner</Eyebrow>
            <DisplayHeading>
              <span id="about-title">About</span>
            </DisplayHeading>
          </div>
          <div className="about-intro__lede">
            <Lede>
              I build software with a bias toward understandable systems,
              productive developer workflows, and architecture that can evolve.
            </Lede>
          </div>
        </EditorialGrid>
      </section>

      <InkRule />

      <Section className="about-section" id="profile">
        <div className="about-section__heading">
          <SectionMarker index="01" label="Profile" />
          <SectionHeading>From application code into the machinery beneath it.</SectionHeading>
        </div>
        <div className="about-profile">
          <ReadingColumn className="about-profile__copy">
            <p className="lede">
              My background is rooted in web application development, with
              Laravel shaping much of how I think about productive framework
              conventions and application-focused APIs.
            </p>
            <p>
              That interest has expanded into React and TypeScript applications,
              .NET architecture, Rust framework development, C++ framework
              experiments, language design, and frontend runtime ideas.
            </p>
            <p>
              I use those projects to study the same recurring question from
              different levels of the stack: how can powerful software remain
              understandable to the person building with it?
            </p>
          </ReadingColumn>
          <MetadataList
            items={[
              { label: "Name", value: siteConfig.name },
              { label: "Role", value: siteConfig.title },
              { label: "Location", value: siteConfig.location },
              { label: "Primary focus", value: "Web systems · Architecture · DX" },
            ]}
          />
        </div>
      </Section>

      <Section className="about-section" id="focus">
        <div className="about-section__heading">
          <SectionMarker index="02" label="Focus" />
          <SectionHeading>What I spend time thinking about.</SectionHeading>
        </div>
        <div className="about-focus-grid">
          {focusAreas.map((area) => (
            <article key={area.index}>
              <span className="technical-label">{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="about-section" id="approach">
        <div className="about-section__heading">
          <SectionMarker index="03" label="Approach" />
          <SectionHeading>Build, inspect, revise.</SectionHeading>
        </div>
        <ReadingColumn className="about-approach">
          <p>
            I prefer learning through implementation. A framework or language
            experiment exposes assumptions that are easy to miss when a design
            exists only as an architecture diagram.
          </p>
          <p>
            That does not mean building everything from scratch. Reusing strong
            libraries is often the better engineering decision. The useful work
            is deciding where a custom abstraction creates a clearer contract
            and where it only creates another maintenance burden.
          </p>
          <p>
            The same principle applies to application architecture: introduce
            structure when it makes responsibilities easier to understand, not
            because a pattern is fashionable.
          </p>
          <LinkArrow href="/engineering">Read the engineering approach</LinkArrow>
        </ReadingColumn>
      </Section>

      <Section className="about-section about-next" id="next">
        <InkRule />
        <EditorialGrid className="about-next__grid">
          <div className="about-next__heading">
            <SectionMarker index="04" label="Work" />
            <SectionHeading>See the ideas under implementation.</SectionHeading>
          </div>
          <div className="about-next__action">
            <p>
              The project case studies document the architecture, constraints,
              and decisions behind the current work.
            </p>
            <LinkArrow href="/work">Explore selected work</LinkArrow>
          </div>
        </EditorialGrid>
      </Section>
    </PageShell>
  );
}
