const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')
const minuto = document.querySelector('#minuto')
const dois_pontos = document.querySelector('#pontos')

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy'
]

const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element
}

let firstCard = ''
let secondCard = ''
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card')

  if (disabledCards.length === 20) {
    clearInterval(this.loop)
    clearInterval(this.looop)
    setTimeout(() => {
      alert(
        `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de ${minuto.innerHTML}:${timer.innerHTML}`
      )
    }, 50)
  }
}
const chekcards = () => {
  const firstCharacter = firstCard.getAttribute('data-character')
  const secondCharacter = secondCard.getAttribute('data-character')

  if (firstCharacter === secondCharacter) {
    setTimeout(() => {
      firstCard.firstChild.classList.add('disabled-card')
      secondCard.firstChild.classList.add('disabled-card')
      firstCard = ''
      secondCard = ''

      checkEndGame()
    }, 600)
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card')
      secondCard.classList.remove('reveal-card')

      firstCard = ''
      secondCard = ''
    }, 600)
  }
}
const revealCard = ({ target }) => {
  if (target.parentNode.className.includes('reveal-card')) {
    return
  }

  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode
  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card')
    secondCard = target.parentNode
    chekcards()
  }
}

const createCard = character => {
  const card = createElement('div', 'card')
  const front = createElement('div', 'face front')
  const back = createElement('div', 'face back')

  front.style.backgroundImage = `url('../images/${character}.png')`

  card.appendChild(front)
  card.appendChild(back)

  card.addEventListener('click', revealCard)
  card.setAttribute('data-character', character)
  return card
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters]
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  shuffledArray.forEach(character => {
    const card = createCard(character)
    grid.appendChild(card)
  })
}

const startTimer = () => {
  this.loop = setInterval(() => {
    let currentTime = Number(timer.innerHTML)
    if (currentTime < 60) {
      timer.innerHTML = currentTime + 1
    } else {
      currentTime = 0
      timer.innerHTML = currentTime + 1
    }
  }, 1000)

  if(minuto.innerHTML == 0){
    minuto.style.display = 'none'
  }
  this.looop = setInterval(() => {
    minuto.style.display = 'flex'
    let currentMinute = Number(minuto.innerHTML)
    minuto.innerHTML = currentMinute + 1
    if(minuto.innerHTML > 0){
      dois_pontos.style.display = 'flex';
    }
  }, 60000)
}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player')
  startTimer()
  loadGame()
}
