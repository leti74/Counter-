// Funzione per creare elementi del DOM
function creaElemento(tagName, className = '', innerHTML = '') {
  const elemento = document.createElement(tagName);
  if (className) elemento.className = className;
  if (innerHTML) elemento.innerHTML = innerHTML;
  return elemento;
}

const counterContainer = document.querySelector('.sfondo');

// Creazione del contatore
const counter = creaElemento('p', 'js-paragrafo', '0');
const counterWrapper = creaElemento('div', 'counter');
counterWrapper.appendChild(creaElemento('h1', '', 'COUNTER'));
counterWrapper.appendChild(counter);
counterContainer.appendChild(counterWrapper);

// Pulsanti + e -
const buttonsWrapper = creaElemento('div', 'button-2');
buttonsWrapper.appendChild(creaElemento('button', 'button1 js-incrementa', '+'));
buttonsWrapper.appendChild(creaElemento('button', 'button2 js-decrementa', '-'));
counterContainer.appendChild(buttonsWrapper);

// Pulsante reset
const resetWrapper = creaElemento('div', 'resetta');
resetWrapper.appendChild(creaElemento('button', 'button3 js-resetta', 'Reset'));
counterContainer.appendChild(resetWrapper);

// Gestione degli eventi
let calculation = 0;
counterContainer.addEventListener('click', (event) => {
  const button = event.target;
  if (button.classList.contains('js-incrementa')) {
      calculation += 1;
  } else if (button.classList.contains('js-decrementa')) {
      calculation -= 1;
  } else if (button.classList.contains('js-resetta')) {
      calculation = 0;
  }
  counter.innerHTML = calculation;
});

// Tema scuro
const bottoneTema = document.querySelector('.js-cambio-tema');
const body = document.body;
bottoneTema.addEventListener('click', () => {
  body.classList.toggle('tema-scuro');
});
