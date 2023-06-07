console.log('JS OK')

/* traccia

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni
cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per
ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata
si colora di azzurro ed emetto un messaggio in console con il numero della cella
cliccata. 


# steps

- creo le caselle
- genero un numero all interno di ogni casella
- nascondo le caselle

- recupero elementi dal dom

- metto in ascolto il bottone
  - al click del bottone mostro le caselle
    - al click della casella cambio colore e stampo in console
*/

// REUCPERO ELEMENTI DAL DOM


const headerButton = document.getElementById('headerButton')
const cells = document.getElementById('cells')

// creo le caselle 

for(let i = 1; i <= 100; i++){
    const cell = document.createElement('div')
    cell.classList.add('cell', 'd-none')
    cell.innerText = i
    cells.appendChild(cell);

    headerButton.addEventListener('click', function(){
        cell.classList.toggle('d-none')
    })

    let message = 'hai cliccato il numero ' + i;

    cell.addEventListener('click', function(){
        cell.classList.toggle('clicked')
        console.log(message)
    })
}
