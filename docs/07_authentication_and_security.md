# Chapter 7 — Authentication and security

## 7.1 JWT flow

1. On **register** or **login**, server returns `{ token }`.
2. Client stores token in `localStorage` (see `client/src/reducers/auth.js`).
3. `setAuthToken` sets Axios default header `x-auth-token`.
4. `loadUser` on app mount calls `GET /api/auth` with the token.

## 7.2 Protected routes (client)

`PrivateRoute` (`client/src/components/routing/PrivateRoute.js`) redirects unauthenticated users to `/login`.

## 7.3 Protected routes (server)

Middleware `middleware/auth.js` reads `req.header('x-auth-token')`, verifies JWT with `config.get('jwtSecret')`, assigns `req.user.id`.

## 7.4 Password storage

Passwords are hashed with **bcrypt** before save (`routers/api/users.js`).

## 7.5 Operational security notes (production)

- Replace default `jwtSecret` in `config/default.json` with a strong secret via environment variables.
- Use **HTTPS** so JWT is not sent in clear text.
- Never commit production Mongo URI with credentials to git.

---
