const minhasTurmas = document.getElementById('botaoAdd');

const lancarAluno = async () => {
    // Envio dos dados ao backend
    await fetch("/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, turma, nota1, nota2, nota3 })
    }).then(response => response.json())
      .then(data => console.log('Aluno adicionado:', data))
      .catch(error => console.error('Erro ao adicionar aluno:', error));
}

function adicionarAluno() {

    const nome = document.getElementById('nome').value;
    const turma = document.getElementById('turma').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;

    if (!nome || !turma || !nota1|| !nota2 || !nota3) {
        alert('Todos os campos devem ser preenchidos corretamente.');
    } else {
        console.log('Dados do aluno:', nome, turma, nota1, nota2, nota3);
        lancarAluno();  // Chama a função que envia os dados
    }
}
