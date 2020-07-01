let notes = getNotes()

const currentTimestamp = moment().valueOf()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

const addNote = (e) => {
    console.log('Creating a new note...')
    const uuid = uuidv4()
    notes.push({
        id: uuid,
        title: '',
        body: '',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
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
    filters.sortBy = e.target.value
    console.log(filters.sortBy)
    renderNotes(notes, filters)
})

window.addEventListener('storage', function(e) {

    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

