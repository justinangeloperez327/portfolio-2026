import type { Metadata } from "next";
import { EditorialAccent } from "@/components/typography";
import { BrushDivider, InkWash, RedSeal } from "@/components/visual";
import { contactConversationAreas, contactMethods } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Justin Angelo Perez about software engineering, architecture, framework, and product development work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="sumi-page contact-page-v3">
      <header className="sumi-page-hero">
        <InkWash className="sumi-page-hero__wash" size="lg" />
        <div className="sumi-section-index"><span>Contact</span><span>Start here</span></div>
        <div className="sumi-page-hero__grid">
          <h1 className="page-display">Let&apos;s build<br /><EditorialAccent>something.</EditorialAccent></h1>
          <div>
            <p>
              Have a project, collaboration, or technical problem worth discussing?
              A concise first message is enough.
            </p>
            <RedSeal />
          </div>
        </div>
      </header>

      <section className="contact-v3-methods">
        {contactMethods.map((method, index) => (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{method.label}</small>
              <strong>{method.value}</strong>
              <p>{method.note}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </section>

      <section className="contact-v3-reasons">
        <div className="sumi-section-index"><span>02</span><span>Good reasons to talk</span></div>
        <div>
          {contactConversationAreas.map((area, index) => (
            <article key={area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{area}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-v3-guidance">
        <BrushDivider />
        <div className="sumi-section-index sumi-section-index--light">
          <span>03</span><span>A useful first message</span>
        </div>
        <h2 className="section-display section-display--light">Context makes the conversation faster.</h2>
        <p>
          Share the problem, current constraints, expected outcome, and technical
          context you already have. That is enough to start.
        </p>
        <a href="mailto:justinangeloperez327@gmail.com">Send an email ↗</a>
      </section>
    </main>
  );
}
