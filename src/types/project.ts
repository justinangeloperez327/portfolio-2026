export type ProjectCategory =
  | "Framework"
  | "Programming Language"
  | "Frontend"
  | "Application";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  technologies: readonly string[];
  featured: boolean;
  status: "Active" | "Experimental" | "Archived";
}
