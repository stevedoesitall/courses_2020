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
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')


    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    noteEl.setAttribute('href', '/edit.html#' + note.id)
    noteEl.classList.add('list-item')

    statusEl.textContent = updateDateBlurb(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

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
                return 0
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
                return 0
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
                return 0
            }
        })
    }
}

//Render notes to the DOM
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const noteEl = generateDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

const updateDateBlurb = (note) => {
    return `Last edited ${moment(note.updatedAt).fromNow()}`
}