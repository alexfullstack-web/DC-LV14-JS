create database if not exists projetoL14;

use projetoL14;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    username VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL
);

create table if not exists projetos(
	id int ,
	nome varchar(45) not null,
    descrição varchar(45) not null,
    date varchar (45) not null
);

CREATE TABLE users_projetos (
    users_id INT,
    projetos_id INT,
    PRIMARY KEY (users_id, projetos_id),
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (projetos_id) REFERENCES projetos(id)
);

alter  table autores add column nacionalidade date not null;

alter table livros auto_increment = 2000;

alter table categorias auto_increment = 110;

alter table projetos modify column date date not null;

alter table users modify column password varchar(12) default '123mudar';

insert into autores (nome, nacionalidade)
values(J.K.Rowling, George R.R. Martin, J.R.R. Tolkien, Isaac Asimov),
(31 de julho de 1965, 20 de setembro de 1948, 3 de janeiro de 1892 , 2 de janeiro de 1920)    
