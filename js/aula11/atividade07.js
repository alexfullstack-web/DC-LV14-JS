/*O IMC – Índice de Massa Corporal é um critério da Organização Mundial de 
Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
A fórmula é IMC = peso / (altura)². Elabore um algoritmo que leia o peso e a 
altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
Abaixo de 18,5: Abaixo do peso
Entre 18,5 e 25: Peso normal
Entre 25 e 30: Acima do peso
Acima de 30: Obeso*/

let peso = parseFloat(prompt("Digite o seu peso em kg (apenas números):"))
let altura = parseFloat(prompt("Digite a sua altura em metros (apenas números):"))
let imc = peso / (altura ** 2)

let condicao = ""

if (imc < 18.5) {
    condicao = "Abaixo do peso"
} else if (imc >= 18.5 && imc < 25) {
    condicao = "Peso normal"
} else if (imc >= 25 && imc < 30) {
    condicao = "Acima do peso"
} else {
    condicao = "Obeso"
}

alert(`Seu IMC é: ${imc.toFixed(2)} - Condição: ${condicao}`)

console.log(`Seu IMC é: ${imc.toFixed(2)} - Condição: ${condicao}`)