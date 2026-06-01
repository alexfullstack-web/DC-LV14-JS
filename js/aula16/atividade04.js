//você tem uma demanda para criar 3 funções: 
//1 função de cálculo de média : essa função recebe um objeto e para o atrbuto notas ( que é um array) calcula a média e retorna o valor da média 
//  calcularMedia(aluno) 

//2 função de cálculo de faltas : essa função recebe um objeto e para o atributo faltas (que é um array) calcula a quantidade de faltas e retorna o valor da quantidade de faltas
// calcularFaltas(aluno)

// a terceira função é a função que irá receber um objeto aluno, irá passar esse objeto como parâmetro para o segundo parametro que é a função de callback. Essa função de callback irá mostrar todos os dados do aluno recebido como parâmetro mais o valor retornado pela função de callback passada como segundo parâmetro.
// mostrarDados(aluno, callback)

let alunos = [
    {
        nome: 'Cleitinho',
        notas: [10, 9, 8],
        faltas: [1, 0, 2]
    },
    {
        nome: 'Sandoval',
        notas: [7, 6, 5],
        faltas: [0, 1, 0]
    }
]


function calcularMedia(aluno) {
    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    return soma / aluno.notas.length;
}


function calcularFaltas(aluno) {
    let totalFaltas = 0;

    for (let i = 0; i < aluno.faltas.length; i++) {
        totalFaltas += aluno.faltas[i];
    }

    return totalFaltas;
}


function mostrarDados(aluno, callback) {
    console.log("Nome:", aluno.nome);
    console.log("Notas:", aluno.notas);
    console.log("Faltas:", aluno.faltas);

    console.log("Resultado do callback:", callback(aluno));
    console.log("-------------------------");
}


mostrarDados(alunos[0], calcularMedia);
mostrarDados(alunos[0], calcularFaltas);

mostrarDados(alunos[1], calcularMedia);
mostrarDados(alunos[1], calcularFaltas);