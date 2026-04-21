# Chapter 3 — Technology stack

## 3.1 Server (Node.js)

| Package | Role |
|---------|------|
| express | HTTP API |
| mongoose | MongoDB ODM |
| bcryptjs | Password hashing |
| jsonwebtoken | JWT generation and verification |
| express-validator | Login/register validation |
| config | `config/default.json` Mongo URI and `jwtSecret` |

## 3.2 Client (React)

| Package | Role |
|---------|------|
| react, react-dom | UI |
| react-router-dom v5 | Routing (`BrowserRouter`, `Switch`, `Route`) |
| redux, react-redux | Auth alert profile state |
| axios | HTTP to `/api/*` |
| bootstrap (CDN in `public/index.html`) | Styling |

## 3.3 Tooling

- **Create React App** (`react-scripts`) for client build.
- **Concurrently** — `npm run dev` runs API + React together (see root `package.json`).
- **nodemon** (optional) for server restart on file change.

## 3.4 Database

- **MongoDB** 4.x+ compatible with Mongoose 5.x driver options used in `config/db.js`.

---
