import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main>
      <h1>Work</h1>
      <p>Selected framework, language, frontend, and application work.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
            <p>{project.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
