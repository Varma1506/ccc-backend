var mongoose = require('mongoose');

const globalLeaderboard = mongoose.Schema({
    score:{
        type: Number,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('GlobalLeaderboard',globalLeaderboard);