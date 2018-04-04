'use strict'

const addHandlers = () => {
  $('.box').on('click', changeTurn)
  $('.box').on('click', winCondition)
  $('.box').on('click', pushToArray)
  $('#replay').on('click', playAgain)
}

// Assigning X and O to players
const player1 = 'X'
const player2 = 'O'

// Creating the board as an array of 9 empty strings
const board = ['', '', '', '', '', '', '', '', '']

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
const changeTurn = function () {
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
    console.log(turn)
  } else {
    console.log('This is an invalid space')
  }
  return turn
}

// Play again functon
const playAgain = function (event) {
  event.preventDefault()
  if (winCondition === true) {
    $('#replay').show()
  }
}

const pushToArray = function () {
  board[0] = $('#box-0').text()
  board[1] = $('#box-1').text()
  board[2] = $('#box-2').text()
  board[3] = $('#box-3').text()
  board[4] = $('#box-4').text()
  board[5] = $('#box-5').text()
  board[6] = $('#box-6').text()
  board[7] = $('#box-7').text()
  board[8] = $('#box-8').text()
  console.log(board)
}

const winCondition = () => {
  board[0] = document.getElementById('box-0')
  board[1] = document.getElementById('box-1')
  board[2] = document.getElementById('box-2')
  board[3] = document.getElementById('box-3')
  board[4] = document.getElementById('box-4')
  board[5] = document.getElementById('box-5')
  board[6] = document.getElementById('box-6')
  board[7] = document.getElementById('box-7')
  board[8] = document.getElementById('box-8')

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
    $('#replay').show()
    return true
    // if O wins top row
  } else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
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
    return true
  } else if ((board[0].innerHTML !== '' && board[1].innerHTML !== '' && board[2].innerHTML !== '' &&
      board[3].innerHTML !== '' && board[4].innerHTML !== '' && board[5].innerHTML !== '' && board[6].innerHTML !== '' &&
      board[7].innerHTML !== '' && board[8].innerHTML !== '')) {
    // return draw
    console.log('Its a draw')
    $('#counter').text('Its a draw')
  }
}

module.exports = {
  addHandlers,
  player1,
  player2,
  board,
  winCombos,
  changeTurn,
  playAgain,
  pushToArray,
  winCondition
}
