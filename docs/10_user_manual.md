# Chapter 10 — User manual

## 10.1 Create an account

1. Open **Register** from the navigation bar.
2. Fill **name, email, password**, and other required fields.
3. Submit. On success you receive a token and are treated as logged in.

## 10.2 Log in

1. Open **Login**.
2. Enter **email** and **password**.
3. Submit. The app stores your session token.

## 10.3 Search for a bus

1. Go to **Search buses** → `/booking`.
2. Enter **From** and **To** cities exactly as they appear in the MongoDB `stops` list for a route (spelling matters; search is case-insensitive but order of stops must match direction).
3. Choose **travel date** and click **Search buses**.
4. Scroll to **Available buses** and click **Book Bus** on a result.

## 10.4 Select seats and passenger names

1. On the seat page, select seats and enter passenger names as prompted.
2. Continue to **Payment**.

## 10.5 Payment (demonstration)

1. Enter test card details in the form (no real charge is processed in this version).
2. On success, continue to the **Ticket** page.

## 10.6 View bookings

- **My bookings** in the navbar, or **Profile** → **Booked buses**, shows trips saved after the ticket page completes.

## 10.7 Log out

Use **Logout** in the navbar to clear session state.

---
