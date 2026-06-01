/*Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto
 sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40% */

 let preco = parseFloat(prompt("Digite o preço do produto (apenas números):"))
 let cor = prompt("Digite a cor da etiqueta: ").toLowerCase()

 let desconto = 0

 switch (cor) {
     case "verde":
         desconto = 0.10
         break
     case "amarelo":
         desconto = 0.20
         break
     case "azul":
         desconto = 0.30
         break
     case "vermelho":
         desconto = 0.40
         break
     default:
         console.log("Cor inválida")
         break
 }

 

//Dica: funçoes de conversão para strings

// toupperCase() - converte para maiúcula
console.log("string".toUpperCase())
//toLowerCase() - converte para minúscula
console.log("STRING".toLowerCase())
