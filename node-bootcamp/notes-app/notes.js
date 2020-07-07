const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    if (notes.find(note => note.title === title)) {
        console.log('Note exists!')
        return
    }
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON  = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removesNotes = (title) => {
    const notes = loadNotes()
    const noteIndex = notes.findIndex(note => note.title === title)

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
        saveNotes(notes)
        console.log(chalk.bgGreen('Note removed!'))
    }
    else {
        console.log(chalk.bgRed('Nothing to remove!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log('Saving new note...')
}

module.exports = {
    getNotes,
    addNote,
    removesNotes
}