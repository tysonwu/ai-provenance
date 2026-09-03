# ai-provenance

This repo tracks **AI-related markdown assets** (currently: `DESIGN.md` files) and their **provenance** so we can confidently reuse, update, and audit them later.

## DESIGN.md provenance

Primary upstream sources:

- `https://getdesign.md/`
- `https://github.com/VoltAgent/awesome-design-md`
- Google stitch exports
- Claude design exports

## Rules provenance

> As of Aug 2026, repository level-rules are not maintained anymore. However, global rules are still required.

**Canonical location:** edit rules in this repo at `rules/*.mdc` (they are versioned here).

**Cursor load path:** `~/.cursor/rules/` contains **symlinks** to those files (or into `rules/`), so Cursor picks them up globally. The real files are **not** authored only under `~/.cursor/rules` — keep changes in `ai-provenance/rules` and commit.


| Rule                                         | Origin    |
| -------------------------------------------- | --------- |
| `rules/article-and-writing.mdc`              | Original. |
| `rules/code-hygiene.mdc`                     | Original. |
| `rules/fail-fast-mandatory-config.mdc`       | Original. |
| `rules/git-read-only.mdc`                    | Original. |
| `rules/no-flag-spam.mdc`                     | Original. |
| `rules/post-change-docs-on-large-change.mdc` | Original. |
| `rules/stitches-design-md.mdc`               | Original. |
| `rules/use-playwright-mcp.mdc`               | Original. |




## Skills

This repo’s `skills/` directory is a symlink to `~/.agents/skills` (the real location).

Most skills are managed via `npx skills`, but some are manually curated. The skill-lock file `~/.agents/.skill-lock.json` tracks the npx-skills managed skills in the directory.

Other manual upstream source:

- `https://github.com/affaan-m/everything-claude-code/`


| Skill                   | Origin                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `backend-patterns`      | Manually copied/adapted from upstream (`everything-claude-code`).                                                                                                                                                                     |
| `codebase-onbarding`    | Manually copied/adapted from upstream (`everything-claude-code`) with Claude-specific parts removed                                                                                                                                   |
| `cli-script-writing`    | Original. Supplementary to `rules/no-flag-spam.mdc`                                                                                                                                                                                   |
| `write-that-down`       | Original.                                                                                                                                                                                                                             |
| `project-agent-harness` | Original.                                                                                                                                                                                                                             |
| `global-agent-harness`  | Original.                                                                                                                                                                                                                             |
| `pandoc`                | From claude skill registry, version: [https://github.com/majiayu000/claude-skill-registry/blob/main/skills/documents/pandoc/SKILL.md](https://github.com/majiayu000/claude-skill-registry/blob/main/skills/documents/pandoc/SKILL.md) |
| `scribd-capture`        | Original. Scroll + network-intercept page images from lazy HTML document viewers, then assemble a PDF.                                                                                                                                |
| `playwright-cli`        | Official playwright skills from `playwright-cli install --skills`                                                                                                                                                                     |




## Agents



### `agents/` (global Cursor agents)

This directory is symlinked to `~/.cursor/agents`.

Primary upstream source for most agents:

Test update

- `https://github.com/affaan-m/everything-claude-code/blob/main/AGENTS.md`


| Agent file                        | Origin                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| `agents/architect.md`             | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`).                   |
| `agents/performance-optimizer.md` | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`).                   |
| `agents/python-reviewer.md`       | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`). Lightly modified. |
| `agents/refactor-cleaner.md`      | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`).                   |
| `agents/security-reviewer.md`     | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`).                   |
| `agents/tdd-guide.md`             | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`).                   |
| `agents/typescript-reviewer.md`   | Copied/adapted from upstream (Everything Claude Code `AGENTS.md`). Lightly modified. |
| `agents/post-change-docs.md`      | Original (based on `agents/doc-updater.md`).                                         |
| `agents/latency-gc-auditor.md`    | Original.                                                                            |
| `agents/ai-provenance.md`         | Original.                                                                            |




## CLAUDE.md (Claude Code) and AGENTS.md (Codex)

**Versioned project guidance:** `claude-md/CLAUDE.md` and `codex-md/AGENTS.md`

Keep it aligned with `rules/*.mdc` (Cursor) when both cover the same policies. To audit or reconcile, invoke the `ai-provenance` subagent (see `agents/ai-provenance.md`).

If your Claude Code install expects a file at `~/.claude/CLAUDE.md`, symlink or copy from `claude-md/CLAUDE.md` per your local setup (do not commit machine-specific absolute paths).

To expose every `CLAUDE.md` below the current directory to Codex without maintaining duplicate content, run:

```bash
./link-claude-agents.sh
```

The script creates a relative `AGENTS.md -> CLAUDE.md` symlink beside each discovered `CLAUDE.md` and leaves existing `AGENTS.md` paths untouched.
