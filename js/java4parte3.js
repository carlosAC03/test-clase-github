var readlineSync = require('readline-sync');


let num1 = readlineSync.question("Introduce el primer numero:");
let num2 = readlineSync.question("Introduce el segundo numero:");
let num3 = readlineSync.question("Introduce el tercer numero:");


let mayor = 0;


if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}


console.log("El número mayor es: " + mayor);