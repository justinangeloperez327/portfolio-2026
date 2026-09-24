import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/engineering", "/about", "/resume", "/contact"];

  return [
    ...routes.map((route) => ({
      url: new URL(route || "/", siteConfig.url).toString(),
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}`, siteConfig.url).toString(),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
