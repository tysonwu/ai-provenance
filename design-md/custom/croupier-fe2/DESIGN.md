# Design System Inspired by FE2 Operator Console

## 1. Visual Theme & Atmosphere

FE2 is an execution console, not a marketing surface. Its aesthetic is built for operators who scan dense information under time pressure: strategy states, orders, service health, and timestamped status lines. The interface prioritizes precision and speed of recognition over decorative expression.

The dominant visual behavior is "monochrome structure, chromatic meaning." Most of the UI is neutral, flat, and sharply rectangular. Color appears only when it carries semantic payload: error, success, warning, informational, or data classification. This keeps visual noise low and preserves instant salience when color appears.

Unlike soft SaaS dashboards, FE2 deliberately embraces hard edges, compact vertical rhythm, and micro-spacing controls (`1px`, `2px`, dashed separators). The result feels closer to an instrument panel: austere, technical, and readable at high density.

**Core identity traits:**

- Hard-edged geometry (`--radius: 0rem`) across primary components
- Flat depth model (border + tone layering, very little shadow language)
- Dense typography and compressed line-height for operational throughput
- Monochrome control surfaces with semantic iOS-derived color signals
- Fixed top-bar paradigm with always-available system context (time, health, theme)

## 2. Color Palette & Roles

### Structural Palette (Light Mode)

Primary light-mode values are neutral and high-contrast:

- **Background**: `hsl(50 20% 95%)`
- **Foreground**: `hsl(0 0% 0%)`
- **Card**: `hsl(50 20% 97%)`
- **Secondary surface**: `hsl(40 7% 85%)`
- **Muted surface**: `hsl(0 0% 94%)`
- **Border**: `hsl(0 0% 70%)`
- **Input**: `hsl(0 0% 85%)`

### Structural Palette (Dark Mode)

Dark mode preserves the same structure but shifts to deep neutral layers:

- **Background**: `hsl(225 10% 8%)` (`#121316`)
- **Foreground**: `hsl(227 36% 95%)` (`#eef0f7`)
- **Card / Popover**: `hsl(220 14% 12%)` (`#1b1e24`)
- **Secondary / Muted**: `hsl(217 15% 17%)` (`#252a32`)
- **Accent layer**: `hsl(220 17% 7%)` (`#0f1115`)
- **Border**: `hsl(223 14% 34%)` (`#4a5162`)

### Semantic & Data Palette (iOS Token Family)

These hues are available and intentionally saturated. They should be treated as semantic markers, not decorative accents:

- **Error**: `--ios-red`
- **Success**: `--ios-green`
- **Warning**: `--ios-orange` / `--ios-yellow`
- **Info**: `--ios-blue`
- **Debug**: `--ios-purple`

Extended data hues:

- `--ios-mint`, `--ios-teal`, `--ios-cyan`, `--ios-indigo`, `--ios-pink`, `--ios-brown`

### Brand Accents

- **Brand Blue**: `--brand-blue` (`--ios-indigo`)
- **Brand Orange**: `--brand-orange` (`--ios-orange`)
- **Brand Black**: `--brand-black`

### Color Usage Contract

- Neutral tokens (`background`, `card`, `secondary`, `border`) define layout and component chrome.
- iOS hues are reserved for state and data semantics (status chips, indicators, data-mapped controls).
- Avoid introducing new ad-hoc color ramps when a semantic token already exists.

## 3. Typography Rules

### Font Stack

- **Primary**: `IBM Plex Sans`
- **Monospace**: `IBM Plex Mono`
- **Serif (limited)**: `IBM Plex Serif`

### Typographic Character

FE2 typography is compact and technical:

- Global letter-spacing bias: `-0.01em`
- Global line-height baseline: `1.15`
- Frequent uppercase labels for section affordances
- Heavy reliance on small type sizes for dense dashboard composition

### Practical Hierarchy (Current FE2 Pattern)

| Role | Font | Typical Size | Weight | Notes |
| --- | --- | --- | --- | --- |
| Hero title | IBM Plex Sans | 60px (`text-6xl`) | 700 | Landing-level only |
| Section headers | IBM Plex Sans | 12px (`text-xs`) | 500-700 | Uppercase + tracking |
| Body/UI copy | IBM Plex Sans | 12px (`text-xs`) | 400 | Default panel content |
| Micro metadata | IBM Plex Mono/Sans | 9-10px (`text-[9px]`, `text-xxs`) | 400-500 | Timestamps/status detail |
| Code-like snippets | IBM Plex Mono | 10-12px | 400-600 | IDs, tags, runtime values |

### Typography Behavior Rules

- Use `font-mono` for high-precision technical strings (IDs, timestamps, symbols, tool output).
- Keep section headings short, uppercase, and directly descriptive.
- Prefer concise copy blocks over long prose paragraphs.

## 4. Component Stylings

### Buttons

**Base button system**

- Shape: rectangular (`rounded-none`)
- Density target: compact (`h-4.5` to `h-6` in common usage)
- Focus: `focus-visible:ring-1`
- Disabled: opacity reduction, pointer suppression

**Variant taxonomy**

- **Monochrome action variants**: `default`, `secondary`, `outline`, `ghost`, `link`
- **Semantic variants**: `success`, `error`, `warning`, `info`, `debug`
- **Data variants**: `data-green`, `data-red`, `data-blue`, `data-yellow`, `data-purple`, `data-orange`

