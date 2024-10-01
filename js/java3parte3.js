var readlineSync = require('readline-sync');

let frase = readlineSync.question("Intoduce una palabra: ");

    var nCadena="";
    for(var i = frase.length - 1; i >=0; i--){
        nCadena += frase[i];
    }
  
console.log(nCadena);