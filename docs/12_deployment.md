# Chapter 12 — Deployment notes

## 12.1 Heroku-style pipeline

Root `package.json` includes `heroku-postbuild` to install client dependencies and run `npm run build` in `client/`.

Ensure:

- `config` receives `mongoURI` and `jwtSecret` suitable for production (often via Heroku config vars mapped to env).
- `NODE_ENV=production` when serving the React build from Express.

## 12.2 Environment variables

For production, prefer:

- `MONGODB_URI` or custom env key read by your config layer.
- `JWT_SECRET` strong random string.

## 12.3 CORS

If API and SPA are on different origins, add CORS middleware to Express (not always present in minimal `server.js` — extend as needed).

---
