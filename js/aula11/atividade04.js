/*Leia a base e atura e calcule sua Área(Área do triangulo: b * h / 2) */

let base = parseFloat(prompt("Digite o valor da base do triangulo (apenas números):"))

let altura = parseFloat(prompt("Digite o valor da altura do triangulo (apenas números):"))

let area = (base * altura) / 2
console.log("A área do triangulo é: " + area)
