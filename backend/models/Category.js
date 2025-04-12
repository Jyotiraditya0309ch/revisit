const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  itemCount: Number,
});

module.exports = mongoose.model('Category', categorySchema);
