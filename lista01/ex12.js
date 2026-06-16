function calcular(a, b, operacao) {
    return operacao(a, b);
}

const somar = (x, y) => x + y;
const subtrair = (x, y) => x - y;
const multiplicar = (x, y) => x * y;

// Execução passando as funções como argumentos comuns
console.log("Soma: ", calcular(5, 3, somar));             // Saída: 8
console.log("Subtração: ", calcular(10, 4, subtrair));     // Saída: 6
console.log("Multiplicação: ", calcular(3, 3, multiplicar)); // Saída: 9
