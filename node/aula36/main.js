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

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile(
      path.join(__dirname, "bancoJson.json"),
      "utf-8",
      (erro, dados) => {
        if (erro) {
          res.writeHead(500, { "Content-Type": "application/json" });

          return res.end(
            JSON.stringify({
              status: 500,
              mensagem: "Erro ao ler o arquivo JSON.",
            }),
          );
        }

        const banco = JSON.parse(dados);

        const resposta = {
          status: 200,
          api: "./bancoJson.json",
          frutas: banco.frutas.length,
          verduras: banco.legumes.length,
          dados: banco,
        };

        res.writeHead(200, {
          "Content-Type": "application/json",
        });

        res.end(JSON.stringify(resposta));
      },
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: 404,
        mensagem: "Rota não encontrada.",
      }),
    );
  }
});

server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
  console.log("http://localhost:3001");
});
