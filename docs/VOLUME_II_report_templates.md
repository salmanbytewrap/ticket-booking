# Volume II — Report templates (print / fill for extended page count)

Use this chapter in institutions that require long bound submissions. **Fill the tables** with your real semester data. Tables expand quickly in Word with **portrait**, **12 pt**, **1.5 line spacing**, and **keep rows together** disabled for natural page flow.

---

## Part A — Requirements traceability

| Req ID | Requirement | Module / file | Verified (Y/N) | Notes |
|--------|-------------|---------------|----------------|-------|
| R-01 | User can register | `Register.js`, `POST /api/users` | | |
| R-02 | User can login | `Login.js`, `POST /api/auth` | | |
| R-03 | JWT protects private routes | `PrivateRoute.js`, `auth.js` | | |
| R-04 | Search buses by cities | `Booking.js`, `GET /api/search/...` | | |
| R-05 | Select seats | `SeatSelection.js` | | |
| R-06 | Payment UI | `PaymentTab.js` | | |
| R-07 | Ticket display | `TicketPage.js` | | |
| R-08 | Save booking | `POST /api/bookings` | | |
| R-09 | List bookings | `MyBookings.js`, `GET /api/bookings/me` | | |
| R-10 | Profile shows bookings | `Profile.js` | | |
| (add rows) | | | | |

---

## Part B — Test case matrix (expand)

| TC# | Preconditions | Steps | Expected | Actual | Pass/Fail |
|-----|---------------|-------|----------|--------|-----------|
| TC-001 | User logged out | Open /booking | Page loads | | |
| TC-002 | DB has bus A→B | Search A, B | List not empty | | |
| TC-003 | (continue...) | | | | | |

---

## Part C — Sprint / week log (template)

| Week | Planned | Completed | Blockers | Demo |
|------|-----------|-------------|----------|------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

---

## Part D — Risk register

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| MongoDB down | | | | |
| JWT secret leaked | | | | |
| (add…) | | | | |

---

## Part E — FAQ (project-specific — expand answers)

1. **Why localStorage before MongoDB?** Session continuity between wizard steps; persistence on server at ticket completion.
2. **Why stops array order matters?** Direction of travel must match user search.
3. *(Add 10–20 more questions for your viva/presentation.)*

---

## Part F — Glossary

| Term | Definition |
|------|------------|
| MERN | MongoDB, Express, React, Node |
| JWT | JSON Web Token |
| ODM | Object Document Mapper (Mongoose) |
| *(extend…)* | |

---

*End of Volume II templates.*
