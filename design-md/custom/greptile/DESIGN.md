# Design System: Greptile

## 1. Visual Theme & Atmosphere

Greptile's design language is **"The Architectural Syntax"** — a system that treats code as art and data as architecture. Rather than following standard SaaS dashboard conventions, the UI operates as a precision-engineered manuscript: editorial whitespace meets the geometric rigor of technical documentation.

The system is built around **two complementary surfaces** that serve distinct contexts:

- **Binary Paper** (Light) — the marketing and documentation surface. Warm light-gray `#EEEEEE` canvas with a subtle CSS noise/grain texture overlay that gives it a slightly aged, tactile quality. Used for acquisition, reading, and information consumption. Warm white cards (`#F9F7F3`) lift above the gray ground with no visible shadow — pure tonal separation.
- **Terminal Mint** (Dark) — the application surface. Deep ink-navy `#0F172A` canvas for deep-work environments: code review dashboards, data analytics, and editors. Depth is created by stacking tonal slates, not shadows.

Both surfaces share the same typographic DNA, accent palette, and component geometry. The core philosophy: **restraint in decoration, precision in typography, Mint used as a highlight not a flood color.**

**Defining characteristics:**
- Light background with noise texture (marketing) vs. deep navy (app) — no dark mode toggle, each surface has its own fixed theme for its context
- Neon-pastel accent palette — never more than one accent per context; the rest serve as data visualization and tag colors
- Editorial asymmetry — content pushed left with generous negative space; layouts feel like annotated blueprints rather than symmetric grids
- Bracket labels `[ LIKE THIS ]` as section markers — Space Mono uppercase, no border, pure typographic annotation
- No 1px solid dividers anywhere — background shifts and whitespace define all boundaries

---

## 2. Color Palette & Roles

### Brand & Primary Accent

- **Signal Mint** (`#28E99F`): The primary brand color. Used in the logo mark and as the sole interactive accent on dark/app surfaces. Reserved — appears on one or two key elements per screen. Never used as a background fill over large areas.
- **Mint Tint** (`#C5FFD6`): Mint at reduced intensity. Backgrounds for `[ TAG ]` labels, subtle CTA button fills on light surfaces, section highlights.
- **Dark Mint** (`#107A4D`): Active and pressed states for mint-colored elements. Hover state for primary CTAs.

### Light Surface Palette (Binary Paper)

- **Warm Canvas** (`#EEEEEE`): Main page background — light gray with noise texture overlay. The ground everything rests on.
- **Elevated Warm White** (`#F9F7F3`): Card and elevated surface background. Lifts above the canvas through tonal contrast alone, no shadow required.
- **Softer Warm White** (`#FDFCF9`): Lightest elevation — modals, popovers, the "topmost" layer.
- **Subtle Fill** (`#F5F4F0`): Subtle card background for secondary or lower-priority information modules.
- **Divider Fill** (`#E9E9E9`): `<hr>` dividers and subtle structural fills. Used sparingly — only where tonal separation alone isn't sufficient.

### Dark Surface Palette (Terminal Mint)

- **Ink Navy** (`#0F172A`): Base layer — the application canvas. More depth and richness than pure black.
- **Elevated Slate** (`#1E293B`): Interactive cards and panels. The first lift above the ink base.
- **High Slate** (`#334155`): Supporting UI panels, secondary containers, less prominent regions.
- **Glass Surface** (`rgba(15, 23, 42, 0.70)` + `backdrop-blur(12px)`): Navigation bars and command palettes that overlay content. Glassmorphism — lets the data atmosphere bleed through the chrome.

### Text

- **Primary Text** (`#2A2A2A`): Near-black. All body copy, headlines, and primary labels on light surfaces.
- **Muted Text** (`#555368`): Slate. Navigation items, captions, secondary labels, placeholder bracket text.
- **Faint Text** (`#787878`): Placeholders and disabled states.
- **Light Surface Text** (`#F8FAFC`): High-contrast off-white for headings on dark surfaces.
- **Light Muted Text** (`#94A3B8`): Secondary text on dark surfaces.

