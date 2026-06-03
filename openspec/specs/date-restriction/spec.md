## ADDED Requirements

### Requirement: Date Input Restriction
The `Input` component SHALL support `min` and `max` attributes to allow restricting the selectable range for date inputs.

#### Scenario: Verify min and max attributes in HTML
- **WHEN** an `Input` of `type="date"` is rendered with `min="2026-12-01"` and `max="2026-12-31"`
- **THEN** the resulting `<input>` element in the DOM contains the corresponding `min` and `max` attributes.

### Requirement: Form-wide Date Range Limitation
All date inputs within the booking form SHALL be restricted to the month of December 2026 to ensure bookings are only made for the relevant event period.

#### Scenario: Attempt to select date outside December 2026
- **WHEN** a user attempts to select a date in November 2026 or January 2027
- **THEN** the browser's native date picker prevents selection or the input is marked as invalid according to HTML5 validation rules.
