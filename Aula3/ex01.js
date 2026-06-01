const aluno = {
    nome: "Mariana Silva",
    matricula: "20260142",
    notas: [8.5, 7.0, 9.2],
    curso: "Análise e Desenvolvimento de Sistemas"
};

function processarFicha(alunoObjeto) {
 
    const soma = alunoObjeto.notas.reduce((acc, nota) => acc + nota, 0);
    const media = (soma / alunoObjeto.notas.length).toFixed(1);
    

    const situacao = media >= 7.0 ? "Aprovado(a)" : "Reprovado(a)";

    console.log(`=== FICHA DO ALUNO ===`);
    console.log(`Nome: ${alunoObjeto.nome}`);
    console.log(`Matrícula: ${alunoObjeto.matricula}`);
    console.log(`Curso: ${alunoObjeto.curso}`);
    console.log(`Notas: ${alunoObjeto.notas.join(" | ")}`);
    console.log(`Média Final: ${media}`);
    console.log(`Situação: ${situacao}`);
    console.log(`======================`);
}


processarFicha(aluno);
