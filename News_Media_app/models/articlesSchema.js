const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter the title of the article"],
  },
  content: {
    type: String,
    required: [true, "Enter the content of the article"],
  },
  author: {
    type: String,
    required: [true, "Enter the author's name"],
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["Politics", "Sports", "Technology", "Entertainment", "World", "Business", "Health"],
    required: [true, "Select a category"],
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const newsModel = mongoose.model("news", newsSchema);
module.exports = newsModel;