### The Neon Pastel Accent System

These are used for data visualization, tag backgrounds, and decorative highlighting — never as interactive button colors. Assign one per semantic category and maintain that mapping across screens:

- **Periwinkle Blue** (`#5882FF`) / Periwinkle Tint (`#D6E5FF`)
- **Coral** (`#FF7F59`) / Blush (`#FFBCB3`)
- **Lavender Pink** (`#FFCFFE`) / Hot Pink (`#FFACFE`)
- **Acid Lime** (`#DAFF01`) / Pale Lime (`#ECFFA3`)
- **Violet** (`#756CF5`)
- **Sky Blue** (`#71ADFF`)
- **Rose** (`#F783A3`)
- **Sage Green** (`#C8EAD0`)

### Semantic / Status

- **Error / Danger** (`#E5443D`): Destructive actions, failed states.
- **Success** (`#28E99F`): Reuses Signal Mint — a deliberate economy of color.
- **Warning** (`#DAFF01`): Acid Lime repurposed for caution states.
- **Info** (`#5882FF`): Periwinkle Blue for informational notices.

### The "No-Line" Rule

**1px solid borders are prohibited for sectioning.** All content boundaries must be defined through:
1. Background color shifts between tonal layers
2. Vertical whitespace — minimum 64px between logical blocks on marketing, 32px within app panels
3. Ghost borders only for accessibility when tonal contrast alone is insufficient: `rgba(85, 83, 104, 0.2)` — felt, not seen

---

## 3. Typography Rules

Three typefaces with strictly separated roles. Never swap them — the voice of each role depends on the specific family.

### Font Families

| Role | Family | Character |
|---|---|---|
| **Display / Hero** | `Anybody` italic, variable weight 100–900 | Expressive, editorial, slightly slanted — signals creative ambition |
| **Body / UI** | `DM Sans` variable, weight 100–1000 | Clean, modern grotesque — legible and neutral at all sizes |
| **Labels / Code / Mono** | `Space Mono` | Monospace — bracket labels, section tags, captions, technical metadata |

### Type Scale & Usage

| Level | Family | Size | Weight | Style | Tracking | Use |
|---|---|---|---|---|---|---|
| Display Hero | Anybody | 96px (6rem) | Bold (700) | Italic | −0.02em | Homepage headline statements |
| Display XL | Anybody | 72px (4.5rem) | Bold (700) | Italic | −0.02em | Feature section hero text |
| Display LG | Anybody | 48px (3rem) | Semibold (600) | Italic | 0 | Section intro headlines |
| Heading 1 | DM Sans | 48px (3rem) | Bold (700) | Normal | −0.02em | Page-level headings |
| Heading 2 | DM Sans | 36px (2.25rem) | Semibold (600) | Normal | 0 | Sub-section headings |
| Heading 3 | DM Sans | 24px (1.5rem) | Semibold (600) | Normal | 0 | Card titles, feature headers |
| Heading 4 | DM Sans | 20px (1.25rem) | Medium (500) | Normal | 0 | Secondary card titles |
| Body LG | DM Sans | 18px (1.125rem) | Regular (400) | Normal | 0 | Hero subtext, intro paragraphs |
| Body | DM Sans | 16px (1rem) | Regular (400) | Normal | 0 | Standard reading text |
| Body SM | DM Sans | 14px (0.875rem) | Regular (400) | Normal | 0 | Compact body, supporting text |
| Label / Mono | Space Mono | 12px (0.75rem) | Regular (400) | Uppercase | +0.1em | `[ BRACKET LABELS ]`, captions, tags |
| Code | Space Mono | 14px (0.875rem) | Regular (400) | Normal | 0 | Inline code, figure captions |

### Typographic Principles

