import axios from 'axios'
import { setAlert } from './alert'

function parseJsonField(raw, fallback) {
    if (raw == null || raw === '') return fallback
    if (typeof raw !== 'string') return raw
    try {
        return JSON.parse(raw)
    } catch {
        return fallback
    }
}

/**
 * Build booking payload from localStorage keys used by SeatSelection / Booking / PaymentTab.
 */
export function buildBookingPayloadFromStorage() {
    const from = localStorage.getItem('start') || ''
    const to = localStorage.getItem('destination') || ''
    const busId = localStorage.getItem('selectedBusId') || ''
    const travelDate = localStorage.getItem('date') || ''
    const passengerNames = parseJsonField(localStorage.getItem('nameData'), [])
    const seatNumbers = parseJsonField(localStorage.getItem('reservedSeats'), [])
    let totalAmount
    if (Array.isArray(seatNumbers) && seatNumbers.length > 0) {
        const tax = 150
        totalAmount = 1000 * seatNumbers.length + tax
    }
    return {
        from,
        to,
        busId,
        travelDate,
        passengerNames,
        seatNumbers,
        totalAmount,
        paymentMethod: 'Credit Card'
    }
}

export const saveBooking = bookingBody => async dispatch => {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        }
        const res = await axios.post('/api/bookings', bookingBody, config)
        dispatch(setAlert('Booking saved to your account', 'success'))
        return res.data
    } catch (err) {
        const data = err.response && err.response.data
        const msg = (data && data.msg) || (err.response && err.response.statusText) || err.message || 'Could not save booking'
        dispatch(setAlert(typeof msg === 'string' ? msg : 'Booking save failed', 'danger'))
        throw err
    }
}

export const getMyBookingsApi = async () => {
    const res = await axios.get('/api/bookings/me')
    return res.data
}
