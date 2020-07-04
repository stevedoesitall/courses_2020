const resultContainer = document.querySelector('#result')
const guessesContainer = document.querySelector('#guesses')

const instanceOne = new Hangman('Dog Man', 2)

resultContainer.textContent = instanceOne.puzzle.result
guessesContainer.textContent = instanceOne.puzzle.remainingGuesses
guessesContainer.textContent = instanceOne.statusMessage

window.addEventListener('keypress', (e) => {
    let guess = e.key
    try {
        instanceOne.makeGuess(guess)
        instanceOne.getStatus()
        instanceOne.puzzle
        console.log('puzzle', instanceOne.puzzle)
        guessesContainer.textContent = instanceOne.statusMessage
        resultContainer.textContent = instanceOne.puzzle.result

    } catch(e) {
        console.log(e.message)
    }
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry('US', (error, response) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(response.name)
    }
})
