'use strict'

const config = require('../config.js')
const store = require('../store.js')

const gameIndex = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const gameStart = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data: {}
  })
}

const gameUpdate = function (data, turn, isOver) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: data,
          value: turn
        },
        over: isOver
      }
    }
  })
}

module.exports = {
  gameIndex,
  gameStart,
  gameUpdate
}
