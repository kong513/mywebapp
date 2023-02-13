const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemlist = new Schema({
    content_name:{
        type: String
    },
    description:{
        type: String
    },
    content:{
        type: String
    }

},{
    collection: 'itemdb'
})

module.exports = mongoose.model('itemlist', itemlist);