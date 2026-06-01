/*Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20% */
/*Leia três notas, calcule sua média e a exiba para o usuário*/

let salario = parseFloat(prompt("Digite o seu salario (apnas números):"))
console.log(salario)

let salarioAumento = salario + (salario * 0.20)
console.log("O novo salário com aumento de 20% é: " + salarioAumento)
