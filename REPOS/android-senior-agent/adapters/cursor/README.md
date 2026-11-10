# Cursor setup

Cursor supports the SKILL.md format with manual placement. To use these skills
in Cursor:

1. Copy the skill folders from `skills/` into your project's `.cursor/skills/`
   directory. Keep each folder intact: `SKILL.md` plus its `references/`.

   ```
   your-android-project/
   └── .cursor/
       └── skills/
           ├── android-architecture-review/
           ├── compose-cmp-ui/
           └── android-testing-quality/
   ```

2. For the senior-engineer persona, add the contents of the root `AGENTS.md`
   into your Cursor rules (`.cursor/rules/` or `.cursorrules`, depending on
   your Cursor version).

Verify the exact skills path against the [Cursor skills docs](https://cursor.com/docs/context/skills),
as it has changed across versions. The skills themselves need no changes — only
placement and persona wiring differ per tool.
