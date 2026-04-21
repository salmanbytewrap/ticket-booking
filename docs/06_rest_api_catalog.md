# Chapter 6 — REST API catalog

Base URL (development): **`http://localhost:8000`**  
React app (development): **`http://localhost:3000`** (proxies `/api` to 8000 via `client/package.json`).

## 6.1 Global conventions

- **JSON** request/response bodies unless otherwise stated.
- **Auth:** Protected routes expect header `x-auth-token: <JWT>` (see Chapter 7).

## 6.2 Authentication

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/auth` | JWT | Returns current user document |
| POST | `/api/auth` | No | Login; body: `{ email, password }` → `{ token }` |

## 6.3 Users & registration

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/users` | No | Register; body includes `name, email, password, contact, dob, gender` |
| PUT | `/api/users/buses` | JWT | **Legacy:** pushes ticket object into user |

## 6.4 Bus search

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/search/:start/:end` | No | Returns buses whose `stops` contain start then end in order (case-insensitive matching on segment) |
| POST | `/api/search/addBus` | No | Admin-style: add bus `{ name, company, stops }` |

## 6.5 Bookings (recommended flow)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/bookings/me` | JWT | List current user’s bookings |
| POST | `/api/bookings` | JWT | Create booking (body: see Appendix A) |

## 6.6 HTTP status expectations

| Code | Meaning |
|------|---------|
| 200 | Success with JSON body |
| 400 | Validation / business error (often `{ errors: [...] }`) |
| 401 | Missing or invalid JWT on protected route |
| 500 | Server error |

---
