import React, { Fragment, useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import BookingsTable from '../bookings/BookingsTable'
import { getMyBookingsApi } from '../../actions/booking'

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let active = true
        ;(async () => {
            try {
                const data = await getMyBookingsApi()
                if (active) setBookings(Array.isArray(data) ? data : [])
            } catch {
                if (active) setBookings([])
            } finally {
                if (active) setLoading(false)
            }
        })()
        return () => { active = false }
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">My bookings</h1>
            <p className="lead" style={{ marginLeft: 0, color: '#fff' }}>
                Trips saved to your account after you complete payment on the ticket page.
            </p>

            <BookingsTable
                bookings={bookings}
                emptyMessage="You have no saved bookings yet."
            />
        </Fragment>
    )
}

export default MyBookings
