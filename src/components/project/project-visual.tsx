type ProjectVisualProps = {
  slug: string;
  compact?: boolean;
};

const visualContent = {
  berserk: {
    eyebrow: "Rust · Web framework",
    title: "Application code, not framework plumbing.",
    code: [
      "route.get('/users', UserController.index)",
      "const users = await User.with('projects').all()",
      "return Response.ok(users)",
    ],
    metrics: ["Typed routing", "ORM", "Validation"],
  },
  gungnir: {
    eyebrow: "C++ · Async framework",
    title: "High performance without ceremony.",
    code: [
      "Response async index() {",
      "  auto users = co_await User::all();",
      "  co_return Response::ok(users);",
    ],
    metrics: ["Coroutines", "IoC", "HTTP runtime"],
  },
  densleaf: {
    eyebrow: "Rust · Language design",
    title: "Application concepts as language.",
    code: [
      "model User {",
      "  hasMany posts",
      "  email: string",
    ],
    metrics: ["Grammar", "Compiler", "Application DX"],
  },
  quagmire: {
    eyebrow: "Frontend · Compiler",
    title: "Reactivity that reads like intent.",
    code: [
      "state count = 0",
      "computed doubled = count * 2",
      "mount { render(App) }",
    ],
    metrics: ["Computed", "Mount", "Reactive runtime"],
  },
} as const;

export function ProjectVisual({ slug, compact = false }: ProjectVisualProps) {
  const item = visualContent[slug as keyof typeof visualContent] ?? visualContent.berserk;

  return (
    <div className={`project-visual project-visual--${slug} ${compact ? "project-visual--compact" : ""}`}>
      <div className="project-visual__chrome">
        <span className="project-visual__dot" />
        <span className="project-visual__dot" />
        <span className="project-visual__dot" />
        <span className="project-visual__path">~/projects/{slug}</span>
      </div>

      <div className="project-visual__canvas">
        <div className="project-visual__copy">
          <span className="project-visual__eyebrow">{item.eyebrow}</span>
          <strong>{item.title}</strong>
        </div>

        <div className="project-visual__code" aria-hidden="true">
          {item.code.map((line, index) => (
            <div key={line}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <code>{line}</code>
            </div>
          ))}
        </div>

        <div className="project-visual__metrics" aria-hidden="true">
          {item.metrics.map((metric, index) => (
            <span key={metric}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {metric}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
