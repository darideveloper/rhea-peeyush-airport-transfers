## Why

The current post-payment success message contains outdated and incomplete copy. It lacks a proper sign-off from the company, and the wording does not match the brand voice of The Cancun Concierge DMC team. Updating it now ensures guests receive a warm, professional confirmation that reflects the brand correctly.

## What Changes

- Replace the SweetAlert2 success dialog body text in `src/App.jsx` with the new copy provided by the client.
- The new message reads:
  > "Thank you very much for providing us your payment and the Cancun travel information. You will receive a detailed e-mail confirmation including arrival process at the airport and hotel departure time (for departure back to the airport) soon. Warmest Regards. The Cancun Concierge DMC team."

## Capabilities

### New Capabilities
<!-- None — this is a copy-only update with no new capability introduced -->

### Modified Capabilities
- `payment-success-message`: The text content of the post-payment SweetAlert2 success dialog is changing to reflect the new approved copy with a proper sign-off.

## Impact

- **File**: `src/App.jsx` — single line change inside the `Swal.fire` call's `html` property.
- No API, routing, or dependency changes required.
- No breaking changes.
