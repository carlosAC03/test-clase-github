var readlineSync = require('readline-sync');


let numero = readlineSync.question("Ingresa un numero:");


numero = Number(numero);
     
    if (numero % 2 === 0) {
        console.log("El número "+ numero +" es par.");
        }
    else {
        console.log("El número "+ numero +" es impar.");
        }


