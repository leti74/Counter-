
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








