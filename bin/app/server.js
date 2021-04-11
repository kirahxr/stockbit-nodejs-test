const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const omdbMovies = require('../modules/omdb-movies/handlers/api_handler');

app.get('/search', omdbMovies.search);
app.get('/detail', omdbMovies.detail);

app.use((_, res) => res.send(createError(404)));

app.listen(process.env.PORT || '5000', (err) => { 
  if (err) console.log("Error in server setup") 
  console.log("Server listening on Port", process.env.PORT || '5000'); 
})

module.exports = app;
