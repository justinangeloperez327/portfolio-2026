# Content Architecture

## Purpose

Portfolio content is separated from presentation when it represents reusable,
structured information. Route components remain responsible for page
composition; content modules own lists, labels, project records, case studies,
and other data that should not be buried inside JSX.

## Source layout

- `src/config/site.ts` — site identity and global navigation.
- `src/data/projects.ts` — canonical project registry.
- `src/data/case-studies.ts` — long-form project narratives.
- `src/content/home.ts` — homepage editorial content.
- `src/content/engineering.ts` — engineering principles and conceptual diagrams.
- `src/content/about.ts` — About-page focus areas.
- `src/content/resume.ts` — verified resume-level capabilities and current work.
- `src/content/contact.ts` — public contact channels and conversation areas.

## Rules

1. Keep canonical facts in one source.
2. Do not duplicate project status or summaries outside the project registry
   when they can be derived from it.
3. Keep long-form case-study content separate from project-index metadata.
4. Page-specific prose can remain in a route when it is unique and tightly
   coupled to that page's narrative.
5. Repeated structured lists belong in content modules.
6. Content modules must remain serializable and presentation-independent.
7. Do not introduce a CMS until editing frequency or collaboration creates a
   real need for one.
8. Do not introduce MDX merely to move TypeScript content into another file
   format. Use it later if richer authoring becomes valuable.

## Content lifecycle

Content should move through four states:

1. Source fact — verified project, professional, or contact information.
2. Structured content — typed data or a focused content module.
3. Presentation — Server Components render the content.
4. Metadata/SEO — canonical content is reused where appropriate rather than
   manually diverging.

## Future CMS boundary

A future CMS should replace the content/data source layer, not the component
system. Project, case-study, and blueprint contracts provide the migration
boundary.
