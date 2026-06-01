//array de produtos
let cardapio = {
    burgueres: [
        {
            id:1,
            nome: "Clássico Angus Burger",
            preco: 22.50,
            descricao: "Delicie-se com o nosso Hambúrguer Clássico, feito com um suculento hambúrguer de carne angus, queijo derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto. Perfeito para saciar sua fome!",
            img: "imagensCompactadas/imagens/burger01.png"
        },
        {
            id: 2,
            nome: "Gourmet Burger",
            preco: 35.00,
            descricao: "O nosso Hambúrguer Gourmet, preparado com um suculento hambúrguer de carne nobre, queijo derretido, cebola caramelizada e bacon. Uma escolha irresistível!",
            img: "imagensCompactadas/imagens/burger02.png"
        },
        {   
            id: 3,
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            img: "imagensCompactadas/imagens/burger03.png"
        },
        
        {   
            id:4,
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            img: "imagensCompactadas/imagens/burger03.png"
        }
    ],

    acompanhamentos: [
        {   
            id: 5,
            nome: "Fritas",
            preco: 15.00,
            descricao: "Nossas batatas fritas são o acompanhamento perfeito para qualquer refeição! Cortadas em palitos e fritas até ficarem douradas e crocantes por fora, e macias por dentro, elas são irresistíveis em cada mordida.",
            img: "imagensCompactadas/imagens/acomp01.png"
        }
    ],

    bebidas: [
        {   
            id: 6,
            nome: "Coca-Cola",
            preco: 5.00,
            descricao: "Refresque-se com a clássica Coca-Cola gelada, uma bebida que encanta paladares há décadas. Com seu sabor único e inconfundível para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagensCompactadas/imagens/bebida01.png"
        },
        {   
            id:7,
            nome: "Sprite",
            preco: 5.00,
            descricao: "Revitalize seus sentidos com a refrescante Sprite, uma bebida cítrica e efervescente que desperta os sentidos e eleva o seu ânimo para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagensCompactadas/imagens/bebida02.png"
        }
    ]
};

let carrinho = []

const burgueres = document.querySelector("#secaoBurguer")
const acompanhamentos = document.querySelector("#secaoAcompanhamentos")
const bebidas = document.querySelector("#secaoBebidas")
const corpoCarrinho = document.querySelector("#corpoCarrinho")


/*
<div class="boxProduto py-3">
    <div class="boxImg">  
        <img class="imgProduto" src="" alt="">   
    </div>
    <div class="boxTexto">
        <h3 class="nomePreco"></h3>
        <p class="descricao"></p>
        <button class="btn">Pedir</button>
    </div>
</div>
*/

//monte as 3 seções a partir da manipulação do DOM
//Você pode usar os métodos querySelectorAll() e querySelector() para  selecionar os elementos pais
// para criar o conteúdo dos elementos filhos existem 2 abordagens:
// 1. Usar o innerHTML
// 2. Usar createElement e o appendChild. Atenção na estilização pelas classes do CSS. Nesse caso você usará  o atributo classList.

//usar um atributo do objeto cardapio que é um array


function montarSecao(secao, array){
    array.forEach( (produto, index) =>{
    let cardProduto = document.createElement("div")
    //montar id para produto: remover espaco e transformar em minusculo
    cardProduto.innerHTML = `
        <div class="boxProduto py-3">
            <div class="boxImg">  
                <img class="imgProduto" src="${produto.img}" alt="${produto.nome}">   
            </div>
            <div class="boxTexto">
                <h3 class="nomePreco">${produto.nome} - R$ ${produto.preco.toFixed(2)}</h3>
                <p class="descricao">${produto.descricao}</p>
                <button class="btn" id="btn${produto.id}" data-bs-toggle="modal" data-bs-target="#detalheProduto${produto.id}" >Pedir</button>
            </div>

            <div class="modal fade" id="detalheProduto${produto.id}" tabindex="-1" aria-labelledby="detalheProduto${produto.id}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="detalheProduto${produto.id}Label">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p> ${produto.nome} adicionado ao carrinho</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                </div>
                </div>
            </div>
            </div>

        </div>`

    //selecionando o elemento pelo id e adicionando um escutando de evento. A manipulação para a acriação de um atributo id foi necessária mas normalmente esse atributo já existe no objeto dentro do array.
    let botao = cardProduto.querySelector(`#btn${produto.id}`)
    botao.addEventListener("click", () => {
        adicionarProdutoAoCarrinho(produto)
    })


    //adicionar o novo card a secao pai
    secao.appendChild(cardProduto)


})}

