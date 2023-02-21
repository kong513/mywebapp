const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userlist = new Schema({
    firstname:{
        type: String},
    lastname:{
        type: String},
    email:{
        type: String},
    username:{
        type: String},
    password:{
        type: String},
    token:{
        type: String}
},{
    collection: 'userdb'
})

module.exports = mongoose.model('user', userlist);