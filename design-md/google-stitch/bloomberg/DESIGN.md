# Design System: High-End Market Editorial

## 1. Overview & Creative North Star
The "Creative North Star" of this design system is **The Financial Architect**. Unlike standard retail interfaces that rely on soft roundness and friendly colors, this system is built on the philosophy of **Brutalist Authority**. It mimics the high-stakes, high-velocity environment of a global trading floor where information is the primary asset.

We move beyond the "template" look by embracing:
- **Intentional Asymmetry:** Strategic use of whitespace to guide the eye through dense data.
- **Monolithic Typography:** Using scale and weight—rather than color—to establish hierarchy.
- **Tonal Precision:** A rejection of traditional borders in favor of "ink-on-paper" layering.

---

## 2. Colors
This system utilizes a high-contrast palette designed for maximum legibility and cognitive speed.

### Palette Highlights
- **Primary (#003BD2):** Reserved for critical action and interactive "hotspots." Use sparingly to maintain its impact.
- **Surface Scale:** Utilizing the `#f9f9f9` (Surface) to `#e2e2e2` (Surface Container Highest) range to define content boundaries without structural lines.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Layout boundaries must be defined solely through background shifts. For example, a "Market Summary" widget should not have an outline; it should be a `surface-container-low` (#f3f3f3) block resting on a `surface` (#f9f9f9) background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
1. **Base:** `surface` (#f9f9f9)
2. **Structural Sections:** `surface-container-low` (#f3f3f3)
3. **Interactive Cards/Cells:** `surface-container-lowest` (#ffffff) to provide a "pop" of clarity.

### Signature Textures
For high-impact areas (Hero headers, major CTAs), use a subtle linear gradient from `primary` (#003bd2) to `primary_container` (#1d52ff) at a 135-degree angle. This adds a "digital ink" depth that prevents the interface from feeling static.

---

## 3. Typography
The typographic soul of this system is a 95/5 split between **BWHaasGroteskWeb** (a Swiss neo-grotesque) and a high-precision **monospace**.

- **Display & Headline:** Use Haas Grotesk with tight tracking (-0.02em). This conveys the "Bloomberg" sense of urgency and authoritative weight.
- **Data & Tables:** Monospace is used for all numerical values and tickers. This ensures decimal alignment and a "terminal" aesthetic that users trust for accuracy.
- **Labels:** Set in all-caps with increased letter spacing (+0.05em) to differentiate metadata from body content.

| Level | Token | Size | Weight |
| :--- | :--- | :--- | :--- |
| Display | `display-lg` | 3.5rem | Bold (700) |
| Headline | `headline-md`| 1.75rem| Semibold (600) |
| Body | `body-md` | 0.875rem| Regular (400) |
| Data | `label-md` | 0.75rem | Mono (500) |

---

## 4. Elevation & Depth
In this design system, "depth" is a function of light and tone, not shadows.

- **The Layering Principle:** Stack `surface-container` tiers to create a natural lift. A white card (`surface-container-lowest`) on a light grey background (`surface-container-low`) creates a crisp, readable edge without visual noise.
- **Ambient Shadows:** For floating modals or dropdowns, use a "Cloud Shadow": `box-shadow: 0 20px 40px rgba(0, 59, 210, 0.04);`. Note the blue tint in the shadow—this mimics natural light passing through a high-end lens.
- **The "Ghost Border":** If a separator is required for accessibility, use `outline-variant` (#c4c5d9) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** For top navigation bars, use `surface` at 80% opacity with a `backdrop-blur(20px)`. This allows data to flow "under" the chrome, suggesting infinite scale.

---

## 5. Components

### Buttons
- **Primary:** Sharp 0px corners. Background: `primary` (#003bd2). Text: `on_primary` (#ffffff).
- **Secondary:** Ghost style. Transparent background with a `primary` label. No border. Hover state triggers a `surface-container-high` background shift.

### Data Tables (The Core)
- **Rules:** Forbid horizontal divider lines.
- **Spacing:** Use 16px vertical padding for rows. 
- **Zebra Striping:** Use `surface-container-low` for even rows to maintain horizontal tracking across wide data sets.
- **Indicators:** Positive change in `primary` (or a custom "Bullish Blue"), negative change in `error` (#ba1a1a).

### Input Fields
- **Styling:** Underline-only style. The input sits on a `surface-container-low` background. On focus, the underline transitions to 2px `primary`.

### Navigation Chips
- **Selection:** Use `primary_fixed` (#dde1ff) background with `on_primary_fixed` (#001356) text. Shape remains 0px square for a modular, grid-based feel.

---

## 6. Do's and Don'ts

### Do
- **Do** align all numerical data to the right in tables.
- **Do** use bold headings to "anchor" the user's eye on a page full of numbers.
- **Do** maximize "Breathing Room." Even data-heavy pages need wide margins (min 48px on desktop).

### Don't
- **Don't** use rounded corners. Everything is 0px. Softness is the enemy of authority here.
- **Don't** use grey text for body content. Use `on_surface` (#1a1c1c) to maintain high-contrast accessibility.
- **Don't** use icons without labels. In the financial world, ambiguity is a risk. Labels provide certainty.

---

## 7. Spacing Scale
This system uses a strict **8px grid**.
- **Compact:** 4px, 8px (Inner component spacing)
- **Standard:** 16px, 24px (Component to component)
- **Editorial:** 48px, 64px, 96px (Section to section)

*Note: Use the "Editorial" scale to separate disparate data categories, allowing the white space to act as a silent separator.*