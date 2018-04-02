'use strict '

const store = require('../store.js')

const signUpSuccess = function () {
  $('#message')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
}

const changePasswordSuccess = function () {
}

const signOutSuccess = function () {
  store.user = null
}

module.export = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
