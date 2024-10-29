document.addEventListener("DOMContentLoaded", () => {
    const cartas = document.querySelectorAll(".carta");
    const botonReiniciar = document.getElementById("reiniciar-btn");
    let cartaVolteada = false;
    let primeraCarta, segundaCarta;
    let bloqueado = false;

    
    function voltearCarta() {
        if (bloqueado || this === primeraCarta) return;

        this.textContent = this.dataset.fruta;

        if (!cartaVolteada) {
            
            cartaVolteada = true;
            primeraCarta = this;
        } else {
            
            cartaVolteada = false;
            segundaCarta = this;
            verificarPareja();
        }
    }


    function verificarPareja() {
        const esPareja = primeraCarta.dataset.fruta === segundaCarta.dataset.fruta;
        esPareja ? bloquearCartas() : desvoltearCartas();
    }

    function bloquearCartas() {
        primeraCarta.removeEventListener("click", voltearCarta);
        segundaCarta.removeEventListener("click", voltearCarta);

        primeraCarta = null;
        segundaCarta = null;

        if ([...cartas].every(carta => carta.textContent !== "❓")) {
            setTimeout(() => alert("¡GANASTE ;)!"), 500);
        }
    }


    function desvoltearCartas() {
        bloqueado = true;
        setTimeout(() => {
            primeraCarta.textContent = "❓";
            segundaCarta.textContent = "❓";

            bloqueado = false;
            primeraCarta = null;
            segundaCarta = null;
        }, 1000);
    }

    function barajearCartas() {
        cartas.forEach(carta => {
            const posAleatoria = Math.floor(Math.random() * cartas.length);
            carta.style.order = posAleatoria;
            carta.textContent = "❓";
            carta.addEventListener("click", voltearCarta);
        });

        cartaVolteada = false;
        primeraCarta = null;
        segundaCarta = null;
        bloqueado = false;
    }

    cartas.forEach(carta => carta.addEventListener("click", voltearCarta));

    botonReiniciar.addEventListener("click", barajearCartas);

    barajearCartas();
});
