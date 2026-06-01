//crie uma função para verificar se uma pessoa é maior de idade. Essa função precisará receber um objeto 
// como parâmetro. As propriedades nome e idade são OBRIGATÓRIAS. A função deve retornar uma mensagem 
// indicando se a pessoa é maior de idade ou não, utilizando o nome da pessoa na mensagem. Caso o 
// objeto recebido não tenha as propriedades necessárias, a função deve mostrar uma uma mensagem 
// de erro no console e undefined como retorno.

//DICAS: use Object.keys() para verificar as chaves do objeto, depois use condicional if para verificar
// a pessoa é maior de idade ou não, e use template literals para criar a mensagem de retorno. 
// A verificação das presença das chaves pode ser feita usando o método includes() 
// do array retornado por Object.keys()

function verificarMaiorDeIdade(pessoa1) {
    if (Object.keys(pessoa1).includes('nome') && Object.keys(pessoa1).includes('idade')) {
        let {nome, idade} = pessoa;
        if (idade >= 18) {
            return `${nome} é maior de idade.`; 
        } else {
            return `${nome} é menor de idade.`;
        }
    } else {
        console.log("Objeto incompleto");
        return undefined;
    }
}

let pessoa1 = {
    nome: "Maria",
    idade: 20
};

let pessoa2 = {
    nome: "João",
    idade: 15
};

console.log(verificarMaiorDeIdade(pessoa1)); // "Maria é maior de idade."
console.log(verificarMaiorDeIdade(pessoa2)); // "João é menor de idade."
console.log(verificarMaiorDeIdade({})); // "Objeto incompleto"