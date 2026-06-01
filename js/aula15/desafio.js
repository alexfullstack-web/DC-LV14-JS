let Livraria = {
  nome: "Livraria do Cleitinho",
  endereco: "Rua do Cleitinho, 123",
  livros: [],
};

let modeloLivro = {
  titulo: "titulo do livro",
  autor: "autor do livro",
  ano: 2020,
  editora: "editora do livro",
  preco: 10,
  estoque: 10,
};

//Atividade 1
// Com base no objeto modeloLivro, crie 3 novos objetos representando livros diferentes e adicione-os ao array de livros da livraria. Use a desestruturação para criar os novos objetos a partir do modeloLivro.
//para adicionar os livros na propriedade livros da livraria, poderá usar os métodos de arrays.

let livro1 = { ...modeloLivro };
let livro2 = { ...modeloLivro };
let livro3 = { ...modeloLivro };

livro1.titulo = "Livro 1";
livro2.titulo = "Livro 2";
livro3.titulo = "Livro 3";

Livraria.livros.push(livro1);
Livraria.livros.push(livro2);
Livraria.livros.push(livro3);

console.log(Livraria);

//Atividade 2
//Use o laço for of e o for in para exibir as informações de cada livro da livraria. O for of deve ser usado para iterar sobre o array de livros, enquanto o for in deve ser usado para iterar sobre as propriedades de cada livro. Exiba o título, autor e preço de cada livro em uma string formatada. Ex: "O livro X do autor Y custa Z reais".

let livros = Livraria.livros;
for (livro of livros) {
  console.log(
    `O livro ${livro.titulo} do autor ${livro.autor} custa ${livro.preco} reais`,
  );
}

for (livro in livros) {
  console.log(
    `O livro ${livros[livro].titulo} do autor ${livros[livro].autor} custa ${livros[livro].preco} reais`,
  );
}

//Atividade3
// Converta o objeto da livraria para JSON usando o método JSON.stringify() e exiba o resultado no console.

console.log(JSON.stringify(Livraria));

//Atividade 4
//Você recebeu o JSON de livro de uma livraria concorrente. O Cleitinho quer adicionar em sua livraria com um preço e um estoque melhor. Reduza o preço em 30% e tenha do dobro do estoque. Converta o JSON para objeto, faça as alterações necessárias e adicione o livro ao array de livros da livraria. Por fim, exiba a livraria atualizada no console.

const livroConcorrente = `{
  "titulo": "JavaScript: O Guia Definitivo",
  "autor": "David Flanagan",
  "ano": 2020,
  "editora": "Novatec",
  "preco": 129.9,
  "estoque": 25
}`;

livroConcorrente = JSON.parse(livroConcorrente);
livroConcorrente.preco = livroConcorrente.preco - livroConcorrente.preco * 0.3;
livroConcorrente.estoque = livroConcorrente.estoque * 2;

Livraria.livros.push(livroConcorrente);

console.log(Livraria);
