import { SplitLayout } from "@/components/layout/split-layout";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/typography";
import { LinkArrow, MetadataList } from "@/components/ui";
import { SectionMarker } from "@/components/visual/section-marker";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content";

export function ProfileSummary() {
  return (
    <Section className="home-section" id="profile">
      <div className="home-section__heading">
        <SectionMarker index="03" label="Profile" />
        <SectionHeading>Building from product surface to system core.</SectionHeading>
      </div>
      <SplitLayout
        primary={
          <div className="home-profile__copy">
            <p className="lede">
              My work spans application development, framework design, language
              experiments, and the architecture that connects them.
            </p>
            <p>
              I am particularly interested in making powerful systems easier to
              understand: expressive APIs, deliberate conventions, maintainable
              boundaries, and tooling that removes mechanical friction.
            </p>
            <LinkArrow href="/about">More about my work</LinkArrow>
          </div>
        }
        secondary={
          <MetadataList
            items={[
              { label: "Role", value: siteConfig.title },
              { label: "Location", value: siteConfig.location },
              { label: "Focus", value: homeContent.profile.focus },
              { label: "Portfolio", value: "2026" },
            ]}
          />
        }
      />
    </Section>
  );
}
