let notes = []

//Get notes from localStorage
const getNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }

}

//Expose notes from module
const loadNotes = () => notes

notes = getNotes()

export { loadNotes }