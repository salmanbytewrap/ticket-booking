import React, { Fragment, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchBuses } from '../../actions/profile'

const popularRoutes = [
    { from: 'Meerut', to: 'Delhi', freq: 'Every 45 min', fareFrom: '₹ 149' },
    { from: 'Meerut', to: 'Noida', freq: '12 daily', fareFrom: '₹ 179' },
    { from: 'Meerut', to: 'Haridwar', freq: '8 daily', fareFrom: '₹ 249' },
    { from: 'Delhi', to: 'Meerut', freq: 'Hourly', fareFrom: '₹ 149' },
]

const Booking = () => {
    const resultsRef = useRef(null)
    const [user, exp1] = useState('Tickets here')
    const [formData, setFormData] = useState({
        start: '',
        end: '',
        date: ''

    });
    const { start, end, date } = formData;
    const handleToCity = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("destination", e.target.value)
    }
    const handleFromCity = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("start", e.target.value)
    }
    const handleDate = e => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
        localStorage.setItem("date", e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const handleSubmit = bId => {
            localStorage.setItem("selectedBusId", bId)
        }
        searchBuses({ start, end }).then((busData) => {
            exp1(<div className="profile-exp bg-white p-2">
                <h2 className="text-primary" id="booking-search-results-heading">Available buses</h2>
                <ul>
                    {busData && busData.length > 0 ? (<Fragment>
                        {busData.map(bus => (
                            <li key={bus._id}>

                                <div className="container1">
                                    <div className="card">
                                        <div className="box">
                                            <div className="content">
                                                <h2>01</h2>
                                                <h3>{bus.name}</h3>
                                                <h3>{bus.company}</h3>
                                                <span> <h1>Stops:- </h1> <strong> [{bus.stops}] </strong> </span>
                                                <span><h1>Bus Id:- </h1>{bus._id}</span>
                                                <Link to="/book/menu1" className="btn btn-primary" onClick={(bId) => { handleSubmit(bus._id) }} >Book Bus</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div></li>
                        ))}
                    </Fragment>) : (<h4>No buses found for this route.</h4>)}</ul>
            </div>)
            setTimeout(() => {
                resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 80)
        })
    }


    return (
        <div className="booking-page">
            <div className="landing-inner booking-hero">
                <h1 className="large booking-hero-title">WELCOME TO MODERN BUS TRAVELS</h1>
                <p className="lead booking-hero-lead">
                    Search routes, compare operators, and continue to seat selection — all in a few steps.
                </p>
            </div>

            <div className="container-fluid booking-body px-3">
                <div className="row g-4 align-items-start">
                    <div className="col-lg-5">
                        <div className="booking-search-panel">
                            <h2 className="booking-panel-title text-white">Find your bus</h2>
                            <p className="booking-panel-hint text-white-50 small mb-3">
                                Enter origin and destination exactly as they appear on the route (spelling matters). Then choose your travel date.
                            </p>
                            <form className="booking-form" onSubmit={e => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="booking-from" className="form-label text-white small mb-1">From</label>
                                    <input
                                        id="booking-from"
                                        type="text"
                                        placeholder="e.g. Meerut"
                                        name="start"
                                        className="form-control booking-input"
                                        value={start}
                                        onChange={e => { handleFromCity(e) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="booking-to" className="form-label text-white small mb-1">To</label>
                                    <input
                                        id="booking-to"
                                        type="text"
                                        name="end"
                                        placeholder="e.g. Delhi"
                                        className="form-control booking-input"
                                        value={end}
                                        onChange={e => { handleToCity(e) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="booking-date" className="form-label text-white small mb-1">Travel date</label>
                                    <input
                                        id="booking-date"
                                        type="date"
                                        name="date"
                                        className="form-control booking-input"
                                        value={date}
                                        onChange={e => { handleDate(e) }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 py-2 fw-semibold">
                                    Search buses
                                </button>
                            </form>
                            <div className="booking-new-user mt-3 pt-3 border-top border-light border-opacity-25">
                                <span className="text-white">New user?</span>{' '}
                                <Link to="/register" className="text-warning fw-semibold">Create free account</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="booking-aside">
                            <div className="card booking-info-card mb-3">
                                <div className="card-body">
                                    <h3 className="h6 text-primary mb-2">
                                        <i className="fas fa-info-circle me-2" aria-hidden />
                                        How search works
                                    </h3>
                                    <p className="small text-muted mb-0">
                                        Meerut Bus Travels shows buses that cover your <strong>from</strong> and <strong>to</strong> cities in our network.
                                        Results depend on the routes we operate and seat availability for the date you pick.
                                        Use the same city names you would use at the booking counter.
                                    </p>
                                </div>
                            </div>

                            <div className="card booking-info-card mb-3">
                                <div className="card-body p-0">
                                    <div className="booking-card-head px-3 py-2">
                                        <i className="fas fa-route me-2" />
                                        Popular corridors &amp; starting fares
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-sm table-hover mb-0 booking-sample-table">
                                            <thead>
                                                <tr>
                                                    <th>From</th>
                                                    <th>To</th>
                                                    <th>Frequency</th>
                                                    <th>Starts from</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {popularRoutes.map((row) => (
                                                    <tr key={`${row.from}-${row.to}`}>
                                                        <td>{row.from}</td>
                                                        <td>{row.to}</td>
                                                        <td>{row.freq}</td>
                                                        <td><span className="text-success fw-semibold">{row.fareFrom}</span></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="small text-muted px-3 py-2 mb-0 border-top">
                                        Starting fares are indicative. Final fare is confirmed after you choose bus class, seats, and any add-ons at checkout.
                                    </p>
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="card booking-info-card h-100">
                                        <div className="card-body">
                                            <h3 className="h6 mb-2">
                                                <i className="fas fa-list-ol text-primary me-2" />
                                                How booking works
                                            </h3>
                                            <ol className="small ps-3 mb-0 booking-steps">
                                                <li>Enter route and travel date, then search.</li>
                                                <li>Pick a bus and your preferred seats.</li>
                                                <li>Complete payment and get your e-ticket on screen.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card booking-info-card h-100">
                                        <div className="card-body">
                                            <h3 className="h6 mb-2">
                                                <i className="fas fa-phone-alt text-primary me-2" />
                                                Customer support
                                            </h3>
                                            <p className="small mb-1"><strong>Helpline:</strong> +91 96708 26753</p>
                                            <p className="small mb-1"><strong>Email:</strong> Samir24x7@gmail.com</p>
                                            <p className="small text-muted mb-0">Monday–Saturday, 9:00 AM – 6:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-light border booking-tip mt-3 mb-0" role="status">
                                <strong>Travel tip:</strong> If no buses appear, try alternate spellings of the city or nearby boarding points.
                                Book early on weekends and holidays — seats fill up quickly on busy routes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={resultsRef}
                className="container-fluid px-3 booking-results-wrap"
                aria-live="polite"
            >
                <div className="tickets">{user}</div>
            </div>
        </div>
    )
}

Booking.propTypes = {
    isAuthenticated: PropTypes.bool,
    searchBuses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { searchBuses })(Booking)
