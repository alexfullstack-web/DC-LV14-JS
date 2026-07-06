use livrariaL14;

/* - **J.K. Rowling**: Nacionalidade Britânica, Data de Nascimento 31 de julho de 1965.
- **George R.R. Martin**: Nacionalidade Americana, Data de Nascimento 20 de setembro de 1948.
- **J.R.R. Tolkien**: Nacionalidade Britânica, Data de Nascimento 3 de janeiro de 1892.
- **Isaac Asimov**: Nacionalidade Americana, Data de Nascimento 2 de janeiro de 1920.
*/

insert into autores (nome, nacionalidade)
values ('J.K. Rowling', 'Britânica'),
( 'George R.R. Martin', 'Americana'),
('J.R.R. Tolkien', 'Britânica'),
('Isaac Asimov', 'Americana');

/*- **Fantasia**
- **Ficção Científica**
- **Mistério**
- **Romance**
*/

insert into categorias (nome)
values ('Fantasia'),
('Ficção Científica'),
('Mistério'),
('Romance');

/* - Harry Potter e a Pedra Filosofal, 1997, 39.90, 1, 110.
- Game of Thrones, 1996, 49.90, 2 ,  110.
- O Senhor dos Anéis, 1954, 59.90, 3, 110.
- Eu, Robô, 1950, 29.90, 4 ,111.
- O Hobbit**1937, 34.90, 3, 110.  */


INSERT INTO livros (titulo, ano_publicacao, autor_id, categoria_id)
VALUES
('Harry Potter e a Pedra Filosofal', 1997, 1, 1),
('Game of Thrones', 1996, 2, 1),
('Eu, Robô', 1950, 4, 2),
('O Hobbit', 1937, 3, 1);

