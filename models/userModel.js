const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true.valueOf,
        trim: true
    },
    email: {
        type: String,
        requried: true.valueOf,
        unique: true
    },
    password: {
        type: String,
        requried: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    } 
    }, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)