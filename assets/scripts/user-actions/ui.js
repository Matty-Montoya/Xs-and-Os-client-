'use strict '

const store = require('../store.js')

const signUpSuccess = function () {
  $('#message').text('You have successfully signed up!')
  $('.sign-up').addClass('.hidden')
  $('.sign-in').addClass('.hidden')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully Signing In!')
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  $('#myModal').modal('hide')
  $('.sign-in').addClass('.hidden')
  $('.sign-up').addClass('.hidden')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failure Signing In!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').text(''), 2000)
}

const changePasswordSuccess = function () {
}

const signOutSuccess = function () {
  store.user = null
}

module.export = {
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess
}
