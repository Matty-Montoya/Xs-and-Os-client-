'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const addHandlers = () => {
  $('.box').on('click', changeTurn)
  $('.box').on('click', winCondition)
  $('.box').on('click', pushToArray)
  $('.box').on('click', onUpdateGame)
  $('#replay').on('click', playAgain)
  $('#play').on('click', playAgain)
  $('#get-games').on('click', onGetGameIndex)
}

// Assigning X and O to players
const player1 = 'X'
const player2 = 'O'

// Creating the board as an array of 9 empty strings
let board
let isOver = false

board = ['', '', '', '', '', '', '', '', '']

// Total Win Combinations
const winCombos = [
  [board[0], board[1], board[2]],
  [board[3], board[4], board[5]],
  [board[6], board[7], board[8]],
  [board[0], board[3], board[6]],
  [board[1], board[4], board[7]],
  [board[2], board[5], board[8]],
  [board[0], board[4], board[8]],
  [board[2], board[4], board[5]]
]

// Change Turns and print X or O based on respctive turn
let turn = ''
const changeTurn = function (data) {
  // if (element.innerHTML !== '') return
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (turn === player1) {
      document.getElementById('counter').innerHTML = 'Player X Next!'
      turn = player2
    } else {
      document.getElementById('counter').innerHTML = 'Player O Next!'
      turn = player1
    }
    this.innerHTML = turn
  } else {
    $('#counter').html('This is an invalid space! Choose again!')
  }
  return turn
}

// Play again functon
const playAgain = function (event) {
  event.preventDefault()
  // Show game board
  $('#game-board').show()

  // Empties Gameboard Cells
  $('.box').html('')

  // Empties Board Array
  board = ['', '', '', '', '', '', '', '', '']
  turn = player2

  // Reset Counter
  $('#counter').html('Begin Player X!')
  // Create Post Request
  api.gameStart()
    .then(ui.gameStartSuccess)
}

const onGetGameIndex = function () {
  api.gameIndex()
    .then(ui.gameIndexSuccess)
}

const pushToArray = function () {
  board[0] = $('#0').text()
  board[1] = $('#1').text()
  board[2] = $('#2').text()
  board[3] = $('#3').text()
  board[4] = $('#4').text()
  board[5] = $('#5').text()
  board[6] = $('#6').text()
  board[7] = $('#7').text()
  board[8] = $('#8').text()
  // data.game.cell.index = board
  // data.game.cell.value = turn
  console.log(board)
}

const winCondition = () => {
  board[0] = document.getElementById('0')
  board[1] = document.getElementById('1')
  board[2] = document.getElementById('2')
  board[3] = document.getElementById('3')
  board[4] = document.getElementById('4')
  board[5] = document.getElementById('5')
  board[6] = document.getElementById('6')
  board[7] = document.getElementById('7')
  board[8] = document.getElementById('8')

  if ((board[0].innerHTML === 'X' && board[1].innerHTML === 'X' && board[2].innerHTML === 'X') ||
    // or x wins middle row
    (board[3].innerHTML === 'X' && board[4].innerHTML === 'X' && board[5].innerHTML === 'X') ||
    // or x wins bottom row
    (board[6].innerHTML === 'X' && board[7].innerHTML === 'X' && board[8].innerHTML === 'X') ||
    // or x wins left to right diagnol
    (board[0].innerHTML === 'X' && board[4].innerHTML === 'X' && board[8].innerHTML === 'X') ||
    // or X wins right column
    (board[2].innerHTML === 'X' && board[5].innerHTML === 'X' && board[8].innerHTML === 'X') ||
    // or X wins left column
    (board[0].innerHTML === 'X' && board[3].innerHTML === 'X' && board[6].innerHTML === 'X') ||
    // or X wins middle column
    (board[1].innerHTML === 'X' && board[4].innerHTML === 'X' && board[7].innerHTML === 'X') ||
    // or X wins right to left diagonal
    (board[2].innerHTML === 'X' && board[4].innerHTML === 'X' && board[6].innerHTML === 'X')) {
    // print player one wins
    console.log('X wins')
    $('#counter').text('Congratulations ' + 'Player X has won!')
    $('#game-board').hide()
    // data.game.over = true
    isOver = true
    return isOver
    // if O wins top row
  } else if ((board[0].innerHTML === 'O' && board[1].innerHTML === 'O' && board[2].innerHTML === 'O') ||
    // or O wins middle row
    (board[3].innerHTML === 'O' && board[4].innerHTML === 'O' && board[5].innerHTML === 'O') ||
    // or O wins bottom row
    (board[6].innerHTML === 'O' && board[7].innerHTML === 'O' && board[8].innerHTML === 'O') ||
    // or O wins left to right diagonal
    (board[0].innerHTML === 'O' && board[4].innerHTML === 'O' && board[8].innerHTML === 'O') ||
    // or O wins right column
    (board[2].innerHTML === 'O' && board[5].innerHTML === 'O' && board[8].innerHTML === 'O') ||
    // or O wins left column
    (board[0].innerHTML === 'O' && board[3].innerHTML === 'O' && board[6].innerHTML === 'O') ||
    // or O wins middle column
    (board[1].innerHTML === 'O' && board[4].innerHTML === 'O' && board[7].innerHTML === 'O') ||
    // or O wins right to left diagonal
    (board[2].innerHTML === 'O' && board[4].innerHTML === 'O' && board[6].innerHTML === 'O')) {
    // print player two wins
    console.log('O wins')
    $('#counter').text('Congratulations ' + 'Player O has won!')
    $('#game-board').hide()
    // data.game.over = true
    // store.game.over = true
    isOver = true
    return isOver
  } else if ((board[0].innerHTML !== '' && board[1].innerHTML !== '' && board[2].innerHTML !== '' &&
      board[3].innerHTML !== '' && board[4].innerHTML !== '' && board[5].innerHTML !== '' && board[6].innerHTML !== '' &&
      board[7].innerHTML !== '' && board[8].innerHTML !== '')) {
    // return draw
    // data.game.over = true
    console.log('Its a draw')
    store.game.over = true
    $('#counter').text('Its a draw!')
    $('#game-board').hide()
  }
}
const onUpdateGame = function (event) {
  event.preventDefault()
  const data = event.target.id
  const turn = event.target.innerText
  const isOver = winCondition()
  api.gameUpdate(data, turn, isOver)
    .then(ui.gamePatchSuccess)
}
const gameState = function () {
  if (winCondition() === true) {
    store.game.over = true
  } else {
    store.game.over = false
  }
  api.gameUpdate()
    .then(ui.gamePatchSuccess)
}

module.exports = {
  board,
  addHandlers,
  player1,
  player2,
  winCombos,
  changeTurn,
  playAgain,
  pushToArray,
  onGetGameIndex,
  gameState,
  onUpdateGame
}
