# Architectural Layout System

## Objective

The layout system combines a disciplined twelve-column desktop grid with
editorial asymmetry and deliberate negative space. The grid provides alignment;
it should not force every section into equal columns.

## Core primitives

### PageShell

Provides the semantic page boundary and shared maximum content width.

### Section

Provides consistent vertical rhythm between major page regions.

### EditorialGrid

A responsive layout primitive:

- mobile: four columns
- tablet: eight columns
- desktop: twelve columns

Children may define their own column spans where a composition requires
asymmetry.

### ReadingColumn

Caps prose at the design system's reading measure and prevents long-form case
studies from becoming difficult to scan.

### SplitLayout

Provides a primary/secondary editorial composition. It stacks on small screens
and becomes an asymmetric 8/4 arrangement on desktop.

## Composition rules

1. Align important edges to the grid.
2. Prefer asymmetric 7/5, 8/4, or intentionally offset compositions over
   repeated equal cards.
3. Preserve substantial empty space around hero statements and technical
   diagrams.
4. Do not place every element inside a bordered container.
5. Reading content remains narrower than visual and architectural content.
6. Full-width visual moments may break the reading column but not the page
   boundary unless deliberately designed later.
7. Mobile layout prioritizes reading order over preserving desktop geometry.
