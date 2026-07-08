/*

Atividade 3 - Manipulação de arquivos JSON

Crie um módulo que funcione como gestor de um banco de dados json.

uma função para ler o conteúdo de um arquivo json e retornar o objeto javascript 
correspondente.

uma função para escrever o conteúdo de um objeto javascript em cada uma das coleções 
do arquivo json.

uma função para buscar um objeto dentro de uma coleção do arquivo json. A função 
deve receber como parâmetro o nome da coleção e o id do objeto a ser buscado, retornando
 o objeto correspondente OU uma mensagem de erro caso o objeto não seja encontrado.

*Dica use o método find() para buscar o objeto dentro da coleção.
*/

const fs = require("fs");

// Função para ler o arquivo JSON
function lerBanco() {
    const dados = fs.readFileSync("./banco.json", "utf-8");
    return JSON.parse(dados);
}

//ler coleção
function lerColecao(colecao) {
    const dados = JSON.parse(fs.readFileSync("./banco.json", "utf-8"))
        
    if(dados[colecao]){
        return dados[colecao]
    }
    else{
        return "Coleção nao encontrada"
    }
}


// Função para escrever no arquivo JSON
function escreverBanco(objeto) {
    fs.writeFileSync(
        "./banco.json",
        JSON.stringify(objeto),
        "utf-8"
    );
}

// Função para buscar um objeto por coleção e id
function buscarObjeto(colecao, id) {
    const banco = lerBanco();

    // Verifica se a coleção existe
    if (!banco[colecao]) {
        return "Coleção não encontrada.";
    }

    const objeto = banco[colecao].find(item => item.id === id);

    if (!objeto) {
        return "Objeto não encontrado.";
    }

    return objeto;
}

function adicionarObjetoColecao(colecao, objeto) {
    const banco = lerBanco();
    if(!banco[colecao]){
       console.log("Coleção nao encontrada")
       //se a coleção não existir não se pode adicionar o objeto
    }
    banco[colecao].push(objeto);
    //atualizar o banco inteiro
    escreverBanco(banco);
}

function criarNovaColecao(colecao) {
    const banco = lerBanco();
    banco[colecao] = [];
    escreverBanco(banco);
    console.log(`Coleção ${colecao} criada com sucesso!`);
}

module.exports = {
    lerBanco,
    lerColecao,
    escreverBanco,
    buscarObjeto,
    adicionarObjetoColecao,
    criarNovaColecao
};