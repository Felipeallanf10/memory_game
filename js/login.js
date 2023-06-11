const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login_form')

const valideteInput = ({ target }) => {
  if (target.value.length >= 2) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', '')
  }
}

const handleSubmit = event => {
  event.preventDefault()
  let players = new Array()
  
  if (localStorage.hasOwnProperty('players')) {
    players = JSON.parse(localStorage.getItem('players'))
  }
  players.push({player:input.value})
  localStorage.setItem('players', JSON.stringify(players));
  //localStorage.setItem('player', input.value)
  window.location = 'pages/game.html'
}
input.addEventListener('input', valideteInput)
form.addEventListener('submit', handleSubmit)
