//Desafio 01

let listaCompras = ["arroz", "feijão", "leite", "café"];

let item = prompt("Digite o item que deseja adicionar: ")

if (listaCompras.includes(item)) {
    alert("O item ja existe")
} else {
    listaCompras.push(item)
    alert("Item adicionado com sucesso")
}

console.log(listaCompras);