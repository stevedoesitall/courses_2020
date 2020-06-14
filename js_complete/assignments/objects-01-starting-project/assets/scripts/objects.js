const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.querySelector('#movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible'); 
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps } = movie;
        let text = movie.getFormattedTitle() + ' - ';

        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }

        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.querySelector('#title').value;
    const extraName = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName] : extraValue,
        },
        id: Math.random().toString(),
        getFormattedTitle: function() {
            return this.info.title.toUpperCase();
        }
    };

    movies.push(newMovie);

    console.log(movies);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.querySelector('#filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);