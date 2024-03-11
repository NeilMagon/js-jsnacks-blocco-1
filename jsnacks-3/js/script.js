// - Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

// Creo array vuoto
const numberPc = [];

// Creo ciclo for per chiedere 6 numeri all'utente
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt(`Dimmi un numero`));
    console.log(userNumber);
}