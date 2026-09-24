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
pnpm lint
pnpm typecheck
pnpm build
```

Or run all checks:

```bash
pnpm check
```

## Engineering principles

- Server Components by default
- Client Components only where interaction requires them
- Strict TypeScript
- Semantic HTML
- Accessibility as a baseline requirement
- SEO-friendly rendering and metadata
- Minimal client-side JavaScript
- Responsive, content-first UI
