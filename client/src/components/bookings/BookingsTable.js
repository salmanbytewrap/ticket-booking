import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const formatSeats = (seatNumbers) => {
    if (seatNumbers == null) return '—'
    if (Array.isArray(seatNumbers)) return seatNumbers.join(', ')
    if (typeof seatNumbers === 'string') return seatNumbers
    return JSON.stringify(seatNumbers)
}

export const formatNames = (passengerNames) => {
    if (passengerNames == null) return '—'
    if (Array.isArray(passengerNames)) return passengerNames.join(', ')
    if (typeof passengerNames === 'string') {
        try {
            const p = JSON.parse(passengerNames)
            if (Array.isArray(p)) return p.join(', ')
        } catch {
            return passengerNames
        }
        return passengerNames
    }
    return String(passengerNames)
}

const BookingsTable = ({ bookings, emptyMessage }) => {
    if (!bookings || bookings.length === 0) {
        return (
            <div className="profile-exp bg-white p-3 rounded">
                <p className="mb-2">{emptyMessage || 'You have no saved bookings yet.'}</p>
                <Link to="/booking" className="btn btn-primary">
                    Search buses
                </Link>
            </div>
        )
    }

    return (
        <div className="table-responsive bg-white p-2 rounded my-bookings-wrap">
            <table className="table table-striped table-hover mb-0 my-bookings-table">
                <thead>
                    <tr>
                        <th>Date booked</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Travel date</th>
                        <th>Seats</th>
                        <th>Passengers</th>
                        <th>Bus ID</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
                        <tr key={b._id}>
                            <td>
                                {b.createdAt
                                    ? new Date(b.createdAt).toLocaleString()
                                    : '—'}
                            </td>
                            <td>{b.from || '—'}</td>
                            <td>{b.to || '—'}</td>
                            <td>{b.travelDate || '—'}</td>
                            <td>{formatSeats(b.seatNumbers)}</td>
                            <td>{formatNames(b.passengerNames)}</td>
                            <td><small>{b.busId}</small></td>
                            <td>
                                {b.totalAmount != null
                                    ? `₹ ${b.totalAmount}`
                                    : '—'}
                            </td>
                            <td>{b.status || 'confirmed'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

BookingsTable.propTypes = {
    bookings: PropTypes.array,
    emptyMessage: PropTypes.string
}

export default BookingsTable
