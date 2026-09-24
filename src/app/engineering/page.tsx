import type { Metadata } from "next";
import Link from "next/link";
import { engineeringArchitectureLayers, engineeringPrinciples, engineeringRequestFlow } from "@/content";

export const metadata: Metadata = {
  title: "Engineering",
  description: "Engineering principles, architecture practices and developer-experience approach used by Justin Angelo Perez.",
  alternates: { canonical: "/engineering" },
};

export default function EngineeringPage() {
  return (
    <main className="subpage engineering-page">
      <header className="subpage-hero">
        <div className="section-label"><span>Engineering</span><span>Notes & principles</span></div>
        <h1>How I think<br />about <em>systems.</em></h1>
        <p>Architecture, developer experience, performance and the trade-offs behind the software I build.</p>
      </header>

      <section className="engineering-principles-page">
        {engineeringPrinciples.map((principle) => (
          <article key={principle.index}><span>{principle.index}</span><h2>{principle.title}</h2><p>{principle.body}</p></article>
        ))}
      </section>

      <section className="editorial-section engineering-architecture">
        <div className="section-label"><span>Architecture</span><span>Responsibilities</span></div>
        <h2 className="section-title">Structure should expose responsibility.</h2>
        <div className="architecture-layers">
          {engineeringArchitectureLayers.map((layer, index) => (
            <div key={layer.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{layer.label}</strong><p>{layer.detail}</p></div>
          ))}
        </div>
      </section>

      <section className="editorial-section request-flow">
        <div className="section-label"><span>Developer experience</span><span>Request flow</span></div>
        <h2 className="section-title">Reduce mechanical work, not understanding.</h2>
        <div className="request-flow-list">
          {engineeringRequestFlow.nodes.map((node, index) => (
            <div key={node.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{node.label}</strong><p>{node.detail}</p></div>
          ))}
        </div>
      </section>

      <section className="page-cta dark">
        <span>Trade-offs</span><h2>Complexity needs a reason to exist.</h2><p>I evaluate abstractions against the problem they remove, the failure modes they introduce and whether another developer can still understand the boundary.</p><Link href="/work">See the principles in the work ↗</Link>
      </section>
    </main>
  );
}
