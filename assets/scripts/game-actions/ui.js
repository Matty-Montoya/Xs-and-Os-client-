'use strict '

const store = require('../store.js')

const gameStartSuccess = function (data) {
  console.log(data)
  store.game = data.game
}

const gameIndexSuccess = function (data) {
  console.log('data is', data)
}

const gamePatchSuccess = function (data) {
  console.log(data)
  store.game = data.game
}

module.exports = {
  gameStartSuccess,
  gameIndexSuccess,
  gamePatchSuccess
}
