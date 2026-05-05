# Greptile App UI Kit

## Overview
High-fidelity recreation of the Greptile web app (app.greptile.com) — the customer-facing dashboard for configuring and viewing AI code reviews.

**Design width:** 1280px  
**Theme:** Light with warm white surfaces (#F9F7F3) on #EEEEEE background  
**Fonts:** DM Sans (UI), Space Mono (labels/code), Anybody italic (display)

## Note
The app UI was inferred from the public website feature descriptions and screenshots, as app.greptile.com requires authentication. Components reflect the described feature set.

## Components
- `Sidebar.jsx` — Left navigation sidebar
- `PRReviewCard.jsx` — Pull request review card in the dashboard
- `ReviewComment.jsx` — Individual Greptile comment on a PR

## Screens in index.html
1. Dashboard — list of recent PRs with review statuses
2. PR Detail — expanded view of a single PR review with comments
