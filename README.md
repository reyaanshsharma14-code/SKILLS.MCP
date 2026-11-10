# SKILLS, MCP & REPOS Hub

This folder consolidates AI agent skills, MCP server definitions, and standalone repositories moved out of `ZBR.com`.

---

## 📁 Directory Structure

```text
SKILLS.MCP/
├── REPOS/
│   ├── mega-ui-ux-skill/     # Mega UI/UX Skill repository (git clean)
│   ├── ponytail/             # Ponytail lazy senior dev mode toolkit
│   └── trek-demo/            # Kharka Trek Three.js 3D interactive demo
├── Skills for AI/            # Flat files edition (935 items)
│   ├── mcp-servers__...      # Pre-configured MCP tool definitions & schemas
│   ├── mega-ui-ux-skill__... # Flattened mega-ui-ux skill files
│   ├── ponytail__...         # Flattened ponytail suite files
│   ├── RESTORE-AND-INSTALL.ps1 # 1-click restore & installer for Windows
│   └── RESTORE-AND-INSTALL.sh  # 1-click restore & installer for Unix/macOS
└── .agents/                  # Local agent skills & rules
    ├── rules/ponytail.md
    └── skills/ponytail/
```

---

## ⚡ Quick Guide

### 1. Using the Repositories (`REPOS/`)
- **`mega-ui-ux-skill`**: Comprehensive UI/UX intelligence system, design tokens, roast room, and component review engines.
- **`ponytail`**: Lazy senior dev mode, audits, diff review, and code simplification suite.
- **`trek-demo`**: Vite + Three.js project for the Kharka trek experience (`npm run dev`).

### 2. Restoring Flat Skills & MCP (`Skills for AI/`)
To unpack the flat files and auto-install skills into Antigravity, Claude, and Agents:
```powershell
cd "Skills for AI"
powershell -ExecutionPolicy Bypass -File RESTORE-AND-INSTALL.ps1
```
