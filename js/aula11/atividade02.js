/*Leia três notas, calcule sua média e a exiba para o usuário*/

let nota1 = parseFloat(prompt("Digite a primeira nota (apenas números):"))
let nota2 = parseFloat(prompt("Digite a segunda nota (apenas números):"))
let nota3 = parseFloat(prompt("Digite a terceira nota (apenas números):"))

let media = (nota1 + nota2 + nota3) / 3

console.log("A média das notas é: " + media)
