const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('#sign-in').on('submit', onSignIn)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('Signed In')
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
}

module.exports = {
  addHandlers,
  onSignIn
}
