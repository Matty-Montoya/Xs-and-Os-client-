'use strict '

const store = require('../store.js')

const signUpSuccess = function () {
  $('#status').text('You have successfully signed up! Please sign in!')
  setTimeout(() => $('#status').text(''), 2000)
  $('#myModal1').modal('toggle')
}

const signUpFailure = function () {
  $('.authmessage1').text('Please try again!')
  setTimeout(() => $('.authmessage1').text(''), 2000)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#status').html('You have successfully signed in!')
  setTimeout(() => $('#status').text(''), 2000)
  $('#myModal').modal('toggle')
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('#start-message').addClass('hidden')
  $('#counter').removeClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('#replay').removeClass('hidden')
  $('#game-board').removeClass('hidden')
  store.user = data.user
}

const signInFailure = function () {
  $('.authmessage').text('Please try again!')
  setTimeout(() => $('.authmessage').html(''), 5000)
}

const changePasswordSuccess = function () {
  $('#status').text('You have successfully changed password!')
  setTimeout(() => $('#status').text(''), 2000)
  $('#myModal2').modal('toggle')
}

const changePasswordFailure = function () {
  $('.authmessage2').text('Please try again!')
  setTimeout(() => $('.authmessage2').text(''), 2000)
}

const signOutSuccess = function () {
  $('#status').text('You have signed out!')
  setTimeout(() => $('#status').text(''), 2000)
  $('.sign-in').removeClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('#start-message').removeClass('hidden')
  $('.change-password').addClass('hidden')
  $('.sign-out').addClass('hidden')
  $('#replay').addClass('hidden')
  $('#game-board').addClass('hidden')
  $('#counter').addClass('hidden')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
