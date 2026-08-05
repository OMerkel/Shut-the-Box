# Shut the Box

![Shut-the-Box logo](html5/src/img/icons/shutthebox128.png)

- *Start an online* **Shut the Box** *session on*
  - [English](http://omerkel.github.io/Shut-the-Box/html5/src)
  - Language is selectable at runtime in the Options tab: English, Deutsch, Italiano, Français, Español
- Progressive Web Application (PWA) support
  - While online play install via *Add to homescreen* in your browser
- **Shut the Box** on [Facebook](http://fb.me/ShutTheBox)
- *Android APK available for install* ![Android](res/android.gif)
  - [Releases](https://github.com/OMerkel/Shut-the-Box/releases)
- *Runs in various browsers on*
  - *desktop systems like BSDs, Linux, Win, MacOS and*
  - *mobile platforms like Android, FirefoxOS, iOS.*

**Keywords, Categories:** *Dice Game, Games/Entertainment, Mobile*

This is the famous traditional pub game Shut the Box.

Shut the Box is played in different variants and no organization is known
targeting standardization of rule variants for the game. Thus if
playing *Shut the Box* with others you should first try
to find agreement and commitment on rules. If in doubt I recommend
to prefer and apply the locally played rules.

The Shut the Box application is intended to be less restrictive.
Such that no specific rules are really forced to be applied. At any
time you can take back an action like open a just closed flap and
perform a different choice. If in need you can use a single die
or two dice, roll again, switch to the menu and look up any rule
variants in between game play as described in the application itself.

This way different variants and rules with a recommended variant
are available and explained accessible in the rules section:

- Variant *Single Die on flaps #7, #8, #9 closed*
- Variant *Avoid High Sums*, e.g. suitable for younger players
- Variant *More Restrictive Single Die*
- Variant *Two Dice Only*
- Variant *Exact Match*
- Variant *Score Single Die is Enough*
- Variant *Thai Style*
- Variant *Multiple Fixed Rounds*
- Variant *Defined Maximum Penalty*
- Variant *Flap Numbers Are Penalty Digits*

## Software Architecture

The application follows a modern browser-first architecture with ES modules, no jQuery dependencies, and a clear separation between UI orchestration and pure domain/helper logic.

- Architecture specification: [doc/software_architecture.md](doc/software_architecture.md)
- Key properties:
  - Functional core / imperative shell split
  - Offline-capable PWA via manifest and module service worker
  - Runtime internationalization with a single entry page and locale dictionary
  - Supported application languages: English, Deutsch, Italiano, Français, Español
  - Deterministic helper module with high unit-test coverage

UML coverage in the architecture document includes use case, class, object, package, component, composite structure, deployment, profile, activity, state machine, sequence, communication, interaction overview, and timing diagrams as Mermaid.

## Requirements

The current as-built requirements baseline is documented in [doc/requirements.md](doc/requirements.md).

- Structured Functional Requirements (FR) and Non-Functional Requirements (NFR)
- Traceability from requirements to implementation, tests, and architecture documentation
- Explicit quality criteria for offline behavior, internationalization, legal consistency, and testability

## Contributors / Authors

- Oliver Merkel
- [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- ![Oliver Merkel, Slieve League](html5/src/img/oliver-sliabh_liag.jpg)

*All logos, brands, and trademarks mentioned belong to their respective owners.*
