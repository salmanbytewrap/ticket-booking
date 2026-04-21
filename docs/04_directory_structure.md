# Chapter 4 — Directory structure

```
Bus-Booking-Project-master/
├── server.js                 # Express entry, route mounts, prod static
├── package.json              # Root scripts: dev, start, heroku-postbuild
├── config/
│   ├── db.js                 # mongoose.connect
│   └── default.json          # mongoURI, jwtSecret (do not commit secrets to public repos)
├── middleware/
│   └── auth.js               # JWT verify → req.user.id
├── models/
│   ├── Users.js
│   ├── Buses.js
│   └── Booking.js
├── routers/api/
│   ├── auth.js
│   ├── users.js
│   ├── searchBus.js
│   └── bookings.js
├── client/
│   ├── package.json          # proxy → http://localhost:8000
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── actions/          # auth, profile, booking
│       ├── components/       # layout, auth, dashboard, routing
│       ├── reducers/
│       ├── store.js
│       └── utils/setAuthToken.js
└── docs/                     # This documentation package
```

---
