const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-pasword').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('Signed Up')
  api.signUp(data)
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
  console.log('changed password')
  api.changePassword(data)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  addHandlers,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
