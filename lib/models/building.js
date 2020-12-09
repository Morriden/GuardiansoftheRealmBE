const mongoose = require('mongoose');

const buildings = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roompoint: {
        type: Number,
        required: true
    },
    goldcost: {
        type: Number,
        required: true
    },
    upkeep: {
        type: Number,
        required: true
    },
    construction: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    defense: {
        type: Number,
        required: true,
        default: 0
    },
    population: {
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

module.exports = mongoose.model('Building', buildings);
