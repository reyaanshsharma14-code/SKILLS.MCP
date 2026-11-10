# Examples

What the agent actually produces. Each example shows a prompt, the code under
review, and the kind of response the matching skill drives. The reviews use the
severity tiers (Blocking / Recommended / Minor) and explain the reason behind
each call, which is the behavior the skills are written to enforce.

## Prompts that trigger each skill

| You say | Skill that fires |
|---|---|
| "Review this PR" / "is this the right structure for the data layer?" | `android-architecture-review` |
| "Why is my list screen janky?" / "review this Composable" | `compose-cmp-ui` |
| "How should I test this ViewModel?" / "these tests are flaky" | `android-testing-quality` |

---

## Example 1: Architecture review

**Prompt:** "Quick review of this ViewModel before I open the PR?"

```kotlin
class ProfileViewModel(private val context: Context) : ViewModel() {

    var state = MutableStateFlow<ProfileState>(ProfileState.Loading)

    private val api = Retrofit.Builder()
        .baseUrl("https://api.example.com/")
        .build()
        .create(ProfileApi::class.java)

    fun load(id: String) {
        GlobalScope.launch {
            val user = api.getUser(id)   // returns UserDto
            state.value = ProfileState.Content(user)
        }
    }
}
```

**Response:**

> ## Summary
> Loads a profile into state. The state shape is on the right track, but the
> ViewModel is reaching across boundaries it should not own, and the coroutine
> will leak.
>
> ## Blocking
> - **Constructs Retrofit directly.** The ViewModel is building its own data
>   source, which couples presentation to the network layer and makes it
>   impossible to test without real HTTP. Inject a repository (or use case) that
>   returns a domain model.
> - **`GlobalScope.launch`.** This coroutine outlives the screen and is never
>   cancelled, so a load that finishes after the user leaves still writes to
>   state. Use `viewModelScope`, which cancels when the ViewModel clears.
> - **Holds `Context` as a field.** A ViewModel survives configuration changes;
>   a `Context` does not. This is a leak. Nothing UI-scoped belongs here.
> - **Public mutable state.** `var state: MutableStateFlow` lets any caller
>   reassign or emit into the screen's state. Expose it as a read-only
>   `StateFlow` (`val state: StateFlow = _state.asStateFlow()`).
>
> ## Recommended
> - **Exposes `UserDto` in state.** The network shape leaks into the UI, so every
>   API change ripples into Composables. Map to a domain `User` at the repository
>   boundary.
>
> ## What's good here
> - State is modeled as a single sealed type with explicit Loading/Content
>   states, which is exactly the right shape. Keep that.

---

## Example 2: Compose review

**Prompt:** "This feed screen recomposes constantly and scroll feels heavy. What's wrong?"

```kotlin
@Composable
fun FeedScreen(viewModel: FeedViewModel) {
    val state by viewModel.state.collectAsState()
    val analytics = Analytics.getInstance()
    analytics.track("feed_shown")

    LazyColumn {
        items(state.posts) { post ->
            PostRow(post = post, state = state)
        }
    }
}

data class FeedState(val posts: List<Post>, val isRefreshing: Boolean)
```

**Response:**

> ## Summary
> Two recomposition problems and a misplaced side effect. None of them are about
> "too much Compose"; they are about stability, read scope, and effects.
>
> ## Blocking
> - **Analytics fires in the composition body.** `track("feed_shown")` runs on
>   every recomposition, not once. Move it into `LaunchedEffect(Unit) { ... }` so
>   it fires once when the screen enters composition.
>
> ## Recommended
> - **`posts: List<Post>` is unstable.** A `List` interface type is treated as
>   unstable, so the runtime cannot skip recomposition reliably. Use
>   `ImmutableList<Post>` (kotlinx.collections.immutable). This alone often fixes
>   "recomposes constantly."
> - **`items(state.posts)` has no key.** Without a stable `key`, inserts and
>   reorders recompose and re-measure far more rows than changed. Add
>   `items(state.posts, key = { it.id })`.
> - **`PostRow` takes the whole `state`.** Every row reads the entire state
>   object, so a change to `isRefreshing` recomposes every row. Pass only what
>   the row needs (`post`), not the screen state.
> - **`collectAsState()`** keeps collecting while the screen is backgrounded. Use
>   `collectAsStateWithLifecycle()` so collection stops when not visible.
>
> ## What's good here
> - `LazyColumn` is the right container, and state lives in the ViewModel rather
>   than the Composable. The fixes are local.

---

## Example 3: Testing review

**Prompt:** "Is this ViewModel test okay? It passes locally but sometimes fails on CI."

```kotlin
@Test
fun testLoad() {
    val vm = SearchViewModel(repo = mockk(relaxed = true))
    vm.search("kotlin")
    Thread.sleep(500)
    assertTrue(vm.state.value is SearchState.Content)
}
```

**Response:**

> ## Summary
> The intermittent CI failure is the test telling you it depends on real timing.
> The fix removes the race and makes the assertion meaningful.
>
> ## Blocking
> - **`Thread.sleep(500)` to wait for async work.** This is the flake. On a
>   loaded CI machine the work may take longer than 500ms and the assertion runs
>   too early. Inject the dispatcher, run inside `runTest`, and let the test
>   scheduler advance virtual time. No sleeping.
>
> ## Recommended
> - **`mockk(relaxed = true)` for the repository.** A relaxed mock returns empty
>   defaults, so the test passes whether or not search actually works. Use a fake
>   repository that returns known results, then assert you got them back. That
>   turns a tautology into a real test.
> - **Asserts only the state *type*.** `is SearchState.Content` passes even if
>   the content is wrong. Assert the actual emitted state, ideally the sequence
>   (Loading then Content) with Turbine, so the test pins the behavior the user
>   sees.
>
> ## What's good here
> - The instinct to test through the public `search()` entry point rather than
>   internals is right. Keep driving the ViewModel as a black box.

---

These outputs are illustrative of the review style the skills produce; exact
wording varies with the agent and the code. To try them, install the skills in
your tool of choice (see the root [README](../README.md)) and paste one of the
prompts above.
