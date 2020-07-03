'use strict'

//Get notes from localStorage
const getNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }

}

//Remove note from list
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Remove note from list
const removeNote = (id) => {
    console.log(`Removing note ${id}`)
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
    const textEl = document.createElement('a')
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

    textEl.setAttribute('href', '/edit.html#' + note.id)

    noteEl.appendChild(textEl)
    return noteEl
}

const sortNotes = (notes, sortBy) => {

    if (sortBy === 'byEdited') {
        return notes.sort( (a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                0
            }
        })
    }

    else if (sortBy === 'byCreated') {
        return notes.sort( (a, b) => {
            if (a.updatedAt < b.updatedAt) {
                return -1
            } else if (a.updatedAt > b.updatedAt) {
                return 1
            } else {
                0
            }
        })
    }

    else if (sortBy === 'alphabetical') {
        return notes.sort( (a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                0
            }
        })
    }
}

//Render notes to the DOM
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(note => {
        const noteEl = generateDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const updateDateBlurb = (note) => {
    return `Last edited ${moment(note.updatedAt).fromNow()}`
}