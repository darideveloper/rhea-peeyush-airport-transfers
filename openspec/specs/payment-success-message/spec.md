## Requirements

### Requirement: Payment success dialog body text
The system SHALL display the following HTML body text inside the SweetAlert2 success dialog when the `?thanks` URL parameter is present after a completed payment:

> "Thank you very much for providing us your payment and the Cancun travel information. You will receive a detailed e-mail confirmation including arrival process at the airport and hotel departure time (for departure back to the airport) soon. Warmest Regards. The Cancun Concierge DMC team."

The text MUST be wrapped in a `<p>` tag. Line breaks between sentences SHOULD use `<br><br>` for visual spacing.

#### Scenario: User lands on site with ?thanks param
- **WHEN** the user is redirected to the site with `?thanks` in the URL query string after completing payment
- **THEN** the SweetAlert2 success dialog SHALL display the updated body text with the correct copy and brand sign-off

#### Scenario: Correct sign-off displayed
- **WHEN** the success dialog is shown
- **THEN** the closing line SHALL read "Warmest Regards. The Cancun Concierge DMC team." (not any previous or incorrect variant)
