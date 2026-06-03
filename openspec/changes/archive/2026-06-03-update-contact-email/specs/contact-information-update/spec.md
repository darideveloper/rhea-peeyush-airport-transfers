## ADDED Requirements

### Requirement: Update contact email address
The system SHALL display `info@cancunconciergedmc.com` as the primary contact email in the footer and use it in all `mailto:` links.

#### Scenario: Verify footer email display
- **WHEN** the user scrolls to the footer of the page
- **THEN** they SHOULD see the email `info@cancunconciergedmc.com`

#### Scenario: Verify mailto link
- **WHEN** the user clicks on the contact email in the footer
- **THEN** the system SHOULD open the default mail client with `info@cancunconciergedmc.com` in the 'To' field
