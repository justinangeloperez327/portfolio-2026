import type { Project } from "./project";

export type CaseStudySectionKey =
  | "context"
  | "problem"
  | "design-principles"
  | "architecture"
  | "implementation"
  | "developer-experience"
  | "engineering-decisions"
  | "result";

export type CaseStudySection = {
  key: CaseStudySectionKey;
  title: string;
  body: readonly string[];
};

export type CaseStudy = {
  project: Project;
  role?: string;
  period?: string;
  repository?: string;
  sections: readonly CaseStudySection[];
};
