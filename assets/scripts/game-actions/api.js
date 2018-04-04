'use strict'

const config = require('../config.js')
const store = require('../store.js')

const gameIndex = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=<token>'
    },
    data
  })
}

module.exports = {
  gameIndex
}
