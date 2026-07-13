const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mensagem: "Olá mundo",
    status: 200,
    api: "API da atividade 1 da aula 37",
    autor: "Alex Sousa",
  });
});

app.get("/frutas", (req, res) => {
  const banco = JSON.parse(fs.readFileSync("./bancoJson.json", "utf-8"));
  res.json({ status: 200, frutas: banco.frutas });
  if (!banco.frutas) {
    res.status(404).json({ mensagem: "Nenhuma fruta encontrada", status: 404 });
  }
});

app.listen(4000, () =>
  console.log("Servidor rodando na porta 3001 http://localhost:4000"),
);
