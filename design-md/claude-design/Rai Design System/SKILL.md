---
name: rai-design
description: Use this skill to generate well-branded interfaces and assets for Rai, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Rai is an enterprise-grade 24/7 crypto-funding agent control panel. The aesthetic is IBM Carbon + a Bloomberg-inspired "Financial Architect" dark mode — rectangles (not pills), tonal layering (not shadows), bottom-border inputs, IBM Plex type, single IBM Blue 60 (`#0f62fe`) accent, Carbon 2x grid.

Key files:
- `README.md` — full brand dossier: content fundamentals, visual foundations, iconography.
- `colors_and_type.css` — drop-in CSS var system (light + dark, type scale, spacing, radii).
- `assets/` — logos and brand marks.
- `source/DESIGN.md` — original authoritative design brief.
- `preview/` — ~22 specimen cards (colors, type, spacing, components) — useful as visual reference.
- `ui_kits/rai/` — modular JSX components + interactive `index.html` recreation of the control panel.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy the assets out and the CSS file in, and build static HTML files for the user to view. For the Rai agent-control surface specifically, start from `ui_kits/rai/index.html` and the components next to it — they match the real app. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Non-negotiables:
- Pure rectangles. `border-radius: 0` on every component. No pills, no rounded cards.
- One accent color (`#0f62fe`) used sparingly — primary button, focus ring, inline links.
- IBM Plex Sans for UI, IBM Plex Mono for code / data / tool I/O, IBM Plex Serif only for editorial moments.
- Tonal elevation (layer-01 → layer-02 → layer-03), not drop shadows.
- Bottom-border inputs (`border-bottom: 1px solid`), never boxed.
- Operator voice: terse, technical, declarative. No marketing adjectives, no emoji, no exclamation points.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
