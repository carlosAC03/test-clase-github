
const secretWords = ['Pikachu', 'Charizard', 'Bulbasaur', 'Agumon', 'Gabumon', 'Squirtle', 'Greymon', 'Tentomon'];
const secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];

let revealedWord = '_ '.repeat(secretWord.length).trim();
let attemptsLeft = 6;
const guessedLetters = [];

const wordDisplay = document.getElementById('wordDisplay');
const attemptsDisplay = document.getElementById('attempts');
const messageDisplay = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');

const parts = ['cabeza', 'cuerpo', 'brazo_izquierdo', 'brazo_derecho', 'pierna_izquierda', 'pierna_derecha'];

wordDisplay.textContent = revealedWord;
attemptsDisplay.textContent = attemptsLeft;

guessButton.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        messageDisplay.textContent = 'Por favor, introduce una letra válida.';
        return;
    }

    if (guessedLetters.includes(guess)) {
        messageDisplay.textContent = `Ya escribiste la letra "${guess}".`;
        return;
    }

    guessedLetters.push(guess);

    if (secretWord.includes(guess)) {
        revealedWord = secretWord.split('').map((letter, index) => 
            guessedLetters.includes(letter) ? letter : '_'
        ).join(' ');
        wordDisplay.textContent = revealedWord;

        if (!revealedWord.includes('_')) {
            messageDisplay.textContent = '¡Felicidades! Has ganado.';
            guessButton.disabled = true;
        } else {
            messageDisplay.textContent = `¡Bien! La letra "${guess}" está en la palabra.`;
        }
    } else {
        attemptsLeft--;
        attemptsDisplay.textContent = attemptsLeft;

        document.getElementById(parts[6 - attemptsLeft - 1]).style.display = 'block';

        if (attemptsLeft === 0) {
            messageDisplay.textContent = `¡Has perdido! La palabra era "${secretWord}".`;
            guessButton.disabled = true;
        } else {
            messageDisplay.textContent = `Lo siento, la letra "${guess}" no está en la palabra.`;
        }
    }
});