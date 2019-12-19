var mongoose = require('mongoose');

const practiceQuestionsLevel = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    question_title_array:{
        type: Array
    }
});

module.exports = mongoose.model('PracticeQuestionsLevel',practiceQuestionsLevel);