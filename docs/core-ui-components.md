# Core UI Components

## Direction

Core interface components remain visually quiet. They support the editorial
layout rather than turning the portfolio into a conventional dashboard or card
library.

## Components

### LinkArrow

A text-forward navigation action with a directional mark. Use for meaningful
internal destinations rather than every inline link.

### Tag

Compact metadata for technologies and classifications. Tags are deliberately
flat and minimally bordered.

### StatusIndicator

Communicates concise project or availability state. The accent tone is reserved
for states that need additional emphasis.

### MetadataList

Semantic definition-list presentation for project facts, dates, roles, stack,
and other paired metadata.

### ProjectLink

A large editorial project row designed for selected-work indexes. It uses
hierarchy and whitespace instead of a boxed card.

### SkipLink

Keyboard-accessible bypass navigation. Hidden until focused.

## Rules

1. Prefer semantic HTML before adding component abstraction.
2. Components should work without JavaScript unless interaction requires it.
3. Avoid generic elevated cards, drop shadows, gradients, and pill-heavy UI.
4. Interaction states use contrast, underline, spacing, and subtle movement.
5. All interactive components require visible keyboard focus.
6. Minimum practical touch target is 44px.
7. Decorative arrows are hidden from assistive technology.
