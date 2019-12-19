var mongoose = require('mongoose');

const challengeQuestionTopic = mongoose.Schema({
    topic:{
        type: String,
        required: true
    },
    question_id_arr:{
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('ChallengeQuestionTopic',challengeQuestionTopic);