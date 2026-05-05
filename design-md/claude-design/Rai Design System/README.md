# Rai Design System

**Rai** is a 24/7 AI agent funding-insights control panel — an enterprise-grade operator dashboard where an autonomous Claude agent fetches crypto-funding data, calls tools, and produces Market Briefings on a scheduled cadence. The UI is a single-pane command center: the live run, the briefing output, the prompt that shaped it, and a history of prior runs, all visible at once.

The aesthetic is the digital embodiment of enterprise authority applied to financial-agent tooling — **IBM Carbon** on white for the default theme, and a Bloomberg-inspired **"Financial Architect"** overlay in dark mode. Every element obeys the Carbon 2x grid, uses IBM Plex type, and treats the single IBM Blue 60 (`#0f62fe`) as its only chromatic accent. Rectangles, not pills. Tonal layering, not shadows. Bottom-border inputs, not boxed ones.

## Sources

This system was derived from a single attached codebase:

- **`ui/`** — a Vite + React 19 + TypeScript + Tailwind 3 + Motion app (package name `rai-ui`).
  - `ui/docs/DESIGN.md` — the canonical, authoritative design brief (copied verbatim into `source/DESIGN.md`).
  - `ui/src/index.css` — the live implementation of Carbon tokens + dark-mode overrides.
  - `ui/src/App.tsx` — the full Rai control panel (masthead + briefing + prompt column + run-stats + history).
  - `ui/src/theme.tsx` — light/dark provider backed by `localStorage` + `prefers-color-scheme`.
  - `ui/src/components/ui/` — Magic-UI decorative primitives (`animated-list`, `border-beam`, `flickering-grid`, `number-ticker`).
  - `ui/favicon.svg` — the hexagon mark, copied into `assets/rai-logo.svg`.

No Figma, no slide decks, no marketing site — Rai is a single internal tool.

## Index

- **`README.md`** — this file.
- **`SKILL.md`** — agent-skill manifest (makes this folder cross-compatible with Claude Code skills).
- **`colors_and_type.css`** — full CSS custom-property system (light + dark), type scale, spacing, radii. Drop-in for any HTML artifact.
- **`assets/`** — logos, icon reference, raw brand marks.
- **`source/`** — original reference material copied in read-only (`DESIGN.md`).
- **`preview/`** — HTML specimen cards shown in the Design System tab (colors, type, spacing, components).
- **`ui_kits/rai/`** — high-fidelity recreation of the Rai control-panel UI with modular JSX components and an interactive `index.html`.

## Content fundamentals

Rai copy is **terse, technical, and operational**. It speaks like a console log or a Bloomberg terminal cell, not like a marketing page. The whole product is essentially diagnostic surfaces — the agent does the work, the UI is a lens.

- **Casing**: Sentence case for most labels ("Run now", "Prompt", "Market Briefing"). `UPPER-TRACKED` (uppercase + 0.32px letter-spacing + 10/11px) for section labels like `RUN STATS`, `TOOL CALLS`, `HISTORY`, `PROMPT · WHAT ANTHROPIC RECEIVES`. Title Case is avoided.
- **Voice**: Third-person observational. The user is addressed only inside form affordances ("Your instructions", placeholder: "e.g. focus on BTC/ETH, or emphasize delta-neutral pairs…"). No "we", no "you" in static copy.
- **Tone**: Unadorned, direct, unafraid of a dash or ellipsis. Example: `"Backend unreachable — {error}"`, `"No briefings yet — waiting for first agent run"`, `"None checked = all skills."`. The em-dash is Rai's punctuation-of-choice.
- **Technical vocabulary is first-class, not hidden**: "Round 2", "Tokens in / Tokens out", "Run ID", "Prompt skills", "Skill IDs", "Tool calls". Nothing is softened for a general audience — users are operators.
- **States are verbs or adjectives, never sentences**: `streaming`, `Running…`, `Connected`, `Disconnected`, `just now`, `3m ago`, `idle`. The ellipsis signals "in-flight".
- **Numbers are cold**: tabular-num typography, raw byte counts (`42 B`), raw durations (`1.4s`, `820ms`), raw token counts, raw run IDs (short hex).
- **No emoji.** None. Occasional Unicode glyphs are used as iconography: `●` active bullet, `▶ ▼ ▲` collapse toggles, `✓ ✗` pass/fail, `⎘` tool-start, `●` status dot. That's the full vocabulary.
- **Vibe**: Rai is a watchtower. The copy never asks for attention; it simply reports.

## Visual foundations

Rai's visual language is **pure Carbon executed precisely, then shifted into Bloomberg territory when the lights go out**. The two themes are not a color-inversion of one another — light is Carbon-white-pristine, dark is ink-black operational.

