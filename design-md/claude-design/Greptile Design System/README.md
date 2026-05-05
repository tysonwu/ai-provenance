# Greptile Design System

## Company Overview

**Greptile** (by Tabnam, Inc.) is an AI-powered code review platform that autonomously reviews GitHub/GitLab pull requests with full codebase context. It indexes a repository's files, functions, and dependencies into a graph, then runs a swarm of AI agents to catch bugs, security issues, and style violations that human reviewers often miss.

**Products / Surfaces:**
1. **Marketing Website** – `https://www.greptile.com/` — primary acquisition surface; features, pricing, blog, case studies, enterprise info
2. **Agent / Feature Pages** – `/agent`, `/trex`, `/independence`, `/learning` — detailed feature breakdowns
3. **Web App** – `https://app.greptile.com/` — customer-facing dashboard for configuring code review

**Sources used:** Live website at https://www.greptile.com/ and https://www.greptile.com/agent (fetched April 2026). No codebase or Figma link was provided; all design tokens extracted from live HTML/CSS.

---

## CONTENT FUNDAMENTALS

**Tone:** Confident, no-nonsense, slightly irreverent. Speaks peer-to-peer with engineers — not corporate. Comfortable with mild profanity in testimonials ("doesn't annoy the s**t out of me"). Trusts the reader to be smart.

**Voice:**
- Direct and punchy. Short sentences. Action-first.
- Uses "you/your" — second-person throughout ("Your house, your rules")
- Claims are backed by social proof (customer quotes, metrics like "9,000+ teams", "4X faster")
- Technical specificity earns trust ("graph index", "swarm of agents", "parallel agents")
- No fluff or filler adjectives

**Casing:**
- Headlines: Sentence case ("How it works", "Catch bugs humans miss")
- Section labels/tags: ALL CAPS with brackets — `[ AGENT ]`, `[ PERSONALIZATION ]`
- Nav items: Title Case
- CTAs: lowercase ("get started", "contact sales", "learn more")

**Copy examples:**
- "The AI Code Reviewer." (hero headline — clean, declarative)
- "Your house, your rules." (playful ownership metaphor)
- "Merge 4X Faster, Catch 3X More Bugs" (metric-driven benefit)
- "no credit card required • 14-day free trial" (lowercase reassurance)
- "fig 1. autonomous code review agent" (playful figure-caption labeling)

**Emoji:** Not used in UI copy. Product is professional/technical.

**Numbers:** Heavily used as social proof ("9,000+ teams", "4X", "3X", "0-5 score", "$30/seat/month").

---

## VISUAL FOUNDATIONS

### Colors
- **Background:** `#EEEEEE` (light gray) with a subtle noise/grain texture overlay — warm, slightly aged feel
- **Warm white variants:** `#F9F7F3`, `#FDFCF9`, `#F5F4F0` (card backgrounds, elevated surfaces)
- **Text primary:** `#2A2A2A` (near-black)
- **Text muted:** `#555368` (slate — used for nav, captions, secondary text)
- **Primary accent:** `#28E99F` (mint green — the brand color, used in logo mark)
- **Secondary accents (full palette of neon pastels):**
  - `#5882FF` — periwinkle blue
  - `#FF7F59` — coral/orange
  - `#FFCFFE` — lavender pink
  - `#FFACFE` — hot pink/magenta
  - `#DAFF01` — acid lime
  - `#ECFFA3` — light lime
  - `#FFBCB3` — blush/salmon
  - `#F783A3` — rose pink
  - `#C5FFD6` — mint tint
  - `#D6E5FF` — periwinkle tint
  - `#756CF5` — violet/purple
  - `#71ADFF` — sky blue
  - `#C8EAD0` — sage green
  - `#D6D6D6` — mid gray
- **Error/danger:** `#E5443D`

### Typography
Three typefaces, each with a distinct role:
- **DM Sans** (variable, weight 100–1000) — body text, UI elements, navigation. Clean and legible.
- **Anybody** (italic, variable weight 100–900) — display headings, hero text. Used in italic for expressive, editorial character.
- **Space Mono** — monospace; section labels `[ LIKE THIS ]`, captions, technical metadata, small uppercase tags.

