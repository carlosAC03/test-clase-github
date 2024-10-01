var readlineSync = require('readline-sync');


let calificacion = readlineSync.question("Introduce tu calificacion:");


calificacion = Number(calificacion);


if (calificacion >= 60) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
