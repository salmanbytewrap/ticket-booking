import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './TicketPage.css'
import { buildBookingPayloadFromStorage, saveBooking } from '../../../actions/booking'

const TicketPage = ({ saveBooking: saveBookingAction }) => {
    const attemptSaved = useRef(false)

    useEffect(() => {
        const payload = buildBookingPayloadFromStorage()
        if (!payload.busId) return

        const dedupeKey = `mbt_booking_${payload.busId}_${payload.travelDate || ''}_${JSON.stringify(payload.seatNumbers)}`
        if (sessionStorage.getItem(dedupeKey)) return
        sessionStorage.setItem(dedupeKey, '1')

        if (attemptSaved.current) return
        attemptSaved.current = true

        saveBookingAction(payload).catch(() => {
            sessionStorage.removeItem(dedupeKey)
            attemptSaved.current = false
        })
    }, [saveBookingAction])

    const getLocationData = () => {
        const from = localStorage.getItem('start')
        const to = localStorage.getItem('destination')
        return (
            <div>
                <p><strong>From: </strong> {from}</p>
                <p><strong>To: </strong> {to}</p>
            </div>
        )
    }
    const getPassengerName = () => {
        const raw = localStorage.getItem('nameData')
        if (!raw) return null
        let names
        try {
            names = JSON.parse(raw)
        } catch {
            return null
        }
        return names.map((name, idx) => (
            <div key={idx}>
                <p className="names">{name}</p>
            </div>
        ))
    }
    const getSeatNumbers = () => {
        const raw = localStorage.getItem('reservedSeats')
        if (!raw) return null
        let arr
        try {
            arr = JSON.parse(raw)
        } catch {
            return null
        }
        return arr.map((element, idx) => (
            <div key={idx}>
                <p className="seatNo">{element}</p>
            </div>
        ))
    }
    const getIdNumber = () => {
        const tokenData = localStorage.getItem('selectedBusId')
        return (
            <p className="idData">
                {tokenData}
            </p>
        )
    }
    const getDateValue = () => {
        const dat = localStorage.getItem('date')
        return <p><strong> On: </strong>{dat}, 10 AM (Hourly commute)</p>
    }
    const printTicket = () => {
        window.print()
    }
    return (

        <div className="container">
            <div className="tpMain">
                <article className="ticket">
                    <header className="ticket__wrapper">
                        <div className="ticket__header">
                            🎟 Meerut Travels 🎟
                        </div>
                    </header>
                    <div className="ticket__divider">
                        <div className="ticket__notch"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>
                    <div className="ticket__body">
                        <section className="ticket__section">
                            {getLocationData()}
                            <h3>Seat Numbers</h3>
                            {getSeatNumbers()}
                            <p>Have a nice journey. <span>{getDateValue()}</span></p>
                        </section>
                        <section className="ticket__section">
                            <h3>Passenger Names</h3>
                            {getPassengerName()}
                        </section>
                        <section className="ticket__section">
                            <h3>Payment Method</h3>
                            <p>Credit Card</p>
                        </section>
                    </div>
                    <footer className="ticket__footer">
                        <p>Transaction-ID</p>
                        {getIdNumber()}
                        <button type="button" className="btn btn-primary" onClick={printTicket}> Print </button>
                    </footer>
                </article>
            </div>

        </div>

    )
}

TicketPage.propTypes = {
    saveBooking: PropTypes.func.isRequired
}

export default connect(null, { saveBooking })(TicketPage)
