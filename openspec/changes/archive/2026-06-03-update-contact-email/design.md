## Context

The current contact email `info@rivieramayaairporttransfers.com` needs to be replaced with `info@cancunconciergedmc.com`. This change is purely content-based and affects the footer section of the application.

## Goals / Non-Goals

**Goals:**
- Update the email text and `mailto:` link in the footer.
- Verify that the update is reflected correctly in the UI.

**Non-Goals:**
- Changes to the contact form or other sections (unless they use the same email).
- Backend changes or database updates.

## Decisions

- **Direct Replacement**: We will directly replace the hardcoded email string in `src/sections/footer.jsx`. Since the application doesn't seem to use a centralized configuration for contact info (based on initial search), a surgical edit to the component is the most efficient path.

## Risks / Trade-offs

- **Risk**: Hardcoding values makes future updates repetitive.
- **Mitigation**: This project currently uses hardcoded values in components; moving to a config file is out of scope for this simple update but could be considered in a future refactor.
