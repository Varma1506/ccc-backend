var mongoose = require('mongoose');

const clansInfo = mongoose.Schema({
    clan_name:{
        type: String,
        required :true
    },
    user_ids:{
        type: Array,
        required :true
    },
    score_id:{
        type: String,
        required :true
    },
    admin_id:{
        type: String,
        required :true
    },
    requests:{
        type: Array,
        required :true
    },
    mcc_question_id:{
        type: String,
        required :true
    },
    mcc_champ:{
        type: String,
        required :true
    }
});

module.exports = mongoose.model('ClansInfo', clansInfo);