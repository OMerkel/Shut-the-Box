# ADR-003: Use module service worker and explicit cache manifest

## Status

accepted

## Date

2026-08-05

## Context

The application must behave as a Progressive Web App, support Add to Homescreen, and remain usable offline for core gameplay.

## Decision

Register a module service worker and maintain an explicit asset cache list.

- Service worker file: html5/src/sw.js
- Manifest file: html5/src/manifest.webmanifest
- Registration performed from html5/src/js/hmi.js

## Consequences

Positive:

- Reliable offline startup for precached assets
- Explicit control over cache membership
- Predictable lifecycle for install/activate/fetch handling

Negative:

- Cache list must be updated whenever assets or module dependencies change
- Versioned cache invalidation must be maintained carefully

## Alternatives Considered

- No service worker
  - Rejected because offline and installability requirements would not be met
- Runtime-only caching without explicit pre-cache
  - Rejected due to weak first-offline experience

## Implementation Notes

- Navigation requests use network-first with offline fallback
- Static GET requests use cache-first with runtime cache fill
- Same-origin filtering is used in fetch handling
