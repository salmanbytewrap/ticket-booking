# Appendix D — Data flow: localStorage vs database

| Key | Set where | Used where | Persisted to DB |
|-----|-----------|------------|-----------------|
| `start` | Booking form | Ticket, booking payload | `booking.from` via API |
| `destination` | Booking form | Ticket | `booking.to` |
| `date` | Booking form | Ticket | `booking.travelDate` |
| `selectedBusId` | Book bus click | Ticket | `booking.busId` |
| `reservedSeats` | Seat selection | Ticket | `booking.seatNumbers` |
| `nameData` | Seat selection | Ticket | `booking.passengerNames` |
| `token` | Login/register | Axios auth header | — |

**Persistence moment:** `TicketPage` mounts → `saveBooking` Redux action → **POST `/api/bookings`**.

---
