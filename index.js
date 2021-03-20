const fs = require('fs');
const opn = require('opn')
let listOfFilms = fs.readFileSync('C:\\Users\\sarum\\Desktop\\films.txt').toString().split("\n");
let randomFilm = listOfFilms[Math.floor(Math.random() * listOfFilms.length)];
opn('https://www.google.com/search?q=' + randomFilm + ' фильм резка')
