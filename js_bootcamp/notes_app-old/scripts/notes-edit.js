'use strict'

const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
const currentTimestamp = moment().valueOf()
const dateElement = document.querySelector('#last-edited')

let notes = getNotes()
let note = notes.find(note => {
    return note.id === noteId
})

if (!note) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
dateElement.textContent = updateDateBlurb(note)

noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = currentTimestamp
    dateElement.textContent = updateDateBlurb(note)
    saveNotes(notes)
})

noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = currentTimestamp
    dateElement.textContent = updateDateBlurb(note)
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(note => {
            return note.id === noteId
        })
        
        if (!note) {
            location.assign('/index.html')
        }
        
        noteTitle.value = note.title
        noteBody.value = note.body
        dateElement.textContent = updateDateBlurb(note)
    }

})