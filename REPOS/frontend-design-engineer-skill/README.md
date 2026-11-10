# Frontend Design Engineer — Claude Code & Antigravity Skill

Art Director + Senior Frontend Engineer that autonomously builds complete websites from a single user phrase.

## What it does

This skill transforms Claude (or any AI coding assistant) into a full-stack frontend design engineer that handles the complete pipeline:

1. **Intake & Brief** — Detects new project vs redesign (with site scraping), gathers requirements, generates a validated brief
2. **Visual Direction** — Selects from 8 curated design directions with complete CSS token sets
3. **Component Sourcing** — 60+ components mapped from shadcn/ui, MagicUI, ReactBits, 21st.dev, Aceternity UI
4. **Design System Adaptation** — Applies tokens consistently, audits colors/typography/spacing
5. **GSAP Animations** — With `useGSAP`, `prefers-reduced-motion` protection, and performance rules
6. **Delivery Checklist** — WCAG AA accessibility, Next.js performance, TypeScript validation

## Stack

- Next.js App Router
- Tailwind CSS
- GSAP + @gsap/react
- shadcn/ui

## 8 Visual Directions

| Direction | Best for |
|-----------|----------|
| Editorial Serif | Consultancies, media, publications |
| Swiss Minimal | SaaS, DevTools, dashboards |
| Luxury Dark Warm | Premium brands, jewelry, fashion |
| Corporate Bold | Enterprise, B2B, fintech |
| Understated Elegance | Creative agencies, wellness, portfolios |
| Neo-Brutalist | Disruptive startups, art, communities |
| Playful Gradient | Modern web apps, consumer products |
| Retro Terminal | DevTools, CLIs, developer docs |

## Installation

### Claude Code
```bash
/install-skill frontend-design-engineer.skill
```

### Antigravity / Other AI Tools
1. Download the `frontend-design-engineer/` folder
2. Place it in the root of your project (or wherever your AI tool reads context)
3. The AI will automatically pick up the SKILL.md and reference files

### Manual (any AI)
Copy the content of `SKILL.md` into your system prompt or project context.

## How to use

Just say something like:
- "quiero crear mi página web de mi empresa de zapatos"
- "help me make a site for my restaurant"
- "necesito una landing page"
- "quiero rediseñar mi página, aquí está: [URL]"
- "build the frontend of my app"

The skill handles everything from there.

## File structure

```
frontend-design-engineer/
├── SKILL.md                          # Core workflow (6 phases)
└── references/
    ├── visual-directions.md          # 8 visual directions with token sets
    ├── component-catalog.md          # 60+ component mapping + decision tree
    └── examples.md                   # 3 complete worked examples
```

## License

MIT
