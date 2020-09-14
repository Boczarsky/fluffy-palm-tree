const port = 3000;
const dbURI = 'mongodb://mongo:27017/movies-app';

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

app.get('/api/movies', (req, res) => {
  const { search, id } = req.query;
  if (search) {
    Movie.find({ title: { $regex: `.*${search}.*` } }, '_id title')
      .sort({ title: 1 })
      .limit(5)
      .exec()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
  } else if (id) {
    Movie.findById(id).exec()
      .then((result) => {
        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(400);
  }
})
