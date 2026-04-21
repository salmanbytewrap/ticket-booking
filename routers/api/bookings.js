const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Booking = require('../../models/Booking')

// @route   GET /api/bookings/me
// @desc    List current user's bookings
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .lean()
        res.json(bookings)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST /api/bookings
// @desc    Create a booking (after payment / ticket step)
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const {
            from,
            to,
            busId,
            travelDate,
            passengerNames,
            seatNumbers,
            totalAmount,
            paymentMethod
        } = req.body

        const booking = new Booking({
            user: req.user.id,
            busId: busId != null && busId !== '' ? String(busId) : 'unknown',
            from: from || '',
            to: to || '',
            travelDate: travelDate || '',
            passengerNames: passengerNames != null ? passengerNames : [],
            seatNumbers: seatNumbers != null ? seatNumbers : [],
            totalAmount: totalAmount != null ? Number(totalAmount) : undefined,
            paymentMethod: paymentMethod || 'Credit Card',
            status: 'confirmed'
        })

        await booking.save()
        res.json(booking)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router
