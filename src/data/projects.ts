import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    slug: "berserk",
    name: "Berserk",
    category: "Framework",
    summary:
      "A Rust web framework exploring expressive developer experience, strong conventions, and high-performance foundations.",
    technologies: ["Rust"],
    featured: true,
    status: "Active",
  },
  {
    slug: "gungnir",
    name: "Gungnir",
    category: "Framework",
    summary:
      "A C++ web framework exploring coroutine-based asynchronous application development and approachable framework conventions.",
    technologies: ["C++"],
    featured: true,
    status: "Active",
  },
  {
    slug: "densleaf",
    name: "Densleaf",
    category: "Programming Language",
    summary:
      "An experimental Rust-based programming language focused on readable application grammar and developer ergonomics.",
    technologies: ["Rust"],
    featured: true,
    status: "Experimental",
  },
  {
    slug: "quagmire",
    name: "Quagmire",
    category: "Frontend",
    summary:
      "An experimental frontend framework designed around understandable reactive concepts and a beginner-friendly API.",
    technologies: ["Rust", "Web"],
    featured: false,
    status: "Experimental",
  },
];
