
let calculation = 0;
const counter = document.querySelector('.js-paragrafo')

const incrementa = document.querySelector('.js-incrementa')
incrementa.addEventListener('click', () => {
 calculation += 1;
 counter.innerHTML = calculation;
})


const decrementa = document.querySelector('.js-decrementa')
decrementa.addEventListener('click', () => {
  calculation -= 1
  counter.innerHTML = calculation;
})

const bottoneTema = document.querySelector('.js-cambio-tema')
 const body = document.body
  
 bottoneTema.addEventListener('click', () => {
  body.classList.toggle('tema-scuro')
 })







