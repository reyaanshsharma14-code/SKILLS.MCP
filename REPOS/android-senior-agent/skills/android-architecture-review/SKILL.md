---
name: android-architecture-review
description: >-
  Review Android and Kotlin Multiplatform code for architectural soundness:
  module boundaries, layering, dependency direction, state management, and
  concurrency. Use this whenever someone asks for a code review, PR review,
  architecture audit, or design feedback on Android, Kotlin, or Compose
  Multiplatform code, or mentions module structure, MVVM/MVI, UDF, dependency
  injection, coroutine scoping, or "is this the right pattern." Apply it even
  when the request is phrased casually, like "does this look okay" or "how would
  a senior engineer structure this."
---

# Android Architecture Review

Review Android / Kotlin / Compose Multiplatform code the way a staff-level
engineer would in a real PR: find the issues that will actually hurt later,
explain why they matter, and propose the smallest change that fixes the root
cause. Optimize for the author's growth, not for finding the most problems.

## When you are invoked

You will usually get one of: a diff, a file or set of files, a module, or a
design description. First establish scope and intent before reviewing:

1. What changed and why (the goal of the PR or the design).
2. What layer it lives in (UI, presentation, domain, data, platform).
3. What the constraints are (existing patterns in the repo, deadline, whether
   this is a spike or production code).

If the author states the repo already uses a pattern (for example Koin over
Hilt, MVI over MVVM), respect that choice. Consistency with an established,
reasonable pattern beats switching to your personal favorite.

## Review workflow

Work top-down, broad to narrow, so you do not waste the author's attention on
nits while a structural problem sits unaddressed.

1. **Boundaries first.** Does the dependency direction point inward (UI to
   domain to data, never the reverse)? Does a module or layer reach across a
   boundary it should not know about? See `references/module-boundaries.md`.
2. **State and data flow.** Is there a single source of truth? Is state
   unidirectional (events up, state down)? Is mutable state leaking out of the
   layer that owns it?
3. **Concurrency.** Is each coroutine scoped to something that will cancel it?
   Is work dispatched off the main thread where it belongs? Are Flows cold
   where they should be cold and shared where they should be shared?
4. **Correctness and edge cases.** Null/empty/error/loading states, config
   changes, process death, back-stack behavior.
5. **Then style and naming.** Only after the above. Mark these clearly as
   minor so they do not drown the structural feedback.

Use `references/review-rubric.md` for the full checklist per layer and for the
heuristics that separate a real problem from a preference.

## How to phrase feedback

State the rule, then the reason, so the author can generalize to cases you did
not call out. "Hoist this state into the ViewModel; keeping it in the
Composable means it is lost on config change and cannot be unit-tested"
teaches more than "move this to the ViewModel."

Distinguish three severities and label every comment with one:

- **Blocking** — correctness, data loss, security, or a boundary violation
  that will compound. Must change before merge.
- **Recommended** — a clearly better pattern with low cost to adopt now and
  high cost to fix later.
- **Minor** — naming, formatting, taste. Explicitly optional.

Lead with what is genuinely good in the change. A senior reviewer reinforces
sound instincts, not just defects.

## Output format

```
## Summary
One or two sentences: what this change does and your overall read.

## Blocking
- [file:line] Problem. Why it matters. Suggested fix.

## Recommended
- [file:line] ...

## Minor
- [file:line] ...

## What's good here
- ...
```

If there are no blocking issues, say so plainly rather than inventing them.

## Things to resist

- Do not demand more abstraction than the problem warrants. A repository
  interface around a single static config read is ceremony, not architecture.
- Do not rewrite to your preferred stack. Review the code in front of you.
- Do not let a long list of minor nits bury one important structural point.
