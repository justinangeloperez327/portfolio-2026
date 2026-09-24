import type { Metadata } from "next";
import { contactConversationAreas, contactMethods } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Justin Angelo Perez about software engineering, architecture, framework and product development work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="subpage contact-page">
      <header className="subpage-hero contact-hero">
        <div className="section-label"><span>Contact</span><span>Start here</span></div>
        <h1>Let&apos;s build<br /><em>something.</em></h1>
        <p>Have a project, collaboration or technical problem worth discussing? A concise first message is enough.</p>
      </header>

      <section className="contact-channels">
        {contactMethods.map((method, index) => (
          <a key={method.label} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noreferrer" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>{method.label}</small><strong>{method.value}</strong><p>{method.note}</p></div>
            <span>↗</span>
          </a>
        ))}
      </section>

      <section className="editorial-section conversation-section">
        <div className="section-label"><span>02</span><span>Good reasons to talk</span></div>
        <div className="conversation-grid">
          {contactConversationAreas.map((area, index) => (
            <div key={area}><span>{String(index + 1).padStart(2, "0")}</span><strong>{area}</strong></div>
          ))}
        </div>
      </section>

      <section className="contact-guidance">
        <div className="section-label light"><span>03</span><span>A useful first message</span></div>
        <h2>Context makes the conversation faster.</h2>
        <p>Share the problem, current constraints, expected outcome and the technical context you already have. That is enough to start.</p>
        <a href="mailto:justinangeloperez327@gmail.com">SEND AN EMAIL ↗</a>
      </section>
    </main>
  );
}
