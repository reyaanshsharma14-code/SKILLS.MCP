# Compose Performance

Read this when a Compose or CMP screen is slow, janky, recomposes too often, or
when reviewing performance-sensitive UI (lists, animations, high-frequency
state). Measure before changing anything; the fix is usually narrower than
"write less Compose."

## Contents
- [Diagnose before optimizing](#diagnose-before-optimizing)
- [Stability](#stability)
- [Read scoping](#read-scoping)
- [Lists](#lists)
- [Deferring reads](#deferring-reads)
- [Common false alarms](#common-false-alarms)

## Diagnose before optimizing

Find what actually recomposes before guessing. Options:
- Layout Inspector's recomposition counts show which Composables recompose and
  how often.
- The Compose compiler metrics report flags which Composables are restartable
  and skippable, and which parameters are unstable.
- For a quick local check, a logging side effect or a recomposition counter can
  confirm a hot spot.

A janky scroll is usually allocation or layout cost per frame, not raw
recomposition count. Separate the two before optimizing the wrong one.

## Stability

A Composable can skip recomposition only if all its parameters are stable and
unchanged. A type is stable if the compiler can prove its public properties do
not change without notifying Compose.

- `data class` of stable types is stable. A class with a `var`, or holding a
  `List`/`Map`/`Set` interface type, is treated as unstable.
- Use `kotlinx.collections.immutable` (`ImmutableList`, `PersistentList`) or
  mark a type `@Immutable`/`@Stable` when you can guarantee the contract.
- A lambda that captures unstable values can itself break skipping. Hoisting
  the lambda or remembering it can help.

The practical rule: model screen state as an immutable data class of stable,
immutable collections. Most "recomposes constantly" bugs are a `List` field
that should be an `ImmutableList`.

## Read scoping

Reading a `State` value subscribes the nearest restartable scope. Read in the
smallest scope that needs the value so a change recomposes the least UI.

- Pass values, not the whole state object, into leaf Composables, so a change
  to one field does not recompose siblings that read other fields.
- Reading `state.value` at the top of a screen and threading it down means the
  whole screen recomposes on any change.

## Lists

- Always provide a stable `key` in `items(...)`. Without it, inserts and
  reorders recompose and re-measure far more than needed.
- Provide `contentType` for heterogeneous lists so the runtime reuses the right
  item compositions.
- Keep item Composables cheap and stateless; hoist any per-item state to the
  list's state holder.

## Deferring reads

For high-frequency values (scroll offset, animation progress, drag position),
read them as late as possible using a lambda-based modifier so only layout or
draw re-runs, not composition. `Modifier.offset { ... }` reading a state inside
the lambda defers the read to the layout phase; `Modifier.offset(x.dp)` reading
it during composition recomposes every frame.

## Common false alarms

- "Too many Composables" — Composable count is cheap. Skippable Composables that
  do not recompose cost almost nothing. Do not flatten a clean hierarchy for
  imagined gains.
- "Recomposition is bad" — it is the mechanism, not a defect. Unnecessary,
  wide, or per-frame recomposition is the problem. Targeted recomposition is
  the design working.
- Optimizing before measuring — almost always fixes the wrong thing. Get a
  recomposition count or compiler report first.
