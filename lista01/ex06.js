// Contagem regressiva (Requer: npm install readline-sync)
const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um numero para a contagem regressiva: "));

for (let i = numero; i >= 1; i--) {
    console.log(i);
}
console.log("Fim!");
