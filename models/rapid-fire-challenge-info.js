var mongoose = require('mongoose');

const rapidFireChallengeInfo = mongoose.Schema({
    by_user_id:{
        type: String,
        required :true
    },
    to_user_id:{
        type: String,
        required :true
    },
    status:{
        type: Boolean,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    question_ids:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('RapidFireChallengeInfo',rapidFireChallengeInfo);