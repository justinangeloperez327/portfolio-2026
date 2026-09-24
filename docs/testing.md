# Testing

## Strategy

Testing is layered around failures that matter for this server-first portfolio.

### Static quality gates

Prettier, ESLint, and strict TypeScript checks protect formatting, code quality,
and type contracts.

### Unit and content-integrity tests

Vitest verifies durable content contracts:

- project slugs are unique and URL-safe;
- every registered project has a case study;
- required project summaries and technology lists are populated.

These tests avoid coupling to presentation implementation details.

### Browser smoke tests

Playwright covers critical user journeys:

- homepage identity and primary navigation;
- Work index to project case study;
- keyboard skip-link behavior;
- 404 behavior for an invalid project slug.

Chromium is the initial browser target. Additional browser engines should be
introduced when cross-browser risk justifies their CI cost.

## Commands

- `pnpm test` — run Vitest.
- `pnpm test:watch` — run Vitest in watch mode.
- `pnpm test:e2e` — run Playwright browser tests.
- `pnpm check` — formatting, linting, type checking, unit tests, and build.

For Playwright, build the application first when testing the production server.

## CI

Unit tests are part of the main quality job before the production build.

Playwright is configured but is intentionally not in the default CI job yet.
Installing browser binaries materially increases CI runtime and cost. A
dedicated browser job should be added when the deployment pipeline is ready to
cache and install Chromium deliberately.

## Future coverage

Later launch-quality work should add automated accessibility checks, metadata
and sitemap assertions, production performance measurement, and additional
browser coverage where evidence shows it is useful.
