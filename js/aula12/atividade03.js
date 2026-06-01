/*Faça um programa que peça um número positivo ao usuário e imprima todos os números pares de 0 até esse 
número, inclusive.*/ 
//faça a soma de todos os números pares encontrados e todos os números ímpares ( duas somas separadas)

//para verificar a condição de paridade usaremos o operador "%" (resto da divisão)

let numero = parseInt(prompt("Digital um numero positivo: "))
let contador = 0
let somaPares = 0
let somaImpares =0
while (numeroUsuario <= numeroFinal) {
     
    if (contador%2 == 0) {
        
        console.log(contador)
        somaPares += contador
    } else{
        somaImpares += contador
    }

    contador++
}

console.log(`A soma dos numeros pares: ${somaPares}`);
console.log(`A soma dos numeros impares: ${somaImpares}`);
