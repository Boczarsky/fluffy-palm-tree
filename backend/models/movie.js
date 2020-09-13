const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: String,
  summary: String,
  genre: [{
    id: String,
    name: String
  }],
  rating: [{
    score: Number,
    userId: Number,
    publishDate: Date,
  }],
  coverUrl: String
});

module.exports = model('Movie', movieSchema);
