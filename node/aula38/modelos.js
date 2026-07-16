const { DataTypes } = require("sequelize");
const { conexaobanco, conexaobanco2 } = require("./conexaoBanco");

const Autores = conexaobanco2.define(
  "autores",
  {
    id_autor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nacionalidade: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "autores",
    timestamps: false,
  },
);

Autores.create({
  id_autor: 500,
  nome: "J.K. Marley",
  nacionalidade: "Jamaica"
})
  .then(() => console.log("Autor criado com sucesso"))
  .catch((error) => console.error(error));


//Faça as definições dos modelos :

/*Projects
Columns:
id int AI PK 
name varchar(45) 
description varchar(45) 
date date*/

/*users
Columns:
id int AI PK 
nome varchar(45) 
username varchar(45) 
senha varchar(12) 
email varchar(45)*/

/*users_has_projects
Columns:
users_id int PK 
project_id int PK*/

//Importante: criar um outro objeto de conexão ao banco de dados, para trabalhar
// com o segundo banco de dados. Use o banco com as tabelas que existem localmente
// no seu computador, caso os nomes sejam diferentes.

const projetos = conexaobanco.define(
  "projetos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "projetos",
    timestamps: false,
  },
);

const users = conexaobanco.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  },
);

const users_has_projects = conexaobanco.define(
  "users_has_projects",
  {
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    projetos_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "projetos",
        key: "id",
      },
    },
  },
  {
    tableName: "users_has_projects",
    timestamps: false,
  },
);

// conexaoBanco
//   .authenticate()
//   .then(() => {
//     conexaoBanco.sync({alter: true});
//     console.log("Conectado ao banco de dados");
//   })
//   .catch((error) => {
//     console.error("Erro ao conectar ao banco de dados:", error);
//   });

projetos
  .create({
    nome: "",
    descricao: "Projeto 4",
    date: "2023-08-11",
  })
  .then(() => console.log("Projeto criado com sucesso"))
  .catch((error) => console.error(error));

/*users
  .create({
    nome: "User 1",
    username: "User 1",
    password: "User 1",
    email: "User 1",
  })
  .catch((error) => console.error(error));

users_has_projects
  .create({
    users_id: 1,
    projetos_id: 1,
  })
  .catch((error) => console.error(error));*/
