const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    league: {
        type: String,
        required: true,
    },
    away_team: {
        type: Object,
        required: true,
    },
    home_team: {
        type: Object,
        required: true,
    },
    away_period_scores: {
        type: Array,
        required: true,
    },
    home_period_scores: {
        type: Array,
        required: true,
    },
    officials: {
        type: Array,
        required: true,
    },
    event_information: {
        type: Object,
        required: true,
    },
    away_errors: {
        type: Number,
        required: false,
    },
    home_errors: {
        type: Number,
        required: false,
    },
    away_batters: {
        type: Array,
        required: false,
    },
    home_batters: {
        type: Array,
        required: false,
    },
    away_pitchers: {
        type: Array,
        required: false,
    },
    home_pitchers: {
        type: Array,
        required: false,
    },
    away_fielding: {
        type: Array,
        required: false,
    },
    home_fielding: {
        type: Array,
        required: false,
    },
    away_batter_totals: {
        type: Object,
        required: false,
    },
    home_batter_totals: {
        type: Object,
        required: false,
    },
    away_stats: {
        type: Array,
        required: false,
    },
    home_stats: {
        type: Array,
        required: false,
    },
    away_totals: {
        type: Object,
        required: false,
    },
    home_totals: {
        type: Object,
        required: false,
    },
});

module.exports = mongoose.model('Game', GameSchema);
