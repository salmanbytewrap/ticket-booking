# Chapter 13 — Testing and troubleshooting

## 13.1 Manual test checklist

| # | Check | Expected |
|---|--------|----------|
| 1 | Register new user | 200 + token, redirect/dashboard behaviour |
| 2 | Login | Token in localStorage |
| 3 | GET `/api/auth` with token | User JSON |
| 4 | Search with valid stops | Non-empty bus list |
| 5 | Complete flow to ticket | Alert “Booking saved…” |
| 6 | GET `/api/bookings/me` | Contains new booking |

## 13.2 Common issues

| Symptom | Cause | Fix |
|---------|--------|-----|
| No buses found | `stops` in DB do not include cities or wrong order | Add bus with `stops` array containing start then end in order |
| 401 on bookings | Expired/missing token | Login again |
| Blank profile company | `user.company` not on user model | Field optional — ignore or extend schema |
| Proxy fails | Wrong API port | Match `server.js` PORT and client proxy |

---
