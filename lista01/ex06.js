// Contagem regressiva (Requer: npm install readline-sync)
const readline = require('readline-sync');

const numero = number(input.question("Digite um numero para a contagem regressiva: "));

for (let i = numero; i >= 1; i--) {
    console.log(i);
}
console.log("Fim!");
