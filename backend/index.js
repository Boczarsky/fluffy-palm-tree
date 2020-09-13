const port = 80;
// const dbURI = 'mongodb://mongo:27017/movies-app';
const dbURI = 'mongodb://192.168.0.181:27017/movies-app';

const express = require('express');
const app = express();

const Movie = require('./models/movie');

const mongoose = require('mongoose');
mongoose.connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port: ${port}`);
    })  
  })
  .catch((err) => {
    console.error(`Cannot connect to database by ${dbURI}`);
  });

app.get('/', (req, res) => {
  Movie.find((err, result) => {
    res.json(result);
  })
})