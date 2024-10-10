function ordenar(){
const numeros = [5,2,8,1,0,9];
let menor;

for(i = 0; i < 5; i++){
    for (let i = 0; i < numeros.length - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < numeros.length; j++) {
          if (numeros[j] < numeros[menorIndex]) {
            menorIndex = j;
          }
        }
    
i
        if (menorIndex !== i) {
          let temp = numeros[i];
          numeros[i] = numeros[menorIndex];
          numeros[menorIndex] = temp;
        }
      }
    
      console.log(numeros);
    }
}