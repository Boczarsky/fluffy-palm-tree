const port = 3000;
const dbURI = 'mongodb://mongo:27017/movies-app';

const express = require('express');
const app = express();

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
  res.send('HENLO');
})