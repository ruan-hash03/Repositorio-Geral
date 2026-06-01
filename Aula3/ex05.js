// ex05.js - Mini Cadastro (Desafio)

// "Banco de dados" em memória
const bancoUsuarios = [];

// Função para Cadastrar
function cadastrarUsuario(nome, email, idade) {
    // Validação simples de duplicidade de email
    const emailExiste = bancoUsuarios.some(user => user.email === email);
    if (emailExiste) {
        console.log(`Erro: O email ${email} já está cadastrado.`);
        return;
    }

    const novoUsuario = {
        id: bancoUsuarios.length + 1,
        nome,
        email,
        idade
    };

    bancoUsuarios.push(novoUsuario);
    console.log(`Sucesso: Usuário ${nome} cadastrado com ID ${novoUsuario.id}!`);
}

// Função para Listar
function listarUsuarios() {
    console.log("\n=== USUÁRIOS CADASTRADOS ===");
    if (bancoUsuarios.length === 0) {
        console.log("Nenhum usuário no sistema.");
        return;
    }
    bancoUsuarios.forEach(u => {
        console.log(`ID: ${u.id} | Nome: ${u.nome} | Email: ${u.email} | Idade: ${u.idade}`);
    });
}

// Função para Deletar por ID
function deletarUsuario(id) {
    const indice = bancoUsuarios.findIndex(u => u.id === id);
    
    if (indice === -1) {
        console.log(`Erro: Usuário com ID ${id} não foi encontrado.`);
        return;
    }

    const removido = bancoUsuarios.splice(indice, 1);
    console.log(`Sucesso: Usuário '${removido[0].nome}' removido.`);
}

// --- FLUXO DE TESTE DO DESAFIO ---
cadastrarUsuario("Ana Costa", "ana@email.com", 28);
cadastrarUsuario("Carlos Souza", "carlos@email.com", 34);
cadastrarUsuario("Ana Costa", "ana@email.com", 28); // Tentativa duplicada

listarUsuarios();

deletarUsuario(1); // Remove a Ana

listarUsuarios(); // Lista atualizada apenas com o Carlos