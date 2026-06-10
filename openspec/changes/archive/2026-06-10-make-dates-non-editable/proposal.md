## Why

The wedding dates have been updated/rescheduled to December 17 - 20, 2026. To align the booking form with this schedule and prevent errors or incorrect date selection by users, the date inputs should be pre-filled with the exact arrival (December 17th, 2026) and departure (December 20th, 2026) dates, and the inputs should be made non-editable (read-only).

## What Changes

- Make the arriving and departing date fields in the booking form non-editable.
- Update the default/fixed arriving date to December 17, 2026.
- Update the default/fixed departing date to December 20, 2026.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `initial-date-default`: Modify the default values so that Arriving date defaults to December 17, 2026 and Departing date defaults to December 20, 2026, and prevent users from editing these fields.

## Impact

- `src/sections/form.jsx`: Updates the default dates and date input states.
- `src/components/input.jsx`: Ensure the `Input` component can accept a `readOnly` or `disabled` prop to prevent editing.
