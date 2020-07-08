const fs = require('fs')
const yargs = require('yargs')
const notesFunctions = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesFunctions.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesFunctions.removesNotes(argv.title)
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'listing out all notes',
    handler: () => {
        notesFunctions.listNotes()
    }
})

//Create remove command
yargs.command({
    command: 'read', 
    describe: 'read a note', 
    builder: { 
        title: { 
            describe: 'Note Title', 
            demandOption: true, 
            type: 'string' 
        } 
    }, 
    handler: (argv) => { 
        notesFunctions.readNote(argv.title) 
    }
})

//Needed to run yargs
yargs.parse()