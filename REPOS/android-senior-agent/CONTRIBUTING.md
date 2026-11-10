# Contributing

Contributions and new skills are welcome. The bar for a skill here is the same
bar a senior engineer applies to a PR: it should encode real judgment, not just
restate documentation.

## Adding a skill

1. Create `skills/<skill-name>/SKILL.md`.
2. Write YAML frontmatter with `name` and `description`. The `description` is
   the trigger, so include both what the skill does and the contexts and
   phrasings that should activate it. Be a little assertive about when to fire;
   skills tend to under-trigger otherwise.
3. Keep the `SKILL.md` body lean (a few hundred lines at most). Put depth into
   `references/` and point to those files from the body with a note on when to
   read them. Give any reference over ~300 lines a short table of contents.
4. Write instructions in the imperative, and explain the reason behind each
   rule rather than relying on capitalized MUST / NEVER. The reasoning is what
   lets the agent handle cases you did not anticipate.

## Style

- Examples earn their place. Prefer one concrete, realistic example over three
  abstract rules.
- Stay tool-agnostic in `skills/`. Anything tool-specific belongs in
  `adapters/`.
- Match existing structure: a `## When you are invoked` or workflow section, a
  clear output format where relevant, and a short "what to resist" list.

## Testing a skill

Before opening a PR, sanity-check that the skill triggers on realistic prompts
and that its advice holds up on a real snippet. The
[agentskills.io](https://agentskills.io) community maintains evaluation
tooling if you want to measure triggering quantitatively.
