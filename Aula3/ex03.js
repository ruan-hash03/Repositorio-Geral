// ex03.js - Busca e Filtro

const produtos = [
    { nome: "Smartphone", categoria: "Eletrônicos", preco: 2500 },
    { nome: "Geladeira", categoria: "Eletrodomésticos", preco: 4200 },
    { nome: "Fone de Ouvido", categoria: "Eletrônicos", preco: 199 },
    { nome: "Livro de JavaScript", categoria: "Livros", preco: 89 },
    { nome: "Cadeira Gamer", categoria: "Móveis", preco: 1200 }
];

// 1. Busca por nome (retorna o primeiro que encontrar)
function buscarPorNome(lista, termo) {
    return lista.find(p => p.nome.toLowerCase().includes(termo.toLowerCase()));
}

// 2. Filtro por preço máximo
function filtrarPorPrecoMaximo(lista, precoMax) {
    return lista.filter(p => p.preco <= precoMax);
}

// Testes
console.log("Busca por 'Fone':", buscarPorNome(produtos, "Fone"));
console.log("\nProdutos até R$ 1000:", filtrarPorPrecoMaximo(produtos, 1000));