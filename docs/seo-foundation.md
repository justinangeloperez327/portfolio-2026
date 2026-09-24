# SEO Foundation

## Goals

The portfolio should expose crawlable semantic content, stable canonical URLs,
useful page titles and descriptions, and machine-readable discovery routes
without adding client-side SEO dependencies.

## Global metadata

The root layout defines:

- a canonical metadata base;
- title template;
- site description;
- author, creator, and publisher;
- Open Graph defaults;
- Twitter card defaults;
- crawler directives.

Individual routes continue to define their own page title and description where
appropriate.

## Canonical origin

`NEXT_PUBLIC_SITE_URL` is the deployment-specific canonical origin.

The checked-in fallback is suitable for development continuity, but production
deployment should set this variable to the final public domain before launch.
Changing the production domain must not require editing sitemap, robots, or
metadata code.

## Discovery

Next.js metadata routes generate:

- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

The sitemap includes static portfolio routes and every project route from the
canonical project registry.

## Principles

1. Render substantive content as HTML on the server.
2. Use one canonical project source for route discovery.
3. Give every indexable route a useful title and description.
4. Do not stuff keywords into prose or metadata.
5. Do not create thin pages solely to target search phrases.
6. Keep metadata truthful to the visible page.
7. Treat structured data, social-image generation, and deeper canonical review
   as technical SEO work rather than duplicating them here.

## Production requirement

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before production launch.
