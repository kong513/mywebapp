const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;

let itemlist = new Schema({
  user_name:{
    type: String
  },
  user_id:{
    type: String
  },
  content_name:{
    type: String
  },
  description: {
    type: String
  },
  content: {
    type: String
  },
  comment_name:{
    type: String
  },
  comments: {
    type :Array
  }, 
  /*comments: [
    {
        user: {
            type: String
        },
        comment: {
            type: String
        }
    }
],*/

}, {
  collection: 'itemdb'
});

module.exports = mongoose.model('itemlist', itemlist);
