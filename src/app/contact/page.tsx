import type { Metadata } from "next";
import { EditorialGrid, PageShell, Section } from "@/components/layout";
import { DisplayHeading, Eyebrow, Lede, SectionHeading } from "@/components/typography";
import { InkRule } from "@/components/visual/ink-rule";
import { SectionMarker } from "@/components/visual/section-marker";
import { contactConversationAreas, contactMethods } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Justin Angelo Perez about software engineering, architecture, framework, and product development work.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-intro" aria-labelledby="contact-title">
        <EditorialGrid>
          <div className="contact-intro__title">
            <Eyebrow>Contact · Abu Dhabi</Eyebrow>
            <DisplayHeading>
              <span id="contact-title">Start with the problem.</span>
            </DisplayHeading>
          </div>
          <div className="contact-intro__lede">
            <Lede>
              For software engineering, architecture, framework, and product
              development conversations, email is the most direct way to reach
              me.
            </Lede>
          </div>
        </EditorialGrid>
      </section>

      <InkRule />

      <Section className="contact-section" id="channels">
        <div className="contact-section__heading">
          <SectionMarker index="01" label="Channels" />
          <SectionHeading>Where to reach me.</SectionHeading>
        </div>
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <article key={method.label}>
              <span className="technical-label">
                {String(index + 1).padStart(2, "0")} · {method.label}
              </span>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {method.value}
                <span aria-hidden="true">↗</span>
              </a>
              <p>{method.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="contact-section" id="topics">
        <div className="contact-section__heading">
          <SectionMarker index="02" label="Conversations" />
          <SectionHeading>Useful reasons to get in touch.</SectionHeading>
        </div>
        <div className="contact-topics">
          {conversationAreas.map((area, index) => (
            <div key={area}>
              <span className="technical-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{area}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="contact-section contact-note" id="note">
        <InkRule />
        <EditorialGrid>
          <div className="contact-note__heading">
            <SectionMarker index="03" label="A useful first message" />
            <SectionHeading>Context makes the conversation faster.</SectionHeading>
          </div>
          <div className="contact-note__copy">
            <p>
              A short description of the problem, current constraints, expected
              outcome, and relevant technical context is enough to start.
            </p>
            <a
              className="contact-note__email"
              href="mailto:justinangeloperez327@gmail.com"
            >
              Send an email <span aria-hidden="true">↗</span>
            </a>
          </div>
        </EditorialGrid>
      </Section>
    </PageShell>
  );
}
