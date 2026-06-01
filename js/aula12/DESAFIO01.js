/* Faça um programa que peça um número ao usuário: se esse número for par, adicione o dobro dele 
 ao somatório dos pares, se for ímpar, apenas mostre no console.*/
//O programa deve ser executado até que o usuário digite uma palavra ou letra. 
//Ao finalizar o programa, mostre a soma dos números pares e a quantidade de números ímpares digitados.


//Dica: para verificar se o usuário digitou uma letra use isNaN() . Lembre-se a ! é uma negação, ou seja, !isNaN() verifica se o valor digitado é um número.

//1 variável para armazenar o número digitado pelo usuário
//1 variável para armazenar a soma dos números pares
//1 variável para contar a quantidade de números ímpares digitados

let numero = parseInt(prompt("Digita um número uma letra para encerrar: "))
let somaPares = 0
let quantidadeImpares = 0

while(!isNaN(numero)){
    if (numero % 2 == 0){
        somaPares += numero*2
        
    } else {
        quantidadeImpares++
    }
    
}
