# Design System Foundation

## Direction

The portfolio uses an architectural editorial system influenced by Japanese
modernism, sumi-e restraint, and Swiss grid discipline. The visual language
should communicate precision and engineering craft rather than decoration.

## Color tokens

| Token | Value | Purpose |
| --- | --- | --- |
| Ink | `#111111` | Primary text, focus, strong rules |
| Deep Ink | `#242424` | Secondary text |
| Paper | `#F4F1E8` | Primary background |
| Warm White | `#FAF9F5` | Elevated paper surfaces |
| Stone | `#AAA69D` | Quiet supporting detail |
| Vermilion | `#A83F2B` | Rare functional accent |

Vermilion is intentionally not a decorative brand color. Use it only when a
small functional accent materially improves hierarchy.

## Typography

- Sans-serif is the primary interface and technical type family.
- Serif is reserved for controlled editorial accents.
- Body copy starts at 16px.
- Reading measure is capped near 72 characters.
- Display typography uses tight tracking and responsive scaling.

## Spacing

Page and section spacing use fluid `clamp()` tokens so the composition scales
without a large collection of breakpoint-specific values.

## Motion

Motion should remain between 150–300ms. Reduced-motion preferences disable
nonessential animation and smooth scrolling.

## Accessibility baseline

- Visible keyboard focus
- Readable body size and line height
- High-contrast ink-on-paper palette
- Reduced-motion support
- Semantic content remains independent of visual styling

## Reusable primitives

Global utility primitives are intentionally limited to layout and typography:
`container-page`, `section-space`, `eyebrow`, `display`, `heading`,
`lede`, `muted`, and `hairline`.

Component-specific visual decisions belong in later component groups.
