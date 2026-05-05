# Rai UI Kit

Faithful recreation of the **Rai Agent Control Panel** — the single-screen operator dashboard from `ui/src/App.tsx`. Three-column layout: briefing (main), prompt (center-right aside), run-details (far-right aside). Fixed dark masthead + footer chrome in light mode; translucent blurred chrome in dark mode.

## Files

- `index.html` — interactive control panel with theme toggle, run-trigger, history selection
- `Masthead.jsx` — dark `#161616` bar with hex-mark lockup, theme toggle, connection status
- `Briefing.jsx` — main column with markdown-styled briefing output
- `LiveFeed.jsx` — streaming run rows (rounds · llm · tool start/done) with pulse + shimmer
- `PromptColumn.jsx` — system-prompt preview, skills selector, user note, preview pane
- `RunDetails.jsx` — stats panel + tool-call log + history list
- `Button.jsx`, `Field.jsx`, `Tag.jsx` — primitives

## Source of truth

Recreated from `ui/src/App.tsx` (1179 lines), `ui/src/index.css`, `ui/docs/DESIGN.md`. Cosmetic recreation only — no real backend. Trigger button plays a scripted sequence of SSE-shaped events.

## Notable design moves preserved

- Dark masthead + footer with `backdrop-filter: blur(20px)` in dark mode only
- Inputs: bottom-border only, 2px focus in Blue 60
- Buttons: 0 border-radius, asymmetric padding (14px 63px 14px 15px) on primary
- Cards: flat, zero shadow, depth via `#fff → #f4f4f4 → #e0e0e0` layering
- `.rai-outline-soft` — hairline border in light, ghost inset box-shadow in dark
- Upper-tracked section labels (10/11px, 0.32px tracking, uppercase, weight 600)
- `rai-pulse` on streaming indicators; `rai-shimmer` on loading bars
