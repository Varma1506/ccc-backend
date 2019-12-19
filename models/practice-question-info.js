var mongoose = require('mongoose');

const practiceQuestionInfo = mongoose.Schema({
    title:{
        type: String,
        required :true
    },
    question:{
        type: String,
        required :true
    },
    testcase_array:{
        type: Array,
        required :true
    },
    max_score:{
        type: Array,
        required :true
    }
});

module.exports = mongoose.model('PracticeQuestionInfo',practiceQuestionInfo);
