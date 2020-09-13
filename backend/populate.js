const mongoose = require('mongoose');
const Movie = require('./models/movie');

const dbURI = 'mongodb://192.168.0.181:27017/movies-app';

mongoose.connect(dbURI, { useNewUrlParser: true })
  .then(() => {
    new Movie({
      title: 'Joker',
      summary: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
      genre: [
        {
          id: 'crime',
          name: 'Crime'
        },
        {
          id: 'drama',
          name: 'Drama'
        },
        {
          id: 'thriller',
          name: 'Thriller'
        },
      ],
      rating: [
        {
          score: 10,
          userId: 1,
          publishDate: new Date('2020-01-01 10:23'),
        },
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
        {
          score: 8,
          userId: 3,
          publishDate: new Date('2020-01-02 11:23'),
        },
        {
          score: 8,
          userId: 4,
          publishDate: new Date('2020-01-04 12:53'),
        },
        {
          score: 8,
          userId: 5,
          publishDate: new Date('2020-01-11 14:11'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    }).save()
    new Movie({
      title: 'The Shawshank Redemption',
      summary: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      genre: [
        {
          id: 'drama',
          name: 'Drama'
        },
      ],
      rating: [
        {
          score: 10,
          userId: 1,
          publishDate: new Date('2020-01-01 10:23'),
        },
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    }).save()
    new Movie({
      title: 'The Godfather',
      summary: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      genre: [
        {
          id: 'crime',
          name: 'Crime'
        },
        {
          id: 'drama',
          name: 'Drama'
        },
      ],
      rating: [
        {
          score: 10,
          userId: 1,
          publishDate: new Date('2020-01-01 10:23'),
        },
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
        {
          score: 8,
          userId: 3,
          publishDate: new Date('2020-01-02 11:23'),
        },
        {
          score: 8,
          userId: 4,
          publishDate: new Date('2020-01-04 12:53'),
        },
        {
          score: 8,
          userId: 5,
          publishDate: new Date('2020-01-11 14:11'),
        },
        {
          score: 9,
          userId: 6,
          publishDate: new Date('2020-01-22 22:11'),
        },
        {
          score: 9,
          userId: 7,
          publishDate: new Date('2020-01-23 23:27'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg'
    }).save()
    new Movie({
      title: 'The Dark Knight',
      summary: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      genre: [
        {
          id: 'action',
          name: 'Action'
        },
        {
          id: 'crime',
          name: 'Crime'
        },
        {
          id: 'drama',
          name: 'Drama'
        },
        {
          id: 'thriller',
          name: 'Thriller'
        },
      ],
      rating: [
        {
          score: 10,
          userId: 1,
          publishDate: new Date('2020-01-01 10:23'),
        },
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
        {
          score: 8,
          userId: 4,
          publishDate: new Date('2020-01-04 12:53'),
        },
        {
          score: 8,
          userId: 5,
          publishDate: new Date('2020-01-11 14:11'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    }).save()
    new Movie({
      title: '12 Angry Men',
      summary: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      genre: [
        {
          id: 'crime',
          name: 'Crime'
        },
        {
          id: 'drama',
          name: 'Drama'
        },
      ],
      rating: [
        {
          score: 10,
          userId: 1,
          publishDate: new Date('2020-01-01 10:23'),
        },
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
        {
          score: 8,
          userId: 3,
          publishDate: new Date('2020-01-02 11:23'),
        },
        {
          score: 8,
          userId: 4,
          publishDate: new Date('2020-01-04 12:53'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,649,1000_AL_.jpg'
    }).save()
    new Movie({
      title: 'Schindler\'s List',
      summary: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      genre: [
        {
          id: 'drama',
          name: 'Drama'
        },
        {
          id: 'biography',
          name: 'Biography',
        },
        {
          id: 'history',
          name: 'History'
        }
      ],
      rating: [
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
        {
          score: 8,
          userId: 3,
          publishDate: new Date('2020-01-02 11:23'),
        },
        {
          score: 8,
          userId: 4,
          publishDate: new Date('2020-01-04 12:53'),
        },
        {
          score: 8,
          userId: 5,
          publishDate: new Date('2020-01-11 14:11'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    }).save()
    new Movie({
      title: 'The Lord of the Rings: The Return of the King',
      summary: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      genre: [
        {
          id: 'action',
          name: 'Action'
        },
        {
          id: 'adventure',
          name: 'Adventure'
        },
        {
          id: 'drama',
          name: 'Drama'
        },
        {
          id: 'fantasy',
          name: 'Fantasy'
        },
      ],
      rating: [
        {
          score: 10,
          userId: 1,
          publishDate: new Date('2020-01-01 10:23'),
        },
        {
          score: 9,
          userId: 2,
          publishDate: new Date('2020-01-01 10:27'),
        },
        {
          score: 8,
          userId: 3,
          publishDate: new Date('2020-01-02 11:23'),
        },
        {
          score: 8,
          userId: 4,
          publishDate: new Date('2020-01-04 12:53'),
        },
        {
          score: 8,
          userId: 5,
          publishDate: new Date('2020-01-11 14:11'),
        },
      ],
      coverUrl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    }).save()
  })
  .catch((err) => {
    console.error(`Cannot connect to database by ${dbURI}`);
  });