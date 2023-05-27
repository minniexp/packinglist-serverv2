const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  categoryName: String,
  items: Array,
  list_id: String
});

module.exports = mongoose.model('Category', CategorySchema)