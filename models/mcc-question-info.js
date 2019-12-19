var mongoose = require('mongoose');

const mccQuestionInfo = mongoose.Schema({
    title:{
        type: String,
        required :true
    },
    question:{
        type: String,        
        required :true
    },
    testcase_array:{
        type:Array,
        required :true
    },
    max_score:{
        type: Number,
        required :true
    }
});

module.exports = mongoose.model('MccQuestionInfo',mccQuestionInfo);