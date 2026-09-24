export const siteConfig = {
  name: "Justin Angelo Perez",
  title: "Software Developer",
  description:
    "Software developer focused on frameworks, developer experience, web applications, and software architecture.",
  location: "Abu Dhabi, United Arab Emirates",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_AE",
  navigation: [
    { label: "Work", href: "/work" },
    { label: "Engineering", href: "/engineering" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
