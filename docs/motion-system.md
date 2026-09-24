# Motion System

## Purpose

Motion supports hierarchy, orientation, and interaction feedback. It is not a
decorative layer and should not compete with the portfolio's editorial
composition.

## Timing

- Fast: 150 ms — small interaction feedback.
- Base: 220 ms — component state and hover transitions.
- Slow: 300 ms — restrained page-entry and structural reveals.

All standard motion remains within the portfolio's 150–300 ms design range.

## Easing

The system defines two curves:

- `--motion-ease-standard` for state changes and movement already on screen.
- `--motion-ease-enter` for elements entering the composition.

## Current behaviors

### Page entry

The first section inside a page shell receives a short opacity and vertical
reveal. The movement distance is deliberately small.

### Rules

The first structural ink rule can reveal horizontally from its logical start,
reinforcing the drawing/blueprint language without simulating literal brush
animation.

### Links

Interactive links use opacity and a very small diagonal arrow movement. The
text itself does not slide around.

### Project rows

Project rows receive a restrained background change and small inset adjustment
on hover. The interaction remains readable without turning the work index into
a card-animation interface.

## Reduced motion

All authored animation is scoped to
`prefers-reduced-motion: no-preference`.

For users requesting reduced motion, animations and transitions are collapsed
and smooth scrolling is disabled.

## Constraints

Do not add:

- bouncing;
- spring-heavy motion;
- parallax;
- cursor-following effects;
- perpetual decorative animation;
- scroll-jacking;
- large entrance translations;
- motion that is required to understand content.

JavaScript animation libraries should only be introduced if a future
interaction cannot be expressed cleanly with CSS and the added runtime cost is
justified.
