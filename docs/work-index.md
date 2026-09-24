# Work Index

## Purpose

The work index is the primary project discovery surface. It presents projects
as an editorial sequence rather than a gallery of interchangeable cards.

## Information hierarchy

1. Work title and positioning
2. Total project count
3. Available project categories
4. Ordered project list
5. Project category, name, and summary

## Data source

The page reads directly from `src/data/projects.ts`. Project metadata must not
be duplicated in the route component.

## Interaction

Each project is one large semantic link. Hover motion is limited to the
directional marker; the content itself remains stable.

## Filtering

The initial portfolio intentionally does not add client-side filtering. Four
projects do not justify filter state, controls, or additional JavaScript.
Filtering should be introduced only when the project collection becomes large
enough that scanning is materially impaired.

## Responsive behavior

The desktop introduction uses an asymmetric title/content split. On smaller
screens the content collapses into natural document order while project rows
retain their existing responsive behavior.
