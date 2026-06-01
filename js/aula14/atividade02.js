//crie um sistema de emissão de nota fiscal. 
//o sistema deve receber um array com os nomes dos produtos e outro com os valores desses produtos. 
//Ao iniciar o programa, o usuário deve informar quantos produtos ele deseja cadastrar nessa nota fiscal.
//Você deverá ler o nome e o valor de cada produto  e adiconar ao seu respectivo array.
//DICA: para trabalhar com índices ou métodos, as variáveis devem ser declaradas fora do laço e inicializadas com um array vazio.

//Ao final mostre no console a nota fiscal com os produtos e seus respectivos valores.
//Exemplo: PARA 3 PRODUTOS  
//PRODUTO1 - R$ 10,00
//PRODUTO2 - R$ 15,00
//PRODUTO3 - R$ 20,00

let qtdprodutos = Number(prompt('Quantos serão infamodos na NF? Digite apenas números'))

let nomesProdutos = []
let valoresprodutos = []

for (let i = 0; i < qtdprodutos; i++) {
    let nome = prompt(`Digite o nome do produto ${i + 1}`)
    let preco = Number(prompt(`Digite o preco de produto ${i + 1}. Apenas números`))

    nomesProdutos[i] = nome

    valoresprodutos.push(preco)


    console.log(nomesProdutos, valoresprodutos);

    console.log(`${nomesProdutos[1]} - R$ ${valoresprodutos[1]}`);

}