- **Display text is always Anybody italic** — the italic is not an emphasis state, it is the design. Use italic weight throughout for all hero and feature headlines.
- **Bracket labels in Space Mono** — section annotations follow the pattern `[ CATEGORY ]` (uppercase, wide-tracked, Space Mono). This is the system's signature typographic marker.
- **Sentence case for headlines** ("How it works", "Catch bugs humans miss") — not title case. Conveys peer-to-peer directness.
- **All-caps only for Space Mono bracket labels** — never apply uppercase to DM Sans body text.
- **CTAs are lowercase** ("get started", "contact sales") — intentional, non-corporate.
- **Asymmetric display placement** — push large headlines to the left with significant negative space to the right. Never center large display text.

---

## 4. Component Stylings

### Buttons (Precision Triggers)

**Primary CTA (Light Surface)**
- Background: Signal Mint (`#28E99F`) or Mint Tint (`#C5FFD6`)
- Text: Near-black (`#2A2A2A`)
- Border-radius: 4px (subtle, not pill, not sharp — the "1 roundedness" signature)
- Border: none
- Hover: inner glow effect using `box-shadow: inset 0 0 0 1px rgba(40,233,159,0.5)` + background shifts to `#107A4D`
- Padding: 12px 24px
- Font: DM Sans, 14px–16px, medium weight (500)

**Primary CTA (Dark Surface)**
- Background: Signal Mint (`#28E99F`)
- Text: Ink Navy (`#0F172A`)
- Same geometry as light variant

**Ghost / Secondary**
- Background: transparent
- Border: 1px solid `rgba(85, 83, 104, 0.4)` (ghost border)
- Text: Primary text color for the surface
- Hover: subtle background fill shift (Elevated Warm White on light, Elevated Slate on dark)
- Border-radius: 4px

**Inline CTA Link**
- No button chrome — just text + `→` arrow character
- Font: DM Sans, medium weight
- Hover: opacity 0.7 transition — `transition: opacity 0.2s ease`

### Input Fields (Code Clarity)

- Background: surface-appropriate fill (Subtle Fill `#F5F4F0` on light; Elevated Slate on dark)
- Border-radius: 4px
- Default border: none (no box)
- Focus state: 1px mint (`#28E99F`) underline appears at bottom of field, mimicking a terminal cursor — the border does not appear on sides or top
- Label: Space Mono uppercase, 10–12px, placed strictly above the field, never floating inside
- Placeholder: Faint Text (`#787878`)
- Error state: underline shifts to Error Red (`#E5443D`)

### Cards & Containers (The No-Divider Rule)

- **Marketing cards**: Elevated Warm White (`#F9F7F3`) background on Warm Canvas `#EEEEEE`. No border. No shadow. Tonal separation only.
- **App cards / panels**: Elevated Slate (`#1E293B`) on Ink Navy `#0F172A`. No border unless ghost border needed for accessibility.
- Border-radius: 8px (subtle, `--radius-md`)
- Padding: 16–24px
- Hover (interactive cards): background shifts one tonal step; no shadow or border appears
- Lists within cards: no horizontal dividers between rows. Use 12–16px vertical padding and a background shift on `:hover` to define the row.

### Chips & Tags

- Background: neon pastel tint (e.g. Mint Tint `#C5FFD6`, Periwinkle Tint `#D6E5FF`)
- Text: corresponding deep color for that accent
- Font: Space Mono, 10–12px, uppercase, +0.1em letter-spacing
- Border-radius: 4px (matches the "1 roundedness" system-wide signature — never pill)
- No border
- Visual weight should be lower than primary CTAs — pastel backgrounds ensure this

### Navigation

**Marketing (Binary Paper)**
- Transparent or Warm Canvas background; becomes glassmorphic on scroll
- Logo: "G" monogram mark + wordmark in near-black `#2A2A2A`
- Nav links: DM Sans 14–16px, Muted Text `#555368`; hover opacity 0.7
- CTA in nav: Ghost button or Mint primary button depending on section context

