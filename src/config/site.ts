const normalizeSiteUrl = (value: string | undefined) => {
  const candidate = value?.trim();
  if (!candidate) return undefined;

  if (candidate.startsWith("http://") || candidate.startsWith("https://")) {
    return candidate;
  }

  return `https://${candidate}`;
};

const configuredSiteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
const vercelProductionUrl = normalizeSiteUrl(
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
);
const vercelDeploymentUrl = normalizeSiteUrl(process.env.VERCEL_URL);

export const siteConfig = {
  name: "Justin Angelo Perez",
  title: "Software Developer",
  description:
    "Software developer focused on frameworks, developer experience, web applications, and software architecture.",
  location: "Abu Dhabi, United Arab Emirates",
  url:
    configuredSiteUrl ??
    vercelProductionUrl ??
    vercelDeploymentUrl ??
    "http://localhost:3000",
  locale: "en_AE",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "https://github.com/justinangeloperez327",
    email: "mailto:justinangeloperez327@gmail.com",
  },
} as const;
