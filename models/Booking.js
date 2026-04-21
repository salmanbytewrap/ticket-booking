const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    busId: {
        type: String,
        required: true
    },
    from: {
        type: String,
        default: ''
    },
    to: {
        type: String,
        default: ''
    },
    travelDate: {
        type: String,
        default: ''
    },
    passengerNames: {
        type: mongoose.Schema.Types.Mixed
    },
    seatNumbers: {
        type: mongoose.Schema.Types.Mixed
    },
    totalAmount: {
        type: Number
    },
    paymentMethod: {
        type: String,
        default: 'Credit Card'
    },
    status: {
        type: String,
        default: 'confirmed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('booking', BookingSchema)
