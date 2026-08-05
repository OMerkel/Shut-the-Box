# Shut the Box Requirements Specification

## 1. Document Purpose

This document defines a high-quality, structured requirements baseline for the current implementation of Shut the Box.

- Scope: HTML5/PWA client in [html5/src](../html5/src)
- Version context: app version 0.4 in [html5/package.json](../html5/package.json)

## 2. Product Scope

Shut the Box is a browser-first dice game (PWA-capable), with runtime internationalization, optional sound effects, and offline-capable app shell behavior.

## 3. Stakeholders and Users

- End users playing the game on desktop/mobile browsers
- Maintainers extending game logic, localization, and PWA behavior
- Test/quality owners validating behavior via Vitest and Playwright

## 4. Functional Requirements (FR)

### 4.1 FR List

| ID | Requirement (shall statement) | Priority | Verification |
| --- | --- | --- | --- |
| FR-01 | The application shall provide a single web entry point and render the game board UI with tabs for Board, Rules, Options, and About. | Must | Manual UI inspection; code review in [html5/src/index.html](../html5/src/index.html) and [html5/src/js/hmi.js](../html5/src/js/hmi.js) |
| FR-02 | The application shall allow the user to roll dice by interacting with dice controls and display randomized die faces in the inclusive range 1..6. | Must | Automated checks in [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js), helper correctness in [html5/src/test/hmi-helpers.test.js](../html5/src/test/hmi-helpers.test.js) |
| FR-03 | The application shall support resetting a game round by reopening all flaps through the New control. | Must | Automated checks in [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js) |
| FR-04 | The application shall support a single-die mode toggle that affects result presentation (second die hidden in single-die mode). | Should | Implementation review in [html5/src/js/hmi.js](../html5/src/js/hmi.js) |
| FR-05 | The application shall provide runtime language selection in Options for English, Deutsch, Italiano, Français, and Español. | Must | Automated checks in [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js) and [html5/src/test/locale-dictionary.test.js](../html5/src/test/locale-dictionary.test.js) |
| FR-06 | The application shall localize UI labels and game/rules content according to the selected locale. | Must | Automated checks in [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js); locale bundle logic in [html5/src/js/locale-dictionary.js](../html5/src/js/locale-dictionary.js) |
| FR-07 | The application shall persist selected locale in browser local storage and restore it on reload. | Must | Automated checks in [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js); implementation in [html5/src/js/hmi.js](../html5/src/js/hmi.js) |
| FR-08 | The application shall use English as the fallback locale for unsupported or malformed locale inputs. | Must | Automated checks in [html5/src/test/locale-dictionary.test.js](../html5/src/test/locale-dictionary.test.js) |
| FR-09 | The application shall provide sound intensity options Off, Soft, and Normal for dice roll audio and persist the chosen value. | Must | Automated checks in [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js), [html5/src/test/hmi-helpers.test.js](../html5/src/test/hmi-helpers.test.js) |
| FR-10 | The application shall play synthetic dice roll sound when sound is enabled and browser audio capabilities are available. | Should | Implementation review in [html5/src/js/hmi.js](../html5/src/js/hmi.js) and helper math tests in [html5/src/test/hmi-helpers.test.js](../html5/src/test/hmi-helpers.test.js) |
| FR-11 | The application shall register a module service worker and cache required static assets for offline-capable behavior. | Must | Implementation in [html5/src/sw.js](../html5/src/sw.js), runtime registration in [html5/src/js/hmi.js](../html5/src/js/hmi.js) |
| FR-12 | The application shall serve a cached app shell for navigation requests when offline (including unknown routes). | Must | Automated checks in [html5/src/e2e/pwa-offline.spec.js](../html5/src/e2e/pwa-offline.spec.js) |
| FR-13 | The About panel legal/explanatory HTML shall be a single shared English source reused across locales. | Must | Implementation in [html5/src/js/locale-dictionary.js](../html5/src/js/locale-dictionary.js) |
| FR-14 | The application shall provide keyboard-operable tabs and accordions with basic ARIA semantics. | Should | Implementation review in [html5/src/js/hmi.js](../html5/src/js/hmi.js) |

### 4.2 Functional Notes

- Rules text intentionally describes multiple play variants and does not enforce one strict ruleset.
- The product is fully client-side and does not include server-backed gameplay or player accounts.

## 5. Non-Functional Requirements (NFR)

### 5.1 NFR List

