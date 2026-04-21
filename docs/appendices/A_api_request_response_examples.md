# Appendix A — API request/response examples

## A.1 Login

**Request:**

```http
POST /api/auth
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secret123"
}
```

**Response (success):**

```json
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
```

## A.2 Create booking

**Request:**

```http
POST /api/bookings
Content-Type: application/json
x-auth-token: <JWT>

{
  "from": "Meerut",
  "to": "Delhi",
  "busId": "507f1f77bcf86cd799439011",
  "travelDate": "2026-04-21",
  "passengerNames": ["Raj Kumar"],
  "seatNumbers": ["A1"],
  "totalAmount": 1150,
  "paymentMethod": "Credit Card"
}
```

**Response:**

```json
{
  "_id": "...",
  "user": "...",
  "busId": "507f1f77bcf86cd799439011",
  "from": "Meerut",
  "to": "Delhi",
  "travelDate": "2026-04-21",
  "passengerNames": ["Raj Kumar"],
  "seatNumbers": ["A1"],
  "totalAmount": 1150,
  "paymentMethod": "Credit Card",
  "status": "confirmed",
  "createdAt": "2026-04-21T12:00:00.000Z"
}
```

## A.3 List my bookings

**Request:**

```http
GET /api/bookings/me
x-auth-token: <JWT>
```

**Response:** array of booking documents as above.

---
