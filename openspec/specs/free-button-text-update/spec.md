# free-button-text-update Specification

## Purpose
TBD - created by archiving change update-free-button-text. Update Purpose after archive.
## Requirements
### Requirement: Reserve Now button label for free bookings
The system SHALL display the text "Reserve Now" on the form's submit button when the total booking cost is calculated as zero (0.00 USD).

#### Scenario: Total is zero
- **WHEN** the form's total amount is 0.00 USD
- **THEN** the submit button label MUST be "Reserve Now"

#### Scenario: Total is greater than zero
- **WHEN** the form's total amount is greater than 0.00 USD
- **THEN** the submit button label MUST be "Buy Now"

