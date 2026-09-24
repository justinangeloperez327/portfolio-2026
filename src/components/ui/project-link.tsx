import Link from "next/link";

type ProjectLinkProps = {
  href: string;
  index: string;
  name: string;
  category: string;
  summary: string;
};

export function ProjectLink({
  href,
  index,
  name,
  category,
  summary,
}: ProjectLinkProps) {
  return (
    <Link className="project-link" href={href}>
      <span className="project-link__index" aria-hidden="true">
        {index}
      </span>
      <span className="project-link__content">
        <span className="project-link__meta">{category}</span>
        <span className="project-link__name">{name}</span>
        <span className="project-link__summary">{summary}</span>
      </span>
      <span className="project-link__arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
