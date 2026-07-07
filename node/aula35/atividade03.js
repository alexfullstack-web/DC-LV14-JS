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

function lerArquivoJson(caminhoArquivo) {
  const dados = fs.readFileSync(caminhoArquivo, "utf-8");
  return JSON.parse(dados);
}

function escreverArquivoJson(caminhoArquivo, objeto) {
  const dados = JSON.stringify(objeto, null, 2);
  fs.writeFileSync(caminhoArquivo, dados, "utf-8");
}

function buscarObjeto(caminhoArquivo, colecao, id) {
  const dados = lerArquivoJson(caminhoArquivo);
  const objeto = dados[colecao].find((obj) => obj.id === id);
  if (objeto) {
    return objeto;
  } else {
    return "Objeto nao encontrado";
  }
}   

module.exports = {
  lerArquivoJson,
  escreverArquivoJson,
  buscarObjeto,
};
