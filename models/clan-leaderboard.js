var mongoose = require('mongoose');

const clanLeaderboard = mongoose.Schema({
    score:{
        type: Number,
        required :true
    }
});

module.exports = mongoose.model('ClanLeaderboard',clanLeaderboard);