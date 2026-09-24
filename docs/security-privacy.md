# Security and Privacy

## Security posture

The portfolio is deliberately low-state and server-first. It does not currently
accept credentials, payments, account data, or contact-form submissions.

Baseline response headers:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- restrictive `Permissions-Policy`
- same-origin opener/resource policies

The framework identification header remains disabled and production browser
source maps remain off.

## Content Security Policy

A Content Security Policy is intentionally deferred until the final production
asset and analytics model is known. Adding an incorrect policy now risks either
breaking Next.js behavior or weakening the policy with broad exceptions.

Before launch, derive and test a production CSP against the actual script,
style, image, font, analytics, and deployment origins. Prefer nonces or hashes
where practical instead of broad `unsafe-*` allowances.

## Environment variables

Only values explicitly safe for browsers may use the `NEXT_PUBLIC_` prefix.
Secrets must never use that prefix or be committed to the repository.

Local environment files remain ignored. `.env.example` contains documentation
and non-secret placeholders only.

## Privacy

The current site does not use a contact form or intentionally collect visitor
messages. Contact happens through the published email address or external GitHub
profile.

Analytics is a later group. If analytics is introduced, prefer the least
invasive measurement sufficient for the product question. Document what is
collected, avoid unnecessary identifiers, and reassess whether a privacy notice
or consent mechanism is required for the selected provider and jurisdictions.

## External links

External links opened in a new tab use a restrictive relationship attribute.
Future user-generated URLs must never be rendered without validation.

## Dependency security

Keep Next.js, React, build tooling, and Actions dependencies current. Automated
dependency updates should be reviewed rather than merged solely because a newer
version exists.

## Launch review

Before production:

1. test response headers on the deployed origin;
2. add and validate the production CSP;
3. verify HTTPS and redirect behavior;
4. confirm no secrets exist in client bundles or repository history;
5. review analytics/privacy behavior;
6. run dependency and deployment security checks;
7. verify error pages do not disclose internal implementation details.
