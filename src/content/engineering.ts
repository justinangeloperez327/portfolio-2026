export const engineeringPrinciples = [
  {
    index: "01",
    title: "Clarity before cleverness",
    body: "Names, boundaries, APIs, and control flow should help a developer form an accurate mental model of the system.",
  },
  {
    index: "02",
    title: "Conventions should remove decisions",
    body: "Good defaults reduce repeated mechanical choices while preserving explicit escape hatches for cases that genuinely differ.",
  },
  {
    index: "03",
    title: "Developer experience is a system property",
    body: "Documentation cannot repair an incoherent API. The architecture itself should make the intended path easy to discover and hard to misuse.",
  },
  {
    index: "04",
    title: "Measure before optimizing",
    body: "Performance work should respond to evidence and constraints. Complexity added for hypothetical speed is still complexity that must be maintained.",
  },
] as const;

export const engineeringRequestFlow = {
  title: "Application request lifecycle",
  description:
    "A representative framework flow showing where application intent should remain visible.",
  nodes: [
    { id: "request", label: "HTTP Request", detail: "Transport enters the framework boundary." },
    { id: "routing", label: "Routing", detail: "Match route and resolve request context." },
    { id: "middleware", label: "Middleware", detail: "Apply cross-cutting application policy." },
    { id: "controller", label: "Controller", detail: "Coordinate the use case." },
    { id: "domain", label: "Domain / Data", detail: "Execute business and persistence behavior." },
    { id: "response", label: "Response", detail: "Return an explicit application result." },
  ],
} as const;

export const engineeringArchitectureLayers = [
  { id: "application", label: "Application", detail: "Controllers, models, policies, validation, and business behavior." },
  { id: "framework", label: "Framework", detail: "Conventions, lifecycle, dependency resolution, routing, and cohesive APIs." },
  { id: "libraries", label: "Libraries", detail: "Focused ecosystem packages selected for proven infrastructure capabilities." },
  { id: "runtime", label: "Runtime", detail: "Language, asynchronous execution, networking, storage, and operating environment." },
] as const;