- **Colors**: white canvas + near-black text + a single IBM Blue 60 accent. Dark mode: ink `#121316` canvas + muted slate type + cobalt-market-blue `#6f95ff` accent. No secondary accents, no gradient backgrounds, no chromatic noise.
- **Typography**: IBM Plex Sans (300 / 400 / 600 only — **never 700**) + IBM Plex Mono for code, tool names, run IDs, and token counts. Display sizes (42–60px) are set in weight 300 for delicate authority. 14px body uses 0.16px letter-spacing; 12px captions use 0.32px. Micro-tracking is non-negotiable at small sizes.
- **Spacing**: strict 8px grid (`--space-*` in `colors_and_type.css`). Component padding is almost always 16px; section rhythm is 48px. Inside dense surfaces (run-feed rows, tool-call log), 6–8px vertical rhythm with 11px type.
- **Backgrounds**: always flat solid colors. Zero gradients. Zero background images. Zero hand-drawn illustrations. The only decorative surface treatments are the Magic-UI primitives (`FlickeringGrid` — 4%-opacity orange grid, `BorderBeam` — rotating conic-gradient beam) and they are used sparingly.
- **Animation**: restrained. `rai-pulse` (opacity 1 → 0.35 → 1, 1.2s ease-in-out) for "streaming" indicators. `rai-shimmer` (linear-gradient pan, 1.5s) for loading bars. `AnimatedList` uses a spring (stiffness 350, damping 40) for list-item enter/exit. `NumberTicker` springs (damping 60, stiffness 100) for count-up. Respects `prefers-reduced-motion`.
- **Hover states**: background shifts to `--cds-layer-01-hover` (`#e8e8e8` light / `#252a32` dark). Links shift to the hover-blue variant + underline. Buttons darken by one token step. Opacity is never used as a hover signal except on chrome hint icons (`opacity-35 group-hover:opacity-100` on expand chevrons).
- **Press/active states**: the blue primary button steps down to Blue 80 (`#002d9c`). Carbon doesn't shrink-on-press — the rectangle stays put; the color carries the feedback.
- **Borders**: light mode uses hairline `1px solid #c6c6c6` (`--cds-border-subtle`). Dark mode avoids visible borders per the "no-line rule" — instead it uses `box-shadow: inset 0 0 0 1px rgba(border, 0.15)` (the `.rai-outline-soft` pattern) for ghost separation. This is a core identity moment: **light = lines, dark = tone shifts**.
- **Shadows**: almost never. Only on genuinely floating chrome — dropdowns, tooltips, modals — which get `0 2px 6px rgba(0,0,0,0.30)`. Cards are flat. Tiles are flat. The whole briefing panel is flat.
- **Protection gradients vs capsules**: neither. Rai doesn't need them — the product is one densely-packed screen, not a photograph-overlaid hero.
- **Layout rules**: fixed masthead (48px) + fixed footer (status bar) + three-column internal layout (briefing / prompt / run-details). Everything else is `overflow-y-auto` within its column. Nothing ever feels "floaty".
- **Transparency and blur**: only in dark-mode chrome — the masthead and footer become `color-mix(background 80%, transparent)` + `backdrop-filter: blur(20px)`, giving ink-over-ink translucency. Never in light mode. Never on content — only on chrome.
- **Color of imagery**: there is no imagery. No photography, no illustration, no marketing art. If imagery were ever introduced, it would be restrained, desaturated, and leaning blue-cool — the Financial Architect palette demands it.
- **Corner radii**: `0` on 99% of surfaces — buttons, cards, inputs, tiles, panels, feed rows, modal dialogs. Radii surface only for: tag pills (`24px`), avatars (`50%`), and the occasional icon container. The rectangle is the Rai identity.
- **Cards**: flat `#f4f4f4` (light) / `#1b1e24` (dark) fills, zero shadow, zero rounding, 16px padding, optional hairline border (light) or ghost inset outline (dark). Hover: one step up the layer scale. The `.rai-live-feed` and `.rai-field` classes codify this treatment.
- **Status indicators**: a 2×2 or 1.5×1.5 filled circle + colored text. Connection dot (success / error), stream dot (blue pulse), tool-call bullet (green ✓ / red ✗).

## Iconography

Rai uses **two icon sources, both sparingly**:

1. **Inline hand-rolled SVGs** for chrome (`IconSun`, `IconMoon` in the theme toggle). These are 15×15, `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"` — Lucide-style in vocabulary even though not imported from Lucide.
2. **Unicode glyphs** inline with text as micro-icons:
   - `●` active/status dot
   - `▶ ▼ ▲` disclosure chevrons
   - `✓ ✗` tool-call pass/fail
   - `⎘` tool-call start (this specific glyph appears in `LiveRunFeed`)

**There is no icon font.** There is no sprite sheet. There is no icon library dependency. The codebase has no `lucide-react`, no `heroicons`, no `@radix-ui/react-icons`. Icons exist only where absolutely needed — theme toggle, and inline status glyphs.

**Emoji is never used.** No flags, no warning triangles, no robot faces. The aesthetic is too austere.

**Logo**: the Rai mark is a single hexagon (pointy-top, circumradius 38 on a 100×100 viewBox, 12px stroke, `currentColor` — i.e. it reads black on white, white on black). It's at `assets/rai-logo.svg`. This hexagon is also the favicon. The word "Rai" typeset in IBM Plex Sans weight 300 at 2rem serves as the primary masthead lockup — the logo is favicon-only in the actual UI.

**If we ever need a broader icon set**, use [Lucide](https://lucide.dev) at stroke-width 2, 15–16px — it matches the existing `IconSun` / `IconMoon` vocabulary exactly. This is a **flagged substitution** — no icons beyond the two theme-toggle glyphs exist in the current codebase.

## Font substitution flag

✅ IBM Plex Sans (300/400/600) and IBM Plex Mono (400/600) are loaded from Google Fonts (`fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&family=IBM+Plex+Mono:wght@400;600`). This is the **official** distribution path — no substitution needed, no local `.ttf` required. The `colors_and_type.css` file imports them at the top.

IBM Plex Serif is declared as a family in the scale but never actually used in the codebase — if you reach for it, it's a design decision to introduce a motif that doesn't currently exist.
