const startAddButton = document.querySelector('#start-add-button');
const cancelMovieButton = document.querySelector('#cancel-button');
const confirmAddMovieButton = document.querySelector('#confirm-add-button');
const userInputs = document.querySelectorAll('input');
const addModal = document.querySelector('#add-modal');
const backdrop = document.querySelector('#backdrop');
const entryTextSection = document.querySelector('#entry-text');
const listRoot = document.querySelector('#movie-list');
const deleteMovieModal = document.querySelector('#delete-modal');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    listRoot.children[movieIndex].remove();
    cancelMovieDeletion();
};

const cancelMovieDeletion = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', cancelMovieDeletion)
    cancelDeletionButton.addEventListener('click', cancelMovieDeletion);
    confirmDeletionButton.addEventListener('click', deleteMovie(null, movieId));
};

const renderNewMovieElement = (id, title, imageURL, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageURL}" alt=${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

    //Pass null as the first argument to keep the context
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addModal.classList.remove('visible');
};

const showMovieModal = () => {
    addModal.classList.add('visible');
    toggleBackdrop();
};

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const cancelMovieAddHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' || 
        imageValue.trim() === '' || 
        ratingValue.trim() === ''||
        +ratingValue < 1 ||
        +rating > 5
    ) {
        alert("Please enter valid values.");
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    closeMovieModal();
    cancelMovieDeletion();
    clearMovieInputs();
};

startAddButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieButton.addEventListener('click', cancelMovieAddHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);