// Função Mínimo (Tradicional e Arrow)

// Versão Tradicional
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Versão Arrow Function
const minArrow = (a, b) => a < b ? a : b;

console.log(min(10, 5));
console.log(minArrow(3, 8));
