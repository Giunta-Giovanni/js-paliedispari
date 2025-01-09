// Pari e Dispari

// chiediamo all utente di inserire pari o dispari e un numero da 1 a 5 e salviamo le variabili
let userChoice = prompt("pari o dispari");
let userNumber = parseInt(prompt("inserisci una numero da 1 a 5"));

// stampiamo i dati user
console.log("L'utente ha scelto:", userChoice); //valore
console.log("L'utente ha scelto il numero:", userNumber); // numero

// sommiamo il valore dell'utente con quello del computer
let somma = userNumber + randomNum1to5();

console.log('la somma è:', somma); //stampiamo il numero della somma
console.log('è uscito:', pariodispari(somma)); //stampiamo il valore della somma

// se la scelte dell'utente è uguale a quella uscita dalla funzione l'utente ha vinto
if (userChoice === pariodispari(somma)) {
    console.log("L'utente ha vinto");

// altrimenti ha vinto il computer
} else {
    console.log("Il computer ha vinto"); 
}




/********************* FUNZIONI ********************/  

// creiamo una funzione per generare un numero casuale da parte del computer che va da un minimo di 1 ad un massimo di 5
function randomNum1to5(){
    const numeroGenerato = Math.floor(Math.random() * 5) + 1;
    console.log('il computer ha scelto:', numeroGenerato);
    return numeroGenerato;
}

// creiamo una funzione per vedere se il risultato è pari o dispari
function pariodispari(numero) {

    let risultato = '';
    // se il risultato è divisibile per 2 
    if (numero % 2 === 0) {
        // modifica la variabile risultato con pari
        risultato = 'pari';
        // ritorna il risultato
    } else {
        // modifica la variabile risultato con dispari
        risultato = 'dispari';
        // ritorna il risultato
    }
return risultato
}

/***************************************************/ 









// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?