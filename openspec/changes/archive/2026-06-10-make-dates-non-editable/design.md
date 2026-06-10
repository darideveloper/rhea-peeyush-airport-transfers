## Context

Currently, the booking form defaults the arriving and departing dates to December 17, 2026, and allows the user to edit these dates. Since the wedding dates are set to December 17 - 20, 2026, the arriving date should be December 17, 2026, and the departing date should be December 20, 2026. Both date fields must be made read-only (non-editable) to prevent user errors and ensure alignment with the official wedding event schedule.

## Goals / Non-Goals

**Goals:**
- Update the default arriving date to `2026-12-17`.
- Update the default departing date to `2026-12-20`.
- Make both date inputs non-editable (read-only) while still submitting their values with the form.
- Apply appropriate styling (e.g. pointer-events-none, cursor-not-allowed, and subtle background/opacity changes) to visually communicate that the dates are fixed.

**Non-Goals:**
- Change other form inputs (e.g., flight times, airlines, names) to be read-only.
- Implement any backend changes or API modifications.

## Decisions

### 1. Use `readOnly={true}` instead of `disabled={true}`
- **Option A: Use `disabled` attribute.**
  - *Pros*: Simple, native browser support for preventing editing.
  - *Cons*: Disabled inputs are not submitted as part of standard HTML form data.
- **Option B: Use `readOnly` attribute (Chosen).**
  - *Pros*: Prevents editing while still submitting the form values.
  - *Cons*: For date inputs, some browsers may still allow clicking the calendar icon or clearing the field.
  - *Resolution*: Use `readOnly` and apply `pointer-events-none select-none cursor-not-allowed bg-gray-100` styling on the input element. Also, keep the onChange handler or avoid triggering updates since the values are fixed.

### 2. Update default initialization in `src/sections/form.jsx`
- Arriving date: initialized to `"2026-12-17"`.
- Departing date: initialized to `"2026-12-20"`.
- Invoke `handleUpdateDate` for both dates appropriately with their corresponding values.

## Risks / Trade-offs

- **Risk**: User wants to change dates because they are arriving early or staying late.
  - *Mitigation*: The event organizers explicitly require all guests to book within the main event window (arrivals Dec 17, departures Dec 20). If special exceptions are needed, they will have to be handled out-of-band/manually.
- **Risk**: User clears the field or bypasses read-only.
  - *Mitigation*: Applying `pointer-events-none` disables interactive mouse and touch events on the input.
