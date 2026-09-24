# Navigation System

## Structure

The global navigation exposes five primary destinations:

1. Work
2. Engineering
3. About
4. Resume
5. Contact

The homepage is reached through the site identity rather than a redundant Home
item.

## Desktop

Desktop navigation is deliberately compact. The identity remains on the left
and primary destinations align on the right within the shared page container.

## Mobile

The mobile navigation uses native `details` and `summary` elements. This
keeps the menu functional without client-side JavaScript and preserves the
Server Component default.

Navigation entries receive architectural sequence numbers to make the expanded
menu feel intentional without adding decorative imagery.

## Footer

The footer repeats the primary information architecture and location. It is a
navigation endpoint rather than a large marketing call-to-action.

## Accessibility

- A skip link precedes the site header.
- Navigation landmarks have explicit accessible labels.
- The site identity has a descriptive home label.
- Links inherit the global visible focus treatment.
- Mobile navigation remains keyboard-operable without JavaScript.
- Touch targets are at least 44px where practical.
