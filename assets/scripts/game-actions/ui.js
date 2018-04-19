'use strict '

const store = require('../store.js')

const gameStartSuccess = function (data) {
  console.log(data)
  $('#counter').removeClass('hidden')
  $('#replay').removeClass('hidden')
  $('#game-board').removeClass('hidden')
  store.game = data.game
}

const gameIndexSuccess = function (data) {
  console.log('data is', data)
  const length = data.games.length
  $('#games-played').removeClass('hidden')
  $('#games-played').text('Total Games Played ' + length)
  setTimeout(() => $('#games-played').text(''), 4000)
}

const gamePatchSuccess = function (data) {
  console.log('data is', data)
  store.game = data.game
}

module.exports = {
  gameStartSuccess,
  gameIndexSuccess,
  gamePatchSuccess
}
