## Context

The current transportation policy text in the Hero section is overly broad, suggesting that complimentary transport is available for any travel between December 17th and 20th. However, the operational reality (and the intent of the client) is that this service is reserved for the "main" travel windows: arrivals on the 17th and departures on the 20th.

## Goals / Non-Goals

**Goals:**
- Update the Hero section text to explicitly mention "main arrivals on December 17th" and "main departures on December 20th".
- Add a reinforcing disclaimer in the booking form section.
- Ensure the language remains consistent with the rest of the site (English).

**Non-Goals:**
- Modifying the actual logic in `src/sections/form.jsx` that handles "free dates" (this logic already relies on a dynamic API response, which will be managed separately in the backend if needed).
- Changing the wedding date range (December 17 - 20, 2026).

## Decisions

- **Decision: Text Placement in Hero**: The updated text will replace the existing paragraph in `src/sections/hero.jsx`.
  - **Rationale**: Direct replacement is the cleanest way to correct the policy without cluttering the Hero section.
- **Decision: Disclaimer in Form**: A `FormText` component will be added right after the `Subtitle` in `src/sections/form.jsx`.
  - **Rationale**: Placing it early in the form section ensures users see it before they start entering arrival/departure details.

## Risks / Trade-offs

- **[Risk]** Guests arriving on the 18th/19th or departing on the 17th/18th/19th might be confused if they previously saw the old text.
  - **Mitigation**: The form will correctly apply prices for those dates, and the new disclaimer provides clear justification.
