# Test Recipes

Read this when you need a concrete, copyable pattern for testing a specific
Android or KMP construct. These are shapes to adapt, not drop-in code; align
imports and versions with the project.

## Contents
- [Dispatcher injection](#dispatcher-injection)
- [ViewModel state sequence](#viewmodel-state-sequence)
- [Flow with Turbine](#flow-with-turbine)
- [Repository with in-memory db](#repository-with-in-memory-db)
- [Compose content test](#compose-content-test)

## Dispatcher injection

Make dispatchers a dependency so tests control time. Production passes the real
ones; tests pass a single test dispatcher.

```kotlin
class GetThings(
    private val repo: ThingRepo,
    private val io: CoroutineDispatcher = Dispatchers.IO,
) {
    suspend fun run() = withContext(io) { repo.load() }
}

// test
val dispatcher = StandardTestDispatcher()
val subject = GetThings(repo, dispatcher)
```

A `MainDispatcherRule` (a JUnit rule that swaps `Dispatchers.Main` for a test
dispatcher in setup and resets it in teardown) lets `viewModelScope` work in
plain JVM tests.

## ViewModel state sequence

Drive the public events; assert on the state stream. Do not touch private
fields.

```kotlin
@Test
fun loadsThenShowsContent() = runTest {
    val vm = ThingViewModel(getThings = fakeGetThings)

    vm.state.test {                 // Turbine
        assertEquals(Loading, awaitItem())
        vm.onEvent(ThingEvent.Load)
        assertEquals(Content(expectedThings), awaitItem())
        cancelAndIgnoreRemainingEvents()
    }
}
```

The test reads like the user story: start loading, load, see content. It says
nothing about how the ViewModel achieves it, so a refactor that preserves
behavior keeps it green.

## Flow with Turbine

Assert on emissions over time instead of collecting into a list and hoping the
timing works out.

```kotlin
@Test
fun emitsUpdates() = runTest {
    repo.things.test {
        assertEquals(emptyList(), awaitItem())
        repo.add(thing)
        assertEquals(listOf(thing), awaitItem())
        cancelAndConsumeRemainingEvents()
    }
}
```

## Repository with in-memory db

Prefer a real in-memory database over mocking the dao/query layer, so the test
exercises actual queries and mapping.

```kotlin
// SQLDelight: JdbcSqliteDriver(IN_MEMORY) in commonTest / jvmTest
// Room: Room.inMemoryDatabaseBuilder(...).build() in instrumented or Robolectric

@Test
fun cachesNetworkResult() = runTest {
    val repo = ThingRepo(db = inMemoryDb, network = FakeNetwork(returns = dto))
    repo.refresh()
    assertEquals(listOf(domainThing), repo.things.first())
}
```

## Compose content test

Test the stateless content Composable: feed it state, assert on nodes, capture
emitted events. Keep the ViewModel out of this test.

```kotlin
@get:Rule val rule = createComposeRule()

@Test
fun clickEmitsEvent() {
    var clicked = false
    rule.setContent {
        ThingContent(state = Content(things), onEvent = { clicked = true })
    }
    rule.onNodeWithText("Refresh").performClick()
    assertTrue(clicked)
}
```

For visual regressions, a screenshot test (Roborazzi on the JVM, or Paparazzi)
renders the same content and compares against a golden image. Keep goldens
under review like any other source; an unexplained golden change is a UI
regression until proven otherwise.
