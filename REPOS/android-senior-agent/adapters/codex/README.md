# Codex (OpenAI) setup

The skills in `skills/` follow the open Agent Skills standard, which Codex CLI
supports. Two ways to wire this repo into Codex:

## Skills

Copy the skill folders into the location Codex discovers skills. As of current
releases, the typical project-level path is:

```
your-android-project/
└── skills/
    ├── android-architecture-review/
    ├── compose-cmp-ui/
    └── android-testing-quality/
```

Each folder is self-contained: a `SKILL.md` plus its `references/`. Verify the
exact discovery path against the [Codex skills docs](https://developers.openai.com/codex/skills/),
as it can shift between releases.

Codex may also read an optional `openai.yaml` alongside `SKILL.md` for
Codex-specific metadata. The skills here intentionally stay to the portable
core (`name` + `description` + instructions) so they work unmodified; add
`openai.yaml` per skill only if you want Codex-specific behavior.

## Agent persona

Codex reads `AGENTS.md` at the repo root. Copy the root `AGENTS.md` from this
repo to the root of your Android project. It defines the senior Android engineer
persona and tells the agent which skill to reach for.
