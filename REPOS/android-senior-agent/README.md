# Senior Android Agent

A portable [Agent Skills](https://agentskills.io) package that turns a coding
agent into a senior Android / Kotlin / Compose Multiplatform engineer for code
review, architecture, UI work, and testing.

The skills follow the [Agent Skills open standard](https://agentskills.io)
(originally developed by Anthropic, now broadly adopted), so they work across
Claude Code, Codex CLI, Gemini CLI, Cursor, and any other tool that reads
`SKILL.md`, rather than being locked to one tool.

## Why this exists

Out of the box, a coding agent gives competent but generic advice. These skills
make it specifically senior and specifically Android: they carry the review
judgment and architectural opinions you would expect from someone who has
shipped Kotlin and Compose Multiplatform in production, so the agent catches the
things that actually compound, boundary violations, recomposition traps, the
real causes of flaky tests, instead of surface-level nits.

## See it in action

[`examples/`](examples/README.md) shows the agent reviewing a leaky ViewModel, a
janky Compose feed, and a flaky test, with prompts you can copy. A taste of the
output:

> **Blocking** — `GlobalScope.launch`: this coroutine outlives the screen and is
> never cancelled, so a load that finishes after the user leaves still writes to
> state. Use `viewModelScope`, which cancels when the ViewModel clears.

## What's in here

```
.
├── AGENTS.md                       # the senior-engineer persona (portable)
├── skills/                         # the domain knowledge (portable, open standard)
│   ├── android-architecture-review/
│   ├── compose-cmp-ui/
│   └── android-testing-quality/
├── adapters/                       # per-tool wiring
│   ├── claude-code/agents/         # Claude Code subagent
│   ├── codex/                      # Codex setup notes
│   ├── cursor/                     # Cursor setup notes
│   └── gemini-cli/                 # Gemini CLI setup notes
├── examples/                       # prompts + sample review output
├── .github/                        # issue + PR templates
├── CONTRIBUTING.md                 # authoring conventions for new skills
└── LICENSE                         # MIT
```

There are two layers, on purpose:

- **Skills** hold durable, reusable domain knowledge. Each is a folder with a
  `SKILL.md` and a `references/` directory of deeper material.
- **The agent** (`AGENTS.md`, plus the Claude Code subagent in `adapters/`) is
  the persona that decides *when* to reach for each skill.

## The three skills

| Skill | Triggers on | Covers |
|---|---|---|
| `android-architecture-review` | PR / code review, architecture audit, "is this the right pattern" | module boundaries, layering, dependency direction, state flow, concurrency, severity-tiered feedback |
| `compose-cmp-ui` | writing or reviewing Compose / CMP UI, recomposition, "my screen is slow" | state hoisting, recomposition and stability, previews, theming, `expect`/`actual` seams |
| `android-testing-quality` | how to test X, flaky tests, coverage, Turbine / Robolectric / screenshot tests | the test pyramid for Android/KMP, fakes vs mocks, testing coroutines/Flow/Compose, CI gating |

## When not to use this

The skills carry specific opinions, so they will push back on projects that
have made different reasonable choices:

- **Java-only Android.** The Kotlin idioms (coroutines, Flow, sealed types,
  data classes) won't apply, and the agent will steer toward conversions you
  may not want.
- **XML / Views-based UI.** `compose-cmp-ui` is Compose-first. For a Views
  project, it will recommend a stack you did not ask for.
- **LiveData or RxJava state.** The architecture and testing skills assume
  coroutines and `StateFlow`. Advice will read as "rewrite this," not "review
  this."
- **Spikes and throwaway prototypes.** The review rubric is calibrated for
  production code. On a one-day prototype, "introduce a repository here" is
  ceremony, not architecture.

If your project deliberately uses a different stack, telling the agent up
front ("we use LiveData here, review the logic only") usually keeps the
advice on target.

## How skills work

A skill loads in stages, so an agent can keep many on hand cheaply:

1. **Name + description** stay in context always (a few lines). The
   `description` is the trigger: it says what the skill does and when to use it.
2. **The `SKILL.md` body** loads when the skill triggers. It holds the workflow
   and the judgment calls.
3. **`references/` files** load only when the body points to them, which is
   where the depth lives.

This is why the `SKILL.md` files are lean and the detail sits in `references/`.

## Using it

### Claude Code

Copy the three skill folders into your project's `.claude/skills/` directory,
then copy the subagent file into `.claude/agents/`:

```
your-android-project/
└── .claude/
    ├── agents/
    │   └── senior-android-engineer.md      ← from adapters/claude-code/agents/
    └── skills/
        ├── android-architecture-review/    ← from skills/
        ├── compose-cmp-ui/                 ← from skills/
        └── android-testing-quality/        ← from skills/
```

Then invoke the `senior-android-engineer` agent, or just ask for a review and
let it pick up the matching skill.

### Codex CLI

See `adapters/codex/README.md`. Codex reads `AGENTS.md` for the persona and
supports the skills directly.

### Gemini CLI

See `adapters/gemini-cli/README.md`. Gemini CLI reads `AGENTS.md` and discovers
skills from `.gemini/skills/`.

### Cursor and others

See `adapters/cursor/README.md`. Placement is manual but the skills need no
changes.

Check each tool's current docs for exact install paths, since they shift
between releases.

## Extending it

Add a skill by creating a folder under `skills/` with a `SKILL.md`. Keep the
body focused, write a `description` that names both what it does and when to
fire it, push depth into `references/`, and explain the *reason* behind each
rule so the agent generalizes to cases the skill did not spell out. See
`CONTRIBUTING.md`.

## Roadmap

Open to contributions. A few skills that would round out the set, in rough
priority, and any of them make a good first contribution:

- **Gradle / build performance** — module graph, configuration cache, build
  scans, and the levers that actually move incremental build time.
- **Release & CI** — signing, Play/App Store delivery, version management.
- **Performance profiling** — startup, jank, memory, and baseline profiles.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the authoring conventions.

## About

Built and maintained by Utkarsh Choudhary, a senior Android engineer working in
Kotlin and Compose Multiplatform. The skills encode the review and design
judgment I apply to production Android and KMP code. Feedback and pull requests
are welcome.

## License

MIT. See [`LICENSE`](LICENSE).
