var mongoose = require('mongoose');

const userInfoSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    score_id:{
        type: String,
        required: true
    },
    is_new_user:{
        type: Boolean,
        required: true
    },
    clan_id:{
        type: String,
        required: true
    },
    is_clan_admin:{
        type: Boolean,
        required: true
    },
    notifications:{
        type: Array,
        default: []
    }
}) ;

module.exports = mongoose.model('UserInfo',userInfoSchema);