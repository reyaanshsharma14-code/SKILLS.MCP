# Test Strategy

Read this when designing or auditing a project's overall testing approach, or
when deciding how to test a given layer.

## Contents
- [Strategy by layer](#strategy-by-layer)
- [Fakes vs mocks](#fakes-vs-mocks)
- [Determinism](#determinism)
- [CI gating](#ci-gating)
- [Coverage, used honestly](#coverage-used-honestly)

## Strategy by layer

**Domain / use cases.** Pure functions of inputs to outputs. Plain JVM tests,
no framework. These are the cheapest and highest-value tests; aim for thorough
branch coverage here.

**Presentation / ViewModels.** Drive through public events and assert on the
emitted state sequence. Inject the dispatcher and any clock so the test is
deterministic. Treat the ViewModel as a black box from the UI's perspective.

**Data / repositories.** Test coordination: cache-then-network, error mapping,
local-first sync. Prefer a real in-memory database (for example an in-memory
SQLDelight or Room instance) and a fake network over mocking every call, so the
test exercises real query and mapping behavior.

**UI.** Stateless content Composables tested with the Compose test rule; a small
number of end-to-end journeys instrumented or run under Robolectric. Screenshot
tests for components whose visual correctness is part of the contract.

**KMP shared code.** Tests in `commonTest` run on every configured target, which
is the point of sharing: write the assertion once, validate it everywhere.
Reserve platform test source sets for the platform actuals.

## Fakes vs mocks

Default to fakes (hand-written test doubles with real, simple behavior) over
mocks (recorded expectations) for anything you own.

- A fake repository that stores items in a map and returns them behaves like the
  real thing and survives refactors. A mock that verifies `getUser()` was called
  exactly once breaks when you add a reasonable second call.
- Use mocks when the *interaction itself* is the contract you want to pin (for
  example "analytics event X fires exactly once on purchase"). There, the call
  is the behavior, so verifying it is legitimate.
- Avoid mocking types you do not own (framework classes, third-party clients).
  Wrap them behind your own interface and fake that.

## Determinism

Flaky tests erode trust faster than missing tests. The usual causes:
- Real dispatchers or real delays. Inject a test dispatcher and control virtual
  time.
- Wall-clock time or random values. Inject a clock and a seed.
- Shared mutable state or order dependence between tests. Each test sets up its
  own state; none should depend on another running first.
- Racing on async results. Use Turbine for Flow and the test scheduler's time
  control rather than sleeping.

A test that fails intermittently is worse than no test, because it trains the
team to ignore red. Quarantine or fix flakes promptly.

## CI gating

- Run unit and JVM tests on every PR; they are fast enough to block merge.
- Run instrumented and screenshot tests on a schedule or on a labeled subset if
  they are too slow for every PR, but ensure they run before release.
- Fail the build on new flakiness rather than retrying silently; a silent retry
  hides a real race.
- Keep the signal fast. If the required suite takes too long, engineers stop
  running it locally and start ignoring it in CI.

## Coverage, used honestly

Coverage tells you what was executed, not what was verified. A test that calls a
method and asserts nothing still counts as coverage. Use it to find untested
branches in important code, not as a target to hit. A falling coverage number on
a risky module is a useful prompt; a high number across trivial code is noise.
