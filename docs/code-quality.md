# Code Quality

## Quality gate

The canonical local quality command is `pnpm check`. It runs formatting verification, ESLint, TypeScript, unit tests, and the production build.

Formatting is deterministic through Prettier. Generated framework, coverage, and browser-test artifacts are excluded from formatting and lint traversal.

## Type safety

TypeScript remains in strict mode with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, and consistent file-name casing enabled. New code should resolve type uncertainty rather than weaken compiler settings globally.

## Content ownership

Canonical copy belongs in `src/content` or canonical data registries rather than being duplicated inside presentation components. Components should primarily own structure and rendering behavior.

The homepage principles and profile summary now consume the existing home content module instead of maintaining parallel copies.

## Component rules

- Prefer Server Components unless browser state or events are required.
- Prefer semantic HTML over generic wrappers plus ARIA.
- Keep components focused on one presentation responsibility.
- Avoid abstractions that only reduce line count.
- Keep route-specific metadata with the route.
- Keep reusable content/data independent from page layout.

## Dependency discipline

A dependency must solve a concrete requirement better than the platform or existing stack. Avoid adding utility libraries for behavior already available in JavaScript, CSS, React, or Next.js.

## Review standard

Before merging future work:

1. run `pnpm format:check`;
2. run ESLint with zero warnings;
3. run strict type checking;
4. run unit tests;
5. verify the production build;
6. add browser tests when behavior crosses a critical user journey.

Code quality is treated as an architectural constraint rather than a cleanup phase.
