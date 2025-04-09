// juego para adivinar una palabra secreta
// Definimos la palabra secreta y las pistas
const prompt = require("prompt-sync")();
const secretWordOptions = [
  "javascript",
  "python",
  "java",
  "ruby",
  "html",
  "css",
  "typescript",
  "csharp",
  "swift",
  "kotlin",
];

const chosenWord = secretWordOptions[Math.floor(Math.random() * secretWordOptions.length)];

const wordGameStart = () => {
  const secretWord = chosenWord.split("");
  const maxAttempts = 10;
  const guessed = false;
  let userWord = "";
  let attempts = 0;

  while (attempts < maxAttempts && !guessed) {
    const guess = prompt("¿Dame una letra? ");
    if (guess.length !== 1) {
      console.log("Por favor, introduce solo una letra.");
    }
    if (secretWord.includes(guess)) {
      console.log("Ya has adivinado esa letra. Intenta con otra.");
      secretWord.forEach((letter) => {
        if (letter === guess) {
          userWord += letter;
        } else {
          userWord += "_";
        }
      });
      console.log(`Palabra actual: ${userWord}`);
    }

    if (userWord === secretWord.join("")) {
      guessed = true;
      console.log("¡Felicidades! Has adivinado la palabra secreta.");
    } else {
      attempts++;
      console.log(`Intentos restantes: ${maxAttempts - attempts}`);
    }
    if (attempts === maxAttempts) {
      console.log(`Lo siento, has agotado tus intentos. La palabra secreta era "${secretWord}".`);
    }
  }
  if (!guessed) {
    console.log(`Lo siento, has agotado tus intentos. La palabra secreta era "${secretWord}".`);
  }
  // Mostrar la palabra secreta al final del juego
  console.log(`La palabra secreta era "${secretWord}".`);
  // Mostrar el número de intentos realizados
  console.log(`Número de intentos realizados: ${attempts}`);
}

wordGameStart();
