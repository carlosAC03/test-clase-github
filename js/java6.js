var readlineSync = require('readline-sync');
let numero = readlineSync.question("Inserta un numero:");


if (numero !== null) {
    numero = Number(numero);
    if (!isNaN(numero)) {
        if (numero > 10) {
            console.log("El"+numero+"número es mayor que 10.");
        }
        else if (numero < 10) {
            console.log("El"+numero+"número es menor que 10.");
        }
}
}
