# Chapter 1 — Executive summary

## 1.1 Purpose

The **Bus Booking Project** is a web application that allows users to search bus routes between cities, select seats, complete a (demo) payment step, receive a digital ticket, and view their saved bookings in a personal account. It demonstrates a **MERN** stack integration: **MongoDB**, **Express**, **React**, and **Node.js**.

## 1.2 Scope

**In scope:**

- User registration and login with JSON Web Tokens (JWT).
- Public marketing pages (home) and authenticated booking flow (`/booking` → seat selection → payment → ticket).
- Bus search backed by MongoDB route (`stops`) matching.
- Persistence of completed bookings in a dedicated **`bookings`** collection, listed on **My bookings** and **Profile**.

**Out of scope (typical for this codebase version):**

- Real payment gateway integration (credit card UI is demonstrative).
- Dynamic seat inventory locking against a live operator system.
- Mobile native applications.

## 1.3 Intended audience

| Audience | Use |
|----------|-----|
| College evaluators | Architecture, database design, API description |
| Developers | Setup, code layout, extension points |
| End users (documentation) | Chapter 10 — User manual |

## 1.4 Document conventions

- **API** paths are shown relative to the server origin (e.g. `http://localhost:8000`).
- **React dev server** defaults to port **3000** with a proxy to the API.
- MongoDB **database name** in default config: `bus-booking`.

---
