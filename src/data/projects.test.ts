import { describe, expect, it } from "vitest";
import { getCaseStudy } from "./case-studies";
import { projects } from "./projects";

describe("project content integrity", () => {
  it("uses unique URL-safe slugs", () => {
    const slugs = projects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(
      slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)),
    ).toBe(true);
  });

  it("provides a case study for every project", () => {
    for (const project of projects) {
      expect(getCaseStudy(project.slug)?.project.slug).toBe(project.slug);
    }
  });

  it("keeps required project content populated", () => {
    for (const project of projects) {
      expect(project.summary.trim().length).toBeGreaterThan(20);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });
});
