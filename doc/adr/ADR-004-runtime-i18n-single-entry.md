# ADR-004: Runtime internationalization with single entry page

## Status

accepted

## Date

2026-08-05

## Context

The application previously used separate language entry pages. This increased duplication and synchronization effort. The product requirement now mandates internationalization through runtime locale selection and dynamic text binding.

## Decision

Use one HTML entry page and a locale dictionary module for runtime text binding.

- Entry page: html5/src/index.html
- Locale dictionary: html5/src/js/locale-dictionary.js
- Runtime binder: html5/src/js/hmi.js

Language selection is provided in the Options tab and persisted in local storage. The default language is English.

Requirements traceability:

- FR-01: Single entry page architecture
- FR-05: Runtime language selection in Options
- FR-06: Locale-driven runtime text binding
- FR-07: Persist and restore selected locale
- FR-08: English fallback for unsupported locales
- FR-13: Shared English legal/about content across locales
- NFR-06: Runtime internationalization robustness
- NFR-08: Legal consistency across locales

## Consequences

Positive:

- Single source of UI structure and behavior
- Reduced duplication between language versions
- Easier feature evolution and consistency
- Better fit for testable architecture and PWA caching

Negative:

- Runtime translation binding adds complexity in the UI controller
- Rich text sections require careful template maintenance

## Alternatives Considered

- Keep dual-page approach
  - Rejected due to duplication and maintenance overhead
- Introduce external i18n framework
  - Rejected to keep dependency footprint low for this project

## Implementation Notes

- index_de.html is removed
- Service worker cache list updated to include locale dictionary module
- Runtime language switching rebinds localized rules/about sections and re-initializes accordions

Linked requirements baseline:

- [doc/requirements.md](../requirements.md)