**Usage rule**

- Use monochrome variants for generic control flow.
- Use semantic/data variants only when the color itself communicates state.

### Cards & Panels

- Flat bordered containers: `border border-border bg-card`
- Header bands often use `bg-secondary` and bottom borders
- No decorative drop shadows on standard cards
- Internal spacing is tight (`p-1`, `p-3`) to preserve information density

### Inputs, Selects, and Textareas

- Border-first styling, mostly transparent/muted backgrounds
- Compact control heights (`h-5`, `h-6`, `h-8` depending on context)
- Focus communicates via thin ring (`ring-1`)
- Textareas often use `font-mono` for technical input readability

### Tables

- Typography: `text-xs` baseline
- Row structure: dashed borders for lightweight separation
- Header rows: muted tonal background
- Row hover can use semantic tint for scanability and state emphasis

### Navigation

- Fixed, thin top navigation bar (`h-7`)
- Monospace-aware utility area for UTC/local time and health indicators
- Desktop: link-style text buttons with underlined active state
- Mobile: dropdown menu preserving the same compact density language

### Badges and State Indicators

- Small, terse badges with monospace affinity
- Status colors should map to semantic tokens (not arbitrary hues)
- Indicators should be high signal, low surface area

## 5. Layout Principles

### Information Architecture Posture

FE2 layouts are optimized for operational scanning:

- Minimize scroll where possible
- Keep critical actions close to relevant data
- Favor explicit sectioning over decorative whitespace

### Spacing System

- FE2 intentionally supports micro-spacing: `0.5px`, `1px`, `2px` values
- Most component spacing remains in compact increments (`0.5` to `4` Tailwind steps)
- Large open whitespace is used sparingly and intentionally

### Structural Composition

- Border lines, header strips, and tonal shifts define hierarchy
- Avoid nested card pyramids unless hierarchy demands it
- Use compact grids and stack behavior that preserve density under resize

## 6. Depth & Elevation

FE2 uses depth as a functional cue, not a stylistic one.

| Level | Treatment | Typical Use |
| --- | --- | --- |
| Base | Background + text contrast | Page shell |
| Panel | Border + subtle tonal delta | Cards, sections, wrappers |
| Interactive overlay | Bordered popover with motion | Dropdowns, selects, dialogs |
| Focus state | Thin ring/outline | Keyboard and form focus |

### Elevation Policy

- Do not rely on soft shadows for standard hierarchy.
- Prefer borders, dashed lines, and layer tone shifts.
- Motion/overlay effects should remain subtle and utilitarian.

## 7. Do's and Don'ts

### Do

- Use the FE2 token system (`--background`, `--foreground`, `--ios-*`, `--brand-*`) before hardcoding values.
- Keep core UI surfaces monochrome and reserve chromatic accents for meaning.
- Preserve hard-edged component geometry.
- Keep controls and copy compact for dense operator workflows.
- Use monospace where technical clarity improves comprehension.

### Don't

- Don’t introduce rounded, soft consumer-dashboard patterns into FE2 core UI.
- Don’t use semantic colors as decoration.
- Don’t add heavy card shadows to create hierarchy.
- Don’t inflate spacing and typography in ways that reduce data density.
- Don’t combine conflicting visual idioms on the same screen.

## 8. Responsive Behavior

### Breakpoints

| Name | Width |
| --- | --- |
| xs | 480px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### Responsive Strategy

- Keep navigation fixed and predictable across breakpoints.
- On small screens, collapse nav options into compact dropdown interactions.
- Preserve semantic color meaning and status legibility at all sizes.
- Adapt layout composition (stack/flow), not visual language.

### Mobile Behavior Rules

- Do not replace FE2’s compact aesthetic with oversized mobile-only styles.
- Maintain clear focus states and interactive affordances for touch/keyboard.
- Keep high-value status/health/timing signals visible and readable.

## 9. Agent Prompt Guide

Use these prompts to keep AI-generated UI aligned with FE2.

### Core Prompt

"Design this FE2 interface as a compact operator console: monochrome structure, hard-edged geometry, thin/dashed separators, IBM Plex typography, minimal elevation, and iOS semantic colors only when conveying status or data meaning."

### Token References

- **Structure**: `background`, `foreground`, `card`, `secondary`, `muted`, `border`, `input`
- **Semantics**: `ios-red`, `ios-green`, `ios-orange`, `ios-yellow`, `ios-blue`, `ios-purple`
- **Brand accents**: `brand-blue`, `brand-orange`, `brand-black`

### Example Component Prompts

- "Create a dense bordered panel with a secondary-tone header strip, uppercase `text-xs` title, and compact `p-3` content spacing."
- "Build an action toolbar using compact monochrome buttons; only use semantic button variants for explicit status states."
- "Render a data table with `text-xs` typography, dashed row separators, and semantic state chips."
- "Design a fixed top utility bar with service health indicators, mono timestamps, and a compact theme toggle."

### Iteration Checklist

1. Is the UI mostly monochrome and token-driven?
2. Are iOS colors used only where they encode meaning?
3. Is geometry hard-edged and density-optimized?
4. Are typography and spacing tuned for fast scanning?
5. Does dark mode preserve FE2 structure with dark-neutral tokens?
