const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  username: String,
  password: Array,
  favoriteLists: Array,
  checked: Array
});

module.exports = mongoose.model('User', UserSchema)