/*Leia dois números e informe o maior deles.*/

let numero1 = parseFloat(prompt("Digite o primeiro número (apenas números):"))

let numero2 = parseFloat(prompt("Digite o segundo número (apenas números):"))

if (numero1 > numero2) {
    console.log("O maior número é: " + numero1)
} else {
    console.log("O maior número é: " + numero2)
}
