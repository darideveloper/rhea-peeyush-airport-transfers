## Context

The current booking form uses a reusable `Input` component that renders a standard HTML `<input>`. The `Form` section handles the logic for fetching available dates from an API and updating the state for `arrivingDate` and `departingDate`. Currently, there are no restrictions on the date range, and the calendar defaults to the current month.

## Goals / Non-Goals

**Goals:**
- Restrict the date picker to December 2026.
- Default the initial date selection to December 17, 2026.
- Update the `Input` component to be more flexible for date-specific attributes.

**Non-Goals:**
- Implementing a custom JavaScript date picker library.
- Changing the backend API logic for `free-dates`.

## Decisions

### 1. Use Native HTML `min` and `max` Attributes
We will pass `min` and `max` props through the `Input` component to the underlying `<input type="date">`.
- **Rationale**: This is the most lightweight and accessible way to restrict dates. It leverages the browser's built-in calendar UI.
- **Implementation**: The `Input` component will be refactored to use `{...props}` to spread attributes onto the `<input>` element, ensuring future-proofing for other HTML attributes.

### 2. Priority Initialization in `useEffect`
We will set the initial `arrivingDate` and `departingDate` to `"2026-12-17"` within the `useEffect` that fetches data from the API, specifically *after* the `getFreeDates` call completes.
- **Rationale**: This ensures the default date of Dec 17 is not overwritten by the API's first suggestion.
- **Price Synchronization**: After setting the default dates, we will call `handleUpdateDate` for both Arriving and Departing with a `forceUpdate` flag. This ensures the pricing logic (which marks Dec 17-20 as complimentary) is applied immediately on load.

### 3. Prop Passthrough and Validation
The `Input` component will use prop spreading and its `propTypes` will be updated to include `min` and `max`.
- **Rationale**: Prevents React console warnings and follows best practices for reusable components.

## Risks / Trade-offs

- **[Risk]** Browser Compatibility: Some very old browsers might not support `min`/`max` for date inputs. 
  - **Mitigation**: The form already requires modern JS features, and the impact is low as the backend should still validate (though this change is client-side focused).
- **[Risk]** API Conflict: The `free-dates` API might return dates outside of December 2026.
  - **Mitigation**: The `min` and `max` attributes will visually override the API suggestions in the UI, ensuring the user can only select within the wedding window.
