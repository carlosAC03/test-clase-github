var readlineSync = require('readline-sync');
function calcularEdad(fechaNacimiento) {

    const fechaActual = new Date();

    const fechaNac = new Date(fechaNacimiento);

    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNac.getMonth();
    const diaNacimiento = fechaNac.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    return edad;
}


const fechaNacimientoUsuario = readlineSync.question("Introduce tu fecha de nacimiento:");

console.log("Tu edad es: " + calcularEdad(fechaNacimientoUsuario));