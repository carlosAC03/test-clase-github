var readlineSync = require('readline-sync');

function generarContrasena(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contrasena = '';

    function maxRandom(max) {
        return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < longitud; i++) {
        const randomIndex = maxRandom(caracteres.length);
        contrasena += caracteres[randomIndex];
    }

    return contrasena;
}

const longitud = readlineSync.question("Introduce la longitud de la contraseña:");


    const contrasenaGenerada = generarContrasena(longitud);
    console.log("Tu contraseña generada es:", contrasenaGenerada);
   
