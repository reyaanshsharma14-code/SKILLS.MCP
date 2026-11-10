# CMP Platform Notes

Read this when building or reviewing Compose Multiplatform UI that has to run on
more than one platform, or when deciding what belongs in `commonMain` versus a
platform source set.

## Source-set layout

```
composeApp/src/
  commonMain/     shared UI, state, logic  (the default home for code)
  androidMain/    Android actuals + Activity host
  iosMain/        iOS actuals + UIViewController entry
  jvmMain/        desktop actuals + window entry
  wasmJsMain/     web actuals (if targeted)
```

Default to `commonMain`. Code only moves to a platform set when it cannot
compile or behave correctly in common code. Treat each platform actual as a
small adapter, not a second copy of the feature.

## What actually needs a platform seam

These differ enough across platforms to justify an `expect`/`actual` or a
platform parameter:

- System bars / safe areas / insets handling.
- Back navigation (Android predictive back, iOS swipe, desktop has none).
- Haptics and system sounds.
- File and media pickers, sharing, permissions.
- Secure storage and biometric prompts.
- Opening URLs, deep links, and platform-specific intents.

Keep the seam's common signature platform-neutral. Define
`expect fun shareText(text: String)`, not a signature that mentions an Android
`Context` or an iOS controller. Each `actual` resolves the platform handle
internally (for example via a `LocalContext` or an injected dependency).

## Resources and fonts

- Use the Compose Multiplatform resources system (`Res.drawable.*`,
  `Res.string.*`, `Res.font.*`) so assets resolve from `commonMain` across
  platforms rather than per-platform resource folders.
- Bundle custom fonts as resources and load them through the resources API so
  they render identically on every target. Do not assume a system font exists
  on all platforms.

## Navigation

Several options coexist (Compose Navigation now has multiplatform support, plus
community libraries such as Voyager and Decompose). The senior judgment is less
about which library and more about:

- Type-safe routes over stringly-typed ones, so a missing argument is a compile
  error.
- A single navigation source of truth, not navigation state duplicated in
  ViewModels.
- Back-stack behavior verified per platform; the platforms differ most exactly
  here.

## Common review findings

- A platform type leaking into a common signature. Push it behind the actual.
- A whole screen forked per platform when only one behavior differs.
  Parameterize the behavior instead.
- Platform code in `commonMain` guarded by runtime checks (for example
  inspecting an OS name string) instead of an `expect`/`actual` seam. The
  compiler should enforce the split, not a runtime branch.
- Resources duplicated per platform instead of shared through the resources
  API, causing drift between platforms.
