var mongoose = require('mongoose');
 
const practiseSolutionInfo = mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    question_id:{
        type: String,
        required: true
    },
    code:{
        type: String
    },
    testcases:{
        type: Array,
        required: true
    }

});

module.exports = mongoose.model('PractiseSolutionInfo',practiseSolutionInfo);