# Software Blueprint System

## Purpose

Software blueprints explain architecture as part of the portfolio narrative.
They are not decorative illustrations. Each blueprint should make a system
boundary, request path, dependency, data relationship, or architectural layer
easier to understand.

## Components

### BlueprintFrame

Shared semantic `figure` container with title, description, and blueprint
canvas.

### SystemFlow

Ordered flow for request lifecycles, pipelines, compilation stages, event
processing, and other directional sequences.

### LayerDiagram

Layered architecture presentation for application boundaries, framework layers,
runtime stacks, and dependency direction.

### RelationshipDiagram

Node and relationship presentation for modules, entities, services, packages,
and other connected concepts.

## Data contract

Blueprints use typed nodes and connections. Diagram content remains separate
from presentation so project case studies can define architecture declaratively.

## Rules

1. Every blueprint must explain a real architectural idea.
2. Prefer text and CSS over rasterized architecture screenshots.
3. Keep labels short enough to scan.
4. Use arrows only when direction has meaning.
5. Never communicate relationships through color alone.
6. Preserve useful reading order without CSS.
7. Do not fabricate architecture that is not implemented or intentionally
   planned.
8. Complex diagrams may later use SVG, but should retain an accessible textual
   representation.

## Visual language

Blueprints use the portfolio's hairline borders, technical labels, paper
background, and restrained typography. They intentionally resemble engineering
drawings rather than dashboard cards.
