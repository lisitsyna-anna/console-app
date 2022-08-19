const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    this.count = +prompt('Сколько фильмов уже посмотрели?', '');

    while (this.count == null || this.count == '' || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов уже посмотрели?', '');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i += 1) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(); //trim() - убирает пробельные символы у строки с начала и конца
      const b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        this.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i -= 1;
      }
    }
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      console.log('Просмотрено довольно мало фильмов ');
    } else if (this.count >= 10 && this.count < 30) {
      console.log('Вы классический зритель');
    } else if (this.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(this);
    }
  },
  toggleVisibleMyDB() {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i += 1) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

      if (genre === null || genre === '') {
        console.log('Вы ввели некорректные данные');
        i--;
      } else {
        this.genres.push(genre);
        this.genres.sort();
      }
    }

    this.genres.forEach((genre, index) => console.log(`Любимый жанр ${index + 1} - это ${genre}`));
  },
};
personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
