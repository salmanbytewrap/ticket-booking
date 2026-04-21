# Chapter 2 — Project overview

## 2.1 Goals

- Demonstrate full-stack JavaScript (MERN) for a bus ticket reservation scenario.
- Provide secure registration/login and session handling via JWT.
- Persist **bookings** in MongoDB for authenticated users.
- Show a clear UI path: marketing → search → seats → payment UI → ticket.

## 2.2 Actors

| Actor | Description |
|-------|-------------|
| Guest | Can browse home, about, booking search (depending on route guards), register, login. |
| Registered user | Accesses private booking steps, profile, my bookings. |

## 2.3 Main user-facing routes (React)

| Path | Access | Feature |
|------|--------|---------|
| `/` | Public | Home / landing information |
| `/booking` | Public | Search buses |
| `/login`, `/register` | Public | Auth |
| `/about` | Public | Static about |
| `/dashboard` | Private | Dashboard |
| `/profile` | Private | User profile + bookings table |
| `/my-bookings` | Private | Bookings table |
| `/book/menu1` | Private | Seat selection |
| `/book/menu2` | Private | Payment form |
| `/book/ticket` | Private | Ticket + persists booking to API |

## 2.4 Known limitations

- Payment is **not** processed by a bank; it is a UI demonstration.
- Seat selection uses **localStorage** during the session; authoritative seat locks are not modeled server-side.

---
