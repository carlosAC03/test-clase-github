var readlineSync = require('readline-sync');
let resultado = 0;
let numero1 = readlineSync.question("Introduce el primer numero");
let numero2 = readlineSync.question("Introduce el segundo numero");
let operador = readlineSync.question("Elige: +, -, *, /");

if (operador == '+')
{
    resultado = Number(numero1) + Number(numero2);
}
else if (operador == '-')
    {
        resultado = Number(numero1) - Number(numero2);
    }
else if (operador == '*')
    {
        resultado = Number(numero1) * Number(numero2);
    }
else if (operador == '/')
    {
    resultado = Number(numero1) / Number(numero2);
    }
    console.log(resultado);