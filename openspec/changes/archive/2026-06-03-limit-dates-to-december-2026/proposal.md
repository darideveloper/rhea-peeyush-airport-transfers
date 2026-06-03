## Why

The airport transfer booking form currently allows users to select any date. Since the wedding events are specifically between December 17-20, 2026, limiting the date picker to December 2026 improves the user experience by preventing invalid bookings and streamlining the selection process by showing the relevant month by default.

## What Changes

- **Restrict Date Range**: Implement `min` and `max` attributes on the date input fields to restrict selection to the month of December 2026.
- **Default Initial Dates (Priority)**: Update the initial state of the arriving and departing date fields to default to December 17, 2026. This default will take precedence over the first date returned by the `free-dates` API.
- **Initialization Price Sync**: Ensure that setting the default dates triggers the internal price calculation logic so the initial "Total" is correct (reflecting complimentary transport for Dec 17).
- **Flexible Input Component**: Refactor the reusable `Input` component to support attribute spreading (`...props`), allowing for `min`, `max`, and other standard HTML attributes.

## Capabilities

### New Capabilities
- `date-restriction`: Implement client-side validation and calendar restriction to December 2026.
- `initial-date-default`: Set the default starting dates for the form to December 17, 2026, with priority over API suggestions.

### Modified Capabilities
- `rescheduled-wedding-dates`: Update any existing date logic to align with the December 2026 timeframe if necessary.

## Impact

- `src/components/input.jsx`: Refactored to use prop spreading for the `<input>` element and updated `propTypes`.
- `src/sections/form.jsx`: Modified initialization logic in `useEffect` to force default dates and trigger a price refresh. Update JSX to pass `min` and `max` to date inputs.
