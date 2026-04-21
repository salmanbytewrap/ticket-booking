import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile } from '../../actions/profile'
import { getMyBookingsApi } from '../../actions/booking'
import BookingsTable from '../bookings/BookingsTable'
import Spinner from './Spinner'

const Profile = ({ getCurrentProfile, auth: { user } }) => {
    const [bookings, setBookings] = useState([])
    const [loadingBookings, setLoadingBookings] = useState(true)

    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    useEffect(() => {
        let active = true
        ;(async () => {
            try {
                const data = await getMyBookingsApi()
                if (active) setBookings(Array.isArray(data) ? data : [])
            } catch {
                if (active) setBookings([])
            } finally {
                if (active) setLoadingBookings(false)
            }
        })()
        return () => { active = false }
    }, [])

    return (
        <Fragment>
            <div className="profile-grid my-1">
                <div className="profile-top bg-primary p-2">
                    <h3 className="x-large">{user && user.company}</h3>
                    <h1 className="large"><i className="fas fa-user"></i> {user && user.name}</h1>
                    <div className="icons my-1">
                        <h3>
                            <i className="fas fa-globe fa-2x" />  {user && user.email}
                        </h3>
                        <h3>
                            <i className="fas fa-phone fa-2x" />  {user && user.contact}
                        </h3>
                    </div>
                </div>
                <div className="profile-exp bg-white p-2">
                    <h2 className="text-primary">Booked buses</h2>
                    <p className="text-dark small mb-3">
                        Same list as <strong>My bookings</strong> — trips saved after you complete the ticket step.
                    </p>
                    {loadingBookings ? (
                        <Spinner />
                    ) : (
                        <BookingsTable
                            bookings={bookings}
                            emptyMessage="No bookings yet. Complete a booking (search → seats → payment → ticket) to see it here."
                        />
                    )}
                </div>
            </div>
        </Fragment>
    )
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile })(Profile)
