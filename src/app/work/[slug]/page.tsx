import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main>
      <p>{project.category}</p>
      <h1>{project.name}</h1>
      <p>{project.summary}</p>
      <p>{project.technologies.join(" · ")}</p>
    </main>
  );
}
