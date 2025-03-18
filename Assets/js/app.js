
const bottoneTema = document.querySelector('.js-cambio-tema')
 const body = document.body
  
 bottoneTema.addEventListener('click', () => {
  body.classList.toggle('tema-scuro')
 })

 let calculation = 0;
 const counter = document.querySelector('.js-paragrafo');
 
 const buttonWrapper = document.querySelector('.sfondo');
 buttonWrapper.addEventListener('click', (event) => {
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
 





