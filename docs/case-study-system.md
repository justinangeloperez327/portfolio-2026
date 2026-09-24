# Case Study System

## Purpose

Project pages are engineering case studies rather than marketing project
showcases. The system separates reusable presentation from project-specific
content so every study can remain consistent without becoming repetitive.

## Required narrative

Case studies should normally cover these sections in order:

1. Context
2. Problem
3. Design Principles
4. Architecture
5. Implementation
6. Developer Experience
7. Engineering Decisions
8. Result

A project may omit a section when there is no honest material to present.
Sections must not be padded with invented outcomes or metrics.

## Components

- `CaseStudyLayout` composes the complete study.
- `CaseStudyHeader` presents identity, summary, stack, status, and metadata.
- `CaseStudyNav` provides an in-page table of contents.
- `CaseStudySection` renders numbered narrative sections.
- `CaseStudy` and `CaseStudySection` types define the content contract.

## Content principles

- Explain constraints before implementation details.
- Separate design principles from technical decisions.
- Prefer concrete trade-offs over generic claims.
- Do not claim performance improvements without measurements.
- Do not present experimental work as production-proven.
- Results may describe capabilities and lessons when quantitative outcomes do
  not exist.

## Architecture

The case-study presentation is Server Component compatible and requires no
client JavaScript. Project-specific data can later move to MDX or another
content source without replacing the presentation components.

## Navigation

The desktop layout reserves a narrow column for the case-study table of
contents and a wider column for narrative content. Smaller viewports place the
navigation above the narrative in normal document flow.
