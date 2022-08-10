let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

  while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDB.count);

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i -= 1;
    }
  }
}

// rememberMyFilms();

// 2 - й вариант
// for (let i = 0; i < 2; i += 1) {
//   let a = prompt('Один из последних просмотренных фильмов?', '');
//   let b = prompt('На сколько оцените его?', '');

// while (a === null || b === 0 || a === '' || b === '' || a.length > 50) {
//   console.log('задаем вопрос повторно');
//   a = prompt('Один из последних просмотренных фильмов?', '');
//   b = prompt('На сколько оцените его?', '');
// }
// personalMovieDB.movies[a] = b;
// }

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов ');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i += 1) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
  }
}
writeYourGenres();
