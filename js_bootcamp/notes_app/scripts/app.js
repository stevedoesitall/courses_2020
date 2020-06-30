const notes = getNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

const addNote = (e) => {
    console.log('Creating a new note...')
    const uuid = uuidv4()
    notes.push({
        id: uuid,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign('/edit.html#' + uuid)
}

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#create-note').addEventListener('click', addNote)

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})