## Why

The client needs to update the official contact email address to `info@cancunconciergedmc.com` to align with their branding and ensure inquiries are sent to the correct inbox.

## What Changes

- Update the contact email address in the footer from `info@rivieramayaairporttransfers.com` to `info@cancunconciergedmc.com`.
- Ensure both the `mailto:` link and the displayed text are updated.

## Capabilities

### New Capabilities
<!-- Capabilities being introduced. Replace <name> with kebab-case identifier (e.g., user-auth, data-export, api-rate-limiting). Each creates specs/<name>/spec.md -->
- `contact-information-update`: Ensuring the official contact email is consistent across the footer and any relevant contact sections.

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes. -->

## Impact

- `src/sections/footer.jsx`: The `ContactCard` component representing the email will be modified.
