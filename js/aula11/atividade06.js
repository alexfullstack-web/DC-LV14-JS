/*Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C. */

let A = parseFloat(prompt("Digite o valor de A (apenas números):"))
let B = parseFloat(prompt("Digite o valor de B (apenas números):")) 
let C = parseFloat(prompt("Digite o valor de C (apenas números):"))

let soma = A + B

if (soma > C) {
    console.log("A soma de A + B é maior que C.")
} else {
    console.log("A soma de A + B não é maior que C.")
}