## 1. Input Component Updates

- [x] 1.1 Support `readOnly` class styling in [input.jsx](file:///develop/react/rhea-peeyush-airport-transfers/src/components/input.jsx) (e.g., `read-only:pointer-events-none read-only:select-none read-only:cursor-not-allowed read-only:bg-gray-100 read-only:opacity-50 read-only:focus:shadow-none read-only:focus:opacity-60`).

## 2. Form Section Updates

- [x] 2.1 Update the default dates initialization in [form.jsx](file:///develop/react/rhea-peeyush-airport-transfers/src/sections/form.jsx) to set Arriving date to `"2026-12-17"` and Departing date to `"2026-12-20"`.
- [x] 2.2 Trigger `handleUpdateDate` inside `useEffect` with the updated default dates.
- [x] 2.3 Set `readOnly={true}` for both Arriving and Departing date `Input` components in [form.jsx](file:///develop/react/rhea-peeyush-airport-transfers/src/sections/form.jsx).
