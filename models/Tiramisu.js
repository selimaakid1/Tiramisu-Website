const mongoose = require('mongoose')

const TiramisuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})
module.exports = mongoose.model('tiramisu', TiramisuSchema)
