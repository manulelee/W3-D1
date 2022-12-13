/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(4, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 + numero2) * 3;
  } else {
    return numero1 + numero2;
  }
}
console.log(crazySum(2, 1));
console.log(crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
function crazyDiff(numero1) {
  const numero2 = 19;
  const diff = numero2 - numero1;
  let absoluteDiff;
  if (diff < 0) {
    absoluteDiff = diff * -1;
    return absoluteDiff * 3;
  } else if (diff > 0) {
    absoluteDiff = diff;
    return absoluteDiff;
  }
}
console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");

function boundary(n) {
  let result = "luca";
  if ((n >= 20 && n <= 100) || n == 400) {
    result = true;
    console.log(result);
  } else {
    result = false;
    console.log(result);
  }
}
boundary(400);
boundary(101);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
  } else {
    stringa = stringa + " " + "EPICODE";
  }
  console.log(stringa);
}
epify("Emanuele");
epify("Epicode");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6");

function check3and7(n) {
  if (n >= 0) {
    console.log("Il numero è positivo");
    if (n % 3 === 0) {
      console.log("ed è divisibile per 3");
    } else if (n % 7 === 0) {
      console.log("ed è divisibile per 7");
    }
  } else if (n < 0) {
    console.log("Errore, il Numero è negativo");
  }
}
check3and7(14);
check3and7(5);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7");
function reverseString(stringa) {
  let toDivide = stringa.split("");
  let toReverse = toDivide.reverse("");
  let risultato = toReverse.join("");
  console.log(risultato);
}
reverseString("EPICODE");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");
function upperFirst(stringa) {
  let finalRes = [];
  let toDivideWords = [];
  let toDivideLetters = [];
  toDivideWords = stringa.split(" ");
  //console.log(toDivideWords);
  for (let i = 0; i < toDivideWords.length; i++) {
    toDivideLetters = toDivideWords[i].split(""); // assegna all' array toDivideLetters  l'array delle parole diviso (split) in lettere
    // per (i < del numero di parole) volte:
    let res = "";
    for (let j = 0; j < toDivideLetters.length; j++) {
      if (j === 0) {
        let capitalizeFirst = toDivideLetters[j].toUpperCase();
        res += capitalizeFirst;
      } else {
        res += toDivideLetters[j];
      }
      //console.log(toDivideLetters[j]);
    }
    finalRes.push(res + " ");
  }
  console.log(finalRes.join(""));
}
upperFirst("Ciao io sono stanco");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9");
function cutString(stringa) {
  let result;
  let toDivide = stringa.split("");
  //console.log(toDivide);
  toDivide.shift();
  toDivide.pop();
  result = toDivide.join("");
  return console.log(result);
}
cutString("Buongiorno");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10");
function giveMeRandom(n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a.push(Math.floor(Math.random() * 11));
  }
  return a;
}

console.log(giveMeRandom(5));
