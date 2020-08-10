const mongoose = require("mongoose");

const previewSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  domain: String,
  image: String,
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Preview", previewSchema);
