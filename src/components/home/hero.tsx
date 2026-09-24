import { EditorialGrid } from "@/components/layout/editorial-grid";
import { DisplayHeading, EditorialAccent, Eyebrow, Lede } from "@/components/typography";
import { LinkArrow, StatusIndicator } from "@/components/ui";
import { InkMark } from "@/components/visual/ink-mark";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <EditorialGrid className="home-hero__grid">
        <div className="home-hero__intro">
          <Eyebrow>Software architecture · Web engineering</Eyebrow>
          <DisplayHeading>
            <span id="home-hero-title">{siteConfig.name}</span>
          </DisplayHeading>
        </div>

        <div className="home-hero__statement">
          <Lede>
            I design and build software systems with an emphasis on{" "}
            <EditorialAccent>clarity</EditorialAccent>, developer experience,
            and durable architecture.
          </Lede>
          <div className="home-hero__actions">
            <LinkArrow href="/work">View selected work</LinkArrow>
            <LinkArrow href="/engineering">Engineering approach</LinkArrow>
          </div>
        </div>

        <div className="home-hero__ink" aria-hidden="true">
          <InkMark />
        </div>

        <div className="home-hero__meta">
          <StatusIndicator label="Portfolio 2026" />
          <p>{siteConfig.location}</p>
        </div>
      </EditorialGrid>
    </section>
  );
}
