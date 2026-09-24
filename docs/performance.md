# Performance

## Budget

The portfolio is intentionally server-first and dependency-light. Performance work should protect that architecture rather than add optimization libraries.

Targets for production review:

- Core Web Vitals in the good range at the 75th percentile where field data exists.
- Minimal client JavaScript for content-only routes.
- No layout shift from decorative or editorial elements.
- No third-party script without a measured product requirement.
- Images and social assets sized and encoded for their rendered use.

## Rendering strategy

Pages and portfolio content remain Server Components by default. Interactive client boundaries should be introduced only when browser state or event handling is required.

Long editorial sections use CSS `content-visibility` where supported so below-the-fold rendering work can be deferred. Intrinsic-size estimates preserve scroll geometry while content is skipped.

Selected repeated visual blocks use CSS containment to limit layout and paint invalidation.

## Build configuration

Production compression remains enabled and browser source maps remain disabled by default. The framework's production optimizer remains responsible for minification, code splitting, and route-level output.

## JavaScript policy

Do not add a client-side animation library for effects already expressible in CSS. Do not add a global state library without shared interactive state. Do not hydrate static content merely for convenience.

## Fonts

The current system-font approach avoids blocking font downloads. If branded web fonts are introduced later, use the Next.js font pipeline, subset aggressively, and verify the visual benefit against transfer and rendering cost.

## Images

When meaningful raster imagery is introduced, use `next/image` with explicit dimensions or a stable aspect ratio. Decorative vector primitives should remain lightweight inline SVG where appropriate.

## Third-party scripts

Analytics and other third-party scripts must be evaluated separately. Load them only after the requirement is established, and prefer strategies that do not compete with initial rendering.

## Verification

Performance optimization is incomplete without measurement. The testing and production groups should verify:

1. production build output;
2. route bundle sizes;
3. Lighthouse/Core Web Vitals;
4. layout stability;
5. mobile CPU/network behavior;
6. any new image or third-party-script cost.

Avoid optimizing synthetic scores at the expense of accessibility, semantics, or maintainability.
