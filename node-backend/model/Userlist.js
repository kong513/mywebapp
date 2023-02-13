const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userlist = new Schema({
    email:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    }
},{
    collection: 'userdb'
})

module.exports = mongoose.model('user', userlist);