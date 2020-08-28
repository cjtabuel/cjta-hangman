'use strict'

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
    this.status = 'Playing'
  }
  get puzzle() {
    let puzzle = ''
    
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      } 
    })
  
    return puzzle
  }
  takeGuess(guess) {
    guess = guess.toLowerCase()
    let isUnique = !this.guessedLetters.includes(guess)
    let isIncorrect = !this.word.includes(guess)
  
    // if this.status !== 'Playing', prevent the rest of the function from running
    if (this.status !== 'Playing') { 
      return
    } 
  
    // only allow unique guesses if the game status is still 'Playing'
    if (isUnique && this.status === 'Playing') {
      this.guessedLetters.push(guess)
    }
  
    // if guess IS unique AND incorrect, -1 from remaining guesses
    if (isUnique && isIncorrect) {
      this.remainingGuesses -= 1
    }

    newGame.getStatus()
  }
  getStatus() {
    let isFailed = this.remainingGuesses <= 0
    let isFinished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
  
    if (isFailed) {
      this.status = 'Fail'
    } else if (!isFailed && isFinished) {
      this.status = 'Finished'
    } else {
      this.status = 'Playing'
    }
  }
  get statusMessage() {
    let statusMessage

    if (this.status === 'Fail') {
      statusMessage = `Failed :( The word was "${this.word.join('')}"`
    } else if (this.status === 'Finished') {
      statusMessage = 'Congrats! You finished the game!'
    } else if (this.status === 'Playing') {
      statusMessage = `Guesses left: ${this.remainingGuesses}`
    }
    return statusMessage
  }
}