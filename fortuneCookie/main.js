/* Variáveis */
const firstScreen = document.querySelector('main')
const secondScreen = document.querySelector('section')

const cookie = firstScreen.querySelector('.closedCookie')
const resetCookie = secondScreen.querySelector('button')

let luckyPhrase = secondScreen.querySelector('p')

const luckyPhrases = [
  {
      phrase: "O sucesso não é garantido, mas a falta de tentativa é garantia de fracasso."
  },
  {
      phrase: "Acredite em si mesmo e em tudo o que você é."
  },
  {
      phrase: "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
  },
  {
      phrase: "A jornada mais importante que você pode fazer é a que leva a descoberta de si mesmo."
  },
  {
      phrase: "A persistência é o caminho do êxito. Não desista, mesmo quando enfrentar desafios."
  },
  {
      phrase: "Não tenha medo de falhar; tenha medo de não tentar."
  },
  {
      phrase: "A motivação é o que faz você começar. O hábito é o que faz você continuar."
  },
  {
      phrase: "A verdadeira motivação vem de fazer o que você ama."
  },
  {
      phrase: "Não importa o quão devagar você vá, desde que não pare."
  },
  {
      phrase: "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso."
  }, 
]

/* Eventos */
cookie.addEventListener('click', openCookie)
resetCookie.addEventListener('click', handleResetCookie)
document.addEventListener('keydown', Enter)


/* Funções */
function openCookie(){
    toogleScreen()
    randomPhrase()
}

function handleResetCookie(){
   toogleScreen()
}

function randomPhrase(){
    const randomIndex = Math.floor(Math.random() * luckyPhrases.length);
    const drawnPhrase = luckyPhrases[randomIndex].phrase;
    luckyPhrase.innerHTML = drawnPhrase
}

function Enter(event){
    if(event.key == 'Enter' && secondScreen.classList.contains('hide')){
        openCookie()
    }else if(event.key == 'Enter' && firstScreen.classList.contains('hide')){
        handleResetCookie()
    }
    
}

function toogleScreen(){
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')
}
