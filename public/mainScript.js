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


    if (!nome || !turma || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Todos os campos devem ser preenchidos corretamente.');
    } else {
        console.log('Dados do aluno:', nome, turma, nota1, nota2, nota3);
        lancarAluno();  // Chama a função que envia os dados
    }
}
