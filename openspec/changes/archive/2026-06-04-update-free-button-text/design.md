## Context

Currently, the `src/sections/form.jsx` file uses a ternary operator to decide the label of the `SubmitBtn` based on whether the `total` is zero.
Existing logic: `value={total == 0 ? "Save my place" : "Buy Now"}`.

## Goals / Non-Goals

**Goals:**
- Update the button text for the free booking case to "Reserve Now".
- Maintain existing "Buy Now" text for paid bookings.

**Non-Goals:**
- Modifying the styling of the button.
- Changing the calculation of the `total`.
- Updating the VIP code apply button text.

## Decisions

- **Direct update in `src/sections/form.jsx`**: We will modify the ternary expression to use the new string "Reserve Now".
- **Rationale**: This is the most surgical and direct way to implement the change while maintaining consistency with the current codebase patterns.

## Risks / Trade-offs

- **Risk**: Hardcoding strings might make internationalization harder in the future.
- **Mitigation**: The project currently appears to use hardcoded strings throughout; this change follows existing patterns.
