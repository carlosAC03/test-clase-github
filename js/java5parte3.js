
var readlineSync = require('readline-sync');


let num = readlineSync.question("Introduce un numero:");
let esPrimo = true;


if (num <= 1) {
    esPrimo = false;
} else {
 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
}


if (esPrimo) {
    console.log(num + " es un número primo.");
} else {
    console.log(num + " no es un número primo.");
}