**App (Terminal Mint)**
- Glass surface: `rgba(15, 23, 42, 0.70)` + `backdrop-blur(12px)` — data visible behind chrome
- Logo: monogram in Signal Mint (`#28E99F`) against dark
- Nav items: DM Sans, Light Muted Text `#94A3B8`; active state in white `#F8FAFC`

---

## 5. Layout Principles

### Spacing System

- Base unit: 8px
- Component micro-spacing: 4px, 8px, 12px
- Component standard spacing: 16px, 24px, 32px
- Section separation (marketing): 64px, 80px, 96px minimum — whitespace is the separator, not a divider line
- Section separation (app panels): 24px, 32px, 48px

### Grid & Container

- Max content width: ~1280px, centered with generous horizontal padding (80–120px on desktop)
- Primarily left-weighted layouts — text blocks left-aligned, significant negative space to the right
- Feature sections use asymmetric two-column splits (e.g. 55/45 or 60/40) over symmetric 50/50
- Numbered step walkthroughs (`STEP 01`, `STEP 02`) use full-width sequential panels, not grids

### Whitespace Philosophy

- **Asymmetrical breathing room** — the luxury of this interface lives in restraint. Large display text with 40–60% of the horizontal space empty is a feature, not a mistake.
- **Background-color zoning** — `#EEEEEE` → `#F9F7F3` → `#FDFCF9` creates all visual structure on light surfaces; no structural lines.
- **Spacing scale `2` for sections** — when using Stitch, select "Generous" (2) spacing. Never compact.

### Border Radius Scale

- 4px (`--radius-sm`): Buttons, chips, tags, input fields — the system signature
- 8px (`--radius-md`): Cards, containers, modal panels
- 12px (`--radius-lg`): Large floating surfaces
- 9999px (`--radius-full`): Avatars, circular icon badges — rare exception

---

## 6. Elevation & Depth

This system achieves depth through **tonal layering**, not shadows. On light surfaces, warmer whites lift above the gray ground. On dark surfaces, lighter slates lift above the ink navy.

| Level | Light Surface | Dark Surface | Use |
|---|---|---|---|
| Base | `#EEEEEE` + noise texture | `#0F172A` | Page ground |
| Layer 1 | `#F9F7F3` (Elevated Warm White) | `#1E293B` (Elevated Slate) | Cards, panels |
| Layer 2 | `#FDFCF9` (Softest White) | `#334155` (High Slate) | Nested panels, drawers |
| Floating | `#FDFCF9` + `shadow-md` | Glass surface + `shadow-xl` | Dropdowns, tooltips, command palettes |
| Overlay | Scrim + `#FDFCF9` modal | Scrim + Glass modal | Modal dialogs |

**Shadow tokens** — used only for genuinely floating elements:
- `--shadow-sm`: `0 1px 2px rgba(0,0,0,0.06)` — subtle divider or micro-lift
- `--shadow-md`: `0 4px 12px rgba(0,0,0,0.08)` — dropdowns
- `--shadow-lg`: `0 8px 24px rgba(0,0,0,0.10)` — modals, popovers
- `--shadow-xl`: `0 16px 40px rgba(0,0,0,0.12)` — maximum float (e.g. command palette)
- **Long Ambient** (dark mode): `0 20px 40px rgba(15, 23, 42, 0.40)` — floating modals on dark surfaces

**Glassmorphism formula** (for nav bars, command palettes):
`background: rgba(15, 23, 42, 0.70); backdrop-filter: blur(12px);`

---

## 7. Imagery & Decorative Patterns

- **Background texture**: CSS noise/grain filter (`fractalNoise baseFrequency 0.75`) at 4% opacity over `#EEEEEE` — warms the canvas and adds the characteristic aged paper feel
- **Graph/network patterns**: Abstract diagram images used as section backdrops (`rotate-fill-graph.webp`, `fill-graph.webp`) — suggest the codebase graph index visually
- **Wireframe logo**: `greptile-logo-wireframe.svg` used as a decorative footer element
- **Product UI screenshots**: Dark-themed app UI shown inside light marketing pages — deliberate contrast that demonstrates the product without interrupting the editorial surface
- **Agent swarm diagrams**: Abstract illustrations of parallel agents, not realistic UI mockups
- **Circular avatars**: Small customer headshots; `border-radius: 50%`

