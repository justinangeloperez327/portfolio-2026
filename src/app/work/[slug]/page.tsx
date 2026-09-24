import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/case-study";
import { getCaseStudy } from "@/data/case-studies";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  const path = `/work/${study.project.slug}`;

  return {
    title: study.project.name,
    description: study.project.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: study.project.name,
      description: study.project.summary,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title: study.project.name,
      description: study.project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return <CaseStudyLayout study={study} />;
}
