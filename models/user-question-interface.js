var mongoose = require('mongoose');

const userQuestionInterface = mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    question_id:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('UserQuestionInterface',userQuestionInterface);