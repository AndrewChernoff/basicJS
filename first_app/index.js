let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
        numberOfFilms = +prompt('How many movies have you watched?');
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function rememberMyMovies() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('one of the last watched movies?'),
            b = prompt('How do you rate it?');
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyMovies();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Some error');
    }
}

detectPersonalLevel();

function ShowMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
ShowMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();

