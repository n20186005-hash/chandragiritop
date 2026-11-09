#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
pnpm install --frozen-lockfile
pnpm check
node scripts/check-topics.mjs
pnpm run build
node scripts/check-output.mjs
