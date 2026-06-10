## MODIFIED Requirements

### Requirement: Default Wedding Start Date
The booking form SHALL default the initial selection for the Arriving date to December 17, 2026 and the Departing date to December 20, 2026. Furthermore, both Arriving and Departing date fields SHALL be non-editable to prevent user modification.

#### Scenario: Verify initial date values and non-editability
- **WHEN** a user navigates to the booking form section
- **THEN** the "Arriving date" field is pre-filled with "2026-12-17" and the "Departing date" field is pre-filled with "2026-12-20", and both fields are marked as read-only or disabled.
