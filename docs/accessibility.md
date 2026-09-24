# Accessibility

## Target

The portfolio targets WCAG 2.2 AA as the baseline for design and implementation.

## Implemented foundations

### Keyboard navigation

- A skip link is the first interactive element in the document.
- The main-content target can receive programmatic focus without entering the
  normal tab order.
- Interactive elements receive visible `:focus-visible` treatment.
- Navigation uses native links and the mobile menu uses native
  `details`/`summary` behavior.

### Semantics

- Pages use headings, sections, navigation landmarks, lists, description lists,
  figures, and other native HTML structures where they match the content.
- Decorative ink artwork is hidden from assistive technology.
- Decorative rules are also excluded from the accessibility tree.
- Blueprint diagrams retain textual structure instead of relying on graphics
  alone.

### Motion

- Authored motion respects `prefers-reduced-motion`.
- Content does not require animation to be understood.

### Contrast

- Core text uses ink colors against paper backgrounds.
- A higher-contrast preference strengthens secondary text and hairline borders.
- Forced-colors mode preserves visible borders, status marks, and focus
  indicators.

### Touch and responsive use

- Primary navigation and interactive controls use approximately 44px minimum
  target heights where practical.
- Long technical strings can wrap.
- Content is not hidden merely to fit a narrow viewport.

## Rules

1. Prefer native HTML before adding ARIA.
2. Never communicate status using color alone.
3. Keep focus order aligned with document order.
4. Do not remove focus outlines without an equivalent visible replacement.
5. Decorative graphics must not create screen-reader noise.
6. Every future form control requires an explicit accessible name and useful
   validation messaging.
7. Every meaningful image requires appropriate alternative text.
8. New interactions must be operable without a pointing device.

## Verification still required

Automated tooling cannot prove accessibility. The testing phase should add
automated checks, while final UX review should include keyboard-only navigation,
zoom/reflow inspection, reduced-motion behavior, and representative
screen-reader checks.
