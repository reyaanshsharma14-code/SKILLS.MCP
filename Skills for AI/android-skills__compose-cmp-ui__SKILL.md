---
name: compose-cmp-ui
description: >-
  Build and review Jetpack Compose and Compose Multiplatform (CMP) UI with
  senior-level judgment on state hoisting, recomposition performance, stability,
  previews, theming, and platform-specific code (expect/actual). Use this
  whenever someone is writing or reviewing Compose or CMP UI, asks about
  recomposition, stability, @Composable structure, navigation, or sharing UI
  across Android, iOS, and desktop, or says a Compose screen is slow, janky, or
  recomposing too often.
---

# Compose / CMP UI

Write and review Compose and Compose Multiplatform UI to the standard of an
engineer who has shipped it at scale: correct state ownership, predictable
recomposition, and shared code that does not leak platform details.

## The core mental model

A Composable is a function from state to UI that the runtime may re-invoke at
any time. Three consequences drive almost every decision:

1. **Composables must be cheap and side-effect-free in their body.** Anything
   that should happen once, or in response to a change, goes in an effect
   (`LaunchedEffect`, `DisposableEffect`, `SideEffect`), not inline.
2. **State is hoisted to its owner.** A reusable Composable takes values and
   callbacks; it does not own state it does not need. Screen state lives in the
   ViewModel; local UI-only state (a text field's transient value, an animation)
   can stay in `remember`.
3. **Recomposition is scoped.** Reading a state value subscribes the enclosing
   scope to it. Reading state too high causes wide recomposition; reading it in
   the smallest scope that needs it keeps work local.

## Writing UI

- Make Composables stateless and previewable by default. Pair a stateful entry
  (`FooScreen(viewModel)`) with a stateless body (`FooContent(state, onEvent)`).
  The stateless body is what you preview and test.
- Hoist state with the "events up, state down" rule. The Composable emits
  events through lambdas; new state comes back down as parameters.
- Drive UI from a single immutable state object collected from the ViewModel
  with `collectAsStateWithLifecycle()` so collection stops when the screen is
  not visible.
- Theme through the design system, not hard-coded colors and dimensions. One
  source of tokens keeps light/dark and platform theming coherent.

When performance matters (lists, animations, frequently-updating screens) read
`references/compose-performance.md` before optimizing. Measure first; most
"slow Compose" is a stability or read-scoping problem, not a need for fewer
Composables.

## Compose Multiplatform

CMP shares the Compose UI across Android, iOS, desktop, and web. The judgment
that separates good CMP from a maintenance burden:

- Keep shared UI in `commonMain`. Push only genuinely platform-specific
  behavior (system bars, haptics, file pickers, back handling) behind a small
  `expect`/`actual` seam.
- Keep `expect` signatures platform-neutral. An `expect` that returns a
  UIViewController or an Android `Context` has leaked the platform into common
  code.
- Do not fork a whole screen per platform when the difference is a few
  behaviors. Parameterize the difference instead.

See `references/cmp-platform-notes.md` for the source-set layout, resource and
font handling, and the platform seams that come up most often.

## Reviewing Compose

Check, in order:
1. State ownership — is anything stateful that should be stateless? Is screen
   state in the ViewModel and collected lifecycle-aware?
2. Effects — is there work in the composition body that belongs in an effect?
   Is every effect keyed correctly so it restarts when, and only when, it
   should?
3. Stability and read scope — are unstable types forcing recomposition? Is
   state read higher than necessary? (See the performance reference.)
4. Reusability — does this Composable take a ViewModel or Context it does not
   need, making it un-previewable and un-reusable?

Explain the consequence, not just the rule: "collect with
`collectAsStateWithLifecycle` so the Flow stops collecting when the app is
backgrounded; `collectAsState` keeps collecting and wastes work."
