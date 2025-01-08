// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiediamo all utente di inserire una parola e salviamo la variabile
let userWord = prompt("inserisci una parola");

console.log('la parola è:', userWord);
console.log(palWord(userWord));


// per fare cio abbiamo bisogno di una funzione che ci identifica se la parola ha proprietà palindroma
function palWord(parola){
    // per fare cio abbiamo bisogno di constatare che la parola che abbiamo è uguale alla parola invertita
    // step 1 ci salviamo le variabili
    let parolaRevertata = '';

    // step 2 cicliamo la stringa dalla fine, all'inzio andando a prenderci ad ogni iterazione il carattere iesimo
    for (let i = parola.length - 1; i >= 0; i--){ //(parti dalla fine; finiscili il ciclo quando arrivi a 0; andando indietro )
        let carattereIesimo = parola[i];
    
        // aggiungiamo alla variabile di parolaRevertata il carattere iesimo
        parolaRevertata += carattereIesimo;
    }

    console.log('la parola letta al contrario è;', parolaRevertata);
    
        //se la parola che abbiamo è uguale alla parola invertita
        if (parola === parolaRevertata) {
            // il risultato è:la parola è palindroma 
            return 'la parola inserita è palindroma' 

        }else
            //il risultato è: la parola non è palindroma
            return 'la parola inserita non è palindroma' 

}

        

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?