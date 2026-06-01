// ex02.js - Lista de Produtos

const estoque = [
    { id: 1, nome: "Notebook", preco: 4500.00, qtd: 5 },
    { id: 2, nome: "Mouse Sem Fio", preco: 120.00, qtd: 15 },
    { id: 3, nome: "Monitor 24'", preco: 980.00, qtd: 8 },
    { id: 4, nome: "Teclado Mecânico", preco: 350.00, qtd: 10 }
];

function exibirEstoque(produtos) {
    console.log("--- LISTA DE PRODUTOS ---");
    let valorTotalGeral = 0;

    produtos.forEach(produto => {
        const subtotal = produto.preco * produto.qtd;
        valorTotalGeral += subtotal;
        
        console.log(`${produto.nome} -> R$ ${produto.preco.toFixed(2)} | Qtd: ${produto.qtd} | Subtotal: R$ ${subtotal.toFixed(2)}`);
    });

    console.log("-------------------------");
    console.log(`Valor Total do Estoque: R$ ${valorTotalGeral.toFixed(2)}`);
}

// Execução
exibirEstoque(estoque);