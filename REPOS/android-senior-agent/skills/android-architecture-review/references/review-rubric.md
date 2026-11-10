# Review Rubric

Read this when doing a structured review. It expands the workflow in SKILL.md
into per-layer checks and the heuristics that separate a real problem from a
preference.

## Contents
- [Dependency direction](#dependency-direction)
- [UI layer](#ui-layer)
- [Presentation layer](#presentation-layer)
- [Domain layer](#domain-layer)
- [Data layer](#data-layer)
- [Concurrency](#concurrency)
- [Real problem vs preference](#real-problem-vs-preference)

## Dependency direction

The stable rule across MVVM, MVI, and clean-ish architectures: dependencies
point toward the more stable, less framework-coupled code. UI depends on
presentation, presentation depends on domain, domain depends on nothing
Android-specific. Data implements interfaces the domain owns.

Red flags:
- A domain or use-case type importing `android.*`, a Composable, or a DTO from
  the network layer.
- A ViewModel constructing a Retrofit service or a database directly instead of
  receiving a repository or use case.
- Two feature modules importing each other (a cycle). Extract the shared piece
  into a lower module instead.

## UI layer

- Composables are functions of state. Business decisions do not live here.
- State is hoisted to the level that owns it; a leaf Composable takes values
  and lambdas, not a ViewModel.
- Side effects use the right effect API (`LaunchedEffect`, `DisposableEffect`,
  `rememberCoroutineScope`) rather than running in the composition body.
- No blocking work, no I/O, no `runBlocking` in a Composable.

## Presentation layer

- One source of truth for screen state, typically a single immutable state
  object exposed as `StateFlow`.
- Events flow in through explicit functions or an intent/action type; state
  flows out. No two-way binding back into the UI's own mutable fields.
- The ViewModel survives config change; nothing UI-scoped (Context, View,
  NavController) is held as a field.
- `viewModelScope` is used for work that should die with the screen.

## Domain layer

- Use cases express a single capability and are testable without Android.
- Models here are domain models, not DTOs or entities. Mapping happens at the
  boundary, not in the UI.
- Pure where possible. Side effects are pushed to interfaces the data layer
  implements.

## Data layer

- A repository mediates sources (network, db, cache) and exposes domain models.
- Local-first patterns (for example SQLDelight or Room as the source of truth,
  network as a sync input) keep a single observable source rather than racing
  two.
- Secrets and tokens are not logged, not stored in plain shared prefs. Note
  encryption at rest where the data warrants it (for example SQLCipher).
- Errors are modeled, not swallowed. A `catch` that logs and returns null hides
  failures the UI needs to show.

## Concurrency

- Every launched coroutine has a scope that will cancel it. A coroutine in
  `GlobalScope` is almost always a leak or a bug.
- Dispatchers are injected, not hard-coded, so tests can substitute a test
  dispatcher.
- `Flow` is cold by default; only share (`stateIn`, `shareIn`) when multiple
  collectors or caching justify it, and pick the right `SharingStarted`.
- Suspending work that touches the main thread (UI updates) stays on the main
  dispatcher; CPU and I/O move off it.

## Real problem vs preference

Before writing a comment, ask: will this cause a bug, a leak, a security issue,
or a boundary that compounds? If yes, it is at least Recommended, often
Blocking. If it is "I would have named this differently" or "I prefer this
formatting," it is Minor and should be labeled optional.

Calibration examples:
- Mutable state escaping a ViewModel as a public `var`: Blocking (correctness).
- A use case importing a Compose type: Blocking (boundary).
- Repository returns DTOs instead of domain models: Recommended (will leak the
  network shape upward; cost grows with each consumer).
- `fun getUser()` vs `fun loadUser()`: Minor.
