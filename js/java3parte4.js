function fibonacci(numero)
{
    var i=2;
    var numeros=[0,1];
    do{
        numeros[i] = numeros[i - 2] + numeros[i - 1];
        i++;
    }while(i < numero)
    return numeros;
}
console.log(fibonacci(11));