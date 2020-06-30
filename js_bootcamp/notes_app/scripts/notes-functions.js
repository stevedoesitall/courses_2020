//Get notes from localStorage
const getNotes = () => {
    const notesJSON = localStorage.getItem('notes')
        if (notesJSON !== null) {
            return JSON.parse(notesJSON)
        } else {
            return []
        }
}

//Remove note from list
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Remove note from list
const removeNote = (id) => {
    const noteIndex = notes.findIndex(note => {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//Generate DOM structure for a note
const generateDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    //Set up the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        console.log('Removing note...', note.id)
        removeNote(note.id)
        saveNotes()
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    noteEl.appendChild(textEl)
    return noteEl
}

//Render notes to the DOM
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = generateDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}