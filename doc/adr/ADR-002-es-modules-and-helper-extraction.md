# ADR-002: Use ES modules and helper extraction

## Status

accepted

## Date

2026-08-05

## Context

The codebase needs stronger maintainability and testability. UI-heavy code is difficult to unit-test directly when mixed with deterministic logic.

## Decision

Adopt ES modules and extract deterministic helper/domain logic into a pure module.

- UI orchestration remains in html5/src/js/hmi.js
- Pure helpers live in html5/src/js/hmi-helpers.js

## Consequences

Positive:

- Improved testability for deterministic logic
- Better separation of concerns and cleaner architecture boundaries
- Easier reuse of logic across UI flows

Negative:

- More files and import surface to manage
- Requires discipline to prevent side effects from leaking into helper module

## Alternatives Considered

- Keep monolithic script
  - Rejected due to poorer testability and maintainability
- Introduce a heavy state management library
  - Rejected to preserve lightweight static client architecture

## Implementation Notes

- Helper API includes dice value computation and sound math helpers
- Coverage policy targets helper module with >=95% thresholds
