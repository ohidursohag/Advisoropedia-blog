const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  article: {
    type: String,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  publish_date: {
    type: Date,
  },
  tags: {
    type: String,
  },
  title: {
    type: String,
  },
  view_count: {
    type: Number,
  },
});

module.exports = mongoose.model("posts", postSchema);
