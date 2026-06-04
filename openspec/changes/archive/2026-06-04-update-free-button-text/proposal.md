## Why

The current text "Save my place" for free bookings (total amount is 0) is being updated to "Reserve Now" to provide a clearer call to action that aligns with user expectations for making a reservation, even when no immediate payment is required.

## What Changes

- Update the label of the submit button in the booking form from "Save my place" to "Reserve Now" when the total booking cost is $0.00.

## Capabilities

### New Capabilities
- `free-button-text-update`: Requirements for the updated button label when the transaction total is zero.

### Modified Capabilities
<!-- No existing requirement-level specs are being changed; this is a UI-specific update. -->

## Impact

- `src/sections/form.jsx`: The conditional logic for the `SubmitBtn` value will be updated.
