// ex04.js - Transformação com map

const produtosOriginais = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça Jeans", preco: 120 },
    { nome: "Tênis Esportivo", preco: 250 }
];

// Aplica um aumento de 10% e adiciona uma propriedade de formatação
const produtosComReajuste = produtosOriginais.map(produto => {
    const novoPreco = produto.preco * 1.10; // +10%
    return {
        ...produto, // Copia as propriedades anteriores de forma segura
        precoAntigo: produto.preco,
        preco: Number(novoPreco.toFixed(2)),
        precoFormatado: `R$ ${novoPreco.toFixed(2)}`
    };
});

console.log("Originais (Intactos):", produtosOriginais);
console.log("\nNovos Produtos (Mapeados):", produtosComReajuste);