# Chapter 11 — Developer setup

## 11.1 Prerequisites

- **Node.js** (LTS recommended) and **npm**.
- **MongoDB** running locally or accessible URI (Atlas).
- Optional: **Pandoc** to build Word/PDF from `docs/`.

## 11.2 Configuration

Edit `config/default.json` (or use environment-specific config — see `config` npm package docs):

```json
{
  "mongoURI": "mongodb://127.0.0.1:27017/bus-booking",
  "jwtSecret": "change-me-in-production"
}
```

## 11.3 Install dependencies

```bash
cd Bus-Booking-Project-master
npm install
cd client && npm install && cd ..
```

## 11.4 Run API + React together

```bash
npm run dev
```

- API: port **8000** (see `server.js`).
- React: **3000** with proxy to **8000**.

## 11.5 Run production build (client)

```bash
cd client && npm run build && cd ..
# NODE_ENV=production node server.js
```

`server.js` serves `client/build` when `NODE_ENV === 'production'`.

## 11.6 Seed bus data

Use **POST** `/api/search/addBus` with JSON body `{ "name", "company", "stops": ["CityA", "CityB", ...] }` or insert documents directly into `busdatas` in MongoDB Compa ss.

---
