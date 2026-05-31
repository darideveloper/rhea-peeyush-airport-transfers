## Why

The wedding dates for Rhea & Peeyush have been rescheduled to December 17 - 20, 2026, requiring an update to the landing page content. Additionally, the footer's copyright year is hardcoded to 2023, and the project's license is hardcoded to 2025; both need to be updated to reflect the current year and ensure the site remains current.

## What Changes

- Update the primary wedding date range in the `Hero` section to "December 17 - 20, 2026".
- Update the complimentary transportation dates description in the `Hero` section to "December 17th, on December 18th, on December 19th, and on December 20th".
- Refactor the `Footer` component to replace the hardcoded "2023" with a dynamically generated current year using client-side JavaScript.
- Update the `LICENSE` file to reflect the year 2026.

## Capabilities

### New Capabilities
- `dynamic-footer-year`: Automatically display the current year in the site footer using client-side JavaScript to ensure copyright information remains current.
- `rescheduled-wedding-dates`: Update all static text on the landing page and license information to reflect the new wedding schedule for December 2026.

## Impact

- `src/sections/hero.jsx`: Text content for wedding dates and transportation schedule.
- `src/sections/footer.jsx`: Copyright year text replacement with dynamic logic.
- `LICENSE`: Copyright year update.
