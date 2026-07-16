const { Sequelize } = require("sequelize");

const conexaobanco = new Sequelize("projetol14", "root", "alexsousa19@", {
  host: "localhost",
  dialect: "mysql",
});

const conexaobanco2 = new Sequelize("livrarial14", "root", "alexsousa19@", {
  host: "localhost",
  dialect: "mysql",
});

conexaobanco.authenticate().then(() => {
  console.log("Conectado ao banco de dados");
}).catch((error) => {
  console.error("Erro ao conectar ao banco de dados:", error);
});

module.exports = {
    conexaobanco,
    conexaobanco2
};
