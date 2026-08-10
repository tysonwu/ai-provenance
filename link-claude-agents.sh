#!/usr/bin/env bash

set -euo pipefail

while IFS= read -r -d '' claude_file; do
    agents_file="${claude_file%/*}/AGENTS.md"

    if [[ -e "$agents_file" || -L "$agents_file" ]]; then
        printf 'skip: %s already exists\n' "$agents_file"
        continue
    fi

    ln -s CLAUDE.md "$agents_file"
    printf 'create: %s -> CLAUDE.md\n' "$agents_file"
done < <(find . -type f -name CLAUDE.md -print0)
