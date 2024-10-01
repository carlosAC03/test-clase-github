var readlineSync = require('readline-sync');

let frase = readlineSync.question("Introduce una frase: ");

const array = [frase.split(" ")];

for(i=0;i>=array.length;i++)
{
    console.log(array[i]);
   
}



