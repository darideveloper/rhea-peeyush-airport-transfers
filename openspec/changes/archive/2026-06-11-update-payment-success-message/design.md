## Context

The post-payment success alert is rendered in `src/App.jsx` using SweetAlert2. When a user completes payment via Stripe, the backend redirects them back to the site with a `?thanks` query parameter. `App.jsx` detects this parameter on load and fires a `Swal.fire()` success dialog. The current `html` body text is outdated and lacks a proper brand sign-off.

## Goals / Non-Goals

**Goals:**
- Replace the `html` string inside `Swal.fire()` in `src/App.jsx` with the new approved copy.
- Ensure the sign-off reads "Warmest Regards. The Cancun Concierge DMC team." (correcting the user's original "Walmart Regads" typo).

**Non-Goals:**
- Changing the SweetAlert2 icon, title, or any other dialog configuration.
- Modifying the `?thanks` URL param detection logic.
- Changing any backend or Stripe redirect behavior.
- Styling or layout changes to the dialog.

## Decisions

**Direct string replacement in `App.jsx`**
The entire change is a single string update in one file. No abstraction (e.g., constants file, i18n) is needed for a project of this scope.

## Risks / Trade-offs

- **Typo in user input** → "Walmart Regads" is clearly a typo for "Warmest Regards". Corrected in implementation. [Risk: mis-correction] → The task description makes the intent clear; no confirmation needed.
- No other risks — this is a pure copy change with zero functional impact.
