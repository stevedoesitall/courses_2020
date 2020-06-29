const notes = [{
    title: `Trip`,
    body: `I'd like to go to Spain`
}, {
    title: `Workout`,
    body: `Exercise more!`
}, {
    title: `Cook`,
    body: `Try new recipes!`
}];

const filters = {
    searchText: ''
};

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(note => {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
};

renderNotes(notes, filters);

const addNote = (e) => {
    console.log('Creating a new note...');
};

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#create-note').addEventListener('click', addNote);

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
});