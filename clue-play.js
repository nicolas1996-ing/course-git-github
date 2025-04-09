/*
Diseñaremos un juego de adivinanzas en el que el usuario
tenga que adivinar un palabra secreta basado en pistas progresivas y
estará desarrollado en JavaScript.
*/
// Definimos la palabra secreta y las pistas
const prompt = require('prompt-sync')();
const secretWord = "javascript";
const clues = [
  "Es un lenguaje de programación.",
  "Se utiliza principalmente para el desarrollo web.",
  "Es un lenguaje interpretado y no compilado.",
  "Es conocido por su flexibilidad y versatilidad.",
];
const maxAttempts = clues.length;
let attempts = 0;
let guessed = false;

// Función para mostrar la pista correspondiente al intento actual
function showClue(attempt) {
  if (attempt < clues.length) {
    console.log(`Pista ${attempt + 1}: ${clues[attempt]}`);
  } else {
    console.log("No hay más pistas disponibles.");
  }
}

// Función para verificar la respuesta del usuario
function checkGuess(guess) {
  if (guess.toLowerCase() === secretWord) {
    guessed = true;
    console.log("¡Felicidades! Has adivinado la palabra secreta.");
  } else {
    attempts++;
    console.log("Intenta de nuevo.");
  }
}

// Función principal del juego
function playGame() {
  console.log("Bienvenido al juego de adivinanzas.");
  console.log(`Tienes ${maxAttempts} intentos para adivinar la palabra secreta.`);
  while (attempts < maxAttempts && !guessed) {
    showClue(attempts);
    const guess = prompt("¿Cuál es tu respuesta? ");
    checkGuess(guess);
  }
  if (!guessed) {
    console.log(`Lo siento, has agotado tus intentos. La palabra secreta era "${secretWord}".`);
  }
}
// Iniciar el juego
playGame();





// Nota: En un entorno de Node.js, puedes usar el paquete 'prompt-sync' para
// manejar la entrada del usuario de manera sincrónica.
// Para instalarlo, ejecuta: npm install prompt-sync
// Luego, puedes requerirlo al inicio del archivo:
// const prompt = require('prompt-sync')();
//
// Y reemplazar la línea de prompt por:
// const guess = prompt("¿Cuál es tu respuesta? ");
//
// Recuerda que este código es un ejemplo básico y puede ser mejorado
// con más características, como manejo de errores, validaciones, etc.
// También puedes agregar más pistas o cambiar la palabra secreta para
// hacer el juego más interesante. ¡Diviértete programando!
