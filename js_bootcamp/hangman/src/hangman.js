class Hangman {
    constructor(word, remainingGuesses, status = 'playing') {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = status
    }

    get puzzle() {
        let result = ''
    
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                result += letter
            } else {
                result += '*'
            }
        })
    
        return { result: result, remainingGuesses: this.remainingGuesses, status: this.status }
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        if (typeof guess !== 'string') {
            throw Error('Guess must be a string!')
        } else {
            const isUnique = !this.guessedLetters.includes(guess)
            const isWrong = !this.word.includes(guess)
    
            if (this.status !== 'playing') {
                return
            } 
    
            if (isUnique) {
                this.guessedLetters.push(guess)
            }
    
            if (isUnique && isWrong) {
                this.remainingGuesses--
            }
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `You have ${this.remainingGuesses} guesses left.`
        } else if (this.status === 'finished') {
            return `Congratulations! You won.`
        } else if (this.status === 'failed') {
            return `You failed! The correct answer was "${this.word.join('')}".`
        }
    }

    getStatus() {
        const hasFinished = this.word.every(letter => {
            return (this.guessedLetters.includes(letter) || letter === ' ')
        })
    
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (hasFinished) {
            this.status = 'finished'
        }
    }
}

export { Hangman as default }