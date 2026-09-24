import type { Metadata } from "next";
import { LayerDiagram, SystemFlow } from "@/components/blueprint";
import { EditorialGrid, PageShell, ReadingColumn, Section } from "@/components/layout";
import { DisplayHeading, Eyebrow, Lede, SectionHeading } from "@/components/typography";
import { LinkArrow } from "@/components/ui";
import { InkRule } from "@/components/visual/ink-rule";
import { SectionMarker } from "@/components/visual/section-marker";
import {
  engineeringArchitectureLayers,
  engineeringPrinciples,
  engineeringRequestFlow,
} from "@/content";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Engineering principles, architecture practices, and developer-experience approach used by Justin Angelo Perez.",
};

export default function EngineeringPage() {
  return (
    <PageShell>
      <section className="engineering-intro" aria-labelledby="engineering-title">
        <EditorialGrid>
          <div className="engineering-intro__title">
            <Eyebrow>Architecture · DX · Systems</Eyebrow>
            <DisplayHeading>
              <span id="engineering-title">Engineering</span>
            </DisplayHeading>
          </div>
          <div className="engineering-intro__lede">
            <Lede>
              I approach software as a set of boundaries, contracts, and
              trade-offs that should remain understandable as the system grows.
            </Lede>
          </div>
        </EditorialGrid>
      </section>

      <InkRule />

      <Section className="engineering-section" id="principles">
        <div className="engineering-section__heading">
          <SectionMarker index="01" label="Principles" />
          <SectionHeading>How I make engineering decisions.</SectionHeading>
        </div>
        <div className="engineering-principle-list">
          {principles.map((principle) => (
            <article key={principle.index}>
              <span className="technical-label">{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="engineering-section" id="architecture">
        <div className="engineering-section__heading">
          <SectionMarker index="02" label="Architecture" />
          <SectionHeading>Structure should expose responsibility.</SectionHeading>
        </div>
        <ReadingColumn>
          <p className="lede">
            I prefer explicit boundaries and composable layers over large
            abstractions that make ownership difficult to see.
          </p>
          <p>
            A framework should own the application experience without assuming
            it must reinvent every lower-level capability. Proven libraries can
            remain underneath a cohesive framework contract.
          </p>
        </ReadingColumn>
        <LayerDiagram
          title="Framework responsibility layers"
          description="Application intent stays at the top; infrastructure details remain below the framework contract."
          layers={architectureLayers}
        />
      </Section>

      <Section className="engineering-section" id="developer-experience">
        <div className="engineering-section__heading">
          <SectionMarker index="03" label="Developer experience" />
          <SectionHeading>Reduce mechanical work, not understanding.</SectionHeading>
        </div>
        <ReadingColumn>
          <p>
            Developer experience is not synonymous with fewer characters.
            Productive APIs remove repetitive plumbing while preserving a clear
            model of what the software is doing.
          </p>
          <p>
            I favor application-language concepts such as models, controllers,
            middleware, policies, events, validation, and explicit responses
            when those concepts make responsibilities easier to recognize.
          </p>
        </ReadingColumn>
        <SystemFlow blueprint={requestFlow} />
      </Section>

      <Section className="engineering-section" id="trade-offs">
        <div className="engineering-section__heading">
          <SectionMarker index="04" label="Trade-offs" />
          <SectionHeading>Complexity needs a reason to exist.</SectionHeading>
        </div>
        <ReadingColumn className="engineering-tradeoffs">
          <p>
            Abstraction, compilation, asynchronous execution, code generation,
            and custom runtimes can all be useful. None is automatically an
            improvement.
          </p>
          <p>
            I evaluate them against the same questions: What problem disappears?
            What new failure mode appears? Can another developer understand the
            boundary? Is the performance benefit measurable? Can the design be
            changed later without rewriting the application?
          </p>
          <LinkArrow href="/work">See these principles in the work</LinkArrow>
        </ReadingColumn>
      </Section>
    </PageShell>
  );
}
