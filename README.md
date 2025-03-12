App

Un'applicazione semplice e interattiva per contare, incrementare, decrementare e resettare un valore numerico, con un'opzione per alternare tra tema chiaro e tema scuro.

## Funzionalità

- **Incrementa e Decrementa:** Incrementa o diminuisci il valore numerico cliccando sui rispettivi pulsanti.
- **Resetta:** Ripristina il valore numerico a zero con un semplice click.
- **Tema Scuro/Chiaro:** Alterna tra un'interfaccia con tema chiaro e tema scuro cliccando sul pulsante del tema.
- **Design Moderno e Responsivo:** Interfaccia semplice e responsive, adatta a diversi dispositivi.

## Tecnologie Utilizzate

- **HTML5:** Struttura della pagina.
- **CSS3:** Styling dell'interfaccia con particolare attenzione alla responsività.
- **JavaScript:** Logica e interazioni dinamiche.

## Struttura dei File

- **HTML**
  - `index.html`: La struttura base dell'app.
- **CSS**
  - `Assets/css/body.css`: Stile di base per il corpo della pagina.
  - `Assets/css/tema.css`: Stile per il tema chiaro/scuro.
  - `Assets/css/struttura-counter.css`: Stile specifico per il contatore.
- **JavaScript**
  - `Assets/js/app.js`: Logica per il contatore e il tema.

## procedimento

All''inizio ho definito una variabile per memorizzare il valore del contatore. Con JavaScript, ho creato due funzioni “incrementa” e 
“decrementa” per modificare questo valore. Ho poi usato document.querySelector per selezionare gli elementi dei pulsanti e aggiunto 
addEventListener per eseguire le funzioni al clic, aggiornando anche l'interfaccia utente con il nuovo valore del contatore. In questo modo, 
ogni clic sui pulsanti modifica il valore e lo visualizza sullo schermo

## Come Usare

Clicca sul pulsante + per incrementare il valore.

Clicca sul pulsante - per decrementare il valore.

Usa il pulsante Reset per riportare il valore a zero.

Cambia il tema cliccando sul pulsante Tema.
