## What this PR does

One or two sentences.

## Checklist

- [ ] Skill folder follows the structure: `skills/<name>/SKILL.md` + `references/`
- [ ] YAML frontmatter has `name` and a `description` that covers both what the skill does and when to trigger it
- [ ] `SKILL.md` body is lean; depth is in `references/`, not inlined
- [ ] Each rule includes the reason behind it, not just the rule
- [ ] Tested on realistic prompts — skill triggers and advice holds up on a real snippet
- [ ] Any tool-specific wiring is in `adapters/`, not in `skills/`
- [ ] New skill listed in the root `README.md` skills table (if applicable)