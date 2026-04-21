#!/usr/bin/env bash
# Merge all documentation chapters into one .docx using Pandoc.
# Install: https://pandoc.org/installing.html
# Usage: ./docs/scripts/merge-to-docx.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/docs/Bus-Booking-Project-Documentation.docx"
ORDER="$ROOT/docs/scripts/chapter-order.txt"

cd "$ROOT/docs"
files=()
while IFS= read -r line || [[ -n "$line" ]]; do
  [[ -z "${line// }" ]] && continue
  [[ "$line" =~ ^# ]] && continue
  if [[ -f "$line" ]]; then
    files+=("$line")
  fi
done < "$ORDER"

if ! command -v pandoc &>/dev/null; then
  echo "Pandoc is not installed. Install from https://pandoc.org/installing.html" >&2
  exit 1
fi

pandoc "${files[@]}" -o "$OUT" --from markdown --to docx
echo "Written: $OUT"
echo "Optional: open in Word, insert page breaks, add screenshots from docs/screenshots/"
