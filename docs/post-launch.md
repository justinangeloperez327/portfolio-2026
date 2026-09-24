# Post-launch Operations

## Purpose

Launch is the start of the maintenance lifecycle. The portfolio should remain
accurate, fast, accessible, secure, and representative of current engineering
work without accumulating unnecessary platform complexity.

## Operating cadence

### After every meaningful release

- verify the deployed homepage and changed routes;
- check the browser console and failed network requests;
- verify canonical metadata when routes or content structure change;
- run the relevant Playwright smoke journeys;
- confirm no accessibility regression in the changed interaction;
- confirm the deployment can be rolled back.

### Weekly

- review dependency update pull requests;
- review failed CI or deployment runs;
- review newly reported maintenance/security issues;
- merge dependency updates only after quality checks pass.

### Monthly

- review project statuses, descriptions, technology lists, and case studies;
- check external links and public contact information;
- inspect Core Web Vitals and production errors if telemetry is available;
- review sitemap/robots output after route changes;
- review accessibility on representative desktop and mobile widths.

### Quarterly

- reassess whether the homepage still represents the strongest work;
- archive or rewrite stale case studies rather than allowing them to decay;
- review framework/runtime support windows;
- review security headers and the production Content Security Policy;
- reassess whether analytics is answering a concrete question;
- perform a broader keyboard, zoom, contrast, responsive, and browser review.

## Dependency policy

Dependabot runs weekly for npm and GitHub Actions dependencies. Production and
development npm dependencies are grouped separately.

Updates are not auto-merged. For framework, React, TypeScript, linting, testing,
or Actions changes:

1. read relevant release notes for meaningful upgrades;
2. inspect breaking changes;
3. run the full quality gate;
4. run browser tests when runtime behavior may change;
5. deploy and verify before considering the update complete.

Security updates should be prioritized according to exploitability and actual
project exposure rather than version number alone.

## Content maintenance

The portfolio is a professional artifact, not a project archive. A project
should be featured only while it communicates useful engineering judgment.

When a project materially changes, update the source content modules and case
study together. Avoid claims about performance, adoption, scale, or outcomes
unless they are supported by evidence.

## Monitoring

Do not add monitoring products without a defined operational question.

Useful signals include:

- deployment failures;
- runtime/server errors;
- broken routes;
- Core Web Vitals regressions;
- dependency/security advisories;
- critical external-link failures.

Aggregate, low-data telemetry is preferred over visitor-level tracking.

## Regression response

When a regression is found:

1. determine whether it is content-only or affects runtime behavior;
2. reproduce it against the deployed release;
3. add a regression test when practical;
4. fix on `main`;
5. run `pnpm check` and relevant browser tests;
6. deploy;
7. verify the production behavior.

For a severe production regression, roll back first and diagnose second.

## Portfolio evolution

New visual effects, libraries, backend services, analytics, CMS functionality,
or interactive features should be introduced only when they solve a concrete
portfolio requirement. Preserve the server-first, low-JavaScript architecture
unless evidence justifies changing it.

## Annual review

The `2026` branding should not silently become stale. At the next annual
refresh, decide explicitly whether to rename/rebrand the portfolio, preserve it
as a dated edition, or create a new edition. Update metadata, footer copy,
documentation, screenshots, and deployment configuration consistently.
