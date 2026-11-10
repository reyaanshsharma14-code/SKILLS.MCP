# Gemini CLI setup

Gemini CLI supports the SKILL.md format and reads `AGENTS.md` for the agent
persona. Two pieces to wire up:

## Skills

Copy the skill folders into the location Gemini CLI discovers skills. Per-project
placement under `.gemini/skills/` is the common setup:

```
your-android-project/
└── .gemini/
    └── skills/
        ├── android-architecture-review/
        ├── compose-cmp-ui/
        └── android-testing-quality/
```

Each folder is self-contained: a `SKILL.md` plus its `references/`. Verify the
exact discovery path against the [Gemini CLI skills docs](https://geminicli.com/docs/cli/skills/),
as it can shift between releases. A user-level install at `~/.gemini/skills/`
also works if you want the skills available across every project.

## Agent persona

Gemini CLI reads `AGENTS.md` at the repo root. Copy the root `AGENTS.md` from
this repo to the root of your Android project. It defines the senior Android
engineer persona and tells the agent which skill to reach for.

The skills themselves need no changes. They are written to the portable core of
the Agent Skills standard, so only placement and persona wiring are per-tool.
