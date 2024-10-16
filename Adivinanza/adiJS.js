const numerosecreto = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const entrada_adivinanza = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const mensage = document.getElementById("message");
const mostrarIntento = document.getElementById("attempts");

checkButton.addEventListener("click",checkadivinanza);

function checkadivinanza() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        displayMessage("Por favor, ingresa un número válido entre 1 y 100.", "invalid");
        return;
    }

    if (userGuess === numerosecreto) {
        displayMessage(`¡Correcto! El número secreto es ${numerosecreto}.`);
        checkButton.disabled = true;
    } else if (userGuess > numerosecreto) {
        displayMessage("El número es demasiado alto.");
    } else if (userGuess < numerosecreto) {
        displayMessage("El número es demasiado bajo.");
    }

    mostrarIntento.textContent = `Número de intentos: ${attempts}`;
    entrada_adivinanza.value = "";
    entrada_adivinanza.focus();
}

function displayMessage(text, type) {
    mensage.textContent = text;
    mensage.className = `message ${type}`;
}