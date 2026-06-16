const readline = require('readline-sync');

function podeVotar(idade) {
    return idade >= 16;
}

const idadeUsuario = parseInt(readline.question("Digite a sua idade: "));

if (podeVotar(idadeUsuario)) {
    console.log("Você já tem idade para votar!");
} else {
    console.log("Você ainda não pode votar.");
}
