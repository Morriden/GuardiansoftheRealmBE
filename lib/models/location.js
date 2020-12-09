const mongoose = require('mongoose');

const locations = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    defense: {
        type: Number,
        required: true,
        default: 0
    },
    production: {
        type: Number,
        required: true,
        default: 0
    },
    food: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Location', locations);
