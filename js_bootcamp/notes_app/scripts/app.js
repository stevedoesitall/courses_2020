let notes = getNotes()

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

window.addEventListener('storage', function(e) {

    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const birthday = moment().month('August').year('1987').date(1).format('MMM DD, YYYY')

console.log(birthday)
