function range(inicio, fim) {
    let resultado = [];
    for (let i = inicio; i <= fim; i++) {
        resultado.push(i); // Insere o número atual no final do array
    }
    return resultado;
}

function soma(array) {
    let total = 0;
    for (let num of array) {
        total += num; // Soma cada elemento ao totalizador
    }
    return total;
}

// Teste exigido pelo enunciado
console.log(soma(range(1, 10))); // Deve exibir exatamente 55
