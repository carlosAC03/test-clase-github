var readlineSync = require('readline-sync');
let b = 1;
var numero = readlineSync.question(' Escribe un numero ');


while (numero >=1) {
    b=b*numero;
    numero--;
  }
  console.log(b);