# Responsive Design

## Strategy

The portfolio is content-first and fluid rather than designed around a list of
device models. Layout changes occur where the editorial composition needs a
different structure.

## Working ranges

- Small: below 30rem
- Mobile: below 48rem
- Compact desktop/tablet: below 64rem
- Standard desktop: 64rem and above
- Wide canvas: 90rem and above

These values are layout thresholds, not device classifications.

## Fluid foundations

Typography, page gutters, section spacing, and major introduction spacing use
`clamp()` so the layout scales continuously between structural breakpoints.

The page shell remains width constrained on large screens while preserving
usable gutters on narrow screens.

## Narrow-screen behavior

- Two-column content collapses to one column.
- Project rows reorganize without truncating summaries.
- Metadata pairs stack on very narrow screens.
- Resume and contact grids collapse without hiding information.
- Long email addresses and technical strings can wrap.
- Blueprint frames can scroll horizontally when a diagram cannot be reduced
  without losing meaning.

## Medium-screen behavior

Case-study navigation leaves sticky desktop positioning and returns to document
flow. Editorial and split-layout gaps compress before the full mobile
transition.

## Wide-screen behavior

The content canvas grows only to a controlled maximum. Reading measure remains
constrained independently so larger displays do not create excessively long
text lines.

## Media

Images, SVG, video, and canvas elements are prevented from exceeding their
containers by default.

## Constraints

Responsive design must not:

- hide substantive content solely to make a viewport fit;
- depend on hover for access to information;
- create horizontal page scrolling;
- shrink body copy below a comfortable reading size;
- use device-specific user-agent logic;
- duplicate desktop and mobile content trees unless an interaction genuinely
  requires different semantics.

Visual QA across real viewport sizes remains part of the later final UX and
visual-polish groups.
