
    let cartas = document.querySelectorAll(".carta");
    let botonReiniciar = document.getElementById("reiniciar-btn");
    let cartaSeleccionada = null;
    let cartasEmparejadas = [];
    let bloqueado = false;

    function mezclarCartas() {
        let posicionesAleatorias = Array.from(cartas);
        posicionesAleatorias.sort(() => Math.random() - 0.5);
    
        let contenedorCartas = document.querySelector(".cartas"); 
        contenedorCartas.innerHTML = ""; 
    
        posicionesAleatorias.forEach(carta => {
            carta.textContent = "❓";
            contenedorCartas.appendChild(carta);
        });
    
        cartasEmparejadas = [];
        cartaSeleccionada = null;
        botonReiniciar.style.display = "none";
    }

    function reiniciarTablero() {
        cartas.forEach(carta => {
            carta.textContent = "❓";
        });
        mezclarCartas();
    }

    function verificarVictoria() {
        if (cartasEmparejadas.length === cartas.length) {
            setTimeout(() => {
                alert("¡Has ganado la partida!");
                botonReiniciar.style.display = "block";
            }, 500);
        }
    }

    cartas.forEach(carta => {
        carta.addEventListener("click", () => {
            if (bloqueado || cartasEmparejadas.includes(carta) || carta === cartaSeleccionada) return;

            carta.textContent = carta.getAttribute("data-fruta");

            if (!cartaSeleccionada) {
                cartaSeleccionada = carta;
            } else {
                if (cartaSeleccionada.getAttribute("data-fruta") === carta.getAttribute("data-fruta")) {
                    cartasEmparejadas.push(cartaSeleccionada, carta);
                    cartaSeleccionada = null;
                    verificarVictoria();
                } else {
                    bloqueado = true;
                    setTimeout(() => {
                        carta.textContent = "❓";
                        cartaSeleccionada.textContent = "❓";
                        cartaSeleccionada = null;
                        bloqueado = false;
                    }, 1000);
                }
            }
        });
    });

    botonReiniciar.addEventListener("click", () => {
        reiniciarTablero();
    });

    mezclarCartas();