---

## 8. Do's and Don'ts

### Do

- **Do** use `Anybody` italic for every display and hero headline — the italic is not optional, it is the voice
- **Do** use `[ BRACKET LABELS ]` in Space Mono for all section annotation and category tagging
- **Do** use Signal Mint (`#28E99F`) sparingly — one key interactive element per screen, not as a flood color
- **Do** use tonal layering (warm whites on light, slates on dark) for all visual hierarchy
- **Do** place large headlines left-aligned with generous empty space to the right
- **Do** use 4px radius for all interactive components (buttons, chips, inputs) — the system's geometry signature
- **Do** separate sections with whitespace (64px+ marketing, 32px+ app) — never with horizontal rules

### Don't

- **Don't** use 1px solid borders to separate content sections — this is the system's most important rule
- **Don't** use heavy or visible shadows on cards — if the shadow is perceptible, it's too strong
- **Don't** use `Anybody` upright (non-italic) for display text — the italic is the design
- **Don't** use Signal Mint as a large background fill — it loses its signal value
- **Don't** use pure black (`#000000`) for any text or background — use `#2A2A2A` (light) or `#0F172A` (dark)
- **Don't** apply pill-shaped border-radius to buttons or tags — 4px subtlety is the precision marker
- **Don't** center large display headlines — asymmetric left-alignment is architectural, centered is generic
- **Don't** use standard icon libraries — Greptile avoids third-party icons; prefer `[ LABEL ]` text markers and `→` arrow text characters

---

## 9. Agent Prompt Guide

### Quick Color Reference (Light / Binary Paper)

| Role | Hex |
|---|---|
| Page background | `#EEEEEE` |
| Card surface | `#F9F7F3` |
| Primary text | `#2A2A2A` |
| Secondary / muted text | `#555368` |
| Brand accent | `#28E99F` |
| Ghost border | `rgba(85,83,104,0.2)` |
| Error | `#E5443D` |

### Quick Color Reference (Dark / Terminal Mint)

| Role | Hex |
|---|---|
| Page background | `#0F172A` |
| Card surface | `#1E293B` |
| Primary text | `#F8FAFC` |
| Secondary text | `#94A3B8` |
| Brand accent | `#28E99F` |
| Ghost border | `rgba(148,163,184,0.15)` |
| Error | `#E5443D` |

### Example Stitch Prompts

- "Create a hero section on `#EEEEEE` background with noise texture. Headline in Anybody italic, bold, 96px, color `#2A2A2A`, left-aligned with wide right margin. Subheadline in DM Sans regular 18px `#555368`. CTA button: `#28E99F` background, `#2A2A2A` text, 4px border-radius, 12px 24px padding."
- "Design a feature card: `#F9F7F3` background on `#EEEEEE` canvas, no border, no shadow, 8px radius, 24px padding. Title DM Sans semibold 20px `#2A2A2A`. Body DM Sans regular 16px `#555368`. Section label `[ CATEGORY ]` in Space Mono uppercase 11px `#555368` above the title."
- "Build an app panel: `#1E293B` background on `#0F172A` canvas, no border, 8px radius. Header DM Sans semibold 16px `#F8FAFC`. Body DM Sans regular 14px `#94A3B8`. Highlight value in Signal Mint `#28E99F`."
- "Create a navigation bar for the app: `rgba(15,23,42,0.70)` background + `backdrop-blur(12px)`. Logo monogram in `#28E99F`. Nav links DM Sans 14px `#94A3B8`, active state `#F8FAFC`."
- "Build a tag chip: `#C5FFD6` background, `#107A4D` text, Space Mono uppercase 11px +0.1em tracking, 4px radius, 4px 10px padding. No border."
