# ADR-001: Remove jQuery and jQuery UI

## Status

accepted

## Date

2026-08-05

## Context

The application historically used jQuery and jQuery UI for tabs, accordion, and UI interactions. The modernization objective requires removing third-party UI dependencies while preserving behavior and accessibility.

## Decision

Use native browser APIs and custom logic in ES modules instead of jQuery/jQuery UI.

## Consequences

Positive:

- Lower dependency and supply-chain risk
- Smaller runtime footprint and reduced startup overhead
- Better control over accessibility semantics and keyboard behavior
- Simpler long-term maintenance with modern browser support

Negative:

- More in-house code for widget behavior
- Need to keep keyboard interactions and ARIA behavior regression-tested

## Alternatives Considered

- Keep jQuery/jQuery UI and upgrade versions
  - Rejected due to continued dependency overhead and less direct control
- Replace with another UI framework
  - Rejected to keep static lightweight deployment and avoid new dependencies

## Implementation Notes

- UI behavior implemented in html5/src/js/hmi.js
- Tabs and accordion use direct event handlers and ARIA attributes
