//-------------------- Atividade 1 --------------------//

/* Com o módulo http e fs crie um servidor http que receba 
uma requisição GET e retorne o conteúdo de um arquivo JSON. 
A configuração do objeto de resposta deve conter o cabeçalho 
Content-Type com o valor application/json, além do status 200.*/
//O formato da resposta deve ser:

/*const resposta = {
  status: 200,
  api: `API da atividade 1 da aula 36`,
  frutas: "quantidade De Frutas DoBanco",
  verduras: "quantidade De Verduras Do Banco",
  dados: {
    frutas: [],
    verduras: [],
  },
};*/

/* o servidor deve ser executado na porta 3001 e durante a 
 execução do servidor deve ser impresso no console o seguinte texto: 
 "Servidor rodando na porta 3001"*/

//=================================================================================

//---------------Atividade 02 -------------------------//

/*Modifique a rota existente para que a resposta configurada seja devolvida 
apenas quando a rota raiz for solicitada. A rota raiz deve ser acessada na 
url http://localhost:3001*/

/*Crie uma rota para frutas, onde ao ser acessada deve retornado um objeto
com os dados de frutas do banco de dados. A rota deve ser acessada na url 
http://localhost:3001/frutas*/

/*Crie uma rota para verduras, onde ao ser acessada deve retornado um objeto
com os dados de verduras do banco de dados. A rota deve ser acessada na url
http://localhost:3001/verduras*/

/*Crie uma rota para tratamento de erro, para quando uma rota nao for encontrada
onde ao ser acessada deve retornar um objeto com o status 404 e a mensagem "Rota 
nao encontrada". A rota deve ser acessada na url http://localhost:3001/qualquercoisa*/

//------------------- Atividade 03 ---------------------//

//Crie 2 rotas com o método POST : /frutas e /verduras
//Valide se o corpo da requisição contém o campo nome e o campo preço.
//Antes de adicionar o objeto ao banco de dados adicione um id unico para cada objeto.
/*se o corpo da requisição nao contem os campos nome e preco, retorne um objeto com 
o status 400 e a mensagem "Campos nome e preco obrigatorios". A rota deve ser acessada 
na url http://localhost:3001/frutas*/

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const banco = JSON.parse(fs.readFileSync("./bancoJson.json", "utf-8"));
  function escreverBanco(banco) {
    fs.writeFileSync("./bancoJson.json", JSON.stringify(banco, null, 2));
  }
  const resposta = {
    status: 200,
    api: `API da atividade 1 da aula 36`,
  };
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    resposta.dados = {
      frutas: banco.frutas,
      verduras: banco.legumes,
    };
    resposta.qtdFrutas = banco.frutas.length;
    resposta.qtdVerduras = banco.legumes.length;
  } else if (req.method === "GET" && req.url === "/frutas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    resposta.dados = banco.frutas;
  } else if (req.method === "POST" && req.url === "/frutas") {
    req.on("data", (data) => {
      const objeto = JSON.parse(data);
      if (!objeto.nome || !objeto.preco) {
        req.writeHead(400, { "Content-Type": "application/json" });
        resposta.status = 400;
        resposta.mensagem = "Campos nome e preco obrigatorios";
        resposta.erro = 400;
        req.write(JSON.stringify(resposta));
        req.end();
      } else {
        objeto.id = banco.frutas.length + 1;
        banco.frutas.push(objeto);
        escreverBanco(banco);
        req.writeHead(201, { "Content-Type": "application/json" });
        resposta.status = 201;
        resposta.mensagem = "Objeto criado com sucesso";
        resposta.erro = 201;
        req.write(JSON.stringify(resposta));
        req.end();
      }
    });
  } else if (req.method === "GET" && req.url === "/verduras") {
    res.writeHead(200, { "Content-Type": "application/json" });
    resposta.dados = banco.legumes;
  } else if (req.method === "POST" && req.url === "/verduras") {
    req.on("data", (data) => {
      const objeto = JSON.parse(data);
      if (!objeto.nome || !objeto.preco) {
        req.writeHead(400, { "Content-Type": "application/json" });
        resposta.status = 400;
        resposta.mensagem = "Campos nome e preco obrigatorios";
        resposta.erro = 400;
      } else {
        objeto.id = banco.legumes.length + 1;
        banco.legumes.push(objeto);
        escreverBanco(banco);
        req.writeHead(201, { "Content-Type": "application/json" });
        resposta.status = 201;
        resposta.mensagem = "Objeto criado com sucesso";
        resposta.erro = 201;
        req.write(JSON.stringify(resposta));
        req.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    resposta.status = 404;
    resposta.mensagem = "Rota nao encontrada";
    resposta.erro = 404;
  }

  res.write(JSON.stringify(resposta));
  res.end();
});

server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
  console.log("http://localhost:3001");
});
