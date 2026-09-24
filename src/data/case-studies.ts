import type { CaseStudy } from "@/types/case-study";
import { projects } from "./projects";

function project(slug: string) {
  const match = projects.find((item) => item.slug === slug);
  if (!match) throw new Error(`Unknown project: ${slug}`);
  return match;
}

export const caseStudies: readonly CaseStudy[] = [
  {
    project: project("berserk"),
    role: "Framework design and implementation",
    period: "2026",
    sections: [
      {
        key: "context",
        title: "Context",
        body: [
          "Berserk explores what a convention-driven web framework can look like in Rust when developer experience is treated as a first-class architectural concern.",
          "The project takes inspiration from productive application frameworks while keeping Rust's type system, performance characteristics, and ecosystem at the foundation.",
        ],
      },
      {
        key: "problem",
        title: "Problem",
        body: [
          "Rust web development can expose application developers to substantial framework plumbing. The challenge is to reduce that mechanical work without hiding important behavior or fighting the language.",
        ],
      },
      {
        key: "design-principles",
        title: "Design Principles",
        body: [
          "Berserk favors expressive conventions, predictable defaults, explicit escape hatches, and APIs that read in application-domain terms.",
          "Existing Rust libraries can provide proven infrastructure underneath the framework while Berserk owns the cohesive developer-facing experience.",
        ],
      },
      {
        key: "architecture",
        title: "Architecture",
        body: [
          "The framework is being separated into focused packages such as core framework services, validation, database integration, and ORM capabilities rather than concentrating every responsibility in one crate.",
        ],
      },
      {
        key: "implementation",
        title: "Implementation",
        body: [
          "Implementation work focuses on establishing stable framework primitives first, then composing routing, validation, persistence, and application conventions around those foundations.",
        ],
      },
      {
        key: "developer-experience",
        title: "Developer Experience",
        body: [
          "The target experience is intentionally application-oriented: developers should spend more time expressing models, controllers, validation, and business behavior and less time wiring infrastructure together.",
        ],
      },
      {
        key: "engineering-decisions",
        title: "Engineering Decisions",
        body: [
          "The framework does not attempt to replace strong ecosystem libraries simply to own every implementation detail. The architectural boundary is the developer-facing contract, not a requirement to build every subsystem from scratch.",
        ],
      },
      {
        key: "result",
        title: "Result",
        body: [
          "Berserk remains active development work. The current result is an expanding framework foundation and a clearer contract for how Laravel-like productivity can be explored without pretending Rust is PHP.",
        ],
      },
    ],
  },
  {
    project: project("gungnir"),
    role: "Framework design and implementation",
    period: "2026",
    sections: [
      {
        key: "context",
        title: "Context",
        body: [
          "Gungnir is a C++ web framework experiment centered on approachable application conventions and coroutine-based asynchronous execution.",
        ],
      },
      {
        key: "problem",
        title: "Problem",
        body: [
          "C++ offers control and performance but typical application development can involve substantial ceremony. Gungnir explores whether framework-level conventions can make common web work more approachable without erasing C++ semantics.",
        ],
      },
      {
        key: "design-principles",
        title: "Design Principles",
        body: [
          "The design prioritizes readable application code, framework-managed plumbing, explicit asynchronous behavior, and familiar concepts such as models, controllers, middleware, policies, events, and notifications.",
        ],
      },
      {
        key: "architecture",
        title: "Architecture",
        body: [
          "The planned framework surface spans HTTP routing, application services, persistence, templates, authentication and authorization, middleware, asynchronous runtime concerns, tooling, and testing.",
        ],
      },
      {
        key: "implementation",
        title: "Implementation",
        body: [
          "Development is organized incrementally so runtime and framework primitives can mature before higher-level conveniences depend on them.",
        ],
      },
      {
        key: "developer-experience",
        title: "Developer Experience",
        body: [
          "Gungnir aims for code that communicates application intent directly. Coroutine support is part of that model, but asynchronous syntax should not dominate ordinary controller code.",
        ],
      },
      {
        key: "engineering-decisions",
        title: "Engineering Decisions",
        body: [
          "The project treats ORM behavior, eager loading, route binding, dependency management, and framework conventions as coordinated concerns rather than unrelated utilities.",
        ],
      },
      {
        key: "result",
        title: "Result",
        body: [
          "Gungnir is active framework development. Its value at this stage is the architecture and implementation work used to test how far an application-oriented C++ framework can simplify web development.",
        ],
      },
    ],
  },
  {
    project: project("densleaf"),
    role: "Language design and implementation",
    period: "2026",
    sections: [
      {
        key: "context",
        title: "Context",
        body: [
          "Densleaf is an experimental Rust-based programming language exploring application-oriented grammar rather than adding another conventional web framework API.",
        ],
      },
      {
        key: "problem",
        title: "Problem",
        body: [
          "Framework APIs can reduce boilerplate, but they still inherit the host language's syntax and conceptual overhead. Densleaf asks whether common application concepts can become part of the language grammar itself.",
        ],
      },
      {
        key: "design-principles",
        title: "Design Principles",
        body: [
          "Grammar should be understandable before it is clever. Concepts such as model, controller, middleware, migration, policy, event, listener, notification, and mail are intended to communicate their role directly.",
          "Familiar literals such as arrays with square brackets and objects with braces are preferred where novelty would not improve understanding.",
        ],
      },
      {
        key: "architecture",
        title: "Architecture",
        body: [
          "Rust provides the implementation foundation while the language design separates parsing and grammar concerns from the application concepts exposed to developers.",
        ],
      },
      {
        key: "implementation",
        title: "Implementation",
        body: [
          "Work proceeds from grammar definition and core language behavior toward HTTP, routing, data access, and other application capabilities.",
        ],
      },
      {
        key: "developer-experience",
        title: "Developer Experience",
        body: [
          "The central test is readability: a developer should be able to infer what a construct does from its name and placement without learning a large vocabulary of framework-specific abstractions.",
        ],
      },
      {
        key: "engineering-decisions",
        title: "Engineering Decisions",
        body: [
          "Densleaf is intentionally treated as a language experiment rather than describing every framework feature as new syntax. Grammar is reserved for concepts where language-level treatment creates a meaningful usability advantage.",
        ],
      },
      {
        key: "result",
        title: "Result",
        body: [
          "The project remains experimental. The current outcome is a growing language model and a concrete environment for testing whether application grammar can improve clarity without creating unnecessary magic.",
        ],
      },
    ],
  },
  {
    project: project("quagmire"),
    role: "Frontend framework design",
    period: "2026",
    sections: [
      {
        key: "context",
        title: "Context",
        body: [
          "Quagmire is an experimental frontend framework focused on making reactive application concepts easier to understand for developers approaching modern frontend development.",
        ],
      },
      {
        key: "problem",
        title: "Problem",
        body: [
          "Frontend frameworks often expose lifecycle and reactivity through terminology that is concise once learned but not necessarily self-explanatory to a beginner. Quagmire explores a more descriptive API surface.",
        ],
      },
      {
        key: "design-principles",
        title: "Design Principles",
        body: [
          "Names should communicate intent, reactivity should remain predictable, and performance-oriented compilation should not require developers to think in compiler terminology during normal application work.",
        ],
      },
      {
        key: "architecture",
        title: "Architecture",
        body: [
          "The framework direction combines a Rust-based compiler or transpilation layer with a web runtime designed around a small set of understandable reactive concepts.",
        ],
      },
      {
        key: "implementation",
        title: "Implementation",
        body: [
          "Foundation work is organized around syntax, compilation, runtime behavior, rendering, state relationships, and the tooling needed to make those pieces usable together.",
        ],
      },
      {
        key: "developer-experience",
        title: "Developer Experience",
        body: [
          "Terms such as computed and mount are chosen for the concepts they communicate. New abstractions are added only when they make application behavior easier to reason about.",
        ],
      },
      {
        key: "engineering-decisions",
        title: "Engineering Decisions",
        body: [
          "The project does not pursue a JavaScript-free browser as a goal in itself. Compilation and Rust are implementation tools; the primary product constraint is a coherent frontend development model.",
        ],
      },
      {
        key: "result",
        title: "Result",
        body: [
          "Quagmire remains experimental. Its current result is a defined framework direction for testing beginner-friendly reactive APIs alongside a compiled implementation strategy.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.project.slug === slug);
}
