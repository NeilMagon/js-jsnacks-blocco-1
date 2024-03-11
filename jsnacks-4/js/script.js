// - Calcola la somma e la media dei primi 10 numeri.

// Creo l'array
const numberPc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberPc);

let total = 0

// Creo un ciclo for per calcolare la somma dell'array
for (let i = 0; i < numberPc.length; i++) {
    total += numberPc[i];
}
console.log(total);

// Creo una variabile per calcolare la media
let media = total % numberPc.length;
console.log(media)