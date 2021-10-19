const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.numberOfFilms = +prompt('How many movies have you watched?');
        while (this.numberOfFilms == '' || this.numberOfFilms == null || isNaN(this.numberOfFilms))
            this.numberOfFilms = +prompt('How many movies have you watched?');
    },

    rememberMyMovies: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('one of the last watched movies?'),
                b = prompt('How do you rate it?');
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Some error');
        }
    },

    ShowMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();
            if (genres == null
                || genres == '') {
                i--;
            } else {
                personalMovieDB.genres.push(genres);
            }
        }
        let sort = personalMovieDB.genres.sort();
        sort.forEach((item, i) => console.log(`Любимый жанр ${i + 1} - это ${item}`));
    },

    toggleVisibleMyDB: function () {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
}

/* personalMovieDB.start();

personalMovieDB.rememberMyMovies();

personalMovieDB.detectPersonalLevel();

personalMovieDB.ShowMyDB();
 */
personalMovieDB.writeYourGenres();

/* personalMovieDB.toggleVisibleMyDB(); */