## Context

The current landing page displays hardcoded wedding dates for November 2025 and a hardcoded copyright year of 2023 in the footer. These need to be updated to reflect the new December 2026 schedule and ensure the footer remains current without further manual edits.

## Goals / Non-Goals

**Goals:**
- Update all visible wedding date strings in the Hero section to the new December 17-20, 2026 schedule.
- Implement a client-side dynamic year in the footer's copyright notice.

**Non-Goals:**
- Modifying the dynamic booking form logic or API-driven "free dates" (this is explicitly out of scope per user instruction).
- Redesigning any UI components or layouts.

## Decisions

- **Dynamic Footer Year**: Use the standard JavaScript `new Date().getFullYear()` within the `Footer` component's JSX. This ensures that the copyright year is always calculated based on the current date when the component renders on the client side.
- **Hero Date Strings**: Perform direct string replacements in `src/sections/hero.jsx` to update the event dates and the descriptive transportation text.
- **LICENSE Update**: Perform a direct string replacement in `LICENSE` to update the copyright year to 2026.

## Risks / Trade-offs

- **Client-side Time Dependency**: The dynamic year relies on the user's system clock. 
  - [Risk] If a user's system clock is set to the wrong year, the copyright notice will reflect that error.
  - [Mitigation] This is a standard practice for static sites/SPAs and has minimal impact on site functionality or legal standing for a copyright notice.
