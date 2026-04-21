# Chapter 8 — Frontend architecture

## 8.1 Root composition

`App.js` wraps the tree in Redux `Provider` and `BrowserRouter`. Top-level routes:

- Exact `/` and `/booking` render **Home** and **Booking** before the catch-all `Routes` component.

## 8.2 Redux store

- **auth** — token, loading, isAuthenticated, user payload from `/api/auth`.
- **alert** — flash messages.
- **profile** — profile slice (legacy usage in dashboard/profile flows).

## 8.3 Key files

| File | Role |
|------|------|
| `actions/booking.js` | `saveBooking`, `getMyBookingsApi`, `buildBookingPayloadFromStorage` |
| `actions/auth.js` | login, register, loadUser, logout |
| `components/bookings/BookingsTable.js` | Shared bookings table |
| `components/routing/PrivateRoute.js` | Auth guard |

## 8.4 Styling

Global styles in `App.css`; Bootstrap classes used throughout. Navbar gradient matches booking page themed tables (`my-bookings-table`).

---
