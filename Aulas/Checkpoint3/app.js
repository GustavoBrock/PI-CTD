/* Passo 3
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar 
um aluno a mais na propriedade lista de estudantes do objeto curso. */


/* Passo 4
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
aluno a mais na propriedade lista de estudantes do objeto curso.
*/

// Require do objeto aluno + objeto curso com adição de novo participante

let alunos = require('./aluno')


let curso = {
    nomeDoCurso: 'CTD-TN2',
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaEstudantes: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.ConstruirAluno('Jesus Cristo', 3,[8,10,8], this.calcularMedia,this.faltas)
            this.listaEstudantes.push(novoAluno)
    }, 
    aprovacaoAluno: function(aluno){
        if(alunos.listaDeAlunos[aluno].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[aluno].quatidadeDeFaltas < curso.faltasMaximas){
            console.log(true);
        } else if (alunos.listaDeAlunos[aluno].calcularMedia() >= (curso.notaDeAprovacao * 0.1) && alunos.listaDeAlunos[aluno].quatidadeDeFaltas == curso.faltasMaximas){
            console.log('verdadeiro');
        } else { 
            console.log(false);
        }
        
    }
}
curso.addAluno();

console.log(alunos.listaDeAlunos[5])
console.log(alunos.listaDeAlunos[5].calcularMedia())
console.log(alunos.listaDeAlunos[5].quatidadeDeFaltas)
curso.aprovacaoAluno(5)