function adicionarProdutoAoCarrinho(produto){

    // procura produto existente
    let itemExistente = carrinho.find(item => item.id === produto.id)

    // se já existir aumenta quantidade
    if(itemExistente){

        itemExistente.quantidade++

    }else{

        carrinho.push({
            ...produto,
            quantidade: 1
        })

    }

    montarCarrinho()
}


//complemente a função acima para que assim que seja detectado o clique em um botão, ele chame a funcao que ira adicionar o produto ao carrinho
// ao adicionar um produto ao carrinho, ele deve ser adicionado ao array carrinho e um alert deve ser exibido com o nome do produto adicionado ao carrinho
//crie uma função adicionarProdutoAoCarrinho que recebe objeto produto como parâmetro e adiciona o produto ao carrinho


// crie uma função que é detalheProdutoAdionado, que será um modal do bootstrap que seja exibido quando o produto for adicionado ao carrinho. Ou seja a função adicionarProdutoAoCarrinho deve chamar essa funcao após incluir o produto ao array carrinho. https://getbootstrap.com/docs/5.3/components/modal/

function montarCarrinho(){

    if(carrinho.length === 0){
        corpoCarrinho.innerHTML = "<h3>Carrinho vazio</h3>"
        return
    }

    corpoCarrinho.innerHTML = ""

    let totalCarrinho = 0

    carrinho.forEach((produto) => {

        totalCarrinho += produto.preco * produto.quantidade

        let item = document.createElement("div")

        item.classList.add("itemCarrinho")

        item.innerHTML = `
        
            <div>
                <p>${produto.nome}</p>
                <p>R$ ${produto.preco.toFixed(2)}</p>
            </div>

            <div class="botoesCarrinho">

                <button class="btnDiminuir">-</button>

                <div class="quantidade">
                    ${produto.quantidade}
                </div>

                <button class="btnAumentar">+</button>

                <button class="btnRemover">x</button>

            </div>
        `

        // botões
        const btnAumentar = item.querySelector(".btnAumentar")
        const btnDiminuir = item.querySelector(".btnDiminuir")
        const btnRemover = item.querySelector(".btnRemover")

        btnAumentar.addEventListener("click", () => {
            produto.quantidade++
            montarCarrinho()
        })

        btnDiminuir.addEventListener("click", () => {

            produto.quantidade--

            if(produto.quantidade <= 0){
                carrinho = carrinho.filter(item => item.id !== produto.id)
            }

            montarCarrinho()
        })

        btnRemover.addEventListener("click", () => {

            carrinho = carrinho.filter(item => item.id !== produto.id)

            montarCarrinho()
        })

        corpoCarrinho.appendChild(item)

    })

    // total
    let total = document.createElement("div")

    total.classList.add("totalCarrinho")

    total.innerHTML = `
        <h3>Total:</h3>
        <h3>R$ ${totalCarrinho.toFixed(2)}</h3>
    `

    corpoCarrinho.appendChild(total)

    // botão finalizar
    let btnFinalizar = document.createElement("button")

    btnFinalizar.classList.add("btnFinalizar")

    btnFinalizar.innerHTML = "Finalizar Compra"

    btnFinalizar.addEventListener("click", () => {

        alert("Compra finalizada com sucesso!")

        carrinho = []

        montarCarrinho()
    })

    corpoCarrinho.appendChild(btnFinalizar)
}

function montarTela(){
    montarSecao(burgueres, cardapio.burgueres)
    montarSecao(acompanhamentos, cardapio.acompanhamentos)
    montarSecao(bebidas, cardapio.bebidas)
    montarCarrinho()
}

/*Novos recursos para interface do projeto do cardápio.

A ideia agora é que o usuário possa modificar a quantidade de um mesmo produto diretamente no carrinho. 
Regras:
* Ao adicionar 2 x o mesmo produto ele não será mostrado 2 x no cardápio. Será modificada apenas a quantidade de itens.
* Não será contabilizado 0 produtos. Ao diminuir a quantidade para 0 o produto será retirado do carrinho. 
* Ao finalizar a compra mostre uma mensagem e 'limpe' o carrinho*/




montarTela()