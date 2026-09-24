# Analytics

## Decision

The portfolio does not ship a third-party analytics provider by default.

This is intentional. The site currently has no product requirement that
justifies adding a tracking script, cookies, persistent visitor identifiers, or
another network dependency solely to produce traffic counters.

A small vendor-neutral analytics boundary exists in `src/lib/analytics.ts`.
Future UI code should depend on that boundary rather than importing a provider
SDK directly.

## Questions worth measuring

If analytics is enabled later, measurement should answer specific portfolio
questions:

1. Which project case studies are actually viewed?
2. Do visitors reach the Contact page?
3. Which public external profile links are useful?
4. Which routes have meaningful engagement rather than raw page-view volume?

Do not collect data simply because a provider exposes it.

## Event vocabulary

The initial event contract is intentionally small:

- `project_view`
- `contact_click`
- `external_profile_click`

Event properties must describe the portfolio interaction, not identify the
visitor.

## Data minimization

Do not intentionally send:

- names or email addresses entered by visitors;
- full IP addresses when anonymization or omission is available;
- advertising identifiers;
- cross-site tracking identifiers;
- precise location;
- fingerprinting attributes;
- query-string values that may contain personal data.

Do not enable session replay, heatmaps, advertising attribution, or behavioral
profiling by default.

## Provider requirements

A future provider must be evaluated for:

- cookie and identifier behavior;
- IP handling;
- data retention;
- data residency and international transfers;
- deletion controls;
- bot filtering;
- script weight and Core Web Vitals impact;
- consent requirements for the deployment audience;
- ability to disable unnecessary collection.

Prefer privacy-preserving, aggregate measurement over user-level tracking.

## Consent and notice

Whether a consent mechanism is required depends on the final analytics
implementation and applicable jurisdictions. Do not assume that labeling a tool
"privacy friendly" removes legal or disclosure obligations.

Before enabling production analytics, document the provider, data collected,
purpose, retention, and consent decision.

## Performance

Analytics must not block rendering. Any future client script should load after
critical content and be measured against the site's performance budget.

## Development

Analytics should remain disabled during ordinary local development unless
explicitly testing the integration. Test data must not pollute production
metrics.

## Review trigger

Revisit this decision when the portfolio has a concrete measurement question or
when production hosting supplies privacy-appropriate aggregate telemetry that
can answer it without adding another client-side tracker.
