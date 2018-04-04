'use strict '

const store = require('../store.js')

const signUpSuccess = function () {
  $('#status').html('You have successfully signed up! Please sign in!')
  setTimeout(() => { $('#status').fadeOut() }, 3000)
  $('#myModal1').modal('toggle')
}

const signUpFailure = function () {
  $('.authmessage').html('Please try again!')
  setTimeout(() => { $('.authmessage').fadeOut() }, 3000)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#status').html('You have successfully signed in!')
  setTimeout(() => { $('#status').fadeOut() }, 3000)
  $('#myModal').modal('toggle')
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  store.user = data.user
}

const signInFailure = function () {
  $('.authmessage').html('Please try again!')
  setTimeout(() => { $('.authmessage').fadeOut() }, 3000)
}

const changePasswordSuccess = function () {
  $('#status').text('You have successfully changed password!')
  setTimeout(() => { $('#status').fadeOut() }, 3000)
  $('#myModal2').modal('toggle')
}

const changePasswordFailure = function () {
  $('.authmessage').html('Please try again!')
  setTimeout(() => { $('.authmessage').fadeOut() }, 3000)
}

const signOutSuccess = function () {
  $('#status').text('You have signed out!')
  setTimeout(() => { $('#status').fadeOut() }, 3000)
  $('.sign-in').removeClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.change-password').addClass('hidden')
  $('.sign-out').addClass('hidden')
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
