# Production and Deployment

## Production contract

The application targets Node.js 24.x with pnpm 12.x and a Next.js-compatible
hosting platform. The repository does not bind production to a specific hosting
vendor.

## Required environment

For a custom domain, set:

`NEXT_PUBLIC_SITE_URL=https://your-production-origin.example`

On Vercel, the application can also derive its canonical production origin from
`VERCEL_PROJECT_PRODUCTION_URL` when `NEXT_PUBLIC_SITE_URL` is not set. Set the
explicit variable when a custom domain should be canonical.

Use the final HTTPS origin with no trailing path. The value is public by design
and is used for canonical metadata, sitemap generation, robots metadata, and
structured data.

The application falls back to `http://localhost:3000` only for development.
It no longer invents an unverified production hostname.

## Release gate

Before deployment, `pnpm check` must complete successfully. It covers:

1. Prettier formatting verification;
2. ESLint with zero warnings;
3. strict TypeScript checking;
4. Vitest;
5. the production Next.js build.

Browser smoke tests are configured separately through Playwright. Run them
against the production build before a significant release.

## CI

Pushes to `main` run formatting, linting, type checking, unit tests, and a
production build. CI supplies a non-production canonical origin only to make
metadata generation deterministic during build verification.

## Deployment

A deployment platform should:

- install with pnpm;
- use Node.js 24.x;
- run `pnpm build`;
- start the generated Next.js application using the platform's supported
  Next.js runtime;
- expose only the intended public environment variables;
- enforce HTTPS in production.

Do not use `NEXT_PUBLIC_` for secrets.

## Headers

The application configures baseline security headers through Next.js. Verify
them on the deployed origin because proxies and hosting platforms can modify
response headers.

A production Content Security Policy remains a launch-time task. It must be
derived from the actual production script, style, image, font, analytics, and
hosting origins rather than guessed in source control.

## Deployment verification

After deployment:

1. open the homepage and every primary navigation route;
2. verify all project case-study routes;
3. verify an invalid project returns 404;
4. inspect canonical URLs and structured data;
5. open `/robots.txt` and `/sitemap.xml`;
6. verify HTTPS redirects and security headers;
7. test keyboard navigation and mobile layouts;
8. run Playwright smoke tests;
9. check browser console/network errors;
10. measure Core Web Vitals on the deployed build.

## Rollback

Keep deployment history available on the selected platform. If a release fails
routing, rendering, metadata, security, or accessibility verification, roll
back to the last verified deployment rather than patching production manually.

## Release ownership

Source changes continue to land on `main` for this single-developer project.
Production deployment should still be treated as a distinct release step with
environment configuration and verification.
