# Sumi-e Visual Language

## Purpose

Sumi-e is used as a compositional influence, not as a theme or cultural
decoration. The portfolio borrows its restraint, irregularity, negative space,
and contrast between deliberate structure and organic marks.

## Principles

### 1. Negative space is structural

Empty paper is part of the composition. Do not fill sections simply because
space is available.

### 2. Ink marks are rare

Brush marks should identify major moments such as the hero or a case-study
transition. They must not become repeating background decoration.

### 3. Imperfection is controlled

Ink rules use slight width, opacity, and edge variation. Interface alignment,
typography, navigation, and technical diagrams remain precise.

### 4. Black carries hierarchy

Most hierarchy comes from scale, spacing, density, and ink weight rather than
multiple colors.

### 5. Vermilion is functional

The muted vermilion token may be used for a small active marker, annotation, or
important interaction state. It is not a general decorative accent.

### 6. Japanese text requires meaning

Japanese characters are permitted only where the translation is semantically
correct and useful. Do not scatter characters as visual ornament.

Approved examples:

- 設計 — design
- 構造 — structure
- 技術 — engineering

English remains the primary content language.

## Primitives

### InkMark

An organic SVG brush form for sparse large-scale composition. It inherits
`currentColor`, allowing the surrounding design system to control tone.

### InkRule

A restrained irregular horizontal rule. Use it to separate major editorial
regions, not every content block.

### SectionMarker

A compact numbered editorial marker for architectural sequencing.

## Avoid

- faux parchment textures
- cherry blossoms, torii, waves, or other literal Japanese motifs
- decorative kanji
- excessive brush fonts
- random splatters
- ink effects behind body copy
- animation that imitates painting on every page load
- sacrificing legibility for visual atmosphere
