#!/usr/bin/env bash
# Restore and Install Skills for AI (macOS / Linux)
# Usage:
#   chmod +x RESTORE-AND-INSTALL.sh && ./RESTORE-AND-INSTALL.sh

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RESTORE_DIR="${1:-$(dirname "$SCRIPT_DIR")/Skills-Restored}"

mkdir -p "$RESTORE_DIR"

for f in "$SCRIPT_DIR"/*; do
  [ -f "$f" ] || continue
  base="$(basename "$f")"
  for prefix in "mega-ui-ux-skill__" "ponytail__" "standalone-skills__" "mcp-servers__"; do
    if [[ "$base" == "$prefix"* ]]; then
      root="${prefix%__}"
      rel="${base#$prefix}"
      rel_path="${rel//__/\/}"
      target="$RESTORE_DIR/$root/$rel_path"
      mkdir -p "$(dirname "$target")"
      cp "$f" "$target"
      break
    fi
  done
done

echo "Restored folder structure to: $RESTORE_DIR"

for st in "$HOME/.gemini/config/skills" "$HOME/.claude/skills" "$HOME/.agents/skills"; do
  mkdir -p "$st"
  if [ -d "$RESTORE_DIR/mega-ui-ux-skill/skills/mega-ui-ux" ]; then
    rm -rf "$st/mega-ui-ux"
    cp -R "$RESTORE_DIR/mega-ui-ux-skill/skills/mega-ui-ux" "$st/mega-ui-ux"
  fi
  if [ -d "$RESTORE_DIR/ponytail/skills" ]; then
    for d in "$RESTORE_DIR/ponytail/skills"/*/; do
      [ -d "$d" ] || continue
      sname="$(basename "$d")"
      rm -rf "$st/$sname"
      cp -R "$d" "$st/$sname"
    done
  fi
  if [ -d "$RESTORE_DIR/standalone-skills" ]; then
    for d in "$RESTORE_DIR/standalone-skills"/*/; do
      [ -d "$d" ] || continue
      sname="$(basename "$d")"
      rm -rf "$st/$sname"
      cp -R "$d" "$st/$sname"
    done
  fi
  echo "Installed skills to: $st"
done

mkdir -p "$HOME/.gemini/config"
cp "$SCRIPT_DIR/mcp_config.json" "$HOME/.gemini/config/mcp_config.json"
echo "Installed MCP config to: $HOME/.gemini/config/mcp_config.json"

if [ -d "$RESTORE_DIR/mcp-servers" ]; then
  mkdir -p "$HOME/.gemini/antigravity/mcp"
  cp -R "$RESTORE_DIR/mcp-servers"/* "$HOME/.gemini/antigravity/mcp/" 2>/dev/null || true
  echo "Installed MCP tool schemas to: $HOME/.gemini/antigravity/mcp"
fi
