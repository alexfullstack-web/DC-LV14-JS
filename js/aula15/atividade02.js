let alunos = [
  {
    nome: "João",
    idade: 20,
    sexo: "M",
    media: 10,
  },
  {
    nome: "Maria",
    idade: 20,
    sexo: "F",
    media: 9,
  },
  {
    nome: "Pedro",
    idade: 20,
    sexo: "M",
    media: 10,
  },
  {
    nome: "Ana",
    idade: 20,
    sexo: "F",
    media: 10,
  },
  {
    nome: "Joana",
    idade: 20,
    sexo: "F",
    media: 9,
  },
];

for (let x in alunos[1]) {
  console.log(`${x} : ${alunos[1][x]}`);
}

for (let x in alunos[3]) {
  console.log(`${x} : ${alunos[3][x]}`);
}

for (let i = 0; i < alunos.length; i++) {
  for (let x in alunos[1]) {
    console.log(`${x} : ${alunos[1][x]}`);
  }
}
