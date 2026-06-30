create database if not exists livrariaL14;

use livrariaL14;

/*Tabela autores** 
id autor -  inteiro
nome - textual com até 100 caracteres
nacionalidade - textual com até 50 caracteres*/
create table if not exists autores (
	id_autor int auto_increment primary key , 
    nome varchar(100) not null,
    nacionalidade varchar(50) not null
);

/**Tabela categorias**
id categoria  -  inteiro
nome - textual com até 50
*/ 
create table if not exists categorias (
	id_categoria int auto_increment primary key,
    nome varchar(50) not null
);

create table if not exists livros  (
	id int auto_increment primary key,
    titulo varchar(100) not null,
    ano_publicacao int not null,
    autor_id int not null,
    categoria_id int not null,
    foreign key (autor_id) references autores(id_autor),
    foreign key (categoria_id) references categorias(id_categoria)
    );


