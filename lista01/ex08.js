// Tabuleiro de xadrez dinâmico
const readline = require('readline-sync');
const tamanho = parseInt(readline.question("Digite o tamanho do tabuleiro: ")) || 8;

let tabuleiro = "";

for (let l = 0; l < tamanho; l++) {
    for (let c = 0; c < tamanho; c++) {
        // Se a soma da linha e da coluna for par, coloca espaço, senão coloca #
        if ((l + c) % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        }
    }
    tabuleiro += "\n";
}

console.log(tabuleiro);
