const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  visitedCount: { type: [Number], default: new Array(31).fill(0) },
  totalCount: { type: Number, default: 0 },
  todayCount: { type: Number, default: 0 },
  lastUpdate: { type: String, default: Date.now },
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);
