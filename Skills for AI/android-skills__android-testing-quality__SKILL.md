---
name: android-testing-quality
description: >-
  Design and review the testing strategy for Android and Kotlin Multiplatform
  projects: what to test at unit, integration, and UI level, how to test
  Compose, coroutines and Flow, and KMP shared code, plus fakes versus mocks and
  CI gating. Use this whenever someone asks how to test Android or Kotlin code,
  mentions flaky tests, low or misleading coverage, testing a ViewModel,
  Composable, or Flow, names tools like Turbine, Robolectric, Roborazzi, or
  screenshot tests, or wants a senior take on what is actually worth testing.
---

# Android Testing & Quality

Help design and review tests that catch real regressions and survive refactors,
rather than tests that inflate coverage and break on every change. The goal is
confidence per unit of maintenance, not a coverage number.

## What is worth testing

Test behavior, not implementation. A good test would still pass after an
internal refactor that preserves behavior, and would fail if the behavior
broke. Prioritize by risk and volatility:

- **High value:** domain logic and use cases, ViewModel state transitions,
  data mapping and error handling, anything with branching or money or auth.
- **Medium value:** repository coordination, navigation contracts, Compose
  screens at the state-to-UI level.
- **Low value:** trivial getters, framework glue, generated code, exact pixel
  layout (unless it is a deliberate screenshot test).

Coverage percentage is a weak signal. 90% coverage of getters tells you less
than a focused suite over the branching logic. When reviewing, look at what is
tested, not how much.

See `references/test-strategy.md` for the layer-by-layer strategy, the
fakes-versus-mocks decision, and how to gate tests in CI.

## The test pyramid for Android / KMP

- **Unit (most of them):** pure JVM tests of domain, use cases, ViewModels,
  mappers. Fast, no Android, no emulator. In KMP these live in `commonTest` and
  run on every target.
- **Integration (some):** repository plus a real in-memory database or a fake
  network, verifying coordination across components.
- **UI / instrumented (few):** the critical user journeys, run on device or
  with Robolectric. Expensive and slower, so reserve them for flows that unit
  tests cannot cover.

Most projects are inverted: too many brittle UI tests, too few unit tests. When
reviewing, watch for that shape.

## Testing the hard parts

- **Coroutines and Flow:** inject dispatchers so tests can substitute a test
  dispatcher and control virtual time. Assert on Flow emissions with Turbine
  rather than collecting into a list and racing.
- **ViewModels:** drive the public entry points (events/intents) and assert on
  the emitted state sequence. Do not reach into private fields.
- **Compose:** test the stateless content Composable by feeding it state and
  asserting on nodes and on emitted events. Use screenshot tests (Roborazzi,
  Paparazzi) for visual regressions on components that matter.
- **KMP shared code:** put tests in `commonTest` so the same suite validates
  every platform; only drop to a platform test set for genuinely
  platform-specific actuals.

See `references/test-recipes.md` for concrete, copyable patterns for each of
these.

## Reviewing tests

- Does the test assert behavior, or does it mirror the implementation so any
  refactor breaks it?
- Is it deterministic? Flakiness usually traces to real time, real
  dispatchers, shared mutable state, or order dependence between tests.
- Does a mock verify an interaction that is actually the contract, or is it
  over-specifying calls that are incidental? Prefer a fake with real behavior
  when the interaction count is not the point.
- Is the failure message useful? A test that fails with "expected true, was
  false" wastes the next engineer's time.

Explain the consequence: "inject the dispatcher so this test does not depend on
wall-clock timing; otherwise it will be flaky on a loaded CI machine."
