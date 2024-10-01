var readlineSync = require('readline-sync');

let texto = readlineSync.question("Introduce un nombre");


let contadorVocales = 0;


const vocales = ['a', 'e', 'i', 'o', 'u'];


for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contadorVocales++;
  }
}

console.log("El número de vocales en la cadena es: " + contadorVocales);