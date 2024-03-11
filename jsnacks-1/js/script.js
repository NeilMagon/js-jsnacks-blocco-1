// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati
//  (inserire il numero nell'array solo se non è già presente).

// Creo l'array
const numberPc = [];

// Creo un ciclo for per chiedere i numeri all'utente
for (let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt(`Dimmi un numero`));
    console.log(userNumber);
    // Se i numeri son già inclusi nell'array non li inserisco
    if (numberPc.includes(userNumber) === false) {
        // Se i numeri non sono inclusi nell'array li inserisco
        numberPc.push(userNumber);
    }
}
console.log(numberPc)