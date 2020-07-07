const resultContainer = document.querySelector('#puzzle')
const guessesContainer = document.querySelector('#guesses')
let game

// resultContainer.textContent = instanceOne.puzzle.result
// guessesContainer.textContent = instanceOne.puzzle.remainingGuesses
// guessesContainer.textContent = instanceOne.statusMessage

window.addEventListener('keypress', (e) => {
    let guess = e.key
    try {
        game.makeGuess(guess)
        game.getStatus()
        render()

    } catch(error) {
        console.log(error.message)
    }
})

const render = () => {
    resultContainer.innerHTML = ''
    const splitResult = game.puzzle.result.split('')
    splitResult.forEach(character => {
        const span = document.createElement('span')
        span.textContent = character
        resultContainer.appendChild(span)
    })
    guessesContainer.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle(2).then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })



// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })