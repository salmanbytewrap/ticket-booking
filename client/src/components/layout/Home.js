import React from 'react'
import { Link } from 'react-router-dom'

const offerCards = [
    {
        id: 1,
        gradient: 'g1',
        badge: 'Hot deal',
        title: 'Save on early bookings',
        text: 'Lock fares when you plan ahead. Great prices on popular routes across North India.',
        cta: 'Book now',
    },
    {
        id: 2,
        gradient: 'g2',
        badge: 'Zero hassle',
        title: 'Pick your seat online',
        text: 'Choose window or aisle before you pay — clear layout, no surprises at the depot.',
        cta: 'Select seat',
    },
    {
        id: 3,
        gradient: 'g3',
        badge: 'Secure pay',
        title: 'Safe digital payments',
        text: 'Pay with confidence using encrypted checkout. Your trip details stay in one place.',
        cta: 'Start booking',
    },
    {
        id: 4,
        gradient: 'g4',
        badge: 'Trusted',
        title: 'Verified operators',
        text: 'Travel with screened bus partners and transparent timings for a smoother journey.',
        cta: 'Explore buses',
    },
]

const featureTiles = [
    {
        icon: 'fa-tags',
        title: 'Best value',
        text: 'Competitive fares and seasonal offers so you get more for every kilometre.',
    },
    {
        icon: 'fa-headset',
        title: 'Help when you need it',
        text: 'Support for booking queries before and during your travel window.',
    },
    {
        icon: 'fa-shield-alt',
        title: 'Safe & simple',
        text: 'Clear cancellation and refund rules displayed before you confirm.',
    },
    {
        icon: 'fa-mobile-alt',
        title: 'Book in minutes',
        text: 'Search, seat map, and payment — all in a few taps on any device.',
    },
]

const Home = () => {
    return (
        <div className="home-page">
            <div className="landing-inner home-hero">
                <h1 className="large">Meerut Bus Travels</h1>
                <p className="lead">
                    Book intercity buses quickly: search routes, pick seats, and pay securely.
                </p>
            </div>

            <div className="container">
                <section className="home-offers-strip" aria-labelledby="home-offers-heading">
                    <h2 id="home-offers-heading" className="home-section-title">
                        Handpicked for you — offers &amp; perks
                    </h2>
                    <p className="home-section-sub">
                        Like leading travel sites, we surface deals and clarity upfront so you can decide faster.
                    </p>
                    <div className="row g-3 g-lg-4">
                        {offerCards.map((card) => (
                            <div key={card.id} className="col-md-6 col-lg-3">
                                <div className="card home-offer-card h-100">
                                    <div className={`home-offer-gradient ${card.gradient} position-relative`}>
                                        <span className="home-offer-badge">{card.badge}</span>
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-text flex-grow-1">{card.text}</p>
                                        <Link
                                            to="/booking"
                                            className="btn btn-success btn-book align-self-start"
                                        >
                                            {card.cta}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="home-features" aria-labelledby="home-features-heading">
                    <h2 id="home-features-heading" className="home-section-title text-white text-center">
                        Why travellers choose us
                    </h2>
                    <p className="home-section-sub text-center" style={{ color: 'rgba(255,255,255,0.88)' }}>
                        Everything you expect from a modern booking experience — in one place.
                    </p>
                    <div className="row g-3">
                        {featureTiles.map((f) => (
                            <div key={f.title} className="col-6 col-md-3">
                                <div className="home-feature-tile">
                                    <i className={`fas ${f.icon}`} aria-hidden />
                                    <h3>{f.title}</h3>
                                    <p>{f.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="profile-exp bg-white p-3 home-cta-strip" style={{ maxWidth: '720px', margin: '0 auto 2rem', borderRadius: '10px' }}>
                    <h2 className="text-primary" style={{ fontSize: '1.15rem' }}>Ready to travel?</h2>
                    <p className="text-dark mb-3" style={{ fontSize: '0.95rem' }}>
                        Jump to search, sign in to manage tickets, or learn more about our services.
                    </p>
                    <Link to="/booking" className="btn btn-success mr-2 mb-2">
                        Search &amp; book buses
                    </Link>
                    <Link to="/about" className="btn btn-outline-secondary mb-2 mr-2">
                        About us
                    </Link>
                    <p className="mb-0 mt-2" style={{ fontSize: '0.9rem' }}>
                        <span className="text-dark">New here?</span>{' '}
                        <Link to="/register">Create an account</Link>
                        {' · '}
                        <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>

            <footer className="home-footer">
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="row">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h2>Why book buses with Meerut Bus Travels?</h2>
                            <p>
                                Just as platforms like MakeMyTrip made flights and hotels easier to compare and book,
                                we focus on the same ideas for bus travel: transparent pricing, simple flows, and support
                                when plans change. Meerut Bus Travels is built for everyday travellers who want speed,
                                clarity, and peace of mind — from search to ticket.
                            </p>
                            <h3>What you get</h3>
                            <ul>
                                <li>One place to search routes, compare options, and reserve seats.</li>
                                <li>Fewer steps from discovery to payment, with clear fare and timing details.</li>
                                <li>Digital record of your booking so you are not hunting for paper at the counter.</li>
                                <li>A team that understands Indian road travel and common traveller needs.</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <h3>Quick links</h3>
                            <p>
                                <Link to="/booking">Bus search &amp; booking</Link>
                                <br />
                                <Link to="/about">About &amp; services</Link>
                                <br />
                                <Link to="/register">Register</Link>
                                {' · '}
                                <Link to="/login">Login</Link>
                                <br />
                                <Link to="/dashboard">Dashboard</Link> (after sign-in)
                            </p>
                            <h3>Travel tip</h3>
                            <p>
                                Book during off-peak hours and weekdays when possible — availability and fares are often
                                better, similar to how major OTAs highlight smarter travel windows.
                            </p>
                        </div>
                    </div>
                    <div className="home-footer-bottom">
                        © {new Date().getFullYear()} Meerut Bus Travels — Bus booking made simple.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
