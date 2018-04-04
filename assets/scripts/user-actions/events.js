const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('Signed Up')
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('Signed In')
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('changed password')
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')
  api.signOut()
    .then(ui.signOutSuccess)
}

module.exports = {
  addHandlers,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
