# Skills for AI (Flat Files Edition)

This folder contains **only files (0 subfolders)** so it can be easily downloaded, uploaded, or shared anywhere without nested-folder issues.

## What's Included

1. **`mega-ui-ux-skill__...` (505 files)** — The complete **Mega UI/UX / Foundry Skill** (`mega-ui-ux`) uniting 20+ UI/UX design, design engineering, anti-slop redlining, Growth.Design psychology, B-end enterprise design systems, Magic UI, HeroUI v3, MotionSites.ai (65+ motion blueprints), 12-seat Roast Room council, Microsoft CUAWright/Webwright browser QA, Addy Osmani's 25 engineering skills, and Andrej Karpathy's coding laws.
2. **`ponytail__...` (216 files)** — The complete **Ponytail** skill suite (`ponytail`, `ponytail-audit`, `ponytail-debt`, `ponytail-gain`, `ponytail-help`, `ponytail-review`) + hooks and extensions.
3. **`standalone-skills__...` (166 standalone skills)** — All standalone skills from `magic-ui`, `heroui-react`/`heroui-native`/`heroui-migration`, `motionsites-ai`, `growth-design-review`, `b-end-design-system`, `senior-uiux-product-designer`, `ui-ux-designer`, `senior-python-engineer`, `karpathy-guidelines`, `addyosmani/agent-skills` (25 skills), `guanyang/open-agent-hub` (104 skills), `emilkowalski/skill`, `unslop`, `impeccable`, `taste-skill`, `roast-room`, `newroaster`, and `cuawright-web`/`webwright`.
4. **`mcp_config.json` & `mcp-servers__...` (400 files)** — Complete **MCP Servers** configuration (`21st`, `figma`, `canva`, `context7`, `vercel`, `biomolecular_structure_viewer_mcp`) and all lazy-loaded MCP tool JSON schemas.

## How Naming Works

Every nested path has been flattened using `__` (double underscore) in place of folder slashes (`/` or `\`):
- `mega-ui-ux-skill__skills__mega-ui-ux__SKILL.md` → `mega-ui-ux-skill/skills/mega-ui-ux/SKILL.md`
- `ponytail__skills__ponytail__SKILL.md` → `ponytail/skills/ponytail/SKILL.md`
- `mcp-servers__21st__search.json` → `mcp-servers/21st/search.json`

## 1-Click Restore & Install (For Your Friend)

Once your friend downloads all the files into a folder, they can restore the original folder tree and auto-install the skills + MCP servers into Antigravity, Claude Code, Cursor, or Agents with one command:

### Windows (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File RESTORE-AND-INSTALL.ps1
```

### macOS / Linux
```bash
chmod +x RESTORE-AND-INSTALL.sh
./RESTORE-AND-INSTALL.sh
```
