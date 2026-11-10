# Module Boundaries

Read this when reviewing or designing the module structure of an Android or
Compose Multiplatform project, or when a change crosses module lines.

## Why modules at all

Modules exist for three concrete payoffs, in rough order of how often they
justify the cost:

1. **Build speed.** Gradle can skip and parallelize modules that did not
   change. A well-split graph is the main lever for incremental build time.
2. **Enforced boundaries.** A dependency that is not declared cannot be used.
   The module graph turns "please don't import that" into a compile error.
3. **Team scaling and reuse.** Independent ownership, and reuse across apps or
   platforms (especially with CMP).

If none of these apply yet, a feature does not need its own module. Premature
modularization adds Gradle ceremony without payoff. Note that when reviewing.

## A structure that scales

A common, sound layering (names vary; the shape is the point):

```
:app                      wiring, DI graph, navigation host
:feature:<name>           one screen or flow; depends on domain + design
:core:designsystem        theme, components, tokens (Compose / CMP)
:core:domain              use cases, domain models (no Android)
:core:data                repositories, DTO/entity mapping
:core:network             clients
:core:database            SQLDelight / Room
:core:common              shared utilities, Result types
```

Rules that keep the graph healthy:
- Features depend on core, never on each other. Cross-feature needs go through
  a lower module or a navigation contract.
- `:core:domain` has no Android dependency, which makes it shareable in a KMP
  `commonMain` source set and unit-testable on the JVM.
- The DI graph is assembled in `:app`; lower modules expose modules/bindings
  but do not decide the whole graph.

## Compose Multiplatform specifics

With CMP the boundary question gains a second axis: not just which layer, but
which platform.

- Put shared logic and shared UI in `commonMain`. Push only what truly differs
  into platform source sets via `expect`/`actual`.
- A leaky `expect`/`actual` that exposes a platform type in a common signature
  defeats the purpose. Keep the common contract platform-neutral and adapt
  inside the `actual`.
- Resist duplicating a near-identical screen per platform. Differences are
  usually a handful of behaviors (haptics, system bars, file pickers) that
  belong behind a small expect/actual seam, not a forked screen.

## Reviewing a module change

- Did the change add a dependency edge? Is the new edge pointing inward and
  acyclic?
- Did it widen a public API that should stay internal? Prefer `internal`
  visibility so the module's surface stays small.
- Did it move code across a boundary for a good reason, or just to make an
  import compile? The latter is a smell that the boundary is in the wrong place.
