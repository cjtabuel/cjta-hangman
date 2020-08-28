'use strict'

const statusEL = document.querySelector('p#status')
const puzzleEl = document.querySelector('div#puzzle')
let newGame

// listen for user key press interaction and take them in as guesses
window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  newGame.takeGuess(guess)
  
  render()
})

// render the game status message and puzzle
const render = () => {
  statusEL.textContent = newGame.statusMessage
  puzzleEl.innerHTML = ''
  
  newGame.puzzle.split('').forEach((letter) => {
    const charEl = document.createElement('span')
    charEl.textContent = letter
    puzzleEl.appendChild(charEl)
  })
}

// fetch puzzle from API and instantiate a new instance of Hangman
const startGame = async () => {
  const puzzle = await getPuzzle('2')
  newGame = new Hangman(puzzle, 5)
  render()
}

// start a new game when the user clicks reset
document.querySelector('button#reset').addEventListener('click', startGame)

// On page load -> fetch puzzle from API and instantiate a new instance of Hangman
startGame()

// getPuzzle('1').then((puzzle) => {
//   console.log(puzzle)
// }).catch((error) => {
//   console.log(error)
// })

// getCountry('US').then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })

// getLocation().then((location) => {
//   console.log(`You are in ${location.city}, ${location.region}, ${location.country}`)
// }).catch((error) => {
//   console.log(error)
// })

// getCurrentCountry().then((country) => {
//   console.log(`Current country: ${country.name}`)
// }).catch((error) => {
//   console.log(error)
// })