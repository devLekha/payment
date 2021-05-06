const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const payment = new mongoose.model('payment', paymentSchema);
module.exports = payment