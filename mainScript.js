const minhasTurmas = document.getElementById('botaoAdd');



function adicionarAluno(){
    
    let nome = prompt('Digite o nome do(a) aluno(a): ');
    let turma = prompt('Digite a turma do(a) aluno(a): ');
    let ano = prompt('Digite o ano do(a) aluno(a): ')
    let nota1 = prompt('Digite a nota do 1º trimestre: ');
    let nota2 = prompt('Digite a nota do 2º trimestre: ');
    let nota3 = prompt('Digite a nota do 3º trimestre: ');

    if(!nome || !ano || !turma || isNaN(ano)|| isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert('Todos os campos devem ser preenchidos corretamente.');
    }else{
      
        let novoAluno = {
            nomeAluno: nome,
            turmaAluno: turma,
            anoAluno: ano,
            n1: nota1,
            n2: nota2,
            n3: nota3
        }
        console.log(novoAluno)
    }
    

}