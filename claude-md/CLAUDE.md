# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Writing style

- **Never** use the em dash `—`. If a dash is needed, use the ASCII hyphen-minus `-` (U+002D).
- For long article writing or explanatory Markdown, use the `/article-writing` skill if available.

## Git: read-only

Do not run any git command that stages, commits, or creates/switches branches — no `git add`, `git commit`, `git merge`, `git rebase`, `git branch`, `git checkout -b`, `git switch -c`, or equivalents.

Allowed: inspect-only commands — `git log`, `git diff`, `git show`, `git blame`, `git status`.

This overrides any workflow steps in skills (e.g. brainstorming, writing-plans) that mention git for staging or committing; skip those steps and continue without them.

## Fail fast on mandatory config (Python)

**If a value is required for correctness, its absence must raise immediately. Never substitute a silent fallback that lets broken state propagate.**

- Mandatory env vars: check with `raise` / `SystemExit` at load time, never `os.getenv("KEY", "")`.
- Call `load_dotenv()` **before** `argparse` so `default=os.getenv(...)` in arg definitions sees real values.
- Use `dict.get(k, default)` only when absence is explicitly expected and handled; prefer `msg["key"]` so `KeyError` points straight to schema bugs.
- Functions that produce no result return `None`, not a plausible numeric default like `0.0`.
- Initialise unready pricing/calibration state as `None`, not a plausible number; guard with `if self._state is None: return` at evaluation time.
- In `except` clauses, distinguish known transient infra errors (set state to `None`, skip window) from unexpected errors (let them propagate and crash loudly).

## No unsolicited CLI flags in scripts

**Never add CLI flags or options that were not explicitly requested. Every flag must be justified by the caller's actual need.**

- If removing a flag would make the code shorter and clearer, it should not exist.
- For new scripts (any language), check for the `/cli-script-writing` skill first.
- Prefer top-of-file config variables over argparse/yargs/getopts flag proliferation.

## Post-change documentation

After finishing work that touches a related directory and introduces structural change worth documenting (new/changed public API, proto, CLI flags, env vars, config schema, new module, moved entrypoint, renamed package, changed dependencies), scan the relevant `/docs` directory and update documentation to reflect the current state.

For changes touching **5+ files**, spawn the `post-change-docs` subagent (via the Agent tool with `subagent_type: "post-change-docs"`), passing a one-line summary of the subtree and what changed (API, config, architecture, etc.).

Skip when the change is purely internal (private rename, comments-only, formatting).

## UI work: check for DESIGN.md first

When doing component, page, layout, theme, token, or styling work (CSS/Tailwind/design tokens), locate the nearest `DESIGN.md` first:

```bash
git ls-files "**/DESIGN.md" 2>/dev/null || find . -name DESIGN.md -not -path '*/node_modules/*'
```

If multiple files exist, use the one nearest the edited subtree. Treat it as canonical UI/design guidance unless the user overrides it. If missing, note it briefly and offer creating one via the `design-md` skill.

## Code hygiene

### No hard-coded user or machine paths

**Never** put a specific developer's filesystem layout into the repo: READMEs, example shell snippets, comments, config templates, test fixtures, or copy-paste instructions. Machine-specific roots (especially home directories) must not appear in committed content. Prefer **repo-relative** steps, **environment variables**, or **placeholders** (`<path-to-clone>`, `$REPO_ROOT`).
