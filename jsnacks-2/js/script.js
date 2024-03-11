// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//   Il programma stampa la somma di tutti i numeri inseriti.

// Creo il ciclo for per chiedere i numeri all'utente
let total = 0;

for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt(`Dimmi un numero`));
    console.log(userNumber);
    total += userNumber;
}
console.log(total)