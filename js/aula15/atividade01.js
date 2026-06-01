//crie um objeto que represente um usuário com : nome, email, cargo, idade, senha e telefone
//essas informações deverão ser solicitadas ao usuário e armazenadas no objeto
//ao final mostre cada uma das informações armazenadas no objeto no console no seguinte formato

//nome: valor
//email: valor
//cargo: valor
//idade: valor
//senha: valor
//telefone: valor

let usuario = {
  nome: prompt("Digite seu nome:"),
  email: prompt("Digite seu email:"),
  cargo: prompt("Digite seu cargo:"),
  idade: prompt("Digite sua idade:"),
  senha: prompt("Digite sua senha:"),
  telefone: prompt("Digite seu telefone:"),
}

console.log("nome: " + usuario.nome)
console.log("email: " + usuario.email)
console.log("cargo: " + usuario.cargo)
console.log("idade: " + usuario.idade)
console.log("senha: " + usuario.senha)
console.log("telefone: " + usuario.telefone)