# Portfolio 2026

Personal software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Design direction

The interface uses a product-first editorial design system focused on strong hierarchy, project-specific technical visuals, accessible interaction, and responsive presentation.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- npm
- GitHub Actions

## Requirements

- Node.js 24 LTS or newer
- npm 11 or newer

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

Or run all checks:

```bash
npm run check
```

## Production

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before the production
build. This value drives canonical metadata, sitemap URLs, robots metadata, and
structured data.

The repository intentionally does not assume a production hostname. Deployment
may use Vercel or another Node.js-compatible platform that supports Next.js 16.

The release gate is:

```bash
npm run check
```

Playwright browser tests are available separately with `npm run test:e2e` after
building and starting the production server.

## Engineering principles

- Server Components by default
- Client Components only where interaction requires them
- Strict TypeScript
- Semantic HTML
- Accessibility as a baseline requirement
- SEO-friendly rendering and metadata
- Minimal client-side JavaScript
- Responsive, content-first UI


## Maintenance

Post-launch maintenance is documented in `docs/post-launch.md`. Dependency
updates are reviewed weekly, while content, accessibility, performance, SEO,
and production behavior are reviewed on a defined cadence. Updates are not
auto-merged solely because a newer version is available.
