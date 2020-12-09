const mongoose = require('mongoose');

const seasons = new mongoose.Schema({
    currentseason: {
        type: String,
        required: true
    },
    food: {
        type: Number,
        required: true
    },
    production: {
        type: Number,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Season', seasons);
