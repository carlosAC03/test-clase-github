var readlineSync = require('readline-sync');

var numero = readlineSync.question(' Escribe un numero ');

for(i=0; i<=10; i++){
    console.log(+numero+" x " + i +" = " + numero * i );
}