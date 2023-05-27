const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  listName: String
});

module.exports = mongoose.model('Lists', ListSchema)