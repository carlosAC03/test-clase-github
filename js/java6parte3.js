class Circulo {
    constructor(radio) {
        this.radio = radio;
    }


   
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}




const miCirculo = new Circulo(5);




console.log("El área del círculo es: " + miCirculo.calcularArea());