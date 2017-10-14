
//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var post = new mongoose.Schema({
  img: String,
  text: String,
  date: { type: Date, default: Date.now },
  likes: Number
});

//Return Model
module.exports = restful.model('Post', post);
