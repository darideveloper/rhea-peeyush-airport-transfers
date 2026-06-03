## Why

The VIP code feature is currently not required for the user's operations but might be needed in the future. To simplify the user experience and avoid confusion for guests who do not have a code, the feature should be hidden while remaining intact in the codebase for easy re-enabling.

## What Changes

- Hide the VIP code input and apply button from the main booking form UI.
- Ensure the underlying logic for VIP code validation and price manipulation remains present but inactive for the general user.
- Maintain the `VipCodeContext` and API integration so the feature can be quickly restored by un-commenting or re-rendering the component.

## Capabilities

### New Capabilities
- `hidden-vip-feature`: Defines the requirement that the VIP code feature is present in the system but inaccessible via the primary user interface.

### Modified Capabilities
- `transportation-options`: The UI layout of the transportation options form will no longer include the VIP code section by default.

## Impact

- `src/sections/form.jsx`: The `<VipCode />` component will be commented out or conditionally rendered to `false`.
- `src/components/vip-code.jsx`: No changes expected, but its entry point in the form is removed.
- `src/api/stripe.js`: Will still receive `vipCode` from context, but it will default to the initial state (null/empty) since the UI is hidden.
- `src/context/vip-code.jsx`: Remains active but its state won't be modified by users.