**Type scale:**
- Hero display: Anybody italic, large (80px+), bold
- Section headers: DM Sans, 36–48px, medium–semibold
- Body: DM Sans, 16–18px, regular
- Labels/tags: Space Mono, 10–12px, uppercase, tracked

### Backgrounds & Textures
- Main background is `#EEEEEE` with a CSS noise/grain texture (`bg-noise`)
- Decorative graph/network pattern images used as section backdrops (`rotate-fill-graph.webp`, `fill-graph.webp`)
- No dark mode — site is light-themed throughout
- Warm white cards (`#F9F7F3`) lift above the gray background

### Layout
- Max-width centered container, generous horizontal padding
- Sections separated by `<hr>` dividers, not heavy borders
- Heavy use of numbered steps ("STEP 01", "STEP 02") in feature walkthroughs
- Cards/feature grids use minimal borders, subtle elevation

### Animation & Interaction
- Hover states: opacity reduction on nav links (`text-slate/70`)
- Transitions: `transition-colors` utility — smooth, no bounces
- Marquee/ticker text animations (e.g. "TEST · RUN · EXECUTE" scrolling strip)
- No heavy page transitions or spring animations observed

### Borders & Corners
- Cards: minimal borders, subtle; rounded corners (likely 8–12px)
- Buttons: rounded (likely `rounded-full` or `rounded-lg`)
- Feature labels in brackets `[ AGENT ]` use Space Mono, no border, just text

### Shadows & Elevation
- Subtle — system primarily uses background color contrast for elevation
- Warm white (`#F9F7F3`) cards on `#EEEEEE` background

### Imagery
- Product UI screenshots (dark-themed app UI inside light marketing pages)
- Abstract diagram illustrations (agent swarm diagrams, graph visualizations)
- Customer headshots (small circular avatars)
- Company logos (partner/customer logos, mostly SVG, monochrome)
- "Scales" footer illustration (`scales-footer.png`)
- Geometric wireframe logo used decoratively (`greptile-logo-wireframe.svg`)

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

Greptile does **not** use a third-party icon library. Key observations:
- Navigation and UI use **text labels** predominantly, not icons
- Brand marks are geometric SVGs (the "G" monogram and wordmark)
- Decorative illustrations are raster images (PNGs/WebPs from Next.js image optimizer)
- Section labels use `[ BRACKETS ]` as visual markers rather than icons
- Arrow symbol (`→`) used as a link indicator (text character, not icon)
- Bullet-style numbered lists (`01`, `02`, `03`) used as visual anchors

**Recommendation:** Use Lucide Icons (lucide.dev) for any UI icon needs — stroke-based, clean, matches the minimal aesthetic.

Assets available in `assets/`:
- `logo.svg` — geometric "G" monogram in `#28E99F` mint green
- `wordmark-logo.svg` — full wordmark in `#2A2A2A` (dark, for light backgrounds)
- `greptile-logo-wireframe.svg` — wireframe/outline version used decoratively in footer

---

## FILE INDEX

```
README.md                        ← This file
SKILL.md                         ← Agent skill definition
colors_and_type.css              ← CSS variables: colors, type, spacing
assets/
  logo.svg                       ← Brand mark (mint green)
  wordmark-logo.svg              ← Full wordmark (dark)
  greptile-logo-wireframe.svg    ← Wireframe logo (decorative)
preview/
  colors-brand.html              ← Brand color palette card
  colors-accents.html            ← Full accent palette card
  colors-semantic.html           ← Semantic/UI colors card
  type-display.html              ← Display type (Anybody italic) specimen
  type-body.html                 ← Body type (DM Sans) specimen
  type-mono.html                 ← Mono type (Space Mono) specimen
  type-scale.html                ← Full type scale specimen
  spacing-tokens.html            ← Spacing & border-radius tokens
  components-buttons.html        ← Button variants
  components-badges.html         ← Tags, labels, bracket labels
  components-cards.html          ← Card variants
  components-nav.html            ← Navigation bar
  brand-logo.html                ← Logo variants
  brand-patterns.html            ← Background patterns & textures
ui_kits/
  website/
    README.md
    index.html                   ← Marketing website prototype
    Header.jsx
    Hero.jsx
    FeatureSection.jsx
    Footer.jsx
  app/
    README.md
    index.html                   ← App dashboard prototype
    Sidebar.jsx
    PRReviewCard.jsx
    ReviewComment.jsx
```
