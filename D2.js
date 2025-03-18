/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* let var1 = 2;
 let var2 = 3;
 let control = var1 > var2 ? true : false;

 console.log("Il numero ", var1, "è maggiore di ", var2, "? ", control); */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let var1 = 2;

let control = var1 !== 5 ? "not Equal" : "Equal";

console.log("Il numero ", var1, "è diverso  da 5? ", control); */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* let var1 = 5;
let control = var1 % 5;

console.log("Il numero ", var1, control !== 0 ? "non divisibile per 5" : " è divisibile per 5"); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/*
let var1 = 1;
let var2 = 9;
if (var1 + var2 === 8 || var1 - var2 === 8) {
  control = true;
} else {
  control = false;
}
console.log (control);
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*
let totalShoppingCart = 49.999;
let spedizione = 10;
let totale = null;
if (totalShoppingCart > 50) {
  totale = totalShoppingCart;
} else {
  totale = totalShoppingCart + spedizione;
}
console.log(totale); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 60;
let spedizione = 10;
let totale = null;
let blackFriday = true;
if (totalShoppingCart > 50) {
  totale = totalShoppingCart;
} else {
  totale = totalShoppingCart + spedizione;
}
if (blackFriday == true) {
  let sconto = totale * 0.2;
  totale = totale - sconto;
}
console.log(totale);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let var1 = 5;
let var2 = 8;
let var3 = 3;
let maggiore = null;
let minore = null;
let mezzo = null;

if (var1 >= var2 && var1 >= var3) {
  maggiore = var1;
  if (var2 >= var3) {
    minore = var3;
    mezzo = var2;
  } else {
    minore = var2;
    mezzo = var3;
  }
} else if (var2 >= var1 && var2 >= var3) {
  maggiore = var2;
  if (var1 >= var3) {
    minore = var3;
    mezzo = var1;
  } else {
    minore = var1;
    mezzo = var3;
  }
} else if (var3 >= var1 && var3 >= var2) {
  maggiore = var3;
  if (var2 >= var1) {
    minore = var1;
    mezzo = var2;
  } else {
    minore = var2;
    mezzo = var1;
  }
}
console.log("L'ordine delle variabili è ", maggiore, mezzo, minore);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
