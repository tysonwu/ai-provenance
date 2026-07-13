# Global rules

This file provides the system-wide general guidance to coding.

## Thinking style

Before jumping into implementation, always pause to critically evaluate the proposed approach - whether it comes from the user or from your own first instinct.

- **Challenge suggestions, including the user's.** If a suggestion seems unidiomatic, over-engineered, or wrong for the context, say so and explain why. Do not simply comply to be agreeable.
- **Consider alternatives first.** Before committing to any approach, think through at least one or two other options. State the trade-offs briefly so the user can redirect if needed.
- **Prefer the simpler, more idiomatic path.** A conventional solution that fits the language/framework is almost always better than a clever one-off. If the user proposes something non-standard, name the standard approach and let them choose.
- **Ask rather than assume on ambiguous requirements.** If the goal is unclear, a short clarifying question beats building the wrong thing.

This applies even when the user sounds confident or the instruction is phrased as a directive. Being genuinely useful means thinking critically, not just executing.

## Asking style

Do not hesitate for giving `AskUserQuestion` block and ask for user's input or wait for user's manual handling when a major bottleneck is reached in a large scale debug process.

Example: Use a `AskUserQuestion` block to pause the process when debugging on a live server and when you would like the user to help restarting it.

## Writing style

- **Never** use the em dash `—` (U+2014). If a dash is needed, use the ASCII hyphen-minus `-` (U+002D).
- For long article writing or explanatory Markdown, use the `/article-writing` skill if available.
- **Never hard-wrap prose at a fixed column width.** Write each paragraph and each bullet as a single unbroken line in the source, no matter how long. Do not insert a line break mid-sentence and continue with a hanging indent. Markdown renderers reflow paragraphs regardless, so a manual wrap only produces awkward breaks. The only allowed hard line breaks are between block-level elements (paragraphs, list items, headings) or where Markdown itself requires them (e.g. inside a table row).

## Code hygiene

### No hard-coded user or machine paths

**Never** put a specific developer's filesystem layout into the repo: READMEs, example shell snippets, comments, config templates, test fixtures, or copy-paste instructions. Machine-specific roots (especially home directories) must not appear in committed content. Prefer **repo-relative** steps, **environment variables**, or **placeholders** (`<path-to-clone>`, `$REPO_ROOT`).

## Git: read-only

Do not run any git command that stages, commits, or creates/switches branches — no `git add`, `git commit`, `git merge`, `git rebase`, `git branch`, `git checkout -b`, `git switch -c`, or equivalents.

Allowed: inspect-only commands — `git log`, `git diff`, `git show`, `git blame`, `git status`.

This overrides any workflow steps in skills (e.g. brainstorming, writing-plans) that mention git for staging or committing; skip those steps and continue without them.

## Fail fast on mandatory config (Python)

**If a value is required for correctness, its absence must raise immediately. Never substitute a silent fallback that lets broken state propagate.**

- Use `dict.get(k, default)` only when absence is explicitly expected and handled; prefer `msg["key"]` so `KeyError` points straight to schema bugs.
- Mandatory env vars: check with `raise` / `SystemExit` at load time, never `os.getenv("KEY", "")`.
- Call `load_dotenv()` **before** `argparse` so `default=os.getenv(...)` in arg definitions sees real values.
- In `except` clauses, distinguish known transient infra errors (set state to `None`, skip window) from unexpected errors (let them propagate and crash loudly).

## No unsolicited CLI flags in scripts

**Never add CLI flags or options that were not explicitly requested. Every flag must be justified by the caller's actual need.**

- If removing a flag would make the code shorter and clearer, it should not exist.
- For new scripts (any language), check for the `/cli-script-writing` skill first.
- Prefer top-of-file config variables over argparse/yargs/getopts flag proliferation.

## Post-change documentation

You **MUST** ensure the relevant documentations are up-to-date when a change is made.

After finishing work that touches a related directory and introduces structural change worth documenting (new/changed public API, proto, CLI flags, env vars, config schema, new module, moved entrypoint, renamed package, changed dependencies), scan the relevant `/docs` directory and update documentation to reflect the current state.

For changes touching **5+ files**, spawn the `post-change-docs` subagent (via the Agent tool with `subagent_type: "post-change-docs"`), passing a one-line summary of the subtree and what changed (API, config, architecture, etc.).

Skip when the change is purely internal (private rename, comments-only, formatting).

## UI work: check for DESIGN.md first

When doing component, page, layout, theme, token, or styling work (CSS/Tailwind/design tokens), locate the nearest `DESIGN.md` first:

```bash
git ls-files "**/DESIGN.md" 2>/dev/null || find . -name DESIGN.md -not -path '*/node_modules/*'
```

If multiple files exist, use the one nearest the edited subtree. Treat it as canonical UI/design guidance unless the user overrides it. If missing, note it briefly and offer creating one via the `design-md` skill.
