/*você foi contratado pelo cleitinho HortFrut, você precisa atualizar a lista com os produtos de destaque
 da semana*/
let produtos = [
  { nome: "Banana", preco: 2.0, categoria: "Fruta" },
  { nome: "Abacaxi", preco: 5.0, categoria: "Fruta" },
  { nome: "Laranja", preco: 3.0, categoria: "Fruta" },
  { nome: "Pera", preco: 4.0, categoria: "Fruta" },
];

/*busque a divisão com id "promocoesDasemana" e insira os produtos de destaque. Dica, use o método para 
seleção de elemento por id (getElementById). Faça a manipulação com o innerHTML.*/

const listaProdutos = document.getElementById("promocoesDasemana");


let html = "";

produtos.forEach(produto => {
    html += `
        <p>
            ${produto.nome} - R$ ${produto.preco.toFixed(2)}
        </p>
    `;
});


listaProdutos.innerHTML = html;