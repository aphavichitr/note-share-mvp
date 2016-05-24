var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  url: String,
  description: String,
  username: String,
  likes: Number
});
