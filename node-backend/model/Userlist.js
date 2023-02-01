const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Userlist = new Schema({
    Email:{
        type: String
    },
    Username:{
        type: String
    },
    Password:{
        type: String
    }
},{
    collection: 'Userdb'
})

module.exports = mongoose.model('Userlist', Userlist);