| ID | Quality Attribute | Requirement (shall statement) | Measurement / Acceptance | Evidence |
| --- | --- | --- | --- | --- |
| NFR-01 | Maintainability | The codebase shall keep UI orchestration and pure helper logic separated. | UI orchestration in one module, pure deterministic helper functions in dedicated module. | [html5/src/js/hmi.js](../html5/src/js/hmi.js), [html5/src/js/hmi-helpers.js](../html5/src/js/hmi-helpers.js), [doc/software_architecture.md](software_architecture.md) |
| NFR-02 | Testability | Helper logic shall be unit-tested with automated tests and enforced coverage gates. | Vitest config defines 95% thresholds for statements/branches/functions/lines on helper module. | [html5/vitest.config.js](../html5/vitest.config.js), [html5/src/test/hmi-helpers.test.js](../html5/src/test/hmi-helpers.test.js) |
| NFR-03 | Reliability | The application shall degrade gracefully if service worker registration or audio initialization fails. | Failure in SW/audio path must not crash core gameplay flow. | Defensive checks and error handling in [html5/src/js/hmi.js](../html5/src/js/hmi.js) |
| NFR-04 | Offline Availability | After a successful online load, core shell navigation shall remain usable offline. | Offline E2E scenario passes for index route and unknown route fallback. | [html5/src/e2e/pwa-offline.spec.js](../html5/src/e2e/pwa-offline.spec.js), [html5/src/sw.js](../html5/src/sw.js) |
| NFR-05 | Portability | The app shall run as static assets without backend dependencies. | No runtime server API calls required; static hosting compatible. | [README.md](../README.md), [doc/software_architecture.md](software_architecture.md) |
| NFR-06 | Internationalization | Locale handling shall support runtime switching and robust normalization with fallback behavior. | Supported locales: en/de/it/fr/es; unsupported locales fall back to English. | [html5/src/js/locale-dictionary.js](../html5/src/js/locale-dictionary.js), [html5/src/test/locale-dictionary.test.js](../html5/src/test/locale-dictionary.test.js) |
| NFR-07 | Accessibility | Primary navigation controls shall be keyboard reachable and state-signaled via ARIA attributes. | Tabs and accordions respond to keyboard events and set ARIA attributes. | [html5/src/js/hmi.js](../html5/src/js/hmi.js) |
| NFR-08 | Legal Consistency | Legal/about content shall be consistent across locales and served in English. | Single shared ABOUT content constant reused by all locale bundles. | [html5/src/js/locale-dictionary.js](../html5/src/js/locale-dictionary.js) |
| NFR-09 | Dependency Minimization | Runtime shall avoid jQuery/jQuery UI and rely on browser-native APIs. | No runtime dependency on jQuery/jQuery UI in application modules. | [doc/software_architecture.md](software_architecture.md), [html5/src/js/hmi.js](../html5/src/js/hmi.js) |

### 5.2 Quality Attribute Scenarios

| Scenario ID | Stimulus | Expected Response |
| --- | --- | --- |
| QAS-01 Offline Navigation | User loses connectivity after first online visit and opens app route. | App shell still renders from cache and UI remains interactive for local gameplay. |
| QAS-02 Locale Robustness | Browser reports unsupported locale (for example pt-BR). | App normalizes to English and remains functional. |
| QAS-03 Feature Degradation | Browser blocks or lacks AudioContext or service worker support. | Core game still starts and remains playable without fatal error. |

## 6. Constraints and Boundaries

| ID | Constraint |
| --- | --- |
| C-01 | Client-only architecture (no backend services). |
| C-02 | ES modules and browser-native APIs are baseline implementation technology. |
| C-03 | Runtime legal/about content is English and shared across locales. |
| C-04 | Supported locales in current baseline are en/de/it/fr/es. |

## 7. Out of Scope (Current Baseline)

- Multiplayer features or networked sessions
- User accounts, cloud save, leaderboards
- Server-side rule validation or anti-cheat controls
- Native-only platform features beyond web/PWA packaging

## 8. Traceability Matrix

| Requirement IDs | Primary Code | Primary Tests | Supporting Docs |
| --- | --- | --- | --- |
| FR-02, FR-03, FR-04 | [html5/src/js/hmi.js](../html5/src/js/hmi.js), [html5/src/js/hmi-helpers.js](../html5/src/js/hmi-helpers.js) | [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js), [html5/src/test/hmi-helpers.test.js](../html5/src/test/hmi-helpers.test.js) | [README.md](../README.md) |
| FR-05, FR-06, FR-07, FR-08, FR-13 | [html5/src/js/locale-dictionary.js](../html5/src/js/locale-dictionary.js), [html5/src/js/hmi.js](../html5/src/js/hmi.js), [html5/src/index.html](../html5/src/index.html) | [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js), [html5/src/test/locale-dictionary.test.js](../html5/src/test/locale-dictionary.test.js) | [README.md](../README.md), [doc/software_architecture.md](software_architecture.md) |
| FR-11, FR-12 | [html5/src/sw.js](../html5/src/sw.js), [html5/src/js/hmi.js](../html5/src/js/hmi.js) | [html5/src/e2e/pwa-offline.spec.js](../html5/src/e2e/pwa-offline.spec.js) | [doc/software_architecture.md](software_architecture.md) |
| NFR-01..NFR-09 | [html5/src/js/hmi.js](../html5/src/js/hmi.js), [html5/src/js/hmi-helpers.js](../html5/src/js/hmi-helpers.js), [html5/src/js/locale-dictionary.js](../html5/src/js/locale-dictionary.js), [html5/src/sw.js](../html5/src/sw.js) | [html5/src/test/hmi-helpers.test.js](../html5/src/test/hmi-helpers.test.js), [html5/src/test/locale-dictionary.test.js](../html5/src/test/locale-dictionary.test.js), [html5/src/e2e/app-i18n.spec.js](../html5/src/e2e/app-i18n.spec.js), [html5/src/e2e/pwa-offline.spec.js](../html5/src/e2e/pwa-offline.spec.js) | [README.md](../README.md), [doc/software_architecture.md](software_architecture.md) |

## 9. Verification Strategy

- Unit level:
  - Run `npm test` in [html5](../html5)
  - Run coverage checks with `npm run test:coverage` in [html5](../html5)
- End-to-end level:
  - Run `npm run test:e2e` in [html5](../html5)
- Documentation consistency:
  - Keep [README.md](../README.md), [doc/software_architecture.md](software_architecture.md), and this document aligned for supported languages and i18n model.

## 10. Open Items and Future Requirement Candidates

- Quantified performance budget (first meaningful paint, interaction latency)
- Explicit accessibility conformance target (for example WCAG level)
- Extended localization acceptance tests for complete translated rules content
- Optional telemetry/privacy policy requirements if analytics are introduced
