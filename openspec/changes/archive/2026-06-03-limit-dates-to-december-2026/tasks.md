## 1. Component Updates

- [x] 1.1 Refactor `src/components/input.jsx` to use `{...props}` for the `<input>` element to support native attribute spreading.
- [x] 1.2 Update `Input.propTypes` in `src/components/input.jsx` to include `min` and `max` as optional strings.

## 2. Form Logic Implementation

- [x] 2.1 Modify the `getFreeDates().then(...)` block in `src/sections/form.jsx` to set `arrivingDate` and `departingDate` to `"2026-12-17"` (ignoring the API's first suggestion).
- [x] 2.2 In the same `useEffect`, ensure `handleUpdateDate` is called with the Dec 17 date and `forceUpdate=true` to initialize the complimentary pricing correctly.
- [x] 2.3 Update the `Input` components for "Arriving date" and "Departing date" in the `getArraivingDepartingForm` function in `src/sections/form.jsx` to include `min="2026-12-01"` and `max="2026-12-31"`.

## 3. Verification

- [x] 3.1 Verify that the calendar picker only allows selecting dates in December 2026.
- [x] 3.2 Confirm that the form pre-fills with December 17, 2026, upon initial loading.
- [x] 3.3 Confirm that the initial "Total" reflects complimentary transportation ($0 for Dec 17) upon first load.
