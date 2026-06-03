## Why

The client has requested a specific clarification regarding the complimentary transportation policy. Currently, the site implies that transportation is complimentary for all four days of the wedding event (December 17-20). The client needs to specify that it only applies to main arrivals on December 17th and main departures on December 20th to avoid confusion and manage guest expectations.

## What Changes

- **Update Hero Text**: Modify the complimentary transportation description in the `Hero` section to reflect the limited dates.
- **Add Form Disclaimer**: Add a visual disclaimer/note in the `Transportation Options` section of the booking form to reinforce the policy during the selection process.

## Capabilities

### New Capabilities
- `transport-policy-clarification`: A new capability to ensure the transportation policy is clearly communicated throughout the landing page, specifically in the Hero and Form sections.

### Modified Capabilities
- `rescheduled-wedding-dates`: The requirements for the complimentary transportation schedule defined in this spec are being narrowed.

## Impact

- **Frontend**: `src/sections/hero.jsx` and `src/sections/form.jsx` will be modified.
- **User Experience**: Guests will have clearer expectations regarding which dates qualify for free transport, aligning the UI with the backend/API logic.
