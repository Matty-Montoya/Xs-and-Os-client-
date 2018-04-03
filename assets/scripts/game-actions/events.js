'use strict'

const addHandlers = () => {
  $('.box').on('click', changeTurn)
  $('#replay').on('click', playAgain)
  $('.box').on('click', winCondition)
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
      turn = player2
    } else {
      turn = player1
    }
    // for (var i = 0; i < board.length; i++) {
    // if (board[i] === player1 || board[i] === player2) {
    //   console.log('You cannot play there')
    // }
    this.innerHTML = turn
    console.log(turn)
  } else {
    console.log('This is an invalid space')
  }
  return turn
}

// Play again functon
const playAgain = function () {
  for (let i = 0; i < board.length; i++) {
    board[i].innerHTML = []
  }
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

  if (board[0].innerHTML !== '' && board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
    console.log('You Have Won!')
  } else if (board[3].innerHTML !== '' && board[3].innerHTML === board[4].innerHTML && board[3].innerHTML === board[5].innerHTML) {
    console.log('You Have Won!')
  } else if (board[6].innerHTML !== '' && board[6].innerHTML === board[7].innerHTML && board[6].innerHTML === board[8].innerHTML) {
    console.log('You Have Won!')
  } else if (board[0].innerHTML !== '' && board[0].innerHTML === board[3].innerHTML && board[0].innerHTML === board[6].innerHTML) {
    console.log('You Have Won!')
  } else if (board[1].innerHTML !== '' && board[1].innerHTML === board[4].innerHTML && board[1].innerHTML === board[7].innerHTML) {
    console.log('You Have Won!')
  } else if (board[2].innerHTML !== '' && board[2].innerHTML === board[5].innerHTML && board[2].innerHTML === board[8].innerHTML) {
    console.log('You Have Won!')
  } else if (board[0].innerHTML !== '' && board[0].innerHTML === board[4].innerHTML && board[0].innerHTML === board[8].innerHTML) {
    console.log('You Have Won!')
  } else if (board[2].innerHTML !== '' && board[2].innerHTML === board[4].innerHTML && board[2].innerHTML === board[6].innerHTML) {
    console.log('You Have Won!')
  }
}

//   if (winCombo.some((key) => {
//       return key.join('') === 'XXX'
//     })) {
//     playerXWon()
//   } else if (winCombo.some((key) => {
//       return key.join('') === 'OOO'
//     })) {
//     playerOWon()
//   } else if (board.join('').length === 9) {
//     tie()
//   } else {}
// }
// win()
//
// }

console.log(board)

module.exports = {
  addHandlers,
  player1,
  player2,
  board,
  winCombos,
  changeTurn,
  playAgain,
  winCondition
}
