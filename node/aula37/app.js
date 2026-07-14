const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const banco = JSON.parse(fs.readFileSync("./bancoJson.json", "utf-8"));

app.get("/", (req, res) => {
  res.json({
    status: 200,
    mensagem: "Olá mundo",
    versao: "1.0.0",
    autor: "Alex Sousa",
    objetivo: "Lista frutas",
  });
});

app.get("/frutas/legumes", (req, res) => {
  res.json({
    status: 200,
    quantidade: banco.frutas.length + banco.legumes.length,
    frutas: banco.frutas,
    legumes: banco.legumes,
  });
});

app.get("/frutas", (req, res) => {
  if (!banco.frutas || banco.frutas.length === 0) {
    return res.status(404).json({
      status: 404,
      mensagem: "Nenhuma fruta encontrada",
    });
  }

  res.json({
    status: 200,
    quantidade: banco.frutas.length,
    dados: banco.frutas,
  });
});

app.get("/legumes", (req, res) => {
  if (!banco.legumes || banco.legumes.length === 0) {
    return res.status(404).json({
      status: 404,
      mensagem: "Nenhum legume encontrado",
    });
  }

  res.json({
    status: 200,
    quantidade: banco.legumes.length,
    dados: banco.legumes,
  });
});

app.get("/frutas/:id", (req, res)=>{
  const{id} = req.params
  const dados = banco.frutas.find(fruta => fruta.id == id)

  if(!dados){
    return res.status(404).json({
      status: 404,
      mensagem: "Fruta nao encontrada"
    })
  }
  res.status(200).json({
    status: 200,
    response: dados
  })
})

app.post("/frutas", (req, res) => {
  const dados = req.body;

  if (!dados.nome || !dados.preco) {
    return res.status(400).json({
      status: 400,
      mensagem: "Campos nome e preco são obrigatórios",
    });
  }

  dados.id = banco.frutas.length + 1;

  banco.frutas.push(dados);

  fs.writeFileSync(
    "./bancoJson.json",
    JSON.stringify(banco, null, 2)
  );

  res.status(201).json({
    status: 201,
    mensagem: "Fruta criada com sucesso",
    dados,
  });
});

app.post("/legumes", (req, res) => {
  const dados = req.body;

  if (!dados.nome || !dados.preco) {
    return res.status(400).json({
      status: 400,
      mensagem: "Campos nome e preco são obrigatórios",
    });
  }

  dados.id = banco.legumes.length + 1;

  banco.legumes.push(dados);

  fs.writeFileSync(
    "./bancoJson.json",
    JSON.stringify(banco, null, 2)
  );

  res.status(201).json({
    status: 201,
    mensagem: "Legume criada com sucesso",
    dados,
  });
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
  console.log("http://localhost:4000");
});

// teste app.listen

