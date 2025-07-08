// build a simple math function project

// math operators
console.table([
  { operator: "+", description: "add" },
  { operator: "-", description: "subtraction" },
  { operator: "*", description: "multiplication" },
  { operator: "/", description: "division" },
]);

console.log("sum-conflict", 1 + 1);
console.log("subtraction", 1 - 1);
console.log("multiplication", 1 * 1);
console.log("division", 1 / 1);

// crear un programa que pida al usario una entrada por con∏sola e imprima el resultado
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// solicitar al usuario dos numeros e imprimir la suma
readline.question("Enter a number: ", (number1) => {
  readline.question("Enter another number: ", (number2) => {
    console.log("The sum is: ", parseInt(number1) + parseInt(number2));
    readline.close();
  });
});


const app_key = "1234567890";
console.log(app_key)
