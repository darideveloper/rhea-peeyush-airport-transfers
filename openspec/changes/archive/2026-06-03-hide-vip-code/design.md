## Context

The VIP code feature is integrated into the `Form` component via the `VipCode` component. It uses a context-based state management system that affects pricing and form submission. The user wants to hide this feature to avoid confusion but preserve the possibility of re-enabling it later.

## Goals / Non-Goals

**Goals:**
- Hide the VIP code section from the user interface.
- Keep the existing feature code (API, Context, Component) intact.
- Minimize changes to the core logic to ensure stability.

**Non-Goals:**
- Deleting the VIP code logic or files.
- Refactoring the `VipCodeContext` or API integration.
- Modifying the backend API.

## Decisions

### 1. Hide the component in `src/sections/form.jsx`
Instead of deleting the import and component usage, I will comment out the rendering of `<VipCode />` in the `Form` component's return statement.
- **Rationale**: Commenting out code is the most direct and reversible way to "hide" a feature while signaling to future developers that it's intentionally disabled.
- **Alternative**: Using a feature flag or a conditional render like `false && <VipCode />`. While cleaner for production, commenting is more explicit for this specific request of "hiding but keeping".

### 2. Maintain Context usage
I will keep the `VipCodeContext` imports and the destructuring of `vipCode` and `isVip` in `src/sections/form.jsx`.
- **Rationale**: Removing these would require changing the `submitStripe` call and the price update `useEffect`, which increases the risk of regressions and makes re-enabling harder. Since the UI is hidden, `isVip` will always be false, and `vipCode` will be empty, making the existing logic "neutral".

## Risks / Trade-offs

- **[Risk]** Confusion for future developers seeing "dead" code. → **Mitigation**: Add a comment explaining that the feature is intentionally hidden and can be re-enabled if needed.
- **[Risk]** Accidental activation of VIP mode. → **Mitigation**: Ensure the UI is the only entry point for setting the VIP status. Since the component is not rendered, the user cannot trigger the validation.
