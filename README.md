# Portfolio 2026

Personal software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Design direction

The interface is being developed as an architectural portfolio influenced by Japanese sumi-e ink painting: restrained, asymmetric, monochromatic, spacious, and content-led.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm
- GitHub Actions

## Requirements

- Node.js 24 LTS or newer
- pnpm 12.6 or newer

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Quality checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Or run all checks:

```bash
pnpm check
```

## Production

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before the production
build. This value drives canonical metadata, sitemap URLs, robots metadata, and
structured data.

The repository intentionally does not assume a production hostname. Deployment
may use Vercel or another Node.js-compatible platform that supports Next.js 16.

The release gate is:

```bash
pnpm check
```

Playwright browser tests are available separately with `pnpm test:e2e` after
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
