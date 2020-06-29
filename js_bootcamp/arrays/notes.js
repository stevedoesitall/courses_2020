const notes = [{
    title: `Bote 1`,
    body: `I'd like to go to Spain`
}, {
    title: `BBote 2`,
    body: `Exercise more!`
}, {
    title: `Aote 3`,
    body: `Try new recipes!`
}];

console.log(false < true);

const sortNotes = (notes) => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0;
        }
    });
};

const findNote = (notes, noteTitle) => {
    return notes.find(note => {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

const findNotes = (notes, query) => {
    return notes.filter((note, index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
}

sortNotes(notes);

console.log(notes);